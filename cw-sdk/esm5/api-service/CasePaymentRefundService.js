var CasePaymentRefundService = /** @class */ (function () {
    function CasePaymentRefundService(service) {
        this._service = service;
    }
    CasePaymentRefundService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CasePaymentRefund/Add');
    };
    CasePaymentRefundService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CasePaymentRefund/Delete');
    };
    CasePaymentRefundService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CasePaymentRefund/Search');
    };
    CasePaymentRefundService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/CasePaymentRefund/Update');
    };
    return CasePaymentRefundService;
}());
export { CasePaymentRefundService };
