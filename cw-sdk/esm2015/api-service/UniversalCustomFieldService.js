export class UniversalCustomFieldService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Add');
    }
    ById(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/ById');
    }
    ByType(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/ByType');
    }
    Contract(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Contract');
    }
    CustomerCall(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/CustomerCall');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Delete');
    }
    Inspection(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Inspection');
    }
    MoveField(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/MoveField');
    }
    ServiceRequest(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/ServiceRequest');
    }
    Update(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Update');
    }
    WorkOrder(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/WorkOrder');
    }
}
