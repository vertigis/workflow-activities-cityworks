export class CasePaymentRefundService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CasePaymentRefund/Add');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CasePaymentRefund/Delete');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CasePaymentRefund/Search');
    }
    Update(request) {
        return this._service.call(request, 'PLL/CasePaymentRefund/Update');
    }
}
