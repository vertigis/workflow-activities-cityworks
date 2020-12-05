var WorkOrderEntityService = /** @class */ (function () {
    function WorkOrderEntityService(service) {
        this._service = service;
    }
    WorkOrderEntityService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/WorkOrderEntity/ByIds');
    };
    WorkOrderEntityService.prototype.CreateSearchDefinition = function (request) {
        return this._service.call(request, 'Ams/WorkOrderEntity/CreateSearchDefinition');
    };
    WorkOrderEntityService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/WorkOrderEntity/Search');
    };
    return WorkOrderEntityService;
}());
export { WorkOrderEntityService };
