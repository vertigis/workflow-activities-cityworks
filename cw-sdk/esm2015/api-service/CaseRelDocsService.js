export class CaseRelDocsService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseRelDocs/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseRelDocs/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseRelDocs/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseRelDocs/DeleteByCaObjectId');
    }
    GetStoragePreferences(request) {
        return this._service.call(request, 'PLL/CaseRelDocs/GetStoragePreferences');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseRelDocs/Search');
    }
}
