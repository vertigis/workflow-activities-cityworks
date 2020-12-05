export class WorkOrderTemplateService {
    constructor(service) { this._service = service; }
    ByIds(request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/ByIds');
    }
    ByProblemSids(request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/ByProblemSids');
    }
    CustomFieldCategories(request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/CustomFieldCategories');
    }
    CustomFields(request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/CustomFields');
    }
    Search(request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/Search');
    }
    TemplateInspections(request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/TemplateInspections');
    }
    TemplateNames(request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/TemplateNames');
    }
}
