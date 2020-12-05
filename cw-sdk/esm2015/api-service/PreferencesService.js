export class PreferencesService {
    constructor(service) { this._service = service; }
    Global(request) {
        return this._service.call(request, 'Ams/Preferences/Global');
    }
    User(request) {
        return this._service.call(request, 'Ams/Preferences/User');
    }
    UserSave(request) {
        return this._service.call(request, 'Ams/Preferences/UserSave');
    }
}
