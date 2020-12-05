var CaseFeesService = /** @class */ (function () {
    function CaseFeesService(service) {
        this._service = service;
    }
    CaseFeesService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseFees/Add');
    };
    CaseFeesService.prototype.AddDefault = function (request) {
        return this._service.call(request, 'PLL/CaseFees/AddDefault');
    };
    CaseFeesService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseFees/ByCaObjectId');
    };
    CaseFeesService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseFees/Delete');
    };
    CaseFeesService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseFees/DeleteByCaObjectId');
    };
    CaseFeesService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseFees/Search');
    };
    return CaseFeesService;
}());
export { CaseFeesService };
