var CaseDataDetailService = /** @class */ (function () {
    function CaseDataDetailService(service) {
        this._service = service;
    }
    CaseDataDetailService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseDataDetail/Add');
    };
    CaseDataDetailService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseDataDetail/Search');
    };
    CaseDataDetailService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'PLL/CaseDataDetail/SearchObject');
    };
    CaseDataDetailService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/CaseDataDetail/Update');
    };
    CaseDataDetailService.prototype.UpdateLock = function (request) {
        return this._service.call(request, 'PLL/CaseDataDetail/UpdateLock');
    };
    CaseDataDetailService.prototype.WIPAdd = function (request) {
        return this._service.call(request, 'PLL/CaseDataDetail/WIPAdd');
    };
    return CaseDataDetailService;
}());
export { CaseDataDetailService };
