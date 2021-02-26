import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { CodesService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { UserPreferences } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetCodesByCodeTypeInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;

    /**
     * @description The code types.
     */
    codeTypes: string | string[];
}

/** An interface that defines the outputs of the activity. */
export interface GetCodesByCodeTypeOutputs {
    /**
     * @description The list of user preferences.
     */
    result?: UserPreferences;
}

/**
 * @category Cityworks - AMS
 * @description Gets the list of Cityworks codes for the given code types.
 * @clientOnly
 * @unsupportedApps GMV
 */
export class GetCodesByCodeType implements IActivityHandler {
    async execute(
        inputs: GetCodesByCodeTypeInputs
    ): Promise<GetCodesByCodeTypeOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }

        const service = new CodesService(inputs.service);

        const response = await service.ByCodeType({
            CodeTypes:
                typeof inputs.codeTypes === "string"
                    ? [inputs.codeTypes]
                    : inputs.codeTypes,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
