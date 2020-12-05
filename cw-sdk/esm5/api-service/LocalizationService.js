var LocalizationService = /** @class */ (function () {
    function LocalizationService(service) {
        this._service = service;
    }
    LocalizationService.prototype.LocalizationSettings = function (request) {
        return this._service.call(request, 'General/Localization/LocalizationSettings');
    };
    LocalizationService.prototype.TimeZones = function (request) {
        return this._service.call(request, 'General/Localization/TimeZones');
    };
    return LocalizationService;
}());
export { LocalizationService };
