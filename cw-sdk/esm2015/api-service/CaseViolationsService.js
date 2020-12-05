export class CaseViolationsService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseViolations/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseViolations/ByCaObjectId');
    }
    ByCaObjectIds(request) {
        return this._service.call(request, 'PLL/CaseViolations/ByCaObjectIds');
    }
    ByIds(request) {
        return this._service.call(request, 'PLL/CaseViolations/ByIds');
    }
    CompleteViolations(request) {
        return this._service.call(request, 'PLL/CaseViolations/CompleteViolations');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseViolations/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseViolations/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseViolations/Search');
    }
}
