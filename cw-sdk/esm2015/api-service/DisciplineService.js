export class DisciplineService {
    constructor(service) { this._service = service; }
    All(request) {
        return this._service.call(request, 'PLL/Discipline/All');
    }
}
