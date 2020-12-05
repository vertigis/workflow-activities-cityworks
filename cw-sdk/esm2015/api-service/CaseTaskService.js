export class CaseTaskService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseTask/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseTask/ByCaObjectId');
    }
    ByIds(request) {
        return this._service.call(request, 'PLL/CaseTask/ByIds');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseTask/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseTask/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseTask/Search');
    }
    SetResult(request) {
        return this._service.call(request, 'PLL/CaseTask/SetResult');
    }
    Update(request) {
        return this._service.call(request, 'PLL/CaseTask/Update');
    }
}
