import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { ServiceRequestService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { RequestBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetServiceRequestsInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Request IDs
     * @description The ID or IDs of the service requests to find.
     */
    requestIds: number | number[];
}

/** An interface that defines the outputs of the activity. */
export interface GetServiceRequestsOutputs {
    /**
     * @description The list of service requests.
     */
    result?: RequestBase[];
}

/**
 * @defaultName cwServiceRequests
 * @category Cityworks - AMS
 * @description Searches for Cityworks service requests.
 * @clientOnly
 * @supportedApps EXB, GWV, GVH, WAB
 */
export class GetServiceRequests implements IActivityHandler {
    async execute(
        inputs: GetServiceRequestsInputs
    ): Promise<GetServiceRequestsOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }

        const service = new ServiceRequestService(inputs.service);

        if (typeof inputs.requestIds === "number") {
            const response = await service.ById({
                RequestId: inputs.requestIds,
            });
            checkResponse(response);
            return {
                result: (response.Value && [response.Value]) || [],
            };
        } else {
            const response = await service.ByIds({
                RequestIds: inputs.requestIds,
            });
            checkResponse(response);
            return {
                result: response.Value,
            };
        }
    }
}
