export class CrewService {
    constructor(service) { this._service = service; }
    ByEmployee(request) {
        return this._service.call(request, 'Ams/Crew/ByEmployee');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/Crew/ByIds');
    }
    Employees(request) {
        return this._service.call(request, 'Ams/Crew/Employees');
    }
    Equipment(request) {
        return this._service.call(request, 'Ams/Crew/Equipment');
    }
    Material(request) {
        return this._service.call(request, 'Ams/Crew/Material');
    }
}
