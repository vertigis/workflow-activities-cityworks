import type { IActivityHandler } from "@vertigis/workflow/IActivityHandler";
import { WorkOrderService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { WorkOrderEntity } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetWorkOrderEntitiesInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Work Order IDs
     * @description The ID or IDs of the work orders to find.
     */
    workOrderIds?: string | string[];
    /**
     * @displayName Work Order SIDs
     * @description The SID or SIDs of the work orders to find.
     */
    workOrderSids?: number | number[];
    /**
     * @description Whether to query the GIS to populate entity attributes with current GIS data.
     */
    getGisData?: boolean;
}

/** An interface that defines the outputs of the activity. */
export interface GetWorkOrderEntitiesOutputs {
    /**
     * @description The list of work order entities.
     */
    result?: WorkOrderEntity[];
}

/**
 * @category Cityworks - AMS
 * @description Gets the entities of a Cityworks work order.
 * @clientOnly
 * @supportedApps EXB, GWV, GVH, WAB
 */
export class GetWorkOrderEntities implements IActivityHandler {
    async execute(
        inputs: GetWorkOrderEntitiesInputs
    ): Promise<GetWorkOrderEntitiesOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.workOrderIds && !inputs.workOrderSids) {
            throw new Error("One of workOrderId or workOrderSid is required");
        }

        const service = new WorkOrderService(inputs.service);

        const response = await service.Entities({
            WorkOrderIds:
                typeof inputs.workOrderIds === "string"
                    ? [inputs.workOrderIds]
                    : inputs.workOrderIds,
            WorkOrderSids:
                typeof inputs.workOrderSids === "number"
                    ? [inputs.workOrderSids]
                    : inputs.workOrderSids,
            GetGisData: inputs.getGisData,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
