export class CasePaymentService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CasePayment/Add');
    }
    AddDeposit(request) {
        return this._service.call(request, 'PLL/CasePayment/AddDeposit');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CasePayment/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CasePayment/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CasePayment/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CasePayment/Search');
    }
}
