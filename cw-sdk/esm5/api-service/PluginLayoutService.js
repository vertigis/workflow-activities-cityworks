var PluginLayoutService = /** @class */ (function () {
    function PluginLayoutService(service) {
        this._service = service;
    }
    PluginLayoutService.prototype.Definition = function (request) {
        return this._service.call(request, 'Ams/PluginLayout/Definition');
    };
    PluginLayoutService.prototype.Definitions = function (request) {
        return this._service.call(request, 'Ams/PluginLayout/Definitions');
    };
    PluginLayoutService.prototype.Public = function (request) {
        return this._service.call(request, 'Ams/PluginLayout/Public');
    };
    PluginLayoutService.prototype.PublicDefinitions = function (request) {
        return this._service.call(request, 'Ams/PluginLayout/PublicDefinitions');
    };
    return PluginLayoutService;
}());
export { PluginLayoutService };
