export class PavementInspectionService {
    constructor(service) { this._service = service; }
    AddDistress(request) {
        return this._service.call(request, 'Ams/PavementInspection/AddDistress');
    }
    AddSample(request) {
        return this._service.call(request, 'Ams/PavementInspection/AddSample');
    }
    ById(request) {
        return this._service.call(request, 'Ams/PavementInspection/ById');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/PavementInspection/ByIds');
    }
    CodeDesc(request) {
        return this._service.call(request, 'Ams/PavementInspection/CodeDesc');
    }
    Create(request) {
        return this._service.call(request, 'Ams/PavementInspection/Create');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/PavementInspection/CreateSearchDefinition');
    }
    DistressCodes(request) {
        return this._service.call(request, 'Ams/PavementInspection/DistressCodes');
    }
    Distresses(request) {
        return this._service.call(request, 'Ams/PavementInspection/Distresses');
    }
    Samples(request) {
        return this._service.call(request, 'Ams/PavementInspection/Samples');
    }
    Search(request) {
        return this._service.call(request, 'Ams/PavementInspection/Search');
    }
    Update(request) {
        return this._service.call(request, 'Ams/PavementInspection/Update');
    }
    UpdateDistress(request) {
        return this._service.call(request, 'Ams/PavementInspection/UpdateDistress');
    }
    UpdateSample(request) {
        return this._service.call(request, 'Ams/PavementInspection/UpdateSample');
    }
}
