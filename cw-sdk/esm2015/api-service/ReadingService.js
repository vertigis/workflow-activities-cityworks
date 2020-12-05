export class ReadingService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'Ams/Reading/Add');
    }
    ByEntity(request) {
        return this._service.call(request, 'Ams/Reading/ByEntity');
    }
    Configuration(request) {
        return this._service.call(request, 'Ams/Reading/Configuration');
    }
    Update(request) {
        return this._service.call(request, 'Ams/Reading/Update');
    }
}
