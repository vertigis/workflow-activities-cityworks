import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { WorkOrderService } from "cw-sdk/api-service";
import { WorkOrderServiceTypes } from "cw-sdk/api-interface/WorkOrderService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { WorkOrderBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface UpdateWorkOrderInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @description The work order data.
     * @required
     */
    workOrder: WorkOrderServiceTypes.Requests.Update;
}

/** An interface that defines the outputs of the activity. */
export interface UpdateWorkOrderOutputs {
    /**
     * @description The work order.
     */
    result?: WorkOrderBase;
}

/**
 * @category Cityworks - AMS
 * @description Update a Cityworks work order.
 */
export class UpdateWorkOrder implements IActivityHandler {
    async execute(inputs: UpdateWorkOrderInputs): Promise<UpdateWorkOrderOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.workOrder) {
            throw new Error("workOrder is required");
        }

        const service = new WorkOrderService(inputs.service);

        const response = await service.Update(inputs.workOrder);
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
