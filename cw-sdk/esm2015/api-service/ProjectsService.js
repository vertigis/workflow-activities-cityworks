export class ProjectsService {
    constructor(service) { this._service = service; }
    ByContractIds(request) {
        return this._service.call(request, 'Ams/Projects/ByContractIds');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/Projects/ByIds');
    }
    Create(request) {
        return this._service.call(request, 'Ams/Projects/Create');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/Projects/CreateSearchDefinition');
    }
    QuickView(request) {
        return this._service.call(request, 'Ams/Projects/QuickView');
    }
    Search(request) {
        return this._service.call(request, 'Ams/Projects/Search');
    }
    Update(request) {
        return this._service.call(request, 'Ams/Projects/Update');
    }
}
