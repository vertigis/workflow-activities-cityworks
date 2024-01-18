import type { IActivityHandler } from "@vertigis/workflow/IActivityHandler";
import { InspectionTemplateService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { InspTemplateQA } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetInspectionTemplatesQuestionsAndAnswersInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @description The ID or IDs of the inspection templates to get the questions and answers from.
     * @required
     */
    templateIds?: number | number[];
}

/** An interface that defines the outputs of the activity. */
export interface GetInspectionTemplatesQuestionsAndAnswersOutputs {
    /**
     * @description The list of questions and answers.
     */
    result?: InspTemplateQA[];
}

/**
 * @defaultName cwInspectionTemplatesQA
 * @category Cityworks - AMS
 * @description Gets the questions and answers for a Cityworks inspection template.
 * @clientOnly
 * @supportedApps EXB, GWV, GVH, WAB
 */
export class GetInspectionTemplatesQuestionsAndAnswers
    implements IActivityHandler
{
    async execute(
        inputs: GetInspectionTemplatesQuestionsAndAnswersInputs
    ): Promise<GetInspectionTemplatesQuestionsAndAnswersOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.templateIds) {
            throw new Error("templateIds is required");
        }

        const service = new InspectionTemplateService(inputs.service);
        const response = await service.QA({
            InspTemplateIds:
                typeof inputs.templateIds === "number"
                    ? [inputs.templateIds]
                    : inputs.templateIds,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
