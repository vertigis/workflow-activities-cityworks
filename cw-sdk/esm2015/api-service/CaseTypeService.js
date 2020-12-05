export class CaseTypeService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseType/Add');
    }
    GetList(request) {
        return this._service.call(request, 'PLL/CaseType/GetList');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseType/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'PLL/CaseType/SearchObject');
    }
    Update(request) {
        return this._service.call(request, 'PLL/CaseType/Update');
    }
}
