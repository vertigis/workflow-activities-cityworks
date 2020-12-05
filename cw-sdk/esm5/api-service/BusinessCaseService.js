var BusinessCaseService = /** @class */ (function () {
    function BusinessCaseService(service) {
        this._service = service;
    }
    BusinessCaseService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/BusinessCase/Add');
    };
    BusinessCaseService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/BusinessCase/Update');
    };
    return BusinessCaseService;
}());
export { BusinessCaseService };
