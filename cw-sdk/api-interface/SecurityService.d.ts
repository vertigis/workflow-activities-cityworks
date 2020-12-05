import { WorkOrderTemplateSecurity } from '../core/types/WorkOrderTemplateSecurity';
import { WorkOrderSecurity } from '../core/types/WorkOrderSecurity';
import { ServiceRequestSecurity } from '../core/types/ServiceRequestSecurity';
import { SearchSecurity } from '../core/types/SearchSecurity';
import { ProjectSecurity } from '../core/types/ProjectSecurity';
import { ProblemSecurity } from '../core/types/ProblemSecurity';
import { InspectionTemplateSecurity } from '../core/types/InspectionTemplateSecurity';
import { InspectionSecurity } from '../core/types/InspectionSecurity';
import { EmployeeSecurity } from '../core/types/EmployeeSecurity';
import { ContractSecurity } from '../core/types/ContractSecurity';
import { ServiceTypes } from '../core/service-types';
export declare namespace SecurityServiceTypes {
    namespace Requests {
        interface Contract extends ServiceTypes.CoreRequestBase {
            ContractId: number;
        }
        interface Contracts extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        interface Employee extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
        }
        interface Inspection extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
        }
        interface Inspections extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        interface InspectionTemplate extends ServiceTypes.CoreRequestBase {
            InspTemplateId: number;
        }
        interface InspectionTemplates extends ServiceTypes.CoreRequestBase {
            InspTemplateIds: number[];
        }
        interface Problem extends ServiceTypes.CoreRequestBase {
            ProblemSid: number;
        }
        interface Problems extends ServiceTypes.CoreRequestBase {
            ProblemSids: number[];
        }
        interface Projects extends ServiceTypes.CoreRequestBase {
            ProjectIds?: number[];
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
        }
        interface ServiceRequest extends ServiceTypes.CoreRequestBase {
            RequestId: number;
        }
        interface ServiceRequests extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        interface WorkOrder extends ServiceTypes.CoreRequestBase {
            WorkOrderId: string;
        }
        interface WorkOrderBySid extends ServiceTypes.CoreRequestBase {
            WorkOrderSid: number;
        }
        interface WorkOrders extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        interface WorkOrderTemplate extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            WOTemplateId: string;
        }
    }
    namespace Responses {
        interface Contract extends ServiceTypes.CoreResponseBase_<ContractSecurity> {
        }
        interface Contracts extends ServiceTypes.CoreResponseBase_<ContractSecurity[]> {
        }
        interface Employee extends ServiceTypes.CoreResponseBase_<EmployeeSecurity[]> {
        }
        interface Inspection extends ServiceTypes.CoreResponseBase_<InspectionSecurity> {
        }
        interface Inspections extends ServiceTypes.CoreResponseBase_<InspectionSecurity[]> {
        }
        interface InspectionTemplate extends ServiceTypes.CoreResponseBase_<InspectionTemplateSecurity> {
        }
        interface InspectionTemplates extends ServiceTypes.CoreResponseBase_<InspectionTemplateSecurity[]> {
        }
        interface Problem extends ServiceTypes.CoreResponseBase_<ProblemSecurity> {
        }
        interface Problems extends ServiceTypes.CoreResponseBase_<ProblemSecurity[]> {
        }
        interface Projects extends ServiceTypes.CoreResponseBase_<ProjectSecurity[]> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_<SearchSecurity> {
        }
        interface ServiceRequest extends ServiceTypes.CoreResponseBase_<ServiceRequestSecurity> {
        }
        interface ServiceRequests extends ServiceTypes.CoreResponseBase_<ServiceRequestSecurity[]> {
        }
        interface WorkOrder extends ServiceTypes.CoreResponseBase_<WorkOrderSecurity> {
        }
        interface WorkOrderBySid extends ServiceTypes.CoreResponseBase_<WorkOrderSecurity> {
        }
        interface WorkOrders extends ServiceTypes.CoreResponseBase_<WorkOrderSecurity[]> {
        }
        interface WorkOrderTemplate extends ServiceTypes.CoreResponseBase_<WorkOrderTemplateSecurity> {
        }
    }
    interface ISecurityService {
        Contract?: (request: Requests.Contract) => Promise<Responses.Contract>;
        Contracts?: (request: Requests.Contracts) => Promise<Responses.Contracts>;
        Employee?: (request: Requests.Employee) => Promise<Responses.Employee>;
        Inspection?: (request: Requests.Inspection) => Promise<Responses.Inspection>;
        Inspections?: (request: Requests.Inspections) => Promise<Responses.Inspections>;
        InspectionTemplate?: (request: Requests.InspectionTemplate) => Promise<Responses.InspectionTemplate>;
        InspectionTemplates?: (request: Requests.InspectionTemplates) => Promise<Responses.InspectionTemplates>;
        Problem?: (request: Requests.Problem) => Promise<Responses.Problem>;
        Problems?: (request: Requests.Problems) => Promise<Responses.Problems>;
        Projects?: (request: Requests.Projects) => Promise<Responses.Projects>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        ServiceRequest?: (request: Requests.ServiceRequest) => Promise<Responses.ServiceRequest>;
        ServiceRequests?: (request: Requests.ServiceRequests) => Promise<Responses.ServiceRequests>;
        WorkOrder?: (request: Requests.WorkOrder) => Promise<Responses.WorkOrder>;
        WorkOrderBySid?: (request: Requests.WorkOrderBySid) => Promise<Responses.WorkOrderBySid>;
        WorkOrders?: (request: Requests.WorkOrders) => Promise<Responses.WorkOrders>;
        WorkOrderTemplate?: (request: Requests.WorkOrderTemplate) => Promise<Responses.WorkOrderTemplate>;
    }
}
