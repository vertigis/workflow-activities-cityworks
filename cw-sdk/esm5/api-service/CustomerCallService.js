var CustomerCallService = /** @class */ (function () {
    function CustomerCallService(service) {
        this._service = service;
    }
    CustomerCallService.prototype.AddToRequest = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/AddToRequest');
    };
    CustomerCallService.prototype.ByIncidentNum = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/ByIncidentNum');
    };
    CustomerCallService.prototype.ByRequestId = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/ByRequestId');
    };
    CustomerCallService.prototype.ByRequestIds = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/ByRequestIds');
    };
    CustomerCallService.prototype.CallerQuestions = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/CallerQuestions');
    };
    CustomerCallService.prototype.CallerQuestionsByRequestIds = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/CallerQuestionsByRequestIds');
    };
    CustomerCallService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/Delete');
    };
    CustomerCallService.prototype.Move = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/Move');
    };
    CustomerCallService.prototype.MoveToRequest = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/MoveToRequest');
    };
    CustomerCallService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/Update');
    };
    return CustomerCallService;
}());
export { CustomerCallService };
