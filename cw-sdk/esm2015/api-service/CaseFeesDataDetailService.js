export class CaseFeesDataDetailService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseFeesDataDetail/Add');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseFeesDataDetail/Delete');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseFeesDataDetail/Search');
    }
}
