export class CaseDataGroupService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseDataGroup/Add');
    }
    AddDefault(request) {
        return this._service.call(request, 'PLL/CaseDataGroup/AddDefault');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseDataGroup/ByCaObjectId');
    }
    CheckGISChanges(request) {
        return this._service.call(request, 'PLL/CaseDataGroup/CheckGISChanges');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseDataGroup/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseDataGroup/Search');
    }
    UpdateFromAsset(request) {
        return this._service.call(request, 'PLL/CaseDataGroup/UpdateFromAsset');
    }
}
