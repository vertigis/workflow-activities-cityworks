var CaseViolationsService = /** @class */ (function () {
    function CaseViolationsService(service) {
        this._service = service;
    }
    CaseViolationsService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseViolations/Add');
    };
    CaseViolationsService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseViolations/ByCaObjectId');
    };
    CaseViolationsService.prototype.ByCaObjectIds = function (request) {
        return this._service.call(request, 'PLL/CaseViolations/ByCaObjectIds');
    };
    CaseViolationsService.prototype.ByIds = function (request) {
        return this._service.call(request, 'PLL/CaseViolations/ByIds');
    };
    CaseViolationsService.prototype.CompleteViolations = function (request) {
        return this._service.call(request, 'PLL/CaseViolations/CompleteViolations');
    };
    CaseViolationsService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseViolations/Delete');
    };
    CaseViolationsService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseViolations/DeleteByCaObjectId');
    };
    CaseViolationsService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseViolations/Search');
    };
    return CaseViolationsService;
}());
export { CaseViolationsService };
