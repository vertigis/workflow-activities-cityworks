import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { MaterialCostService } from "cw-sdk/api-service";
import { MaterialCostServiceTypes } from "cw-sdk/api-interface/MaterialCostService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { MaterialCost } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface AddWorkOrderMaterialCostsInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Work Order ID
     * @description The ID or SID of the work order to add costs to.
     * @required
     */
    workOrderId: string | number;
    /**
     * @description	The material SID or SIDs.
     */
    materialSid?: number | number[];
    /**
     * @description	The number of units to log.
     * @required
     */
    units: number;
    /**
     * @description	Additional cost parameters.
     */
    costs?: MaterialCostServiceTypes.Requests.AddWorkOrderCosts;
}

/** An interface that defines the outputs of the activity. */
export interface AddWorkOrderMaterialCostsOutputs {
    /**
     * @description The list of costs.
     */
    result?: MaterialCost[];
}

/**
 * @category Cityworks - AMS
 * @description Add material costs to a Cityworks work order.
 */
export class AddWorkOrderMaterialCosts implements IActivityHandler {
    async execute(
        inputs: AddWorkOrderMaterialCostsInputs
    ): Promise<AddWorkOrderMaterialCostsOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.workOrderId) {
            throw new Error("workOrderId is required");
        }
        if (inputs.units === undefined) {
            throw new Error("units is required");
        }

        const service = new MaterialCostService(inputs.service);

        const response = await service.AddWorkOrderCosts({
            MaterialSids:
                typeof inputs.materialSid === "number"
                    ? [inputs.materialSid]
                    : inputs.materialSid,
            Units: inputs.units,
            WorkOrderId:
                typeof inputs.workOrderId === "string"
                    ? inputs.workOrderId
                    : (undefined as any),
            WorkOrderSid:
                typeof inputs.workOrderId === "number"
                    ? inputs.workOrderId
                    : (undefined as any),
            ...inputs.costs,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
