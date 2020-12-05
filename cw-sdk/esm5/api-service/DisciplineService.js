var DisciplineService = /** @class */ (function () {
    function DisciplineService(service) {
        this._service = service;
    }
    DisciplineService.prototype.All = function (request) {
        return this._service.call(request, 'PLL/Discipline/All');
    };
    return DisciplineService;
}());
export { DisciplineService };
