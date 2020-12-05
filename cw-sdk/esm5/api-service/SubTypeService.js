var SubTypeService = /** @class */ (function () {
    function SubTypeService(service) {
        this._service = service;
    }
    SubTypeService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/SubType/Add');
    };
    SubTypeService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/SubType/Update');
    };
    return SubTypeService;
}());
export { SubTypeService };
