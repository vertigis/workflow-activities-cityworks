import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { WorkOrderService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { WorkOrderBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface CloseWorkOrdersInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Work Order IDs
     * @description The ID or IDs of the work orders to close.
     */
    workOrderIds: string | string[];
}

/** An interface that defines the outputs of the activity. */
export interface CloseWorkOrdersOutputs {
    /**
     * @description The list of closed work orders.
     */
    result?: WorkOrderBase[];
}

/**
 * @category Cityworks - AMS
 * @description Closes Cityworks work orders.
 */
export class CloseWorkOrders implements IActivityHandler {
    async execute(inputs: CloseWorkOrdersInputs): Promise<CloseWorkOrdersOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }

        const service = new WorkOrderService(inputs.service);

        const response = await service.Close({
            WorkOrderIds: typeof inputs.workOrderIds === "string" ? [inputs.workOrderIds] : inputs.workOrderIds,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
