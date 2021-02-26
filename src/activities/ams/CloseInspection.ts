import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { InspectionService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { InspectionBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface CloseInspectionInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Inspection IDs
     * @description The ID or IDs of the inspections to close.
     * @required
     */
    inspectionIds: number | number[];
}

/** An interface that defines the outputs of the activity. */
export interface CloseInspectionOutputs {
    /**
     * @description The list of closed inspections.
     */
    result?: InspectionBase[];
}

/**
 * @category Cityworks - AMS
 * @description Closes Cityworks inspections.
 * @clientOnly
 * @unsupportedApps GMV
 */
export class CloseInspection implements IActivityHandler {
    async execute(
        inputs: CloseInspectionInputs
    ): Promise<CloseInspectionOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.inspectionIds) {
            throw new Error("inspectionIds is required");
        }

        const service = new InspectionService(inputs.service);

        const response = await service.Close({
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
