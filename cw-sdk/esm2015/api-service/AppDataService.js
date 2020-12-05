export class AppDataService {
    constructor(service) { this._service = service; }
    CurrentLocation(request) {
        return this._service.call(request, 'General/AppData/CurrentLocation');
    }
    SelectedEntities(request) {
        return this._service.call(request, 'General/AppData/SelectedEntities');
    }
}
