export class ConditionService {
    constructor(service) { this._service = service; }
    Current(request) {
        return this._service.call(request, 'Ams/Condition/Current');
    }
    History(request) {
        return this._service.call(request, 'Ams/Condition/History');
    }
}
