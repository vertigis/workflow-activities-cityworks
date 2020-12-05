var CaseAddressService = /** @class */ (function () {
    function CaseAddressService(service) {
        this._service = service;
    }
    CaseAddressService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseAddress/Add');
    };
    CaseAddressService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseAddress/ByCaObjectId');
    };
    CaseAddressService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseAddress/Delete');
    };
    CaseAddressService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseAddress/DeleteByCaObjectId');
    };
    CaseAddressService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseAddress/Search');
    };
    CaseAddressService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'PLL/CaseAddress/SearchObject');
    };
    return CaseAddressService;
}());
export { CaseAddressService };
