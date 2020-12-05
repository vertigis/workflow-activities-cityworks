export class NumberingGroupService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/NumberingGroup/Add');
    }
    Update(request) {
        return this._service.call(request, 'PLL/NumberingGroup/Update');
    }
}
