import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { InspectionService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { InspectionBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface CancelInspectionInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Inspection IDs
     * @description The ID or IDs of the inspections to cancel.
     * @required
     */
    inspectionIds: number | number[];
    /**
     * @description	The reason for canceling the inspection.
     */
    cancelReason?: string;
    /**
     * @description	The date the inspection was cancelled.
     */
    dateCancelled?: Date;
}

/** An interface that defines the outputs of the activity. */
export interface CancelInspectionOutputs {
    /**
     * @description The list of cancelled inspection.
     */
    result?: InspectionBase[];
}

/**
 * @category Cityworks - AMS
 * @description Cancels Cityworks inspections.
 */
export class CancelInspection implements IActivityHandler {
    async execute(
        inputs: CancelInspectionInputs
    ): Promise<CancelInspectionOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.inspectionIds) {
            throw new Error("inspectionIds is required");
        }

        const service = new InspectionService(inputs.service);

        const response = await service.Cancel({
            CancelReason: inputs.cancelReason,
            DateCancelled: inputs.dateCancelled,
            InspectionIds:
                typeof inputs.inspectionIds === "number"
                    ? [inputs.inspectionIds]
                    : inputs.inspectionIds,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
