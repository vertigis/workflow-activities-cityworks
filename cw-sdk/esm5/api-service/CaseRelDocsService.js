var CaseRelDocsService = /** @class */ (function () {
    function CaseRelDocsService(service) {
        this._service = service;
    }
    CaseRelDocsService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseRelDocs/Add');
    };
    CaseRelDocsService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseRelDocs/ByCaObjectId');
    };
    CaseRelDocsService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseRelDocs/Delete');
    };
    CaseRelDocsService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseRelDocs/DeleteByCaObjectId');
    };
    CaseRelDocsService.prototype.GetStoragePreferences = function (request) {
        return this._service.call(request, 'PLL/CaseRelDocs/GetStoragePreferences');
    };
    CaseRelDocsService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseRelDocs/Search');
    };
    return CaseRelDocsService;
}());
export { CaseRelDocsService };
