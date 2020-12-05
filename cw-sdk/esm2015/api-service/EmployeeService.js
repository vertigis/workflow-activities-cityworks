export class EmployeeService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'Ams/Employee/Add');
    }
    AddLicensedItems(request) {
        return this._service.call(request, 'Ams/Employee/AddLicensedItems');
    }
    All(request) {
        return this._service.call(request, 'Ams/Employee/All');
    }
    ByGroupId(request) {
        return this._service.call(request, 'Ams/Employee/ByGroupId');
    }
    ById(request) {
        return this._service.call(request, 'Ams/Employee/ById');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/Employee/ByIds');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/Employee/Delete');
    }
    DeleteLicensedItems(request) {
        return this._service.call(request, 'Ams/Employee/DeleteLicensedItems');
    }
    Groups(request) {
        return this._service.call(request, 'Ams/Employee/Groups');
    }
    NamesAreUnique(request) {
        return this._service.call(request, 'Ams/Employee/NamesAreUnique');
    }
    Search(request) {
        return this._service.call(request, 'Ams/Employee/Search');
    }
    Update(request) {
        return this._service.call(request, 'Ams/Employee/Update');
    }
}
