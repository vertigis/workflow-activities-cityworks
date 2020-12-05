import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { WorkOrderService } from "cw-sdk/api-service";
import { WorkOrderServiceTypes } from "cw-sdk/api-interface/WorkOrderService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { WorkOrderBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface CreateWorkOrderInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @description The work order data.
     */
    workOrder: WorkOrderServiceTypes.Requests.Create;
}

/** An interface that defines the outputs of the activity. */
export interface CreateWorkOrderOutputs {
    /**
     * @description The work orders.
     */
    result?: WorkOrderBase[];
}

/**
 * @category Cityworks
 * @description Create a Cityworks work order.
 */
export class CreateWorkOrder implements IActivityHandler {
    async execute(inputs: CreateWorkOrderInputs): Promise<CreateWorkOrderOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }

        const service = new WorkOrderService(inputs.service);

        const response = await service.Create(inputs.workOrder);
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
