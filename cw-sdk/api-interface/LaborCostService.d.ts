import { JobCode } from '../core/types/JobCode';
import { CostCode } from '../core/types/CostCode';
import { WorkOrderLaborCost } from '../core/types/WorkOrderLaborCost';
import { RequestLaborCost } from '../core/types/RequestLaborCost';
import { WorkOrderEntity } from '../core/types/WorkOrderEntity';
import { ServiceTypes } from '../core/service-types';
export declare namespace LaborCostServiceTypes {
    namespace Requests {
        interface AddRequestCosts extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Description?: string;
            EmployeeBenefit?: boolean;
            EmployeeCostCodes?: string[];
            EmployeeGroupId?: number;
            EmployeeHoliday?: boolean;
            EmployeeJobCode?: string;
            EmployeeOther?: boolean;
            EmployeeOverhead?: boolean;
            EmployeeOvertime?: boolean;
            EmployeeRegular?: boolean;
            EmployeeShiftDiff?: boolean;
            EmployeeSids?: number[];
            EmployeeStandby?: boolean;
            FinishDate?: Date;
            Hours: number;
            RequestId: number;
            StartDate?: Date;
        }
        interface AddWorkOrderCosts extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            ContractorFixed?: boolean;
            ContractorFixedCost?: number;
            ContractorHoliday?: boolean;
            ContractorHourly?: boolean;
            ContractorOvertime?: boolean;
            ContractorPerUnit?: boolean;
            ContractorSids?: number[];
            Description?: string;
            EmployeeBenefit?: boolean;
            EmployeeCostCodes?: string[];
            EmployeeGroupId?: number;
            EmployeeHoliday?: boolean;
            EmployeeJobCode?: string;
            EmployeeOther?: boolean;
            EmployeeOverhead?: boolean;
            EmployeeOvertime?: boolean;
            EmployeeRegular?: boolean;
            EmployeeShiftDiff?: boolean;
            EmployeeSids?: number[];
            EmployeeStandby?: boolean;
            Entities?: WorkOrderEntity[];
            Estimated?: boolean;
            FinishDate?: Date;
            Hours: number;
            StartDate?: Date;
            TaskIds?: number[];
            WorkOrderId: string;
            WorkOrderSid: number;
        }
        interface CostCodes extends ServiceTypes.CoreRequestBase {
            CommonCodesOnly?: boolean;
            EmployeeSids: number[];
        }
        interface DeleteRequestCosts extends ServiceTypes.CoreRequestBase {
            LaborCostIds: number[];
        }
        interface DeleteWorkOrderCosts extends ServiceTypes.CoreRequestBase {
            Estimated?: boolean;
            LaborCostIds: number[];
        }
        interface JobCodes extends ServiceTypes.CoreRequestBase {
        }
        interface RequestCostsByRequest extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreRequestBase {
            Estimated?: boolean;
            WorkOrderIds: string[];
            WorkOrderSids: number[];
        }
    }
    namespace Responses {
        interface AddRequestCosts extends ServiceTypes.CoreResponseBase_<RequestLaborCost[]> {
        }
        interface AddWorkOrderCosts extends ServiceTypes.CoreResponseBase_<WorkOrderLaborCost[]> {
        }
        interface CostCodes extends ServiceTypes.CoreResponseBase_<CostCode[]> {
        }
        interface DeleteRequestCosts extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface DeleteWorkOrderCosts extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface JobCodes extends ServiceTypes.CoreResponseBase_<JobCode[]> {
        }
        interface RequestCostsByRequest extends ServiceTypes.CoreResponseBase_<RequestLaborCost[]> {
        }
        interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreResponseBase_<WorkOrderLaborCost[]> {
        }
    }
    interface ILaborCostService {
        AddRequestCosts?: (request: Requests.AddRequestCosts) => Promise<Responses.AddRequestCosts>;
        AddWorkOrderCosts?: (request: Requests.AddWorkOrderCosts) => Promise<Responses.AddWorkOrderCosts>;
        CostCodes?: (request: Requests.CostCodes) => Promise<Responses.CostCodes>;
        DeleteRequestCosts?: (request: Requests.DeleteRequestCosts) => Promise<Responses.DeleteRequestCosts>;
        DeleteWorkOrderCosts?: (request: Requests.DeleteWorkOrderCosts) => Promise<Responses.DeleteWorkOrderCosts>;
        JobCodes?: (request: Requests.JobCodes) => Promise<Responses.JobCodes>;
        RequestCostsByRequest?: (request: Requests.RequestCostsByRequest) => Promise<Responses.RequestCostsByRequest>;
        WorkOrderCostsByWorkOrder?: (request: Requests.WorkOrderCostsByWorkOrder) => Promise<Responses.WorkOrderCostsByWorkOrder>;
    }
}
