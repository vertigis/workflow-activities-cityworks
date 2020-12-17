import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { QuickSearchService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { QuickSearchResult } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface QuickSearchInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;

    /**
     * @description The search text.
     * @required
     */
    text: string;
}

/** An interface that defines the outputs of the activity. */
export interface QuickSearchOutputs {
    /**
     * @description The search results.
     */
    result?: QuickSearchResult;
}

/**
 * @category Cityworks - General
 * @description Wildcard search for Inspections, Permits, Work Orders and Service Requests.
 */
export class QuickSearch implements IActivityHandler {
    async execute(inputs: QuickSearchInputs): Promise<QuickSearchOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }

        const service = new QuickSearchService(inputs.service);
        const response = await service.QuickSearch({
            QuickSearchText: inputs.text,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
