export class CustomerCallService {
    constructor(service) { this._service = service; }
    AddToRequest(request) {
        return this._service.call(request, 'Ams/CustomerCall/AddToRequest');
    }
    ByIncidentNum(request) {
        return this._service.call(request, 'Ams/CustomerCall/ByIncidentNum');
    }
    ByRequestId(request) {
        return this._service.call(request, 'Ams/CustomerCall/ByRequestId');
    }
    ByRequestIds(request) {
        return this._service.call(request, 'Ams/CustomerCall/ByRequestIds');
    }
    CallerQuestions(request) {
        return this._service.call(request, 'Ams/CustomerCall/CallerQuestions');
    }
    CallerQuestionsByRequestIds(request) {
        return this._service.call(request, 'Ams/CustomerCall/CallerQuestionsByRequestIds');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/CustomerCall/Delete');
    }
    Move(request) {
        return this._service.call(request, 'Ams/CustomerCall/Move');
    }
    MoveToRequest(request) {
        return this._service.call(request, 'Ams/CustomerCall/MoveToRequest');
    }
    Update(request) {
        return this._service.call(request, 'Ams/CustomerCall/Update');
    }
}
