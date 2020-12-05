var CaseFlagsService = /** @class */ (function () {
    function CaseFlagsService(service) {
        this._service = service;
    }
    CaseFlagsService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseFlags/Add');
    };
    CaseFlagsService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseFlags/ByCaObjectId');
    };
    CaseFlagsService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseFlags/Delete');
    };
    CaseFlagsService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseFlags/DeleteByCaObjectId');
    };
    CaseFlagsService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseFlags/Search');
    };
    return CaseFlagsService;
}());
export { CaseFlagsService };
