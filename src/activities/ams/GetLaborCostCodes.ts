import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { LaborCostService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { CostCode } from "cw-sdk/core";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetLaborCostCodesInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Employee SIDs
     * @description The SID or SIDs of the employees.
     * @required
     */
    employeeSids: number | number[];
    /**
     * @description Whether to return common codes only.
     * @required
     */
    commonCodesOnly?: boolean;
}

/** An interface that defines the outputs of the activity. */
export interface GetLaborCostCodesOutputs {
    /**
     * @description The labor cost codes.
     */
    result?: CostCode[];
}

/**
 * @category Cityworks - AMS
 * @defaultName cwCostCodes
 * @description Gets the Cityworks labor cost codes.
 */
export class GetLaborCostCodes implements IActivityHandler {
    async execute(inputs: GetLaborCostCodesInputs): Promise<GetLaborCostCodesOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.employeeSids) {
            throw new Error("employeeSids is required");
        }

        const service = new LaborCostService(inputs.service);
        const response = await service.CostCodes({
            CommonCodesOnly: inputs.commonCodesOnly,
            EmployeeSids: typeof inputs.employeeSids === "number" ? [inputs.employeeSids] : inputs.employeeSids,
        })
        checkResponse(response);
        
        return {
            result: response.Value,
        };
    }
}
