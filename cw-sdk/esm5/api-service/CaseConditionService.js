var CaseConditionService = /** @class */ (function () {
    function CaseConditionService(service) {
        this._service = service;
    }
    CaseConditionService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseCondition/Add');
    };
    CaseConditionService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseCondition/ByCaObjectId');
    };
    CaseConditionService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseCondition/DeleteByCaObjectId');
    };
    CaseConditionService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseCondition/Search');
    };
    CaseConditionService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'PLL/CaseCondition/SearchObject');
    };
    return CaseConditionService;
}());
export { CaseConditionService };
