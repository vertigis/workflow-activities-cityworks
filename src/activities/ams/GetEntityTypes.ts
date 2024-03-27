import type { IActivityHandler } from "@vertigis/workflow/IActivityHandler";
import { EntityService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { PWEntity } from "cw-sdk/core";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetEntityTypesInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;

    /**
     * @description The entity group or groups.
     * @required
     */
    entityGroups: string | string[];

    /**
     * @description The entity table types. 1 = Feature, 2 = Object, 3 = Other.
     * @required
     */
    entityTableTypes?: number | number[];
}

/** An interface that defines the outputs of the activity. */
export interface GetEntityTypesOutputs {
    /**
     * @description The result of the activity.
     */
    result?: PWEntity[];
}

/**
 * @category Cityworks - AMS
 * @defaultName cwEntityTypes
 * @description Gets the Cityworks entity types.
 * @clientOnly
 * @supportedApps EXB, GWV, GVH, WAB
 */
export class GetEntityTypes implements IActivityHandler {
    async execute(
        inputs: GetEntityTypesInputs
    ): Promise<GetEntityTypesOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.entityGroups) {
            throw new Error("entityGroups is required");
        }

        const eService = new EntityService(inputs.service);
        const response = await eService.Types({
            EntityGroup: undefined as any,
            EntityGroups:
                typeof inputs.entityGroups === "string"
                    ? [inputs.entityGroups]
                    : inputs.entityGroups,
            EntityTableTypes:
                typeof inputs.entityTableTypes === "number"
                    ? [inputs.entityTableTypes]
                    : inputs.entityTableTypes
                    ? inputs.entityTableTypes
                    : undefined,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
