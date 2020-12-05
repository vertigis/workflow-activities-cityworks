var ServiceRequestService = /** @class */ (function () {
    function ServiceRequestService(service) {
        this._service = service;
    }
    ServiceRequestService.prototype.AddComments = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/AddComments');
    };
    ServiceRequestService.prototype.AllStreetCode = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/AllStreetCode');
    };
    ServiceRequestService.prototype.AuditLog = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/AuditLog');
    };
    ServiceRequestService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ById');
    };
    ServiceRequestService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ByIds');
    };
    ServiceRequestService.prototype.ByIncidentAndEmail = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ByIncidentAndEmail');
    };
    ServiceRequestService.prototype.ByOtherSystemId = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ByOtherSystemId');
    };
    ServiceRequestService.prototype.Cancel = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Cancel');
    };
    ServiceRequestService.prototype.ChangeCustomFieldCategory = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ChangeCustomFieldCategory');
    };
    ServiceRequestService.prototype.ChangeProblem = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ChangeProblem');
    };
    ServiceRequestService.prototype.Close = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Close');
    };
    ServiceRequestService.prototype.Combine = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Combine');
    };
    ServiceRequestService.prototype.Comments = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Comments');
    };
    ServiceRequestService.prototype.CommentsByRequestIds = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/CommentsByRequestIds');
    };
    ServiceRequestService.prototype.Create = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Create');
    };
    ServiceRequestService.prototype.CreateSearchDefinition = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/CreateSearchDefinition');
    };
    ServiceRequestService.prototype.CustomFieldCategories = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/CustomFieldCategories');
    };
    ServiceRequestService.prototype.CustomFields = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/CustomFields');
    };
    ServiceRequestService.prototype.DefaultStatus = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/DefaultStatus');
    };
    ServiceRequestService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Delete');
    };
    ServiceRequestService.prototype.DispatchTo = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/DispatchTo');
    };
    ServiceRequestService.prototype.LinkCases = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/LinkCases');
    };
    ServiceRequestService.prototype.LinkInspections = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/LinkInspections');
    };
    ServiceRequestService.prototype.LinkWorkOrders = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/LinkWorkOrders');
    };
    ServiceRequestService.prototype.Move = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Move');
    };
    ServiceRequestService.prototype.Priorities = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Priorities');
    };
    ServiceRequestService.prototype.ProblemLeafByOtherSysCodeDescs = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ProblemLeafByOtherSysCodeDescs');
    };
    ServiceRequestService.prototype.ProblemLeafBySid = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ProblemLeafBySid');
    };
    ServiceRequestService.prototype.ProblemNodes = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ProblemNodes');
    };
    ServiceRequestService.prototype.Problems = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Problems');
    };
    ServiceRequestService.prototype.ProblemsByKeywords = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ProblemsByKeywords');
    };
    ServiceRequestService.prototype.QA = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/QA');
    };
    ServiceRequestService.prototype.Reopen = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Reopen');
    };
    ServiceRequestService.prototype.RequestInspections = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/RequestInspections');
    };
    ServiceRequestService.prototype.RequestWorkOrders = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/RequestWorkOrders');
    };
    ServiceRequestService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Search');
    };
    ServiceRequestService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/SearchObject');
    };
    ServiceRequestService.prototype.Statuses = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Statuses');
    };
    ServiceRequestService.prototype.SubmitTo = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/SubmitTo');
    };
    ServiceRequestService.prototype.TemplateCustomFields = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/TemplateCustomFields');
    };
    ServiceRequestService.prototype.Uncancel = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Uncancel');
    };
    ServiceRequestService.prototype.UnlinkInspections = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/UnlinkInspections');
    };
    ServiceRequestService.prototype.UnlinkWorkOrders = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/UnlinkWorkOrders');
    };
    ServiceRequestService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Update');
    };
    return ServiceRequestService;
}());
export { ServiceRequestService };
