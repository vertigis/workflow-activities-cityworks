import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { PreferencesService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { UserPreferences } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetUserPreferencesInputs {
    /**
     * @displayName API Service
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Employee SID
     * @description The SID of the employee to get the preferences of.
     */
    employeeSid?: number;

    domainId?: number;
    categories?: string[];
    preferenceNames?: string[];
}

/** An interface that defines the outputs of the activity. */
export interface GetUserPreferencesOutputs {
    /**
     * @description The list of user preferences.
     */
    result?: UserPreferences;
}

/**
 * @category Cityworks
 * @description Gets the preferences for a user.
 */
export class GetUserPreferences implements IActivityHandler {
    /** Perform the execution logic of the activity. */
    async execute(inputs: GetUserPreferencesInputs): Promise<GetUserPreferencesOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }

        const service = new PreferencesService(inputs.service);

        const response = await service.User({
            EmployeeSid: inputs.employeeSid,
            DomainId: inputs.domainId,
            Categories: inputs.categories,
            PreferenceNames: inputs.preferenceNames,
        });
        checkResponse(response);

        return {
            result: response.Value,
        };
    }
}
