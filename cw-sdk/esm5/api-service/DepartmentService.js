var DepartmentService = /** @class */ (function () {
    function DepartmentService(service) {
        this._service = service;
    }
    DepartmentService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/Department/Add');
    };
    return DepartmentService;
}());
export { DepartmentService };
