var CaseDepositService = /** @class */ (function () {
    function CaseDepositService(service) {
        this._service = service;
    }
    CaseDepositService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseDeposit/Add');
    };
    CaseDepositService.prototype.AddDefault = function (request) {
        return this._service.call(request, 'PLL/CaseDeposit/AddDefault');
    };
    CaseDepositService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseDeposit/ByCaObjectId');
    };
    CaseDepositService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseDeposit/Delete');
    };
    CaseDepositService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseDeposit/DeleteByCaObjectId');
    };
    CaseDepositService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseDeposit/Search');
    };
    return CaseDepositService;
}());
export { CaseDepositService };
