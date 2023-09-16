import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { ServiceRequestService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { ProblemName } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetServiceRequestProblemsInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @description The service request data.
     */
    domainIds: number | number[];

    forPublicOnly?: boolean;
    onlyActiveTemplates?: boolean;
}

/** An interface that defines the outputs of the activity. */
export interface GetServiceRequestProblemsOutputs {
    /**
     * @description The service request.
     */
    result?: ProblemName[];
}

/**
 * @category Cityworks - AMS
 * @description Gets a list of problems for a Cityworks service request.
 * @clientOnly
 * @supportedApps EXB, GWV, GVH, WAB
 */
export class GetServiceRequestProblems implements IActivityHandler {
    async execute(
        inputs: GetServiceRequestProblemsInputs
    ): Promise<GetServiceRequestProblemsOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }

        const service = new ServiceRequestService(inputs.service);

        const response = await service.Problems({
            DomainIds:
                typeof inputs.domainIds === "number"
                    ? [inputs.domainIds]
                    : inputs.domainIds,
            ForPublicOnly: inputs.forPublicOnly,
            OnlyActiveTemplates: inputs.onlyActiveTemplates,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
