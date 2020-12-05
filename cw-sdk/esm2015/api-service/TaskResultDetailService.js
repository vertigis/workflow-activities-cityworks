export class TaskResultDetailService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/TaskResultDetail/Add');
    }
    Update(request) {
        return this._service.call(request, 'PLL/TaskResultDetail/Update');
    }
}
