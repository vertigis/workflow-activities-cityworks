export class CaseDataDetailService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseDataDetail/Add');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseDataDetail/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'PLL/CaseDataDetail/SearchObject');
    }
    Update(request) {
        return this._service.call(request, 'PLL/CaseDataDetail/Update');
    }
    UpdateLock(request) {
        return this._service.call(request, 'PLL/CaseDataDetail/UpdateLock');
    }
    WIPAdd(request) {
        return this._service.call(request, 'PLL/CaseDataDetail/WIPAdd');
    }
}
