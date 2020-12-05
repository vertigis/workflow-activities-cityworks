import { CoreResponseStatus } from "cw-sdk/core";
import { checkResponse } from "../utils";

describe("utils", () => {
    describe("checkResponse", () => {
        it("does not throw if status is Ok", () => {
            expect(() => checkResponse({ Status: CoreResponseStatus.Ok })).not.toThrow();
        });
        it("throws if status is not Ok", () => {
            expect(() => checkResponse({ Status: CoreResponseStatus.ConnectionError })).toThrow(
                "Cityworks request failed."
            );
            expect(() => checkResponse({ Status: CoreResponseStatus.Error })).toThrow(
                "Cityworks request failed."
            );
            expect(() => checkResponse({ Status: CoreResponseStatus.InvalidCredentials })).toThrow(
                "Cityworks request failed."
            );
            expect(() => checkResponse({ Status: CoreResponseStatus.Unauthorized })).toThrow(
                "Cityworks request failed."
            );
        });
        it("uses custom message", () => {
            expect(() => checkResponse({ Status: CoreResponseStatus.ConnectionError }, "foo")).toThrow(
                "foo"
            );
        });
    });
});
