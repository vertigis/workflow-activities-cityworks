var TaskResultFeeInsertService = /** @class */ (function () {
    function TaskResultFeeInsertService(service) {
        this._service = service;
    }
    TaskResultFeeInsertService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/TaskResultFeeInsert/Add');
    };
    TaskResultFeeInsertService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/TaskResultFeeInsert/Delete');
    };
    TaskResultFeeInsertService.prototype.DeleteByTaskId = function (request) {
        return this._service.call(request, 'PLL/TaskResultFeeInsert/DeleteByTaskId');
    };
    TaskResultFeeInsertService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/TaskResultFeeInsert/Update');
    };
    return TaskResultFeeInsertService;
}());
export { TaskResultFeeInsertService };
