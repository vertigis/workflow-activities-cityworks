var CaseFeesDataGroupService = /** @class */ (function () {
    function CaseFeesDataGroupService(service) {
        this._service = service;
    }
    CaseFeesDataGroupService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseFeesDataGroup/Add');
    };
    CaseFeesDataGroupService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseFeesDataGroup/Delete');
    };
    CaseFeesDataGroupService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseFeesDataGroup/Search');
    };
    return CaseFeesDataGroupService;
}());
export { CaseFeesDataGroupService };
