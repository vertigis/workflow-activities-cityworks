import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { WorkOrderService } from "cw-sdk/api-service";
import { WorkOrderServiceTypes } from "cw-sdk/api-interface/WorkOrderService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { WorkOrderBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface CreateWorkOrderFromInspectionInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @description The inspection.
     * @required
     */
    inspection: WorkOrderServiceTypes.Requests.CreateFromInspection;
}

/** An interface that defines the outputs of the activity. */
export interface CreateWorkOrderFromInspectionOutputs {
    /**
     * @description The work orders.
     */
    result?: WorkOrderBase[];
}

/**
 * @category Cityworks - AMS
 * @description Create a Cityworks work order from an inspection.
 * @clientOnly
 * @supportedApps EXB, GWV, GVH, WAB
 */
export class CreateWorkOrderFromInspection implements IActivityHandler {
    async execute(
        inputs: CreateWorkOrderFromInspectionInputs
    ): Promise<CreateWorkOrderFromInspectionOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.inspection) {
            throw new Error("inspection is required");
        }

        const service = new WorkOrderService(inputs.service);

        const response = await service.CreateFromInspection(inputs.inspection);
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
