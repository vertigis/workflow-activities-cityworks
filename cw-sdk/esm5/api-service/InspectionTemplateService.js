var InspectionTemplateService = /** @class */ (function () {
    function InspectionTemplateService(service) {
        this._service = service;
    }
    InspectionTemplateService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/InspectionTemplate/ByIds');
    };
    InspectionTemplateService.prototype.CreateSearchDefinition = function (request) {
        return this._service.call(request, 'Ams/InspectionTemplate/CreateSearchDefinition');
    };
    InspectionTemplateService.prototype.EntityTypes = function (request) {
        return this._service.call(request, 'Ams/InspectionTemplate/EntityTypes');
    };
    InspectionTemplateService.prototype.QA = function (request) {
        return this._service.call(request, 'Ams/InspectionTemplate/QA');
    };
    InspectionTemplateService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/InspectionTemplate/Search');
    };
    InspectionTemplateService.prototype.Templates = function (request) {
        return this._service.call(request, 'Ams/InspectionTemplate/Templates');
    };
    InspectionTemplateService.prototype.TestTypes = function (request) {
        return this._service.call(request, 'Ams/InspectionTemplate/TestTypes');
    };
    return InspectionTemplateService;
}());
export { InspectionTemplateService };
