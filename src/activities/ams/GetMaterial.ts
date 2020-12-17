import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { MaterialService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { MaterialBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetMaterialInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Material SIDs
     * @description The SID or SIDs of the material to find.
     */
    MaterialSids?: number | number[];
    /**
     * @description Whether to include viewable material only in the search result. This input does not apply when using the Material SIDs inputs. The default is true.
     */
    viewableOnly?: boolean;
    /**
     * @description The storeroom containing the material
     */
    storeroom?: string;
}

/** An interface that defines the outputs of the activity. */
export interface GetMaterialOutputs {
    /**
     * @description The list of Material.
     */
    result?: MaterialBase[];
}

/**
 * @category Cityworks - AMS
 * @defaultName cwMaterial
 * @description Searches for Cityworks material.
 */
export class GetMaterial implements IActivityHandler {
    async execute(inputs: GetMaterialInputs): Promise<GetMaterialOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }

        const service = new MaterialService(inputs.service);

        if (inputs.MaterialSids) {
            if (typeof inputs.MaterialSids === "number") {
                const response = await service.ById({
                    MaterialSid: inputs.MaterialSids,
                });
                checkResponse(response);
                return {
                    result: (response.Value && [response.Value]) || [],
                };
            } else {
                const response = await service.ByIds({
                    MaterialSids: inputs.MaterialSids,
                });
                checkResponse(response);
                return {
                    result: response.Value,
                };
            }
        } else if (inputs.storeroom) {
            const response = await service.ByStoreroom({
                Storeroom: inputs.storeroom,
            });
            checkResponse(response);
            return {
                result: response.Value,
            };
        } else {
            const response = await service.All({
                ViewableOnly: inputs.viewableOnly,
            });
            checkResponse(response);
            return {
                result: response.Value,
            };
        }
    }
}
