export class WebHookEventService {
    constructor(service) { this._service = service; }
    ProcessMessages(request) {
        return this._service.call(request, 'General/WebHookEvent/ProcessMessages');
    }
}
