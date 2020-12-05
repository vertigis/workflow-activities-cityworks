export class InspectionTemplateService {
    constructor(service) { this._service = service; }
    ByIds(request) {
        return this._service.call(request, 'Ams/InspectionTemplate/ByIds');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/InspectionTemplate/CreateSearchDefinition');
    }
    EntityTypes(request) {
        return this._service.call(request, 'Ams/InspectionTemplate/EntityTypes');
    }
    QA(request) {
        return this._service.call(request, 'Ams/InspectionTemplate/QA');
    }
    Search(request) {
        return this._service.call(request, 'Ams/InspectionTemplate/Search');
    }
    Templates(request) {
        return this._service.call(request, 'Ams/InspectionTemplate/Templates');
    }
    TestTypes(request) {
        return this._service.call(request, 'Ams/InspectionTemplate/TestTypes');
    }
}
