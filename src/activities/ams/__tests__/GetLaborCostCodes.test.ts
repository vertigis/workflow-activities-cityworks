import { IApiService } from "cw-sdk/api-service/i-api-service";
import { CoreResponseStatus, CostCode } from "cw-sdk/core";
import { GetLaborCostCodes } from "../GetLaborCostCodes";

describe("GetLaborCostCodes", () => {
    it("throws if service input is missing", () => {
        const activity = new GetLaborCostCodes();
        expect(activity.execute({ service: undefined as any, employeeSids: [1, 2] })).rejects.toThrow(
            "service is required"
        );
    });
    it("throws if employeeSids input is missing", () => {
        const mockService: IApiService = {
            call: jest.fn(),
            getToken: jest.fn(),
            initializeCsrfToken: jest.fn(),
            login: jest.fn(),
        };
        const activity = new GetLaborCostCodes();
        expect(activity.execute({ service: mockService, employeeSids: undefined as any })).rejects.toThrow(
            "employeeSids is required"
        );
    });
    it("returns cost codes (single employeeSids)", async () => {
        const codes: CostCode[] = [{ Code: "1" }, { Code: "2" }];
        const mockCall = jest.fn(async (data: any, path: string) => {
            return {
                Status: CoreResponseStatus.Ok,
                Value: codes
            }
        });
        const mockService: IApiService = {
            call: mockCall,
            getToken: jest.fn(),
            initializeCsrfToken: jest.fn(),
            login: jest.fn(),
        };
        const activity = new GetLaborCostCodes();
        const result = await activity.execute({ service: mockService, employeeSids: 1 });
        expect(result.codes).toStrictEqual(codes);
        expect(mockCall).toHaveBeenCalledWith({ EmployeeSids: [1] }, "Ams/LaborCost/CostCodes");
    });
    it("returns cost codes (multiple employeeSids)", async () => {
        const codes: CostCode[] = [{ Code: "1" }, { Code: "2" }];
        const mockCall = jest.fn(async (data: any, path: string) => {
            return {
                Status: CoreResponseStatus.Ok,
                Value: codes
            }
        });
        const mockService: IApiService = {
            call: mockCall,
            getToken: jest.fn(),
            initializeCsrfToken: jest.fn(),
            login: jest.fn(),
        };
        const activity = new GetLaborCostCodes();
        const result = await activity.execute({ service: mockService, employeeSids: [1, 2] });
        expect(result.codes).toStrictEqual(codes);
        expect(mockCall).toHaveBeenCalledWith({ EmployeeSids: [1, 2] }, "Ams/LaborCost/CostCodes");
    });
});
