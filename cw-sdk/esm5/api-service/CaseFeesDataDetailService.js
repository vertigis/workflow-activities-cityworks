var CaseFeesDataDetailService = /** @class */ (function () {
    function CaseFeesDataDetailService(service) {
        this._service = service;
    }
    CaseFeesDataDetailService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseFeesDataDetail/Add');
    };
    CaseFeesDataDetailService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseFeesDataDetail/Delete');
    };
    CaseFeesDataDetailService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseFeesDataDetail/Search');
    };
    return CaseFeesDataDetailService;
}());
export { CaseFeesDataDetailService };
