var AppDataService = /** @class */ (function () {
    function AppDataService(service) {
        this._service = service;
    }
    AppDataService.prototype.CurrentLocation = function (request) {
        return this._service.call(request, 'General/AppData/CurrentLocation');
    };
    AppDataService.prototype.SelectedEntities = function (request) {
        return this._service.call(request, 'General/AppData/SelectedEntities');
    };
    return AppDataService;
}());
export { AppDataService };
