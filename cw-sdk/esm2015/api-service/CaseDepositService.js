export class CaseDepositService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseDeposit/Add');
    }
    AddDefault(request) {
        return this._service.call(request, 'PLL/CaseDeposit/AddDefault');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseDeposit/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseDeposit/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseDeposit/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseDeposit/Search');
    }
}
