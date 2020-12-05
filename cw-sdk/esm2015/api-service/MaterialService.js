export class MaterialService {
    constructor(service) { this._service = service; }
    All(request) {
        return this._service.call(request, 'Ams/Material/All');
    }
    ById(request) {
        return this._service.call(request, 'Ams/Material/ById');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/Material/ByIds');
    }
    ByParent(request) {
        return this._service.call(request, 'Ams/Material/ByParent');
    }
    ByStoreroom(request) {
        return this._service.call(request, 'Ams/Material/ByStoreroom');
    }
    ByStoreroomAndId(request) {
        return this._service.call(request, 'Ams/Material/ByStoreroomAndId');
    }
    Keywords(request) {
        return this._service.call(request, 'Ams/Material/Keywords');
    }
    MaterialBom(request) {
        return this._service.call(request, 'Ams/Material/MaterialBom');
    }
    MaterialCategories(request) {
        return this._service.call(request, 'Ams/Material/MaterialCategories');
    }
    MaterialNodes(request) {
        return this._service.call(request, 'Ams/Material/MaterialNodes');
    }
    Search(request) {
        return this._service.call(request, 'Ams/Material/Search');
    }
}
