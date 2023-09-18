import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { InspectionService } from "cw-sdk/api-service";
import { InspectionServiceTypes } from "cw-sdk/api-interface/InspectionService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { InspectionBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface UpdateUpdateInspectionInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Inspection ID
     * @description	The ID of the inspection.
     * @required
     */
    inspectionId: number;
    /**
     * @description Additional inspection options.
     */
    options: Omit<InspectionServiceTypes.Requests.Update, "InspectionId">;
}

/** An interface that defines the outputs of the activity. */
export interface UpdateUpdateInspectionOutputs {
    /**
     * @description The inspection.
     */
    result?: InspectionBase;
}

/**
 * @category Cityworks - AMS
 * @description Update a Cityworks inspection.
 * @clientOnly
 * @supportedApps EXB, GWV, GVH, WAB
 */
export class UpdateUpdateInspection implements IActivityHandler {
    async execute(
        inputs: UpdateUpdateInspectionInputs
    ): Promise<UpdateUpdateInspectionOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.inspectionId) {
            throw new Error("inspectionId is required");
        }

        const service = new InspectionService(inputs.service);

        const response = await service.Update({
            InspectionId: inputs.inspectionId,
            ...inputs.options,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
