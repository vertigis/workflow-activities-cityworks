import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { MaterialCostService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { MaterialCost } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetWorkOrderMaterialCostsInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName WorkOrder IDs
     * @description The ID or IDs of the work order to get the costs of.
     */
    workOrderIds?: string | string[];
    /**
     * @displayName WorkOrder SIDs
     * @description The SID or SIDs of the work order to get the costs of.
     */
    workOrderSids?: number | number[];

    estimated?: boolean;
}

/** An interface that defines the outputs of the activity. */
export interface GetWorkOrderMaterialCostsOutputs {
    /**
     * @description The list of costs.
     */
    result?: MaterialCost[];
}

/**
 * @category Cityworks - AMS
 * @description Get material costs of a Cityworks work order.
 * @clientOnly
 * @supportedApps EXB, GWV, GVH, WAB
 */
export class GetWorkOrderMaterialCosts implements IActivityHandler {
    async execute(
        inputs: GetWorkOrderMaterialCostsInputs
    ): Promise<GetWorkOrderMaterialCostsOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.workOrderIds && !inputs.workOrderSids) {
            throw new Error("One of workOrderId or workOrderSid is required");
        }

        const service = new MaterialCostService(inputs.service);

        const workOrderIds: string[] = inputs.workOrderIds
            ? typeof inputs.workOrderIds === "string"
                ? [inputs.workOrderIds]
                : inputs.workOrderIds
            : (undefined as any);
        const workOrderSids: number[] = inputs.workOrderSids
            ? typeof inputs.workOrderSids === "number"
                ? [inputs.workOrderSids]
                : inputs.workOrderIds
            : (undefined as any);

        const response = await service.WorkOrderCostsByWorkOrder({
            Estimated: inputs.estimated,
            WorkOrderIds: workOrderIds,
            WorkOrderSids: workOrderSids,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
