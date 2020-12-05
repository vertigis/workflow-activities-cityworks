export class CaseCorrStatusService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseCorrStatus/Add');
    }
    ByCaCorrectionsIds(request) {
        return this._service.call(request, 'PLL/CaseCorrStatus/ByCaCorrectionsIds');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseCorrStatus/Search');
    }
}
