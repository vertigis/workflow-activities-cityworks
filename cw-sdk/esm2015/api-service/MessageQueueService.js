export class MessageQueueService {
    constructor(service) { this._service = service; }
    ByIds(request) {
        return this._service.call(request, 'General/MessageQueue/ByIds');
    }
    Delete(request) {
        return this._service.call(request, 'General/MessageQueue/Delete');
    }
    Preferences(request) {
        return this._service.call(request, 'General/MessageQueue/Preferences');
    }
    Search(request) {
        return this._service.call(request, 'General/MessageQueue/Search');
    }
    Update(request) {
        return this._service.call(request, 'General/MessageQueue/Update');
    }
    UpdateMessageStatus(request) {
        return this._service.call(request, 'General/MessageQueue/UpdateMessageStatus');
    }
    WebHooks(request) {
        return this._service.call(request, 'General/MessageQueue/WebHooks');
    }
}
