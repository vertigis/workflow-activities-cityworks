export class CaseFeesDataGroupService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseFeesDataGroup/Add');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseFeesDataGroup/Delete');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseFeesDataGroup/Search');
    }
}
