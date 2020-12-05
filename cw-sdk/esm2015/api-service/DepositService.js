export class DepositService {
    constructor(service) { this._service = service; }
    All(request) {
        return this._service.call(request, 'PLL/Deposit/All');
    }
    Search(request) {
        return this._service.call(request, 'PLL/Deposit/Search');
    }
}
