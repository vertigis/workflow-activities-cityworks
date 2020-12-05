export class CaseInspectionRequestService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseInspectionRequest/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseInspectionRequest/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseInspectionRequest/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseInspectionRequest/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseInspectionRequest/Search');
    }
}
