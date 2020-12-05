var CaseObjectService = /** @class */ (function () {
    function CaseObjectService(service) {
        this._service = service;
    }
    CaseObjectService.prototype.ByIds = function (request) {
        return this._service.call(request, 'PLL/CaseObject/ByIds');
    };
    CaseObjectService.prototype.CreateCaseFromServiceRequest = function (request) {
        return this._service.call(request, 'PLL/CaseObject/CreateCaseFromServiceRequest');
    };
    CaseObjectService.prototype.DeleteCase = function (request) {
        return this._service.call(request, 'PLL/CaseObject/DeleteCase');
    };
    CaseObjectService.prototype.Move = function (request) {
        return this._service.call(request, 'PLL/CaseObject/Move');
    };
    CaseObjectService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseObject/Search');
    };
    return CaseObjectService;
}());
export { CaseObjectService };
