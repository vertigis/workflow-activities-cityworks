import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { InspectionService } from "cw-sdk/api-service";
import { InspectionServiceTypes } from "cw-sdk/api-interface/InspectionService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { InspectionBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface CreateInspectionInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @description The inspection data.
     * @required
     */
    inspection: InspectionServiceTypes.Requests.Create;
}

/** An interface that defines the outputs of the activity. */
export interface CreateInspectionOutputs {
    /**
     * @description The inspection.
     */
    result?: InspectionBase;
}

/**
 * @category Cityworks - AMS
 * @description Create a Cityworks inspection.
 */
export class CreateInspection implements IActivityHandler {
    async execute(inputs: CreateInspectionInputs): Promise<CreateInspectionOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.inspection) {
            throw new Error("inspection is required");
        }

        const service = new InspectionService(inputs.service);

        const response = await service.Create(inputs.inspection);
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
