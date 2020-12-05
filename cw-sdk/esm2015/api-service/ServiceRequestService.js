export class ServiceRequestService {
    constructor(service) { this._service = service; }
    AddComments(request) {
        return this._service.call(request, 'Ams/ServiceRequest/AddComments');
    }
    AllStreetCode(request) {
        return this._service.call(request, 'Ams/ServiceRequest/AllStreetCode');
    }
    AuditLog(request) {
        return this._service.call(request, 'Ams/ServiceRequest/AuditLog');
    }
    ById(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ById');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ByIds');
    }
    ByIncidentAndEmail(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ByIncidentAndEmail');
    }
    ByOtherSystemId(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ByOtherSystemId');
    }
    Cancel(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Cancel');
    }
    ChangeCustomFieldCategory(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ChangeCustomFieldCategory');
    }
    ChangeProblem(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ChangeProblem');
    }
    Close(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Close');
    }
    Combine(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Combine');
    }
    Comments(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Comments');
    }
    CommentsByRequestIds(request) {
        return this._service.call(request, 'Ams/ServiceRequest/CommentsByRequestIds');
    }
    Create(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Create');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/ServiceRequest/CreateSearchDefinition');
    }
    CustomFieldCategories(request) {
        return this._service.call(request, 'Ams/ServiceRequest/CustomFieldCategories');
    }
    CustomFields(request) {
        return this._service.call(request, 'Ams/ServiceRequest/CustomFields');
    }
    DefaultStatus(request) {
        return this._service.call(request, 'Ams/ServiceRequest/DefaultStatus');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Delete');
    }
    DispatchTo(request) {
        return this._service.call(request, 'Ams/ServiceRequest/DispatchTo');
    }
    LinkCases(request) {
        return this._service.call(request, 'Ams/ServiceRequest/LinkCases');
    }
    LinkInspections(request) {
        return this._service.call(request, 'Ams/ServiceRequest/LinkInspections');
    }
    LinkWorkOrders(request) {
        return this._service.call(request, 'Ams/ServiceRequest/LinkWorkOrders');
    }
    Move(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Move');
    }
    Priorities(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Priorities');
    }
    ProblemLeafByOtherSysCodeDescs(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ProblemLeafByOtherSysCodeDescs');
    }
    ProblemLeafBySid(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ProblemLeafBySid');
    }
    ProblemNodes(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ProblemNodes');
    }
    Problems(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Problems');
    }
    ProblemsByKeywords(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ProblemsByKeywords');
    }
    QA(request) {
        return this._service.call(request, 'Ams/ServiceRequest/QA');
    }
    Reopen(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Reopen');
    }
    RequestInspections(request) {
        return this._service.call(request, 'Ams/ServiceRequest/RequestInspections');
    }
    RequestWorkOrders(request) {
        return this._service.call(request, 'Ams/ServiceRequest/RequestWorkOrders');
    }
    Search(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'Ams/ServiceRequest/SearchObject');
    }
    Statuses(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Statuses');
    }
    SubmitTo(request) {
        return this._service.call(request, 'Ams/ServiceRequest/SubmitTo');
    }
    TemplateCustomFields(request) {
        return this._service.call(request, 'Ams/ServiceRequest/TemplateCustomFields');
    }
    Uncancel(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Uncancel');
    }
    UnlinkInspections(request) {
        return this._service.call(request, 'Ams/ServiceRequest/UnlinkInspections');
    }
    UnlinkWorkOrders(request) {
        return this._service.call(request, 'Ams/ServiceRequest/UnlinkWorkOrders');
    }
    Update(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Update');
    }
}
