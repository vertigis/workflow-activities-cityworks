export class CaseFeesService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseFees/Add');
    }
    AddDefault(request) {
        return this._service.call(request, 'PLL/CaseFees/AddDefault');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseFees/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseFees/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseFees/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseFees/Search');
    }
}
