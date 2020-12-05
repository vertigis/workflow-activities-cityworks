export class WorkOrderEntityService {
    constructor(service) { this._service = service; }
    ByIds(request) {
        return this._service.call(request, 'Ams/WorkOrderEntity/ByIds');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/WorkOrderEntity/CreateSearchDefinition');
    }
    Search(request) {
        return this._service.call(request, 'Ams/WorkOrderEntity/Search');
    }
}
