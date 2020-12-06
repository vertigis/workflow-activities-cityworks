import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { AttachmentsServiceTypes } from "cw-sdk/api-interface/AttachmentsService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { WOAttachment } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface AddWorkOrderAttachmentInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Work Order ID
     * @description The ID of the work order to add the attachment to.
     */
    workOrderId?: string;
    /**
     * @displayName Work Order SID
     * @description The SID of the work order to add the attachment to.
     */
    workOrderSid?: number;
    /**
     * @displayName Task ID
     * @description The ID of the task to add the attachment to.
     */
    taskId?: number;
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
export interface AddWorkOrderAttachmentOutputs {
    /**
     * @description The work order attachment.
     */
    result?: WOAttachment;
}

/**
 * @category Cityworks - AMS
 * @description Add an attachment to a Cityworks work order.
 */
export class AddWorkOrderAttachment implements IActivityHandler {
    async execute(inputs: AddWorkOrderAttachmentInputs): Promise<AddWorkOrderAttachmentOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.workOrderId && !inputs.workOrderSid) {
            throw new Error("One of workOrderId or workOrderSid is required");
        }
        if (!inputs.file) {
            throw new Error("file is required");
        }

        // AttachmentsService.AddWorkOrderAttachment does not currently support the ability to add a file.
        // We need to create our own implementation.
        const data: AttachmentsServiceTypes.Requests.AddWorkOrderAttachment = {
            WorkOrderId: inputs.workOrderId as string,
            WorkOrderSid: inputs.workOrderSid as number,
            TaskId: inputs.taskId,
            Comments: inputs.comments,
            Filename: inputs.filename,
        }
        const formData = new FormData();
        formData.set("token", inputs.service.getToken() || "");
        formData.set("file", inputs.file);
        formData.set("data", JSON.stringify(data));
        const request = await fetch(`${(inputs.service as any)._baseUrl}Services/Ams/Attachments/AddWorkOrderAttachment`, {
            method: "post",
            body: formData,
        });
        const response = await request.json() as AttachmentsServiceTypes.Responses.AddWorkOrderAttachment;
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
