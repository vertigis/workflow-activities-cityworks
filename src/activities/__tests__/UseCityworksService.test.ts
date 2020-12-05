import { IApiService } from "cw-sdk/api-service/i-api-service";
import { CoreResponseStatus, CWUser } from "cw-sdk/core";
import { UseCityworksService } from "../UseCityworksService";

describe("UseCityworksService", () => {
    it("throws if service input is missing", () => {
        const activity = new UseCityworksService();
        expect(activity.execute({ service: undefined as any, path: "General/Authentication/User" })).rejects.toThrow(
            "service is required"
        );
    });
    it("throws if path input is missing", () => {
        const activity = new UseCityworksService();
        expect(activity.execute({ service: {} as any, path: "" })).rejects.toThrow(
            "path is required"
        );
    });
    it("calls the service with the path and data", async () => {
        const value = {
            foo: "baz",
        };
        const mockCall = jest.fn(async (data: any, path: string) => {
            return {
                Status: CoreResponseStatus.Ok,
                Value: value
            }
        });
        const mockService: IApiService = {
            call: mockCall,
            getToken: jest.fn(),
            initializeCsrfToken: jest.fn(),
            login: jest.fn(),
        };
        const activity = new UseCityworksService();

        let result = await activity.execute({ service: mockService, path: "path/1" });
        expect(result.result).toStrictEqual(value);
        expect(mockCall).toHaveBeenCalledWith({}, "path/1");

        result = await activity.execute({ service: mockService, path: "path/2", data: { foo: 2 } });
        expect(result.result).toStrictEqual(value);
        expect(mockCall).toHaveBeenCalledWith({ foo: 2 }, "path/2");
    });
});
