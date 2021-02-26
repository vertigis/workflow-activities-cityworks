import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { WorkOrderService } from "cw-sdk/api-service";
import { WorkOrderServiceTypes } from "cw-sdk/api-interface/WorkOrderService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { WorkOrderBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface CreateWorkOrderInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @description	The ID of the work order template.
     * @required
     */
    templateId: string;
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
     * @description Additional work order options.
     */
    options: Omit<
        WorkOrderServiceTypes.Requests.Create,
        "EntityType" | "WOTemplateId"
    >;
}

/** An interface that defines the outputs of the activity. */
export interface CreateWorkOrderOutputs {
    /**
     * @description The work orders.
     */
    result?: WorkOrderBase[];
}

/**
 * @category Cityworks - AMS
 * @description Create a Cityworks work order.
 * @clientOnly
 * @unsupportedApps GMV
 */
export class CreateWorkOrder implements IActivityHandler {
    async execute(
        inputs: CreateWorkOrderInputs
    ): Promise<CreateWorkOrderOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.entityType) {
            throw new Error("entityType is required");
        }
        if (!inputs.templateId) {
            throw new Error("templateId is required");
        }

        const service = new WorkOrderService(inputs.service);

        const response = await service.Create({
            EntityType: inputs.entityType,
            WOTemplateId: inputs.templateId,
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
