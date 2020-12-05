export class CaseFlagsService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseFlags/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseFlags/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseFlags/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseFlags/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseFlags/Search');
    }
}
