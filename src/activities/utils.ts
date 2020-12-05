import { CoreResponseStatus, ServiceTypes } from "cw-sdk/core";

/**
 * Checks the status of a Cityworks service response and throws an error if it is not OK.
 * @param response The response to check
 * @param message An optional message
 */
export function checkResponse(response: ServiceTypes.CoreResponseBase, message?: string): void {
    if (response.Status !== CoreResponseStatus.Ok) {
        throw new CityworksRequestError(response, message);
    }
}

class CityworksRequestError extends Error {
    readonly response: ServiceTypes.CoreResponseBase;

    constructor(response: ServiceTypes.CoreResponseBase, message?: string) {
        super(message || "Cityworks request failed.");
        this.response = response;
    }
}