import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { ServiceRequestService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { RequestBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface CancelServiceRequestInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Request IDs
     * @description The ID or IDs of the service requests to cancel.
     * @required
     */
    requestIds: number | number[];
    /**
     * @description	The reason for canceling the request.
     */
    cancelReason?: string;
    /**
     * @description	The date the request was cancelled.
     */
    dateCancelled?: Date;
}

/** An interface that defines the outputs of the activity. */
export interface CancelServiceRequestOutputs {
    /**
     * @description The list of cancelled service requests.
     */
    result?: RequestBase[];
}

/**
 * @category Cityworks - AMS
 * @description Cancels Cityworks service requests.
 */
export class CancelServiceRequest implements IActivityHandler {
    async execute(
        inputs: CancelServiceRequestInputs
    ): Promise<CancelServiceRequestOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.requestIds) {
            throw new Error("requestIds is required");
        }

        const service = new ServiceRequestService(inputs.service);

        const response = await service.Cancel({
            CancelReason: inputs.cancelReason,
            DateCancelled: inputs.dateCancelled,
            RequestIds:
                typeof inputs.requestIds === "number"
                    ? [inputs.requestIds]
                    : inputs.requestIds,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
