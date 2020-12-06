import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { AttachmentsServiceTypes } from "cw-sdk/api-interface/AttachmentsService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { RequestAttachment } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface AddServiceRequestAttachmentInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Request ID
     * @description The ID of the service request to add the attachment to.
     * @required
     */
    requestId: number;
    /**
     * @description The file to attach.
     * @required
     */
    file: Blob;
    /**
     * @description An name for the file.
     */
    filename?: string;
    /**
     * @description Comments to include with the attachment.
     */
    comments?: string;
}

/** An interface that defines the outputs of the activity. */
export interface AddServiceRequestAttachmentOutputs {
    /**
     * @description The service request attachment.
     */
    result?: RequestAttachment;
}

/**
 * @category Cityworks - AMS
 * @description Add an attachment to a Cityworks service request.
 */
export class AddServiceRequestAttachment implements IActivityHandler {
    async execute(inputs: AddServiceRequestAttachmentInputs): Promise<AddServiceRequestAttachmentOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.requestId) {
            throw new Error("requestId is required");
        }
        if (!inputs.file) {
            throw new Error("file is required");
        }

        // AttachmentsService.AddWorkOrderAttachment does not currently support the ability to add a file.
        // We need to create our own implementation.
        const data: AttachmentsServiceTypes.Requests.AddRequestAttachment = {
            RequestId: inputs.requestId,
            Comments: inputs.comments,
            Filename: inputs.filename,
        }
        const formData = new FormData();
        formData.set("token", inputs.service.getToken() || "");
        formData.set("file", inputs.file);
        formData.set("data", JSON.stringify(data));
        const request = await fetch(`${(inputs.service as any)._baseUrl}Services/Ams/Attachments/AddRequestAttachment`, {
            method: "post",
            body: formData,
        });
        const response = await request.json() as AttachmentsServiceTypes.Responses.AddRequestAttachment;
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
