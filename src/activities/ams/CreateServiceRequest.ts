import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { ServiceRequestService } from "cw-sdk/api-service";
import { ServiceRequestServiceTypes } from "cw-sdk/api-interface/ServiceRequestService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { RequestBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface CreateServiceRequestInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @description The service request data.
     * @required
     */
    request: ServiceRequestServiceTypes.Requests.Create;
}

/** An interface that defines the outputs of the activity. */
export interface CreateServiceRequestOutputs {
    /**
     * @description The service request.
     */
    result?: RequestBase;
}

/**
 * @category Cityworks - AMS
 * @description Create a Cityworks service request.
 */
export class CreateServiceRequest implements IActivityHandler {
    async execute(inputs: CreateServiceRequestInputs): Promise<CreateServiceRequestOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.request) {
            throw new Error("request is required");
        }

        const service = new ServiceRequestService(inputs.service);

        const response = await service.Create(inputs.request);
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
