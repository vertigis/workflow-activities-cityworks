export class CaseContractorService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseContractor/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseContractor/ByCaObjectId');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseContractor/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseContractor/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'PLL/CaseContractor/SearchObject');
    }
}
