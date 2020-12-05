var ReadingService = /** @class */ (function () {
    function ReadingService(service) {
        this._service = service;
    }
    ReadingService.prototype.Add = function (request) {
        return this._service.call(request, 'Ams/Reading/Add');
    };
    ReadingService.prototype.ByEntity = function (request) {
        return this._service.call(request, 'Ams/Reading/ByEntity');
    };
    ReadingService.prototype.Configuration = function (request) {
        return this._service.call(request, 'Ams/Reading/Configuration');
    };
    ReadingService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/Reading/Update');
    };
    return ReadingService;
}());
export { ReadingService };
