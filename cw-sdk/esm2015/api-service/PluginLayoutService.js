export class PluginLayoutService {
    constructor(service) { this._service = service; }
    Definition(request) {
        return this._service.call(request, 'Ams/PluginLayout/Definition');
    }
    Definitions(request) {
        return this._service.call(request, 'Ams/PluginLayout/Definitions');
    }
    Public(request) {
        return this._service.call(request, 'Ams/PluginLayout/Public');
    }
    PublicDefinitions(request) {
        return this._service.call(request, 'Ams/PluginLayout/PublicDefinitions');
    }
}
