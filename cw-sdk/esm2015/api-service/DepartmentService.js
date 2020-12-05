export class DepartmentService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/Department/Add');
    }
}
