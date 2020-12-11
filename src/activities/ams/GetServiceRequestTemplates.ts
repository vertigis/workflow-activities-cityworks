import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { ServiceRequestTemplateService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { ProblemLeafBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetServiceRequestTemplatesInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @description The ID or IDs of the templates to find.
     */
    templateIds?: number | number[];
    /**
     * Whether to only return templates the user can create. The default is false.
     */
    canCreate?: boolean;
    /**
     * Whether to return inactive templates. The default is false.
     */
    includeInactive?: boolean;
    maximumDateModified?: Date;
    minimumDateModified?: Date;
}

/** An interface that defines the outputs of the activity. */
export interface GetServiceRequestTemplatesOutputs {
    /**
     * @description The list of service request templates.
     */
    result?: ProblemLeafBase[];
}

/**
 * @category Cityworks - AMS
 * @description Searches for Cityworks service request templates.
 */
export class GetServiceRequestTemplates implements IActivityHandler {
    async execute(
        inputs: GetServiceRequestTemplatesInputs
    ): Promise<GetServiceRequestTemplatesOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }

        const service = new ServiceRequestTemplateService(inputs.service);
        const response = await service.Templates({
            CanCreate: inputs.canCreate,
            IncludeInactive: inputs.includeInactive,
            MaximumDateModified: inputs.maximumDateModified,
            MinimumDateModified: inputs.minimumDateModified,
            TemplateIds:
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
