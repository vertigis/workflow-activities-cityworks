import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { WorkOrderService } from "cw-sdk/api-service";
import { WorkOrderServiceTypes } from "cw-sdk/api-interface/WorkOrderService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { WorkOrderBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface UpdateWorkOrderInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Work Order ID
     * @description The ID or SID of the work order to add costs to.
     * @required
     */
    workOrderId: string | number;
    /**
     * @description Additional work order options.
     */
    options: Omit<
        WorkOrderServiceTypes.Requests.Update,
        "WorkOrderId" | "WorkOrderSid"
    >;
}

/** An interface that defines the outputs of the activity. */
export interface UpdateWorkOrderOutputs {
    /**
     * @description The work order.
     */
    result?: WorkOrderBase;
}

/**
 * @category Cityworks - AMS
 * @description Update a Cityworks work order.
 * @clientOnly
 * @supportedApps EXB, GWV, GVH, WAB
 */
export class UpdateWorkOrder implements IActivityHandler {
    async execute(
        inputs: UpdateWorkOrderInputs
    ): Promise<UpdateWorkOrderOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.workOrderId) {
            throw new Error("workOrderId is required");
        }

        const service = new WorkOrderService(inputs.service);

        const response = await service.Update({
            WorkOrderId:
                typeof inputs.workOrderId === "string"
                    ? inputs.workOrderId
                    : (undefined as any),
            WorkOrderSid:
                typeof inputs.workOrderId === "number"
                    ? inputs.workOrderId
                    : (undefined as any),
            ...inputs.options,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
