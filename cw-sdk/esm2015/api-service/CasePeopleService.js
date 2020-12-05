export class CasePeopleService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CasePeople/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CasePeople/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CasePeople/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CasePeople/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CasePeople/Search');
    }
}
