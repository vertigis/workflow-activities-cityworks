export class CustomerAccountService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'Ams/CustomerAccount/Add');
    }
    ByAccountNumbers(request) {
        return this._service.call(request, 'Ams/CustomerAccount/ByAccountNumbers');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/CustomerAccount/ByIds');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/CustomerAccount/Delete');
    }
    Import(request) {
        return this._service.call(request, 'Ams/CustomerAccount/Import');
    }
    Search(request) {
        return this._service.call(request, 'Ams/CustomerAccount/Search');
    }
    Update(request) {
        return this._service.call(request, 'Ams/CustomerAccount/Update');
    }
}
