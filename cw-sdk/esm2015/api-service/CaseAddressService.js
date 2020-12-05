export class CaseAddressService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseAddress/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseAddress/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseAddress/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseAddress/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseAddress/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'PLL/CaseAddress/SearchObject');
    }
}
