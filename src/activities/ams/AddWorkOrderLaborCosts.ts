import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { LaborCostService } from "cw-sdk/api-service";
import { LaborCostServiceTypes } from "cw-sdk/api-interface/LaborCostService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { WorkOrderLaborCost } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface AddWorkOrderLaborCostsInputs {
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
     * @description	The contractor SID or SIDs.
     */
    contractorSid?: number | number[];
    /**
     * @description	The employee SID or SIDs.
     */
    employeeSid?: number | number[];    
    /**
     * @description	The list of employee cost codes.
     */
    employeeCostCodes?: string | string[];
    /**
     * @description	The number of hours to log.
     * @required
     */
    hours: number;
    /**
     * @description	Additional cost parameters.
     */
    costs?: LaborCostServiceTypes.Requests.AddWorkOrderCosts;
}

/** An interface that defines the outputs of the activity. */
export interface AddWorkOrderLaborCostsOutputs {
    /**
     * @description The list of costs.
     */
    result?: WorkOrderLaborCost[];
}

/**
 * @category Cityworks - AMS
 * @description Add labor costs to a Cityworks work order.
 */
export class AddWorkOrderLaborCosts implements IActivityHandler {
    async execute(inputs: AddWorkOrderLaborCostsInputs): Promise<AddWorkOrderLaborCostsOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.workOrderId) {
            throw new Error("workOrderId is required");
        }
        if (!inputs.contractorSid && !inputs.employeeSid) {
            throw new Error("One of contractorSid or employeeSid is required");
        }
        if (inputs.hours === undefined) {
            throw new Error("hours is required");
        }

        const service = new LaborCostService(inputs.service);

        const response = await service.AddWorkOrderCosts({
            ContractorSids: typeof inputs.contractorSid === "number" ? [inputs.contractorSid] : inputs.contractorSid,
            EmployeeCostCodes: typeof inputs.employeeCostCodes === "string" ? [inputs.employeeCostCodes] : inputs.employeeCostCodes,
            EmployeeSids: typeof inputs.employeeSid === "number" ? [inputs.employeeSid] : inputs.employeeSid,
            Hours: inputs.hours,
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
