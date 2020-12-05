export class LocalizationService {
    constructor(service) { this._service = service; }
    LocalizationSettings(request) {
        return this._service.call(request, 'General/Localization/LocalizationSettings');
    }
    TimeZones(request) {
        return this._service.call(request, 'General/Localization/TimeZones');
    }
}
