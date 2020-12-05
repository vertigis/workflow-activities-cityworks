export class EquipmentService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'Ams/Equipment/Add');
    }
    All(request) {
        return this._service.call(request, 'Ams/Equipment/All');
    }
    ById(request) {
        return this._service.call(request, 'Ams/Equipment/ById');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/Equipment/ByIds');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/Equipment/Delete');
    }
    Search(request) {
        return this._service.call(request, 'Ams/Equipment/Search');
    }
    Update(request) {
        return this._service.call(request, 'Ams/Equipment/Update');
    }
}
