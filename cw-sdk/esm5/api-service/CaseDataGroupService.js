var CaseDataGroupService = /** @class */ (function () {
    function CaseDataGroupService(service) {
        this._service = service;
    }
    CaseDataGroupService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseDataGroup/Add');
    };
    CaseDataGroupService.prototype.AddDefault = function (request) {
        return this._service.call(request, 'PLL/CaseDataGroup/AddDefault');
    };
    CaseDataGroupService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseDataGroup/ByCaObjectId');
    };
    CaseDataGroupService.prototype.CheckGISChanges = function (request) {
        return this._service.call(request, 'PLL/CaseDataGroup/CheckGISChanges');
    };
    CaseDataGroupService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseDataGroup/DeleteByCaObjectId');
    };
    CaseDataGroupService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseDataGroup/Search');
    };
    CaseDataGroupService.prototype.UpdateFromAsset = function (request) {
        return this._service.call(request, 'PLL/CaseDataGroup/UpdateFromAsset');
    };
    return CaseDataGroupService;
}());
export { CaseDataGroupService };
