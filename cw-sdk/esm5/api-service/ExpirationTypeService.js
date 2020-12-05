var ExpirationTypeService = /** @class */ (function () {
    function ExpirationTypeService(service) {
        this._service = service;
    }
    ExpirationTypeService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/ExpirationType/Add');
    };
    return ExpirationTypeService;
}());
export { ExpirationTypeService };
