var CustomerAccountService = /** @class */ (function () {
    function CustomerAccountService(service) {
        this._service = service;
    }
    CustomerAccountService.prototype.Add = function (request) {
        return this._service.call(request, 'Ams/CustomerAccount/Add');
    };
    CustomerAccountService.prototype.ByAccountNumbers = function (request) {
        return this._service.call(request, 'Ams/CustomerAccount/ByAccountNumbers');
    };
    CustomerAccountService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/CustomerAccount/ByIds');
    };
    CustomerAccountService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/CustomerAccount/Delete');
    };
    CustomerAccountService.prototype.Import = function (request) {
        return this._service.call(request, 'Ams/CustomerAccount/Import');
    };
    CustomerAccountService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/CustomerAccount/Search');
    };
    CustomerAccountService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/CustomerAccount/Update');
    };
    return CustomerAccountService;
}());
export { CustomerAccountService };
