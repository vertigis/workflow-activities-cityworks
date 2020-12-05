var CaseChildObjectService = /** @class */ (function () {
    function CaseChildObjectService(service) {
        this._service = service;
    }
    CaseChildObjectService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseChildObject/ByCaObjectId');
    };
    CaseChildObjectService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseChildObject/DeleteByCaObjectId');
    };
    CaseChildObjectService.prototype.GetList = function (request) {
        return this._service.call(request, 'PLL/CaseChildObject/GetList');
    };
    CaseChildObjectService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseChildObject/Search');
    };
    CaseChildObjectService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'PLL/CaseChildObject/SearchObject');
    };
    return CaseChildObjectService;
}());
export { CaseChildObjectService };
