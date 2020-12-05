export class CaseChildObjectService {
    constructor(service) { this._service = service; }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseChildObject/ByCaObjectId');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseChildObject/DeleteByCaObjectId');
    }
    GetList(request) {
        return this._service.call(request, 'PLL/CaseChildObject/GetList');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseChildObject/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'PLL/CaseChildObject/SearchObject');
    }
}
