import { IApiService } from "cw-sdk/api-service/i-api-service";
import { CoreResponseStatus, CWUser } from "cw-sdk/core";
import { GetCityworksUser } from "../GetCityworksUser";

describe("GetCityworksUser", () => {
    it("throws if service input is missing", async () => {
        const activity = new GetCityworksUser();
        await expect(
            activity.execute({ service: undefined as any })
        ).rejects.toThrow("service is required");
    });
    it("returns a user", async () => {
        const user: CWUser = {
            LoginName: "bobby",
        };
        const mockService: IApiService = {
            call: jest.fn(() =>
                Promise.resolve({
                    Status: CoreResponseStatus.Ok,
                    Value: user,
                })
            ),
            getToken: jest.fn(),
            initializeCsrfToken: jest.fn(),
            login: jest.fn(),
        };
        const activity = new GetCityworksUser();
        const result = await activity.execute({ service: mockService });
        expect(result.user).toStrictEqual(user);
    });
});
