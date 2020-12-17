import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { LaborCostService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { JobCode } from "cw-sdk/core";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetLaborJobCodesInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
}

/** An interface that defines the outputs of the activity. */
export interface GetLaborJobCodesOutputs {
    /**
     * @description The labor job codes.
     */
    result?: JobCode[];
}

/**
 * @category Cityworks - AMS
 * @defaultName cwJobCodes
 * @description Gets the Cityworks labor job codes.
 */
export class GetLaborJobCodes implements IActivityHandler {
    async execute(
        inputs: GetLaborJobCodesInputs
    ): Promise<GetLaborJobCodesOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        const lcService = new LaborCostService(inputs.service);
        const response = await lcService.JobCodes({});
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
