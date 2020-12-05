export class SubTypeService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/SubType/Add');
    }
    Update(request) {
        return this._service.call(request, 'PLL/SubType/Update');
    }
}
