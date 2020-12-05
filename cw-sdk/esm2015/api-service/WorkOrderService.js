export class WorkOrderService {
    constructor(service) { this._service = service; }
    AddComments(request) {
        return this._service.call(request, 'Ams/WorkOrder/AddComments');
    }
    AddEntities(request) {
        return this._service.call(request, 'Ams/WorkOrder/AddEntities');
    }
    AuditLog(request) {
        return this._service.call(request, 'Ams/WorkOrder/AuditLog');
    }
    ById(request) {
        return this._service.call(request, 'Ams/WorkOrder/ById');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/WorkOrder/ByIds');
    }
    BySid(request) {
        return this._service.call(request, 'Ams/WorkOrder/BySid');
    }
    BySids(request) {
        return this._service.call(request, 'Ams/WorkOrder/BySids');
    }
    Cancel(request) {
        return this._service.call(request, 'Ams/WorkOrder/Cancel');
    }
    Categories(request) {
        return this._service.call(request, 'Ams/WorkOrder/Categories');
    }
    ChangeCustomFieldCategory(request) {
        return this._service.call(request, 'Ams/WorkOrder/ChangeCustomFieldCategory');
    }
    Close(request) {
        return this._service.call(request, 'Ams/WorkOrder/Close');
    }
    Combine(request) {
        return this._service.call(request, 'Ams/WorkOrder/Combine');
    }
    Comments(request) {
        return this._service.call(request, 'Ams/WorkOrder/Comments');
    }
    CommentsByWorkOrderIds(request) {
        return this._service.call(request, 'Ams/WorkOrder/CommentsByWorkOrderIds');
    }
    Create(request) {
        return this._service.call(request, 'Ams/WorkOrder/Create');
    }
    CreateFromInspection(request) {
        return this._service.call(request, 'Ams/WorkOrder/CreateFromInspection');
    }
    CreateFromParent(request) {
        return this._service.call(request, 'Ams/WorkOrder/CreateFromParent');
    }
    CreateFromServiceRequest(request) {
        return this._service.call(request, 'Ams/WorkOrder/CreateFromServiceRequest');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/WorkOrder/CreateSearchDefinition');
    }
    CustomFields(request) {
        return this._service.call(request, 'Ams/WorkOrder/CustomFields');
    }
    CustomFieldsByWorkOrderSids(request) {
        return this._service.call(request, 'Ams/WorkOrder/CustomFieldsByWorkOrderSids');
    }
    CycleFrom(request) {
        return this._service.call(request, 'Ams/WorkOrder/CycleFrom');
    }
    CycleIntervals(request) {
        return this._service.call(request, 'Ams/WorkOrder/CycleIntervals');
    }
    CycleTypes(request) {
        return this._service.call(request, 'Ams/WorkOrder/CycleTypes');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/WorkOrder/Delete');
    }
    Entities(request) {
        return this._service.call(request, 'Ams/WorkOrder/Entities');
    }
    ExpenseTypes(request) {
        return this._service.call(request, 'Ams/WorkOrder/ExpenseTypes');
    }
    InstructionsByWorkOrderIds(request) {
        return this._service.call(request, 'Ams/WorkOrder/InstructionsByWorkOrderIds');
    }
    InstructionsByWorkOrderSids(request) {
        return this._service.call(request, 'Ams/WorkOrder/InstructionsByWorkOrderSids');
    }
    LinkInspections(request) {
        return this._service.call(request, 'Ams/WorkOrder/LinkInspections');
    }
    LinkServiceRequests(request) {
        return this._service.call(request, 'Ams/WorkOrder/LinkServiceRequests');
    }
    Move(request) {
        return this._service.call(request, 'Ams/WorkOrder/Move');
    }
    Priorities(request) {
        return this._service.call(request, 'Ams/WorkOrder/Priorities');
    }
    RemoveEntities(request) {
        return this._service.call(request, 'Ams/WorkOrder/RemoveEntities');
    }
    ReOpen(request) {
        return this._service.call(request, 'Ams/WorkOrder/ReOpen');
    }
    Search(request) {
        return this._service.call(request, 'Ams/WorkOrder/Search');
    }
    SearchForSids(request) {
        return this._service.call(request, 'Ams/WorkOrder/SearchForSids');
    }
    SearchObject(request) {
        return this._service.call(request, 'Ams/WorkOrder/SearchObject');
    }
    Stages(request) {
        return this._service.call(request, 'Ams/WorkOrder/Stages');
    }
    Statuses(request) {
        return this._service.call(request, 'Ams/WorkOrder/Statuses');
    }
    SubmitTos(request) {
        return this._service.call(request, 'Ams/WorkOrder/SubmitTos');
    }
    Supervisors(request) {
        return this._service.call(request, 'Ams/WorkOrder/Supervisors');
    }
    Template(request) {
        return this._service.call(request, 'Ams/WorkOrder/Template');
    }
    TemplateCustomFields(request) {
        return this._service.call(request, 'Ams/WorkOrder/TemplateCustomFields');
    }
    Templates(request) {
        return this._service.call(request, 'Ams/WorkOrder/Templates');
    }
    Uncancel(request) {
        return this._service.call(request, 'Ams/WorkOrder/Uncancel');
    }
    UnlinkInspections(request) {
        return this._service.call(request, 'Ams/WorkOrder/UnlinkInspections');
    }
    UnlinkServiceRequests(request) {
        return this._service.call(request, 'Ams/WorkOrder/UnlinkServiceRequests');
    }
    Update(request) {
        return this._service.call(request, 'Ams/WorkOrder/Update');
    }
    UpdateEntity(request) {
        return this._service.call(request, 'Ams/WorkOrder/UpdateEntity');
    }
    WorkOrderInspections(request) {
        return this._service.call(request, 'Ams/WorkOrder/WorkOrderInspections');
    }
    WorkOrderServiceRequests(request) {
        return this._service.call(request, 'Ams/WorkOrder/WorkOrderServiceRequests');
    }
    WorkOrderWorkOrders(request) {
        return this._service.call(request, 'Ams/WorkOrder/WorkOrderWorkOrders');
    }
}
