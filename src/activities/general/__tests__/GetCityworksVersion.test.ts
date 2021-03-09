import { IApiService } from "cw-sdk/api-service/i-api-service";
import { CoreResponseStatus } from "cw-sdk/core";
import { GetCityworksVersion } from "../GetCityworksVersion";

describe("GetCityworksVersion", () => {
    it("throws if service input is missing", async () => {
        const activity = new GetCityworksVersion();
        await expect(() =>
            activity.execute({ service: undefined as any })
        ).rejects.toThrow("service is required");
    });
    it("returns a version", async () => {
        const version = "1.0";
        const mockService: IApiService = {
            call: jest.fn(() =>
                Promise.resolve({
                    Status: CoreResponseStatus.Ok,
                    Value: version,
                })
            ),
            getToken: jest.fn(),
            initializeCsrfToken: jest.fn(),
            login: jest.fn(),
        };
        const activity = new GetCityworksVersion();
        const result = await activity.execute({ service: mockService });
        expect(result.version).toStrictEqual(version);
    });
});
