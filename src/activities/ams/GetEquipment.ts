import type { IActivityHandler } from "@vertigis/workflow/IActivityHandler";
import { EquipmentService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { EquipmentBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetEquipmentInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Equipment SIDs
     * @description The SID or SIDs of the equipment to find.
     */
    equipmentSids?: number | number[];
    /**
     * @description Whether to include viewable equipment only in the search result. This input does not apply when using the Equipment SIDs inputs. The default is true.
     */
    viewableOnly?: boolean;
}

/** An interface that defines the outputs of the activity. */
export interface GetEquipmentOutputs {
    /**
     * @description The list of equipment.
     */
    result?: EquipmentBase[];
}

/**
 * @category Cityworks - AMS
 * @defaultName cwEmployees
 * @description Searches for Cityworks employees.
 * @clientOnly
 * @supportedApps EXB, GWV, GVH, WAB
 */
export class GetEquipment implements IActivityHandler {
    async execute(inputs: GetEquipmentInputs): Promise<GetEquipmentOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }

        const service = new EquipmentService(inputs.service);

        if (inputs.equipmentSids) {
            if (typeof inputs.equipmentSids === "number") {
                const response = await service.ById({
                    EquipmentSid: inputs.equipmentSids,
                });
                checkResponse(response);
                return {
                    result: (response.Value && [response.Value]) || [],
                };
            } else {
                const response = await service.ByIds({
                    EquipmentSids: inputs.equipmentSids,
                });
                checkResponse(response);
                return {
                    result: response.Value,
                };
            }
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
