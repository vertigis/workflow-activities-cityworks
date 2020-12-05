import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { WorkOrderService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { WOTemplateName } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetWorkOrderTemplatesInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @description The entity type or types of the work order templates to find.
     */
    entityTypes?: string | string[];

    // CanCreate?: boolean;
    // Category?: string;
    // WOTemplateIds?: string[];
}

/** An interface that defines the outputs of the activity. */
export interface GetWorkOrderTemplatesOutputs {
    /**
     * @description The list of work order templates.
     */
    result?: WOTemplateName[];
}

/**
 * @defaultName cwWorkOrderTemplates
 * @category Cityworks
 * @description Searches for Cityworks work order templates.
 */
export class GetWorkOrderTemplates implements IActivityHandler {
    async execute(inputs: GetWorkOrderTemplatesInputs): Promise<GetWorkOrderTemplatesOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.entityTypes) {
            throw new Error("entityTypes is required");
        }

        const service = new WorkOrderService(inputs.service);
        const response = await service.Templates({
            EntityType: undefined as any,
            EntityTypes: typeof inputs.entityTypes === "string" ? [inputs.entityTypes] : inputs.entityTypes,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
