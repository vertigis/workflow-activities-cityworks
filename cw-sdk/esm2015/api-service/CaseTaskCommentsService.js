export class CaseTaskCommentsService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseTaskComments/Add');
    }
    ByCaTaskId(request) {
        return this._service.call(request, 'PLL/CaseTaskComments/ByCaTaskId');
    }
    ByCaTaskIds(request) {
        return this._service.call(request, 'PLL/CaseTaskComments/ByCaTaskIds');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseTaskComments/Delete');
    }
    Update(request) {
        return this._service.call(request, 'PLL/CaseTaskComments/Update');
    }
}
