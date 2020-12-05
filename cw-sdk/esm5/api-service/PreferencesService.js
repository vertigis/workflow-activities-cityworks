var PreferencesService = /** @class */ (function () {
    function PreferencesService(service) {
        this._service = service;
    }
    PreferencesService.prototype.Global = function (request) {
        return this._service.call(request, 'Ams/Preferences/Global');
    };
    PreferencesService.prototype.User = function (request) {
        return this._service.call(request, 'Ams/Preferences/User');
    };
    PreferencesService.prototype.UserSave = function (request) {
        return this._service.call(request, 'Ams/Preferences/UserSave');
    };
    return PreferencesService;
}());
export { PreferencesService };
