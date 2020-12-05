export class MapServiceService {
    constructor(service) { this._service = service; }
    Configuration(request) {
        return this._service.call(request, 'Gis/MapService/Configuration');
    }
    Domain(request) {
        return this._service.call(request, 'Gis/MapService/Domain');
    }
    DownloadMobileMapCache(request) {
        return this._service.call(request, 'Gis/MapService/DownloadMobileMapCache');
    }
    InitialExtent(request) {
        return this._service.call(request, 'Gis/MapService/InitialExtent');
    }
    InspectionConfiguration(request) {
        return this._service.call(request, 'Gis/MapService/InspectionConfiguration');
    }
    ServiceRequestConfiguration(request) {
        return this._service.call(request, 'Gis/MapService/ServiceRequestConfiguration');
    }
    User(request) {
        return this._service.call(request, 'Gis/MapService/User');
    }
    WorkOrderConfiguration(request) {
        return this._service.call(request, 'Gis/MapService/WorkOrderConfiguration');
    }
}
