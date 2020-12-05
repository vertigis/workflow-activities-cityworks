var ServiceRequestTemplateService = /** @class */ (function () {
    function ServiceRequestTemplateService(service) {
        this._service = service;
    }
    ServiceRequestTemplateService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/ByIds');
    };
    ServiceRequestTemplateService.prototype.CreateSearchDefinition = function (request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/CreateSearchDefinition');
    };
    ServiceRequestTemplateService.prototype.QA = function (request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/QA');
    };
    ServiceRequestTemplateService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/Search');
    };
    ServiceRequestTemplateService.prototype.Templates = function (request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/Templates');
    };
    ServiceRequestTemplateService.prototype.WorkOrderTemplates = function (request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/WorkOrderTemplates');
    };
    return ServiceRequestTemplateService;
}());
export { ServiceRequestTemplateService };
