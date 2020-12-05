var WorkOrderTemplateService = /** @class */ (function () {
    function WorkOrderTemplateService(service) {
        this._service = service;
    }
    WorkOrderTemplateService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/ByIds');
    };
    WorkOrderTemplateService.prototype.ByProblemSids = function (request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/ByProblemSids');
    };
    WorkOrderTemplateService.prototype.CustomFieldCategories = function (request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/CustomFieldCategories');
    };
    WorkOrderTemplateService.prototype.CustomFields = function (request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/CustomFields');
    };
    WorkOrderTemplateService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/Search');
    };
    WorkOrderTemplateService.prototype.TemplateInspections = function (request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/TemplateInspections');
    };
    WorkOrderTemplateService.prototype.TemplateNames = function (request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/TemplateNames');
    };
    return WorkOrderTemplateService;
}());
export { WorkOrderTemplateService };
