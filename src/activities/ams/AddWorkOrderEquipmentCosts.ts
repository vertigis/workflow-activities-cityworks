import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { EquipmentCostService } from "cw-sdk/api-service";
import { EquipmentCostServiceTypes } from "cw-sdk/api-interface/EquipmentCostService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { EquipmentCost } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface AddWorkOrderEquipmentCostsInputs {
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
     * @description	The equipment SID or SIDs.
     */
    equipmentSid?: number | number[];
    /**
     * @description	The hours to log for each given type of equipment used.
     */
    hours?: number;
    /**
     * @description	The number of units to log for each given type of equipment used.
     */
    units?: number;
    /**
     * @description Additional cost parameters.
     */
    costs?: EquipmentCostServiceTypes.Requests.AddWorkOrderCosts;
}

/** An interface that defines the outputs of the activity. */
export interface AddWorkOrderEquipmentCostsOutputs {
    /**
     * @description The list of costs.
     */
    result?: EquipmentCost[];
}

/**
 * @category Cityworks - AMS
 * @description Add equipment costs to a Cityworks work order.
 */
export class AddWorkOrderEquipmentCosts implements IActivityHandler {
    async execute(inputs: AddWorkOrderEquipmentCostsInputs): Promise<AddWorkOrderEquipmentCostsOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.workOrderId) {
            throw new Error("workOrderId is required");
        }

        const service = new EquipmentCostService(inputs.service);

        const response = await service.AddWorkOrderCosts({
            EquipmentSids: typeof inputs.equipmentSid === "number" ? [inputs.equipmentSid] : inputs.equipmentSid,
            Hours: inputs.hours,
            Units: inputs.units,
            WorkOrderId: typeof inputs.workOrderId === "string" ? inputs.workOrderId : undefined as any,
            WorkOrderSid: typeof inputs.workOrderId === "number" ? inputs.workOrderId : undefined as any,
            ...inputs.costs,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
