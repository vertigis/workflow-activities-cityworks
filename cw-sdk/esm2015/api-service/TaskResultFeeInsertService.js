export class TaskResultFeeInsertService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/TaskResultFeeInsert/Add');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/TaskResultFeeInsert/Delete');
    }
    DeleteByTaskId(request) {
        return this._service.call(request, 'PLL/TaskResultFeeInsert/DeleteByTaskId');
    }
    Update(request) {
        return this._service.call(request, 'PLL/TaskResultFeeInsert/Update');
    }
}
