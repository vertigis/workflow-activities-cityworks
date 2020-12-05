var WebHookEventService = /** @class */ (function () {
    function WebHookEventService(service) {
        this._service = service;
    }
    WebHookEventService.prototype.ProcessMessages = function (request) {
        return this._service.call(request, 'General/WebHookEvent/ProcessMessages');
    };
    return WebHookEventService;
}());
export { WebHookEventService };
