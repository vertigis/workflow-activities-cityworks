export class GISServiceService {
    constructor(service) { this._service = service; }
    AddGISServiceDefinition(request) {
        return this._service.call(request, 'Ams/GISService/AddGISServiceDefinition');
    }
    AddGISServiceEndPointSecurity(request) {
        return this._service.call(request, 'Ams/GISService/AddGISServiceEndPointSecurity');
    }
    CloneGISServiceDefinition(request) {
        return this._service.call(request, 'Ams/GISService/CloneGISServiceDefinition');
    }
    DeleteGISServiceDefinitions(request) {
        return this._service.call(request, 'Ams/GISService/DeleteGISServiceDefinitions');
    }
    DeleteGISServiceEndPointSecurities(request) {
        return this._service.call(request, 'Ams/GISService/DeleteGISServiceEndPointSecurities');
    }
    GISServiceDefinitions(request) {
        return this._service.call(request, 'Ams/GISService/GISServiceDefinitions');
    }
    UpdateGISServiceEndPointSecurity(request) {
        return this._service.call(request, 'Ams/GISService/UpdateGISServiceEndPointSecurity');
    }
    ValidateServiceSecurity(request) {
        return this._service.call(request, 'Ams/GISService/ValidateServiceSecurity');
    }
}
