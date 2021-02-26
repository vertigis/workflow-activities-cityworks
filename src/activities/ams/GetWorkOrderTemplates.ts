import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { WorkOrderTemplateService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { WOTemplateName } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetWorkOrderTemplatesInputs {
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
     * Whether to only return templates the user can create. The default is true.
     */
    onlyCanCreate?: boolean;
    /**
     * Whether to return all templates in the domain. The default is false.
     */
    allDomainTemplates?: boolean;
    /**
     * The category of the templates.
     */
    category?: string;
    /**
     * Select by template ID, ignores entity type parameters.
     */
    woTemplateIds?: string[];
    maximumDateModified?: Date;
    minimumDateModified?: Date;
}

/** An interface that defines the outputs of the activity. */
export interface GetWorkOrderTemplatesOutputs {
    /**
     * @description The list of work order templates.
     */
    result?: WOTemplateName[];
}

/**
 * @category Cityworks - AMS
 * @description Searches for Cityworks work order templates.
 * @clientOnly
 * @unsupportedApps GMV
 */
export class GetWorkOrderTemplates implements IActivityHandler {
    async execute(
        inputs: GetWorkOrderTemplatesInputs
    ): Promise<GetWorkOrderTemplatesOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.entityTypes && !inputs.allDomainTemplates) {
            throw new Error(
                "One of entityTypes or allDomainTemplates is required"
            );
        }

        const service = new WorkOrderTemplateService(inputs.service);
        const response = await service.TemplateNames({
            AllDomainTemplates: inputs.allDomainTemplates,
            Category: inputs.category,
            EntityTypes:
                typeof inputs.entityTypes === "string"
                    ? [inputs.entityTypes]
                    : (inputs.entityTypes as string[]),
            MaximumDateModified: inputs.maximumDateModified,
            MinimumDateModified: inputs.minimumDateModified,
            OnlyCanCreate: inputs.onlyCanCreate,
            WOTemplateIds: inputs.woTemplateIds,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
