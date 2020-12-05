export class BusinessCaseService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/BusinessCase/Add');
    }
    Update(request) {
        return this._service.call(request, 'PLL/BusinessCase/Update');
    }
}
