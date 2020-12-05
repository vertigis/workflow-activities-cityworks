export class CaseObjectService {
    constructor(service) { this._service = service; }
    ByIds(request) {
        return this._service.call(request, 'PLL/CaseObject/ByIds');
    }
    CreateCaseFromServiceRequest(request) {
        return this._service.call(request, 'PLL/CaseObject/CreateCaseFromServiceRequest');
    }
    DeleteCase(request) {
        return this._service.call(request, 'PLL/CaseObject/DeleteCase');
    }
    Move(request) {
        return this._service.call(request, 'PLL/CaseObject/Move');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseObject/Search');
    }
}
