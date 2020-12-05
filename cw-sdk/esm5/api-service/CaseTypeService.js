var CaseTypeService = /** @class */ (function () {
    function CaseTypeService(service) {
        this._service = service;
    }
    CaseTypeService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseType/Add');
    };
    CaseTypeService.prototype.GetList = function (request) {
        return this._service.call(request, 'PLL/CaseType/GetList');
    };
    CaseTypeService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseType/Search');
    };
    CaseTypeService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'PLL/CaseType/SearchObject');
    };
    CaseTypeService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/CaseType/Update');
    };
    return CaseTypeService;
}());
export { CaseTypeService };
