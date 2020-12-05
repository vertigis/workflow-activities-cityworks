export class CaseLicenseService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseLicense/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseLicense/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseLicense/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseLicense/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseLicense/Search');
    }
}
