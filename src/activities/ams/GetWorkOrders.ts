import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { WorkOrderService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { WorkOrderBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetWorkOrdersInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Work Order IDs
     * @description The ID or IDs of the work orders to find.
     */
    workOrderIds?: string | string[];
    /**
     * @displayName Work Order SIDs
     * @description The SID or SIDs of the work orders to find.
     */
    workOrderSids?: number | number[];
}

/** An interface that defines the outputs of the activity. */
export interface GetWorkOrdersOutputs {
    /**
     * @description The list of work orders.
     */
    result?: WorkOrderBase[];
}

/**
 * @defaultName cwWorkOrders
 * @category Cityworks - AMS
 * @description Searches for Cityworks work orders.
 */
export class GetWorkOrders implements IActivityHandler {
    async execute(inputs: GetWorkOrdersInputs): Promise<GetWorkOrdersOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }

        const service = new WorkOrderService(inputs.service);

        if (inputs.workOrderIds) {
            if (typeof inputs.workOrderIds === "string") {
                const response = await service.ById({
                    WorkOrderId: inputs.workOrderIds,
                });
                checkResponse(response);
                return {
                    result: (response.Value && [response.Value]) || [],
                };
            } else {
                const response = await service.ByIds({
                    WorkOrderIds: inputs.workOrderIds,
                });
                checkResponse(response);
                return {
                    result: response.Value,
                };
            }
        } else if (inputs.workOrderSids) {
            if (typeof inputs.workOrderSids === "number") {
                const response = await service.BySid({
                    WorkOrderSid: inputs.workOrderSids,
                });
                checkResponse(response);
                return {
                    result: (response.Value && [response.Value]) || [],
                };
            } else {
                const response = await service.BySids({
                    WorkOrderSids: inputs.workOrderSids,
                });
                checkResponse(response);
                return {
                    result: response.Value,
                };
            }
        }
        return {
            result: [],
        };
    }
}
