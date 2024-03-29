import type { IActivityHandler } from "@vertigis/workflow/IActivityHandler";
import { InspectionService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { InspectionBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetInspectionsInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Inspection IDs
     * @description The ID or IDs of the inspections to find.
     * @required
     */
    inspectionIds: number | number[];
}

/** An interface that defines the outputs of the activity. */
export interface GetInspectionsOutputs {
    /**
     * @description The list of inspections.
     */
    result?: InspectionBase[];
}

/**
 * @defaultName cwInspections
 * @category Cityworks - AMS
 * @description Searches for Cityworks inspections.
 * @clientOnly
 * @supportedApps EXB, GWV, GVH, WAB
 */
export class GetInspections implements IActivityHandler {
    async execute(
        inputs: GetInspectionsInputs
    ): Promise<GetInspectionsOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.inspectionIds) {
            throw new Error("inspectionIds is required");
        }

        const service = new InspectionService(inputs.service);

        if (typeof inputs.inspectionIds === "number") {
            const response = await service.ById({
                InspectionId: inputs.inspectionIds,
            });
            checkResponse(response);
            return {
                result: (response.Value && [response.Value]) || [],
            };
        } else {
            const response = await service.ByIds({
                InspectionIds: inputs.inspectionIds,
            });
            checkResponse(response);
            return {
                result: response.Value,
            };
        }
    }
}
