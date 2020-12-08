import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { AttachmentsService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { RequestAttachment } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetServiceRequestAttachmentsInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Request ID
     * @description The ID of the service request to get the attachments from.
     * @required
     */
    requestId: number | number[];
}

/** An interface that defines the outputs of the activity. */
export interface GetServiceRequestAttachmentsOutputs {
    /**
     * @description The service request attachments.
     */
    result?: RequestAttachment[];
}

/**
 * @category Cityworks - AMS
 * @description Get the attachments of a Cityworks service request.
 */
export class GetServiceRequestAttachments implements IActivityHandler {
    async execute(inputs: GetServiceRequestAttachmentsInputs): Promise<GetServiceRequestAttachmentsOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.requestId) {
            throw new Error("requestId is required");
        }

        const service = new AttachmentsService(inputs.service);

        const response = await service.RequestAttachments({
            RequestIds: typeof inputs.requestId === "number" ? [inputs.requestId] : inputs.requestId,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
