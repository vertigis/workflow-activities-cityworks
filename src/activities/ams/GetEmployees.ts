import type { IActivityHandler } from "@geocortex/workflow/runtime/IActivityHandler";
import { EmployeeService } from "cw-sdk/api-service";
import { IApiService } from "cw-sdk/api-service/i-api-service";
import { EmployeeBase } from "cw-sdk/core/types";
import { checkResponse } from "../utils";

/** An interface that defines the inputs of the activity. */
export interface GetEmployeesInputs {
    /**
     * @description The Cityworks API Service.
     * @required
     */
    service: IApiService;
    /**
     * @displayName Employee SIDs
     * @description The SID or SIDs of the employees to find.
     */
    employeeSids?: number | number[];
    /**
     * @displayName Group ID
     * @description The ID of a group containing of the employees to find.
     */
    groupId?: number;
    /**
     * @description Whether to include inactive employees in the search result. This input does not apply when using the Employee SIDs inputs.
     */
    includeInactive?: boolean;
}

/** An interface that defines the outputs of the activity. */
export interface GetEmployeesOutputs {
    /**
     * @description The list of employees.
     */
    result?: EmployeeBase[];
}

/**
 * @category Cityworks - AMS
 * @defaultName cwEmployees
 * @description Searches for Cityworks employees.
 */
export class GetEmployees implements IActivityHandler {
    async execute(inputs: GetEmployeesInputs): Promise<GetEmployeesOutputs> {
        if (!inputs.service) {
            throw new Error("service is required");
        }

        const service = new EmployeeService(inputs.service);

        if (inputs.employeeSids) {
            if (typeof inputs.employeeSids === "number") {
                const response = await service.ById({
                    EmployeeSid: inputs.employeeSids,
                });
                checkResponse(response);
                return {
                    result: (response.Value && [response.Value]) || [],
                };
            } else {
                const response = await service.ByIds({
                    EmployeeSids: inputs.employeeSids,
                });
                checkResponse(response);
                return {
                    result: response.Value,
                };
            }
        } else if (inputs.groupId) {
            const response = await service.ByGroupId({
                GroupId: inputs.groupId,
                IncludeInactive: inputs.includeInactive,
            });
            checkResponse(response);
            return {
                result: response.Value,
            };
        } else {
            const response = await service.All({
                IncludeInactive: inputs.includeInactive,
            });
            checkResponse(response);
            return {
                result: response.Value,
            };
        }
    }
}
