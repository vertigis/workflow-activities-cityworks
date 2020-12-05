var DepositService = /** @class */ (function () {
    function DepositService(service) {
        this._service = service;
    }
    DepositService.prototype.All = function (request) {
        return this._service.call(request, 'PLL/Deposit/All');
    };
    DepositService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/Deposit/Search');
    };
    return DepositService;
}());
export { DepositService };
