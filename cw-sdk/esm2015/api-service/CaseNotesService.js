export class CaseNotesService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseNotes/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseNotes/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseNotes/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseNotes/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseNotes/Search');
    }
}
