export class CaseObjectCommentsService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseObjectComments/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseObjectComments/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseObjectComments/Delete');
    }
    Update(request) {
        return this._service.call(request, 'PLL/CaseObjectComments/Update');
    }
}
