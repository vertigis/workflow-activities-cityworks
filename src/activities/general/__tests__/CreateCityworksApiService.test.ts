import { CreateCityworksApiService } from "../CreateCityworksApiService";
import { AuthenticationServiceTypes } from "cw-sdk/api-interface/AuthenticationService";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { ApiService } from "cw-sdk/browser";
import { ServiceTypes } from "cw-sdk/core";

jest.mock("cw-sdk/browser");

beforeEach(() => {
    jest.resetAllMocks();
});

describe("CreateCityworksApiService", () => {
    it("throws if url input is missing", async () => {
        const activity = new CreateCityworksApiService();
        await expect(activity.execute({ url: "" })).rejects.toThrow(
            "url is required"
        );
    });
    it("initializes with a token", async () => {
        const activity = new CreateCityworksApiService();
        const result = await activity.execute({
            url: "https://server/",
            token: "foo",
        });
        expect(result.service).toBeDefined();
        expect(ApiService).toHaveBeenCalledWith("https://server/", "foo");
    });
    it("initializes with credentials", async () => {
        const mockLogin = jest.fn(() =>
            Promise.resolve<AuthenticationServiceTypes.Responses.Authenticate>({
                Status: ServiceTypes.CoreResponseStatus.Ok,
                Value: {
                    Token: "token",
                },
            })
        );
        const mockApiService: IApiService = {
            call: jest.fn(),
            getToken: jest.fn(),
            initializeCsrfToken: jest.fn(),
            login: mockLogin,
        };
        (ApiService as jest.Mock<ApiService>).mockImplementation(
            () => mockApiService as any
        );

        const activity = new CreateCityworksApiService();
        const result = await activity.execute({
            url: "https://server/",
            username: "user",
            password: "secret",
        });
        expect(result.service).toBeDefined();
        expect(ApiService).toHaveBeenCalledWith("https://server/");
        expect(mockLogin).toHaveBeenCalledWith("user", "secret");
    });
    it("initializes with CSRF when there are no inputs", async () => {
        const mockInitializeCsrfToken = jest.fn();
        const mockApiService: IApiService = {
            call: jest.fn(),
            getToken: jest.fn(),
            initializeCsrfToken: mockInitializeCsrfToken,
            login: jest.fn(),
        };
        (ApiService as jest.Mock<ApiService>).mockImplementation(
            () => mockApiService as any
        );

        const activity = new CreateCityworksApiService();
        const result = await activity.execute({ url: "https://server/" });
        expect(result.service).toBeDefined();
        expect(ApiService).toHaveBeenCalledWith("https://server/");
        expect(mockInitializeCsrfToken).toHaveBeenCalledWith();
    });
});
