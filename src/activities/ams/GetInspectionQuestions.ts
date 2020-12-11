import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { InspectionService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { InspQuestion } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetInspectionQuestionsInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Inspection IDs
     * @description The ID or IDs of the inspections to get the questions from.
     * @required
     */
    inspectionIds: number | number[];
}

/** An interface that defines the outputs of the activity. */
export interface GetInspectionQuestionsOutputs {
    /**
     * @description The list of inspection questions.
     */
    result?: InspQuestion[];
}

/**
 * @category Cityworks - AMS
 * @description Gets the questions for a Cityworks inspection.
 */
export class GetInspectionQuestions implements IActivityHandler {
    async execute(
        inputs: GetInspectionQuestionsInputs
    ): Promise<GetInspectionQuestionsOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.inspectionIds) {
            throw new Error("inspectionIds is required");
        }

        const service = new InspectionService(inputs.service);

        const response = await service.Questions({
            InspectionId:
                typeof inputs.inspectionIds === "number"
                    ? inputs.inspectionIds
                    : (undefined as any),
            InspectionIds:
                typeof inputs.inspectionIds !== "number"
                    ? inputs.inspectionIds
                    : (undefined as any),
        });
        checkResponse(response);
        return {
            result: response.Value,
        };
    }
}
