var EventLayerService = /** @class */ (function () {
    function EventLayerService(service) {
        this._service = service;
    }
    EventLayerService.prototype.All = function (request) {
        return this._service.call(request, 'Ams/EventLayer/All');
    };
    EventLayerService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/EventLayer/ById');
    };
    return EventLayerService;
}());
export { EventLayerService };
