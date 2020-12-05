export class TenderTypeService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/TenderType/Add');
    }
    Update(request) {
        return this._service.call(request, 'PLL/TenderType/Update');
    }
}
