var CaseDataListValuesService = /** @class */ (function () {
    function CaseDataListValuesService(service) {
        this._service = service;
    }
    CaseDataListValuesService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseDataListValues/Add');
    };
    CaseDataListValuesService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseDataListValues/Delete');
    };
    CaseDataListValuesService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseDataListValues/Search');
    };
    CaseDataListValuesService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'PLL/CaseDataListValues/SearchObject');
    };
    return CaseDataListValuesService;
}());
export { CaseDataListValuesService };
