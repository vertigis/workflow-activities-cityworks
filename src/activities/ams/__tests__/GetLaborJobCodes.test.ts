import { IApiService } from "cw-sdk/api-service/i-api-service";
import { CoreResponseStatus, JobCode } from "cw-sdk/core";
import { GetLaborJobCodes } from "../GetLaborJobCodes";

describe("GetLaborJobCodes", () => {
    it("throws if service input is missing", async () => {
        const activity = new GetLaborJobCodes();
        await expect(
            activity.execute({ service: undefined as any })
        ).rejects.toThrow("service is required");
    });
    it("returns job codes", async () => {
        const codes: JobCode[] = [{ Code: "1" }, { Code: "2" }];
        const mockService: IApiService = {
            call: jest.fn(() =>
                Promise.resolve({
                    Status: CoreResponseStatus.Ok,
                    Value: codes,
                })
            ),
            getToken: jest.fn(),
            initializeCsrfToken: jest.fn(),
            login: jest.fn(),
        };
        const activity = new GetLaborJobCodes();
        const result = await activity.execute({ service: mockService });
        expect(result.result).toStrictEqual(codes);
    });
});
