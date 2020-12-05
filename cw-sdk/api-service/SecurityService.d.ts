import { IApiService } from './i-api-service';
import { SecurityServiceTypes as SvcDef } from '../api-interface/SecurityService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ISecurityService = SvcDef.ISecurityService;
export declare class SecurityService implements ISecurityService {
    private _service;
    constructor(service: IApiService);
    Contract(request: Requests.Contract): Promise<Responses.Contract>;
    Contracts(request: Requests.Contracts): Promise<Responses.Contracts>;
    Employee(request: Requests.Employee): Promise<Responses.Employee>;
    Inspection(request: Requests.Inspection): Promise<Responses.Inspection>;
    Inspections(request: Requests.Inspections): Promise<Responses.Inspections>;
    InspectionTemplate(request: Requests.InspectionTemplate): Promise<Responses.InspectionTemplate>;
    InspectionTemplates(request: Requests.InspectionTemplates): Promise<Responses.InspectionTemplates>;
    Problem(request: Requests.Problem): Promise<Responses.Problem>;
    Problems(request: Requests.Problems): Promise<Responses.Problems>;
    Projects(request: Requests.Projects): Promise<Responses.Projects>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    ServiceRequest(request: Requests.ServiceRequest): Promise<Responses.ServiceRequest>;
    ServiceRequests(request: Requests.ServiceRequests): Promise<Responses.ServiceRequests>;
    WorkOrder(request: Requests.WorkOrder): Promise<Responses.WorkOrder>;
    WorkOrderBySid(request: Requests.WorkOrderBySid): Promise<Responses.WorkOrderBySid>;
    WorkOrders(request: Requests.WorkOrders): Promise<Responses.WorkOrders>;
    WorkOrderTemplate(request: Requests.WorkOrderTemplate): Promise<Responses.WorkOrderTemplate>;
}
