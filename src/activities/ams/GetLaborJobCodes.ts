import type { IActivityHandler } from "@vertigis/workflow/IActivityHandler";
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
 * @clientOnly
 * @supportedApps EXB, GWV, GVH, WAB
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
