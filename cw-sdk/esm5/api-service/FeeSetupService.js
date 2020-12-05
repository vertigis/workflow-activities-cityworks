var FeeSetupService = /** @class */ (function () {
    function FeeSetupService(service) {
        this._service = service;
    }
    FeeSetupService.prototype.All = function (request) {
        return this._service.call(request, 'PLL/FeeSetup/All');
    };
    FeeSetupService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/FeeSetup/Search');
    };
    return FeeSetupService;
}());
export { FeeSetupService };
