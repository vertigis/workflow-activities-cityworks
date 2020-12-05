export class ServiceRequestTemplateService {
    constructor(service) { this._service = service; }
    ByIds(request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/ByIds');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/CreateSearchDefinition');
    }
    QA(request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/QA');
    }
    Search(request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/Search');
    }
    Templates(request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/Templates');
    }
    WorkOrderTemplates(request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/WorkOrderTemplates');
    }
}
