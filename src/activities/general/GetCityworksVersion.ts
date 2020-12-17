import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { AuthenticationService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetCityworksVersionInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
}

/** An interface that defines the outputs of the activity. */
export interface GetCityworksVersionOutputs {
    /**
     * @description The Cityworks version.
     */
    version?: string;
}

/**
 * @category Cityworks - General
 * @defaultName cwVersion
 * @description Gets the version of the Cityworks service.
 */
export class GetCityworksVersion implements IActivityHandler {
    async execute(
        inputs: GetCityworksVersionInputs
    ): Promise<GetCityworksVersionOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }

        const service = new AuthenticationService(inputs.service);
        const response = await service.Version({});
        checkResponse(response);

        return {
            version: response.Value,
        };
    }
}
