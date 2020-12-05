export class ContractorService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'Ams/Contractor/Add');
    }
    AddKeywords(request) {
        return this._service.call(request, 'Ams/Contractor/AddKeywords');
    }
    All(request) {
        return this._service.call(request, 'Ams/Contractor/All');
    }
    ById(request) {
        return this._service.call(request, 'Ams/Contractor/ById');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/Contractor/Delete');
    }
    DeleteKeywords(request) {
        return this._service.call(request, 'Ams/Contractor/DeleteKeywords');
    }
    Keywords(request) {
        return this._service.call(request, 'Ams/Contractor/Keywords');
    }
    Search(request) {
        return this._service.call(request, 'Ams/Contractor/Search');
    }
    Update(request) {
        return this._service.call(request, 'Ams/Contractor/Update');
    }
}
