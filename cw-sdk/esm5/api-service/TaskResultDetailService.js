var TaskResultDetailService = /** @class */ (function () {
    function TaskResultDetailService(service) {
        this._service = service;
    }
    TaskResultDetailService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/TaskResultDetail/Add');
    };
    TaskResultDetailService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/TaskResultDetail/Update');
    };
    return TaskResultDetailService;
}());
export { TaskResultDetailService };
