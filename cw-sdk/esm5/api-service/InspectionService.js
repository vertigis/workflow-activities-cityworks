var InspectionService = /** @class */ (function () {
    function InspectionService(service) {
        this._service = service;
    }
    InspectionService.prototype.AddEntity = function (request) {
        return this._service.call(request, 'Ams/Inspection/AddEntity');
    };
    InspectionService.prototype.Answers = function (request) {
        return this._service.call(request, 'Ams/Inspection/Answers');
    };
    InspectionService.prototype.AuditLog = function (request) {
        return this._service.call(request, 'Ams/Inspection/AuditLog');
    };
    InspectionService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/Inspection/ById');
    };
    InspectionService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/Inspection/ByIds');
    };
    InspectionService.prototype.ByWorkOrderIds = function (request) {
        return this._service.call(request, 'Ams/Inspection/ByWorkOrderIds');
    };
    InspectionService.prototype.Cancel = function (request) {
        return this._service.call(request, 'Ams/Inspection/Cancel');
    };
    InspectionService.prototype.Close = function (request) {
        return this._service.call(request, 'Ams/Inspection/Close');
    };
    InspectionService.prototype.Create = function (request) {
        return this._service.call(request, 'Ams/Inspection/Create');
    };
    InspectionService.prototype.CreateFromParent = function (request) {
        return this._service.call(request, 'Ams/Inspection/CreateFromParent');
    };
    InspectionService.prototype.CreateFromServiceRequest = function (request) {
        return this._service.call(request, 'Ams/Inspection/CreateFromServiceRequest');
    };
    InspectionService.prototype.CreateFromWorkOrder = function (request) {
        return this._service.call(request, 'Ams/Inspection/CreateFromWorkOrder');
    };
    InspectionService.prototype.CreateSearchDefinition = function (request) {
        return this._service.call(request, 'Ams/Inspection/CreateSearchDefinition');
    };
    InspectionService.prototype.CycleFrom = function (request) {
        return this._service.call(request, 'Ams/Inspection/CycleFrom');
    };
    InspectionService.prototype.CycleIntervals = function (request) {
        return this._service.call(request, 'Ams/Inspection/CycleIntervals');
    };
    InspectionService.prototype.CycleTypes = function (request) {
        return this._service.call(request, 'Ams/Inspection/CycleTypes');
    };
    InspectionService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/Inspection/Delete');
    };
    InspectionService.prototype.Districts = function (request) {
        return this._service.call(request, 'Ams/Inspection/Districts');
    };
    InspectionService.prototype.InspectionInspections = function (request) {
        return this._service.call(request, 'Ams/Inspection/InspectionInspections');
    };
    InspectionService.prototype.InspectionServiceRequests = function (request) {
        return this._service.call(request, 'Ams/Inspection/InspectionServiceRequests');
    };
    InspectionService.prototype.InspectionWorkOrders = function (request) {
        return this._service.call(request, 'Ams/Inspection/InspectionWorkOrders');
    };
    InspectionService.prototype.Move = function (request) {
        return this._service.call(request, 'Ams/Inspection/Move');
    };
    InspectionService.prototype.Priorities = function (request) {
        return this._service.call(request, 'Ams/Inspection/Priorities');
    };
    InspectionService.prototype.QA = function (request) {
        return this._service.call(request, 'Ams/Inspection/QA');
    };
    InspectionService.prototype.Questions = function (request) {
        return this._service.call(request, 'Ams/Inspection/Questions');
    };
    InspectionService.prototype.RemoveEntity = function (request) {
        return this._service.call(request, 'Ams/Inspection/RemoveEntity');
    };
    InspectionService.prototype.Resolutions = function (request) {
        return this._service.call(request, 'Ams/Inspection/Resolutions');
    };
    InspectionService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/Inspection/Search');
    };
    InspectionService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'Ams/Inspection/SearchObject');
    };
    InspectionService.prototype.Shops = function (request) {
        return this._service.call(request, 'Ams/Inspection/Shops');
    };
    InspectionService.prototype.Statuses = function (request) {
        return this._service.call(request, 'Ams/Inspection/Statuses');
    };
    InspectionService.prototype.SubmitTos = function (request) {
        return this._service.call(request, 'Ams/Inspection/SubmitTos');
    };
    InspectionService.prototype.Templates = function (request) {
        return this._service.call(request, 'Ams/Inspection/Templates');
    };
    InspectionService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/Inspection/Update');
    };
    return InspectionService;
}());
export { InspectionService };
