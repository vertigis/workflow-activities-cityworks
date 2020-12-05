export class CaseConditionService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseCondition/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseCondition/ByCaObjectId');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseCondition/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseCondition/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'PLL/CaseCondition/SearchObject');
    }
}
