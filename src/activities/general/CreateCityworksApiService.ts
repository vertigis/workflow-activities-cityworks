import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { ApiService } from "cw-sdk/browser";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface CreateCityworksApiServiceInputs {
    /**
     * @description The URL to the Cityworks service.
     * @required
     */
    url: string;
    /**
     * @description The username of the Cityworks user.
     */
    username?: string;
    /**
     * @description The password of the Cityworks user. Do not hard code passwords into a workflow.
     */
    password?: string;
    /**
     * @description A Cityworks access token.
     */
    token?: string;
}

/** An interface that defines the outputs of the activity. */
export interface CreateCityworksApiServiceOutputs {
    /**
     * @description The initialized Cityworks API service.
     */
    service?: IApiService;
}

/**
 * @displayName Create Cityworks API Service
 * @category Cityworks - General
 * @defaultName cwApi
 * @description Creates and initializes a Cityworks API Service that provides authentication and other services to all Cityworks activities.
 */
export class CreateCityworksApiService implements IActivityHandler {
    async execute(
        inputs: CreateCityworksApiServiceInputs
    ): Promise<CreateCityworksApiServiceOutputs> {
        if (!inputs.url) {
            throw new Error("url is required");
        }

        let service: ApiService;
        if (inputs.token) {
            // Use the token directly
            service = new ApiService(inputs.url, inputs.token);
        } else if (inputs.username && inputs.password) {
            // Login with the username and password
            service = new ApiService(inputs.url);
            const response = await service.login(
                inputs.username,
                inputs.password
            );
            checkResponse(response, "Failed to authenticate with Cityworks.");
        } else {
            // Use the CSRF token
            // This is only useful when on the same domain
            service = new ApiService(inputs.url);
            service.initializeCsrfToken();
        }

        return {
            service,
        };
    }
}
