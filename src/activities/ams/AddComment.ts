import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { CommentService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { CommentActivityType } from "cw-sdk/core";
import { CommentRecord } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface AddCommentInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Activity SID
     * @description The SID of the activity to add the comment to.
     * @required
     */
    activitySid: number;
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
    /**
     * @description The comment to add.
     * @required
     */
    comments: string;
}

/** An interface that defines the outputs of the activity. */
export interface AddCommentOutputs {
    /**
     * @description The comment.
     */
    result?: CommentRecord;
}

/**
 * @category Cityworks - AMS
 * @description Add a comment to a Cityworks activity.
 * @clientOnly
 * @supportedApps EXB, GWV, GVH, WAB
 */
export class AddComment implements IActivityHandler {
    async execute(inputs: AddCommentInputs): Promise<AddCommentOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }
        if (!inputs.activitySid) {
            throw new Error("activitySid is required");
        }
        if (inputs.activityType === undefined) {
            throw new Error("activityType is required");
        }
        if (!inputs.comments) {
            throw new Error("comments is required");
        }

        const service = new CommentService(inputs.service);

        const response = await service.Add({
            ActivitySid: inputs.activitySid,
            ActivityType:
                typeof inputs.activityType === "string"
                    ? CommentActivityType[inputs.activityType]
                    : inputs.activityType,
            Comments: inputs.comments,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
