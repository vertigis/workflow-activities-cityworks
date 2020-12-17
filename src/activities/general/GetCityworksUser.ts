import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { AuthenticationService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { CWUser } from "cw-sdk/core";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetCityworksUserInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @description The user to get information about. If not specified the current user will be returned.
     */
    loginName?: string;
}

/** An interface that defines the outputs of the activity. */
export interface GetCityworksUserOutputs {
    /**
     * @description The Cityworks user.
     */
    user?: CWUser;
}

/**
 * @category Cityworks - General
 * @defaultName cwUser
 * @description Gets information about a Cityworks user.
 */
export class GetCityworksUser implements IActivityHandler {
    async execute(
        inputs: GetCityworksUserInputs
    ): Promise<GetCityworksUserOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }

        const authService = new AuthenticationService(inputs.service);
        const response = await authService.User({
            LoginName: inputs.loginName,
        });
        checkResponse(response);

        return {
            user: response.Value,
        };
    }
}
