import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { EntityService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { PWModule } from "cw-sdk/core";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetEntityGroupsInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;

    /**
     * @description The domain ID.
     */
    domainId?: number;
}

/** An interface that defines the outputs of the activity. */
export interface GetEntityGroupsOutputs {
    /**
     * @description The result of the activity.
     */
    result?: PWModule[];
}

/**
 * @category Cityworks - AMS
 * @defaultName cwEntityGroups
 * @description Gets the Cityworks entity groups.
 */
export class GetEntityGroups implements IActivityHandler {
    async execute(inputs: GetEntityGroupsInputs): Promise<GetEntityGroupsOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }

        const eService = new EntityService(inputs.service);
        const response = await eService.Groups({
            DomainId: inputs.domainId,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
