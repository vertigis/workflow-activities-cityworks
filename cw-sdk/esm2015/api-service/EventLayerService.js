export class EventLayerService {
    constructor(service) { this._service = service; }
    All(request) {
        return this._service.call(request, 'Ams/EventLayer/All');
    }
    ById(request) {
        return this._service.call(request, 'Ams/EventLayer/ById');
    }
}
