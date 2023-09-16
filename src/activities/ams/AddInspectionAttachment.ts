import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { AttachmentsServiceTypes } from "cw-sdk/api-interface/AttachmentsService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { InspAttachment } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface AddInspectionAttachmentInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Work Order ID
     * @description The ID of the inspection to add the attachment to.
     */
    inspectionId: number;
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
    /**
     * @description The type of the attachment.
     */
    attachmentType?: number;
}

/** An interface that defines the outputs of the activity. */
export interface AddInspectionAttachmentOutputs {
    /**
     * @description The inspection attachment.
     */
    result?: InspAttachment;
}

/**
 * @category Cityworks - AMS
 * @description Add an attachment to a Cityworks inspection.
 * @clientOnly
 * @supportedApps EXB, GWV, GVH, WAB
 */
export class AddInspectionAttachment implements IActivityHandler {
    async execute(
        inputs: AddInspectionAttachmentInputs
    ): Promise<AddInspectionAttachmentOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.inspectionId) {
            throw new Error("inspectionId is required");
        }
        if (!inputs.file) {
            throw new Error("file is required");
        }

        // AttachmentsService.AddInspectionAttachment does not currently support the ability to add a file.
        // We need to create our own implementation.
        const data: AttachmentsServiceTypes.Requests.AddInspectionAttachment = {
            InspectionId: inputs.inspectionId,
            Comments: inputs.comments,
            Filename: inputs.filename,
            AttachmentType: inputs.attachmentType,
        };
        const formData = new FormData();
        formData.set("token", inputs.service.getToken() || "");
        formData.set("file", inputs.file);
        formData.set("data", JSON.stringify(data));

        const baseUrl: string = (inputs.service as any)._baseUrl;

        const request = await fetch(
            `${baseUrl}Services/Ams/Attachments/AddInspectionAttachment`,
            {
                method: "post",
                body: formData,
            }
        );
        const response =
            (await request.json()) as AttachmentsServiceTypes.Responses.AddInspectionAttachment;
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
