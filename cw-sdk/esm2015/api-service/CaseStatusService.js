export class CaseStatusService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseStatus/Add');
    }
}
