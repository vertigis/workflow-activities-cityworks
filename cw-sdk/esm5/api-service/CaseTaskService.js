var CaseTaskService = /** @class */ (function () {
    function CaseTaskService(service) {
        this._service = service;
    }
    CaseTaskService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseTask/Add');
    };
    CaseTaskService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseTask/ByCaObjectId');
    };
    CaseTaskService.prototype.ByIds = function (request) {
        return this._service.call(request, 'PLL/CaseTask/ByIds');
    };
    CaseTaskService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseTask/Delete');
    };
    CaseTaskService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseTask/DeleteByCaObjectId');
    };
    CaseTaskService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseTask/Search');
    };
    CaseTaskService.prototype.SetResult = function (request) {
        return this._service.call(request, 'PLL/CaseTask/SetResult');
    };
    CaseTaskService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/CaseTask/Update');
    };
    return CaseTaskService;
}());
export { CaseTaskService };
