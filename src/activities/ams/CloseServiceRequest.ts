import type { IActivityHandler } from "@vertigis/workflow/IActivityHandler";
import { ServiceRequestService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { RequestBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface CloseServiceRequestInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Request IDs
     * @description The ID or IDs of the service requests to close.
     * @required
     */
    requestIds: number | number[];
}

/** An interface that defines the outputs of the activity. */
export interface CloseServiceRequestOutputs {
    /**
     * @description The list of closed service requests.
     */
    result?: RequestBase[];
}

/**
 * @category Cityworks - AMS
 * @description Closes Cityworks service requests.
 * @clientOnly
 * @supportedApps EXB, GWV, GVH, WAB
 */
export class CloseServiceRequest implements IActivityHandler {
    async execute(
        inputs: CloseServiceRequestInputs
    ): Promise<CloseServiceRequestOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.requestIds) {
            throw new Error("requestIds is required");
        }

        const service = new ServiceRequestService(inputs.service);

        const response = await service.Close({
            RequestIds:
                typeof inputs.requestIds === "number"
                    ? [inputs.requestIds]
                    : inputs.requestIds,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
