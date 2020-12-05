import { EmpRelTableField } from '../core/types/EmpRelTableField';
import { EmployeeRelate } from '../core/types/EmployeeRelate';
import { RelEmpToField } from '../core/types/RelEmpToField';
import { ServiceTypes } from '../core/service-types';
export declare namespace RelatesServiceTypes {
    namespace Requests {
        interface ByTableName extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            FieldNames?: string[];
            IncludeInactive?: boolean;
            TableNames?: string[];
        }
        interface EquipChangeOutChangedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface InspectionCancelledBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface InspectionClosedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface InspectionEditAfterClose extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface InspectionInitiatedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface InspectionInspectedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface InspectionSubmitTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface ProblemLeafDispatchTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface ProblemLeafSubmitTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface ProjectApprovedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface ProjectAssignedTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface ProjectInitiatedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface RequestCancelledBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface RequestClosedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface RequestDispatchTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface RequestEditAfterClose extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface RequestInitiatedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface RequestSubmitTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface SearchViewCost extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface TableFields extends ServiceTypes.CoreRequestBase {
            FieldNames?: string[];
            Modules?: string[];
            TableNames?: string[];
        }
        interface TaskAssignTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface TransferRequestedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface WorkOrderCancelledBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface WorkOrderClosedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface WorkOrderCompletedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface WorkOrderEditAfterClose extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface WorkOrderInitiatedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface WorkOrderRequestedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface WorkOrderSubmitTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        interface WorkOrderSupervisors extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
    }
    namespace Responses {
        interface ByTableName extends ServiceTypes.CoreResponseBase_<RelEmpToField[]> {
        }
        interface EmployeeRelates extends ServiceTypes.CoreResponseBase_<EmployeeRelate[]> {
        }
        interface TableFields extends ServiceTypes.CoreResponseBase_<EmpRelTableField[]> {
        }
    }
    interface IRelatesService {
        ByTableName?: (request: Requests.ByTableName) => Promise<Responses.ByTableName>;
        EquipChangeOutChangedBy?: (request: Requests.EquipChangeOutChangedBy) => Promise<Responses.EmployeeRelates>;
        InspectionCancelledBy?: (request: Requests.InspectionCancelledBy) => Promise<Responses.EmployeeRelates>;
        InspectionClosedBy?: (request: Requests.InspectionClosedBy) => Promise<Responses.EmployeeRelates>;
        InspectionEditAfterClose?: (request: Requests.InspectionEditAfterClose) => Promise<Responses.EmployeeRelates>;
        InspectionInitiatedBy?: (request: Requests.InspectionInitiatedBy) => Promise<Responses.EmployeeRelates>;
        InspectionInspectedBy?: (request: Requests.InspectionInspectedBy) => Promise<Responses.EmployeeRelates>;
        InspectionSubmitTo?: (request: Requests.InspectionSubmitTo) => Promise<Responses.EmployeeRelates>;
        ProblemLeafDispatchTo?: (request: Requests.ProblemLeafDispatchTo) => Promise<Responses.EmployeeRelates>;
        ProblemLeafSubmitTo?: (request: Requests.ProblemLeafSubmitTo) => Promise<Responses.EmployeeRelates>;
        ProjectApprovedBy?: (request: Requests.ProjectApprovedBy) => Promise<Responses.EmployeeRelates>;
        ProjectAssignedTo?: (request: Requests.ProjectAssignedTo) => Promise<Responses.EmployeeRelates>;
        ProjectInitiatedBy?: (request: Requests.ProjectInitiatedBy) => Promise<Responses.EmployeeRelates>;
        RequestCancelledBy?: (request: Requests.RequestCancelledBy) => Promise<Responses.EmployeeRelates>;
        RequestClosedBy?: (request: Requests.RequestClosedBy) => Promise<Responses.EmployeeRelates>;
        RequestDispatchTo?: (request: Requests.RequestDispatchTo) => Promise<Responses.EmployeeRelates>;
        RequestEditAfterClose?: (request: Requests.RequestEditAfterClose) => Promise<Responses.EmployeeRelates>;
        RequestInitiatedBy?: (request: Requests.RequestInitiatedBy) => Promise<Responses.EmployeeRelates>;
        RequestSubmitTo?: (request: Requests.RequestSubmitTo) => Promise<Responses.EmployeeRelates>;
        SearchViewCost?: (request: Requests.SearchViewCost) => Promise<Responses.EmployeeRelates>;
        TableFields?: (request: Requests.TableFields) => Promise<Responses.TableFields>;
        TaskAssignTo?: (request: Requests.TaskAssignTo) => Promise<Responses.EmployeeRelates>;
        TransferRequestedBy?: (request: Requests.TransferRequestedBy) => Promise<Responses.EmployeeRelates>;
        WorkOrderCancelledBy?: (request: Requests.WorkOrderCancelledBy) => Promise<Responses.EmployeeRelates>;
        WorkOrderClosedBy?: (request: Requests.WorkOrderClosedBy) => Promise<Responses.EmployeeRelates>;
        WorkOrderCompletedBy?: (request: Requests.WorkOrderCompletedBy) => Promise<Responses.EmployeeRelates>;
        WorkOrderEditAfterClose?: (request: Requests.WorkOrderEditAfterClose) => Promise<Responses.EmployeeRelates>;
        WorkOrderInitiatedBy?: (request: Requests.WorkOrderInitiatedBy) => Promise<Responses.EmployeeRelates>;
        WorkOrderRequestedBy?: (request: Requests.WorkOrderRequestedBy) => Promise<Responses.EmployeeRelates>;
        WorkOrderSubmitTo?: (request: Requests.WorkOrderSubmitTo) => Promise<Responses.EmployeeRelates>;
        WorkOrderSupervisors?: (request: Requests.WorkOrderSupervisors) => Promise<Responses.EmployeeRelates>;
    }
}
