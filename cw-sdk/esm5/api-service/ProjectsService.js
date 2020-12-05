var ProjectsService = /** @class */ (function () {
    function ProjectsService(service) {
        this._service = service;
    }
    ProjectsService.prototype.ByContractIds = function (request) {
        return this._service.call(request, 'Ams/Projects/ByContractIds');
    };
    ProjectsService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/Projects/ByIds');
    };
    ProjectsService.prototype.Create = function (request) {
        return this._service.call(request, 'Ams/Projects/Create');
    };
    ProjectsService.prototype.CreateSearchDefinition = function (request) {
        return this._service.call(request, 'Ams/Projects/CreateSearchDefinition');
    };
    ProjectsService.prototype.QuickView = function (request) {
        return this._service.call(request, 'Ams/Projects/QuickView');
    };
    ProjectsService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/Projects/Search');
    };
    ProjectsService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/Projects/Update');
    };
    return ProjectsService;
}());
export { ProjectsService };
