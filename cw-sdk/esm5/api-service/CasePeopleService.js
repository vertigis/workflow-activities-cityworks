var CasePeopleService = /** @class */ (function () {
    function CasePeopleService(service) {
        this._service = service;
    }
    CasePeopleService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CasePeople/Add');
    };
    CasePeopleService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CasePeople/ByCaObjectId');
    };
    CasePeopleService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CasePeople/Delete');
    };
    CasePeopleService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CasePeople/DeleteByCaObjectId');
    };
    CasePeopleService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CasePeople/Search');
    };
    return CasePeopleService;
}());
export { CasePeopleService };
