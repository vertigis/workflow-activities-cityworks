var CaseNotesService = /** @class */ (function () {
    function CaseNotesService(service) {
        this._service = service;
    }
    CaseNotesService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseNotes/Add');
    };
    CaseNotesService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseNotes/ByCaObjectId');
    };
    CaseNotesService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseNotes/Delete');
    };
    CaseNotesService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseNotes/DeleteByCaObjectId');
    };
    CaseNotesService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseNotes/Search');
    };
    return CaseNotesService;
}());
export { CaseNotesService };
