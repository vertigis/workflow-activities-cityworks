import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { InspectionTemplateService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { InspTemplateBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetInspectionTemplatesInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @description The entity type or types of the templates to find.
     */
    entityTypes?: string | string[];
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
export interface GetInspectionTemplatesOutputs {
    /**
     * @description The list of inspection templates.
     */
    result?: InspTemplateBase[];
}

/**
 * @defaultName cwInspectionTemplates
 * @category Cityworks - AMS
 * @description Searches for Cityworks inspection templates.
 * @clientOnly
 * @unsupportedApps GMV
 */
export class GetInspectionTemplates implements IActivityHandler {
    async execute(
        inputs: GetInspectionTemplatesInputs
    ): Promise<GetInspectionTemplatesOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }

        const service = new InspectionTemplateService(inputs.service);
        const response = await service.Templates({
            CanCreate: inputs.canCreate,
            EntityTypes:
                typeof inputs.entityTypes === "string"
                    ? [inputs.entityTypes]
                    : inputs.entityTypes,
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
