var CaseService = /** @class */ (function () {
    function CaseService(service) {
        this._service = service;
    }
    CaseService.prototype.Create = function (request) {
        return this._service.call(request, 'PLL/Case/Create');
    };
    CaseService.prototype.CreateChild = function (request) {
        return this._service.call(request, 'PLL/Case/CreateChild');
    };
    return CaseService;
}());
export { CaseService };
