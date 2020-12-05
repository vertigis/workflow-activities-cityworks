var CrewService = /** @class */ (function () {
    function CrewService(service) {
        this._service = service;
    }
    CrewService.prototype.ByEmployee = function (request) {
        return this._service.call(request, 'Ams/Crew/ByEmployee');
    };
    CrewService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/Crew/ByIds');
    };
    CrewService.prototype.Employees = function (request) {
        return this._service.call(request, 'Ams/Crew/Employees');
    };
    CrewService.prototype.Equipment = function (request) {
        return this._service.call(request, 'Ams/Crew/Equipment');
    };
    CrewService.prototype.Material = function (request) {
        return this._service.call(request, 'Ams/Crew/Material');
    };
    return CrewService;
}());
export { CrewService };
