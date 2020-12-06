import { IApiService } from './i-api-service';
import { WorkOrderServiceTypes as SvcDef } from '../api-interface/WorkOrderService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IWorkOrderService = SvcDef.IWorkOrderService;
export declare class WorkOrderService implements IWorkOrderService {
    private _service;
    constructor(service: IApiService);
    AddComments(request: Requests.AddComments): Promise<Responses.AddComments>;
    AddEntities(request: Requests.AddEntities): Promise<Responses.AddEntities>;
    AuditLog(request: Requests.AuditLog): Promise<Responses.AuditLog>;
    ById(request: Requests.ById): Promise<Responses.ById>;
    ByIds(request: Requests.ByIds): Promise<Responses.ByIds>;
    BySid(request: Requests.BySid): Promise<Responses.BySid>;
    BySids(request: Requests.BySids): Promise<Responses.BySids>;
    Cancel(request: Requests.Cancel): Promise<Responses.Cancel>;
    Categories(request: Requests.Categories): Promise<Responses.Categories>;
    ChangeCustomFieldCategory(request: Requests.ChangeCustomFieldCategory): Promise<Responses.ChangeCustomFieldCategory>;
    Close(request: Requests.Close): Promise<Responses.Close>;
    Combine(request: Requests.Combine): Promise<Responses.Combine>;
    Comments(request: Requests.Comments): Promise<Responses.Comments>;
    CommentsByWorkOrderIds(request: Requests.CommentsByWorkOrderIds): Promise<Responses.CommentsByWorkOrderIds>;
    Create(request: Requests.Create): Promise<Responses.Create>;
    CreateFromInspection(request: Requests.CreateFromInspection): Promise<Responses.CreateFromInspection>;
    CreateFromParent(request: Requests.CreateFromParent): Promise<Responses.CreateFromParent>;
    CreateFromServiceRequest(request: Requests.CreateFromServiceRequest): Promise<Responses.CreateFromServiceRequest>;
    CreateSearchDefinition(request: Requests.CreateSearchDefinition): Promise<Responses.CreateSearchDefinition>;
    CustomFields(request: Requests.CustomFields): Promise<Responses.CustomFields>;
    CustomFieldsByWorkOrderSids(request: Requests.CustomFieldsByWorkOrderSids): Promise<Responses.CustomFieldsByWorkOrderSids>;
    CycleFrom(request: Requests.CycleFrom): Promise<Responses.CycleFrom>;
    CycleIntervals(request: Requests.CycleIntervals): Promise<Responses.CycleIntervals>;
    CycleTypes(request: Requests.CycleTypes): Promise<Responses.CycleTypes>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    Entities(request: Requests.Entities): Promise<Responses.Entities>;
    ExpenseTypes(request: Requests.ExpenseTypes): Promise<Responses.ExpenseTypes>;
    InstructionsByWorkOrderIds(request: Requests.InstructionsByWorkOrderIds): Promise<Responses.InstructionsByWorkOrderIds>;
    InstructionsByWorkOrderSids(request: Requests.InstructionsByWorkOrderSids): Promise<Responses.InstructionsByWorkOrderSids>;
    LinkInspections(request: Requests.LinkInspections): Promise<Responses.LinkInspections>;
    LinkServiceRequests(request: Requests.LinkServiceRequests): Promise<Responses.LinkServiceRequests>;
    Move(request: Requests.Move): Promise<Responses.Move>;
    Priorities(request: Requests.Priorities): Promise<Responses.Priorities>;
    RemoveEntities(request: Requests.RemoveEntities): Promise<Responses.RemoveEntities>;
    ReOpen(request: Requests.ReOpen): Promise<Responses.ReOpen>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    SearchForSids(request: Requests.SearchForSids): Promise<Responses.SearchForSids>;
    SearchObject(request: Requests.SearchObject): Promise<Responses.SearchObject>;
    Stages(request: Requests.Stages): Promise<Responses.Stages>;
    Statuses(request: Requests.Statuses): Promise<Responses.Statuses>;
    SubmitTos(request: Requests.SubmitTos): Promise<Responses.SubmitTos>;
    Supervisors(request: Requests.Supervisors): Promise<Responses.Supervisors>;
    Template(request: Requests.Template): Promise<Responses.Template>;
    TemplateCustomFields(request: Requests.TemplateCustomFields): Promise<Responses.TemplateCustomFields>;
    Templates(request: Requests.Templates): Promise<Responses.Templates>;
    Uncancel(request: Requests.Uncancel): Promise<Responses.Uncancel>;
    UnlinkInspections(request: Requests.UnlinkInspections): Promise<Responses.UnlinkInspections>;
    UnlinkServiceRequests(request: Requests.UnlinkServiceRequests): Promise<Responses.UnlinkServiceRequests>;
    Update(request: Requests.Update): Promise<Responses.Update>;
    UpdateEntity(request: Requests.UpdateEntity): Promise<Responses.UpdateEntity>;
    WorkOrderInspections(request: Requests.WorkOrderInspections): Promise<Responses.WorkOrderInspections>;
    WorkOrderServiceRequests(request: Requests.WorkOrderServiceRequests): Promise<Responses.WorkOrderServiceRequests>;
    WorkOrderWorkOrders(request: Requests.WorkOrderWorkOrders): Promise<Responses.WorkOrderWorkOrders>;
}