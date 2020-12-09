import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { WorkOrderService } from "cw-sdk/api-service";
import { WorkOrderServiceTypes } from "cw-sdk/api-interface/WorkOrderService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { WorkOrderBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface CreateWorkOrderFromServiceRequestInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @description The service request.
     * @required
     */
    request: WorkOrderServiceTypes.Requests.CreateFromServiceRequest;
}

/** An interface that defines the outputs of the activity. */
export interface CreateWorkOrderFromServiceRequestOutputs {
    /**
     * @description The work orders.
     */
    result?: WorkOrderBase[];
}

/**
 * @category Cityworks - AMS
 * @description Create a Cityworks work order from a service request.
 */
export class CreateWorkOrderFromServiceRequest implements IActivityHandler {
    async execute(inputs: CreateWorkOrderFromServiceRequestInputs): Promise<CreateWorkOrderFromServiceRequestOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.request) {
            throw new Error("request is required");
        }

        const service = new WorkOrderService(inputs.service);

        const response = await service.CreateFromServiceRequest(inputs.request);
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
