import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { ServiceRequestService } from "cw-sdk/api-service";
import { ServiceRequestServiceTypes } from "cw-sdk/api-interface/ServiceRequestService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { RequestBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface CreateServiceRequestInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Problem SID
     * @description	The SID of the service request problem.
     * @required
     */
    problemSid: number;
    /**
     * @description	The X position of the work order.
     */
    x?: number;
    /**
     * @description	The Y position of the work order.
     */
    y?: number;
    /**
     * @description Additional service request options.
     */
    options: Omit<ServiceRequestServiceTypes.Requests.Create, "ProblemSid">;
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
    async execute(
        inputs: CreateServiceRequestInputs
    ): Promise<CreateServiceRequestOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.problemSid) {
            throw new Error("problemSid is required");
        }

        const service = new ServiceRequestService(inputs.service);

        const response = await service.Create({
            ProblemSid: inputs.problemSid,
            X: inputs.x,
            Y: inputs.y,
            ...inputs.options,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
