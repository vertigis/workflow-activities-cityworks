export class CaseTaskResultsService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseTaskResults/Add');
    }
    ByCaTaskIds(request) {
        return this._service.call(request, 'PLL/CaseTaskResults/ByCaTaskIds');
    }
    SearchObject(request) {
        return this._service.call(request, 'PLL/CaseTaskResults/SearchObject');
    }
}
