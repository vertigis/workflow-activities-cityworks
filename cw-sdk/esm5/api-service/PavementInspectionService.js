var PavementInspectionService = /** @class */ (function () {
    function PavementInspectionService(service) {
        this._service = service;
    }
    PavementInspectionService.prototype.AddDistress = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/AddDistress');
    };
    PavementInspectionService.prototype.AddSample = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/AddSample');
    };
    PavementInspectionService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/ById');
    };
    PavementInspectionService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/ByIds');
    };
    PavementInspectionService.prototype.CodeDesc = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/CodeDesc');
    };
    PavementInspectionService.prototype.Create = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/Create');
    };
    PavementInspectionService.prototype.CreateSearchDefinition = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/CreateSearchDefinition');
    };
    PavementInspectionService.prototype.DistressCodes = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/DistressCodes');
    };
    PavementInspectionService.prototype.Distresses = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/Distresses');
    };
    PavementInspectionService.prototype.Samples = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/Samples');
    };
    PavementInspectionService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/Search');
    };
    PavementInspectionService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/Update');
    };
    PavementInspectionService.prototype.UpdateDistress = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/UpdateDistress');
    };
    PavementInspectionService.prototype.UpdateSample = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/UpdateSample');
    };
    return PavementInspectionService;
}());
export { PavementInspectionService };
