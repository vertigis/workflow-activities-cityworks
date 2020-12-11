import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { CommentService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { CommentActivityType } from "cw-sdk/core";
import { CommentRecord } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetCommentsInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Activity SID
     * @description The SID or SIDs of the activities to get the comments of.
     * @required
     */
    activitySid: number | number[];
    /**
     * @description The type of the activity.
     * @required
     */
    activityType:
        | CommentActivityType
        | "Unknown"
        | "Request"
        | "WorkOrder"
        | "CaTask"
        | "CaObject"
        | "CaCorrection"
        | "Project"
        | "Contract";
}

/** An interface that defines the outputs of the activity. */
export interface GetCommentsOutputs {
    /**
     * @description The comments.
     */
    result?: {
        [activitySid: number]: CommentRecord[];
    };
}

/**
 * @category Cityworks - AMS
 * @description Gets the comments of a Cityworks activity.
 */
export class GetComments implements IActivityHandler {
    async execute(inputs: GetCommentsInputs): Promise<GetCommentsOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.activitySid) {
            throw new Error("activitySid is required");
        }
        if (inputs.activityType === undefined) {
            throw new Error("activityType is required");
        }

        const service = new CommentService(inputs.service);

        const response = await service.ByActivitySids({
            ActivitySids:
                typeof inputs.activitySid === "number"
                    ? [inputs.activitySid]
                    : inputs.activitySid,
            ActivityType:
                typeof inputs.activityType === "string"
                    ? CommentActivityType[inputs.activityType]
                    : inputs.activityType,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
