export class CaseDataListValuesService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseDataListValues/Add');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseDataListValues/Delete');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseDataListValues/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'PLL/CaseDataListValues/SearchObject');
    }
}
