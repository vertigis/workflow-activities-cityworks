export class InspectionService {
    constructor(service) { this._service = service; }
    AddEntity(request) {
        return this._service.call(request, 'Ams/Inspection/AddEntity');
    }
    Answers(request) {
        return this._service.call(request, 'Ams/Inspection/Answers');
    }
    AuditLog(request) {
        return this._service.call(request, 'Ams/Inspection/AuditLog');
    }
    ById(request) {
        return this._service.call(request, 'Ams/Inspection/ById');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/Inspection/ByIds');
    }
    ByWorkOrderIds(request) {
        return this._service.call(request, 'Ams/Inspection/ByWorkOrderIds');
    }
    Cancel(request) {
        return this._service.call(request, 'Ams/Inspection/Cancel');
    }
    Close(request) {
        return this._service.call(request, 'Ams/Inspection/Close');
    }
    Create(request) {
        return this._service.call(request, 'Ams/Inspection/Create');
    }
    CreateFromParent(request) {
        return this._service.call(request, 'Ams/Inspection/CreateFromParent');
    }
    CreateFromServiceRequest(request) {
        return this._service.call(request, 'Ams/Inspection/CreateFromServiceRequest');
    }
    CreateFromWorkOrder(request) {
        return this._service.call(request, 'Ams/Inspection/CreateFromWorkOrder');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/Inspection/CreateSearchDefinition');
    }
    CycleFrom(request) {
        return this._service.call(request, 'Ams/Inspection/CycleFrom');
    }
    CycleIntervals(request) {
        return this._service.call(request, 'Ams/Inspection/CycleIntervals');
    }
    CycleTypes(request) {
        return this._service.call(request, 'Ams/Inspection/CycleTypes');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/Inspection/Delete');
    }
    Districts(request) {
        return this._service.call(request, 'Ams/Inspection/Districts');
    }
    InspectionInspections(request) {
        return this._service.call(request, 'Ams/Inspection/InspectionInspections');
    }
    InspectionServiceRequests(request) {
        return this._service.call(request, 'Ams/Inspection/InspectionServiceRequests');
    }
    InspectionWorkOrders(request) {
        return this._service.call(request, 'Ams/Inspection/InspectionWorkOrders');
    }
    Move(request) {
        return this._service.call(request, 'Ams/Inspection/Move');
    }
    Priorities(request) {
        return this._service.call(request, 'Ams/Inspection/Priorities');
    }
    QA(request) {
        return this._service.call(request, 'Ams/Inspection/QA');
    }
    Questions(request) {
        return this._service.call(request, 'Ams/Inspection/Questions');
    }
    RemoveEntity(request) {
        return this._service.call(request, 'Ams/Inspection/RemoveEntity');
    }
    Resolutions(request) {
        return this._service.call(request, 'Ams/Inspection/Resolutions');
    }
    Search(request) {
        return this._service.call(request, 'Ams/Inspection/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'Ams/Inspection/SearchObject');
    }
    Shops(request) {
        return this._service.call(request, 'Ams/Inspection/Shops');
    }
    Statuses(request) {
        return this._service.call(request, 'Ams/Inspection/Statuses');
    }
    SubmitTos(request) {
        return this._service.call(request, 'Ams/Inspection/SubmitTos');
    }
    Templates(request) {
        return this._service.call(request, 'Ams/Inspection/Templates');
    }
    Update(request) {
        return this._service.call(request, 'Ams/Inspection/Update');
    }
}
