export class ActivityLinkService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'General/ActivityLink/Add');
    }
    ByActivityIds(request) {
        return this._service.call(request, 'General/ActivityLink/ByActivityIds');
    }
    ByActivitySids(request) {
        return this._service.call(request, 'General/ActivityLink/ByActivitySids');
    }
    CloneByActivitySid(request) {
        return this._service.call(request, 'General/ActivityLink/CloneByActivitySid');
    }
    Delete(request) {
        return this._service.call(request, 'General/ActivityLink/Delete');
    }
    Remove(request) {
        return this._service.call(request, 'General/ActivityLink/Remove');
    }
}
