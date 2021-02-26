import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { InspectionService } from "cw-sdk/api-service";
import { InspectionServiceTypes } from "cw-sdk/api-interface/InspectionService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { InspectionBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface CreateInspectionInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Template ID
     * @description	The ID of the inspection template.
     * @required
     */
    templateId: number;
    /**
     * @description	The entity type.
     * @required
     */
    entityType: string;
    /**
     * @description	The X position of the work order.
     */
    x?: number;
    /**
     * @description	The Y position of the work order.
     */
    y?: number;
    /**
     * @description Additional inspection options.
     */
    options: Omit<
        InspectionServiceTypes.Requests.Create,
        "EntityType" | "InspTemplateId"
    >;
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
 * @clientOnly
 * @unsupportedApps GMV
 */
export class CreateInspection implements IActivityHandler {
    async execute(
        inputs: CreateInspectionInputs
    ): Promise<CreateInspectionOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.entityType) {
            throw new Error("entityType is required");
        }
        if (!inputs.templateId) {
            throw new Error("templateId is required");
        }

        const service = new InspectionService(inputs.service);

        const response = await service.Create({
            EntityType: inputs.entityType,
            InspTemplateId: inputs.templateId,
            X: inputs.x,
            Y: inputs.y,
            ...inputs.options,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
