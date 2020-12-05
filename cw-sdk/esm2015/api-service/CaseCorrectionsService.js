export class CaseCorrectionsService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseCorrections/Add');
    }
    ByCaTaskIds(request) {
        return this._service.call(request, 'PLL/CaseCorrections/ByCaTaskIds');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseCorrections/Search');
    }
    Update(request) {
        return this._service.call(request, 'PLL/CaseCorrections/Update');
    }
}
