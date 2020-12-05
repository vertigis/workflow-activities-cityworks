import { IApiService } from "cw-sdk/api-service/i-api-service";
import { CoreResponseStatus } from "cw-sdk/core";
import { EmployeeBase } from "cw-sdk/core/types";
import { GetEmployees } from "../GetEmployees";

describe("GetEmployees", () => {
    it("throws if service input is missing", () => {
        const activity = new GetEmployees();
        expect(activity.execute({ service: undefined as any })).rejects.toThrow(
            "service is required"
        );
    });
    it("searches by employeeSids (single)", async () => {
        const employee: EmployeeBase = {
            LoginName: "bobby",
        };
        const mockCall = jest.fn(async () => {
            return {
                Status: CoreResponseStatus.Ok,
                Value: employee
            }
        })
        const mockService: IApiService = {
            call: mockCall,
            getToken: jest.fn(),
            initializeCsrfToken: jest.fn(),
            login: jest.fn(),
        };
        const activity = new GetEmployees();
        const result = await activity.execute({ service: mockService, employeeSids: 1 });
        expect(result.employee).toStrictEqual(employee);
        expect(result.employees).toStrictEqual([employee]);
        expect(mockCall).toHaveBeenCalledWith({ EmployeeSid: 1 }, "Ams/Employee/ById");
    });
    it("searches by employeeSids (multiple)", async () => {
        const employees: EmployeeBase[] = [{
            LoginName: "bobby",
        }, {
            LoginName: "billy",
        }];
        const mockCall = jest.fn(async () => {
            return {
                Status: CoreResponseStatus.Ok,
                Value: employees
            }
        })
        const mockService: IApiService = {
            call: mockCall,
            getToken: jest.fn(),
            initializeCsrfToken: jest.fn(),
            login: jest.fn(),
        };
        const activity = new GetEmployees();
        const result = await activity.execute({ service: mockService, employeeSids: [1, 2] });
        expect(result.employee).toStrictEqual(employees[0]);
        expect(result.employees).toStrictEqual(employees);
        expect(mockCall).toHaveBeenCalledWith({ EmployeeSids: [1, 2] }, "Ams/Employee/ByIds");
    });
    it("searches by groupId", async () => {
        const employees: EmployeeBase[] = [{
            LoginName: "bobby",
        }, {
            LoginName: "billy",
        }];
        const mockCall = jest.fn(async () => {
            return {
                Status: CoreResponseStatus.Ok,
                Value: employees
            }
        })
        const mockService: IApiService = {
            call: mockCall,
            getToken: jest.fn(),
            initializeCsrfToken: jest.fn(),
            login: jest.fn(),
        };
        const activity = new GetEmployees();
        const result = await activity.execute({ service: mockService, groupId: 7 });
        expect(result.employee).toStrictEqual(employees[0]);
        expect(result.employees).toStrictEqual(employees);
        expect(mockCall).toHaveBeenCalledWith({ GroupId: 7 }, "Ams/Employee/ByGroupId");
    });
    it("searches all", async () => {
        const employees: EmployeeBase[] = [{
            LoginName: "bobby",
        }, {
            LoginName: "billy",
        }];
        const mockCall = jest.fn(async () => {
            return {
                Status: CoreResponseStatus.Ok,
                Value: employees
            }
        })
        const mockService: IApiService = {
            call: mockCall,
            getToken: jest.fn(),
            initializeCsrfToken: jest.fn(),
            login: jest.fn(),
        };
        const activity = new GetEmployees();
        const result = await activity.execute({ service: mockService });
        expect(result.employee).toStrictEqual(employees[0]);
        expect(result.employees).toStrictEqual(employees);
        expect(mockCall).toHaveBeenCalledWith({}, "Ams/Employee/All");
    });
});
