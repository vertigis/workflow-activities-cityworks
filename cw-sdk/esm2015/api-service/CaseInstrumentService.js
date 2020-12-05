export class CaseInstrumentService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseInstrument/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseInstrument/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseInstrument/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseInstrument/DeleteByCaObjectId');
    }
    GetList(request) {
        return this._service.call(request, 'PLL/CaseInstrument/GetList');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseInstrument/Search');
    }
}
