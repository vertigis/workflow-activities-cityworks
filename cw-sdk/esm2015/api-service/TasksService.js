export class TasksService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'Ams/Tasks/Add');
    }
    ById(request) {
        return this._service.call(request, 'Ams/Tasks/ById');
    }
    ByWorkOrder(request) {
        return this._service.call(request, 'Ams/Tasks/ByWorkOrder');
    }
    ByWorkOrderTemplate(request) {
        return this._service.call(request, 'Ams/Tasks/ByWorkOrderTemplate');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/Tasks/Delete');
    }
    Keywords(request) {
        return this._service.call(request, 'Ams/Tasks/Keywords');
    }
    Statuses(request) {
        return this._service.call(request, 'Ams/Tasks/Statuses');
    }
    TaskCodes(request) {
        return this._service.call(request, 'Ams/Tasks/TaskCodes');
    }
    TaskNodes(request) {
        return this._service.call(request, 'Ams/Tasks/TaskNodes');
    }
    Template(request) {
        return this._service.call(request, 'Ams/Tasks/Template');
    }
    Templates(request) {
        return this._service.call(request, 'Ams/Tasks/Templates');
    }
    Update(request) {
        return this._service.call(request, 'Ams/Tasks/Update');
    }
}
