import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { WorkOrderService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { RequestBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface CancelWorkOrderInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Work Order IDs
     * @description The ID or IDs of the work orders to cancel.
     * @required
     */
    workOrderIds: string | string[];
    /**
     * @description	The reason for canceling the work order.
     */
    cancelReason?: string;
    /**
     * @description	The date the work order was cancelled.
     */
    dateCancelled?: Date;
}

/** An interface that defines the outputs of the activity. */
export interface CancelWorkOrderOutputs {
    /**
     * @description The list of cancelled work orders.
     */
    result?: RequestBase[];
}

/**
 * @category Cityworks - AMS
 * @description Cancels Cityworks work orders.
 * @clientOnly
 * @supportedApps EXB, GWV, GVH, WAB
 */
export class CancelWorkOrder implements IActivityHandler {
    async execute(
        inputs: CancelWorkOrderInputs
    ): Promise<CancelWorkOrderOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.workOrderIds) {
            throw new Error("workOrderIds is required");
        }

        const service = new WorkOrderService(inputs.service);

        const response = await service.Cancel({
            CancelReason: inputs.cancelReason,
            DateCancelled: inputs.dateCancelled,
            WorkOrderIds:
                typeof inputs.workOrderIds === "string"
                    ? [inputs.workOrderIds]
                    : inputs.workOrderIds,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
