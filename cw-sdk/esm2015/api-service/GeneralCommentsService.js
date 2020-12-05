export class GeneralCommentsService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/GeneralComments/Add');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/GeneralComments/Delete');
    }
}
