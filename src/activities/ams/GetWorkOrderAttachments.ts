import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { AttachmentsService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { WOAttachment } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetWorkOrderAttachmentsInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName WorkOrder IDs
     * @description The ID or IDs of the work order attachments to find.
     */
    workOrderIds?: string | string[];
    /**
     * @displayName WorkOrder SIDs
     * @description The SID or SIDs of the work order attachments to find.
     */
    workOrderSids?: number | number[];
}

/** An interface that defines the outputs of the activity. */
export interface GetWorkOrderAttachmentsOutputs {
    /**
     * @description The list of work order attachments.
     */
    result?: WOAttachment[];
}

/**
 * @defaultName cwWorkOrderAttachments
 * @category Cityworks - AMS
 * @description Gets Cityworks work order attachments.
 */
export class GetWorkOrderAttachments implements IActivityHandler {
    async execute(inputs: GetWorkOrderAttachmentsInputs): Promise<GetWorkOrderAttachmentsOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.workOrderIds && !inputs.workOrderSids) {
            throw new Error("One of workOrderIds or workOrderSids is required");
        }

        const service = new AttachmentsService(inputs.service);

        const workOrderIds: string[] = inputs.workOrderIds ? typeof inputs.workOrderIds === "string" ? [inputs.workOrderIds] : inputs.workOrderIds : undefined as any;
        const workOrderSids: number[] = inputs.workOrderSids ? typeof inputs.workOrderSids === "number" ? [inputs.workOrderSids] : inputs.workOrderIds : undefined as any;

        const response = await service.WorkOrderAttachments({
            WorkOrderIds: workOrderIds,
            WorkOrderSids: workOrderSids,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
