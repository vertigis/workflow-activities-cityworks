var DivisionService = /** @class */ (function () {
    function DivisionService(service) {
        this._service = service;
    }
    DivisionService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/Division/Add');
    };
    return DivisionService;
}());
export { DivisionService };
