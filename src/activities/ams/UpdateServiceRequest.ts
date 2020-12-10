import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { ServiceRequestService } from "cw-sdk/api-service";
import { ServiceRequestServiceTypes } from "cw-sdk/api-interface/ServiceRequestService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { RequestBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface UpdateServiceRequestInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Request ID
     * @description	The ID of the service request.
     * @required
     */
    requestId: number;
    /**
     * @description Additional service request options.
     */
    options: Omit<ServiceRequestServiceTypes.Requests.Update, "RequestId">;
}

/** An interface that defines the outputs of the activity. */
export interface UpdateServiceRequestOutputs {
    /**
     * @description The service request.
     */
    result?: RequestBase;
}

/**
 * @category Cityworks - AMS
 * @description Update a Cityworks service request.
 */
export class UpdateServiceRequest implements IActivityHandler {
    async execute(inputs: UpdateServiceRequestInputs): Promise<UpdateServiceRequestOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.requestId) {
            throw new Error("requestId is required");
        }

        const service = new ServiceRequestService(inputs.service);

        const response = await service.Update({
            RequestId: inputs.requestId,
            ...inputs.options,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
