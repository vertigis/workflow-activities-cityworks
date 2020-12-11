import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { WorkOrderService } from "cw-sdk/api-service";
import { WorkOrderServiceTypes } from "cw-sdk/api-interface/WorkOrderService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { WorkOrderBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface CreateWorkOrderFromParentInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @description The parent work order.
     * @required
     */
    workOrder: WorkOrderServiceTypes.Requests.CreateFromParent;
}

/** An interface that defines the outputs of the activity. */
export interface CreateWorkOrderFromParentOutputs {
    /**
     * @description The work orders.
     */
    result?: WorkOrderBase[];
}

/**
 * @category Cityworks - AMS
 * @description Create a Cityworks work order from a work order.
 */
export class CreateWorkOrderFromParent implements IActivityHandler {
    async execute(
        inputs: CreateWorkOrderFromParentInputs
    ): Promise<CreateWorkOrderFromParentOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.workOrder) {
            throw new Error("workOrder is required");
        }

        const service = new WorkOrderService(inputs.service);

        const response = await service.CreateFromParent(inputs.workOrder);
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
