import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { AttachmentsService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { InspAttachment } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetInspectionAttachmentsInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Inspection IDs
     * @description The ID or IDs of the inspections to find.
     */
    inspectionIds: number | number[];
}

/** An interface that defines the outputs of the activity. */
export interface GetInspectionAttachmentsOutputs {
    /**
     * @description The list of inspection attachments.
     */
    result?: InspAttachment[];
}

/**
 * @defaultName cwInspectionAttachments
 * @category Cityworks - AMS
 * @description Gets Cityworks inspections attachments.
 */
export class GetInspectionAttachments implements IActivityHandler {
    async execute(inputs: GetInspectionAttachmentsInputs): Promise<GetInspectionAttachmentsOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }

        const service = new AttachmentsService(inputs.service);

        const response = await service.InspectionAttachments({
            InspectionIds: typeof inputs.inspectionIds === "number" ? [inputs.inspectionIds] : inputs.inspectionIds,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
