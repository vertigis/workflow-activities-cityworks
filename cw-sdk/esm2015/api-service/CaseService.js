export class CaseService {
    constructor(service) { this._service = service; }
    Create(request) {
        return this._service.call(request, 'PLL/Case/Create');
    }
    CreateChild(request) {
        return this._service.call(request, 'PLL/Case/CreateChild');
    }
}
