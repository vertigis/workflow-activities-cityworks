var CaseInstrumentService = /** @class */ (function () {
    function CaseInstrumentService(service) {
        this._service = service;
    }
    CaseInstrumentService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseInstrument/Add');
    };
    CaseInstrumentService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseInstrument/ByCaObjectId');
    };
    CaseInstrumentService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseInstrument/Delete');
    };
    CaseInstrumentService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseInstrument/DeleteByCaObjectId');
    };
    CaseInstrumentService.prototype.GetList = function (request) {
        return this._service.call(request, 'PLL/CaseInstrument/GetList');
    };
    CaseInstrumentService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseInstrument/Search');
    };
    return CaseInstrumentService;
}());
export { CaseInstrumentService };
