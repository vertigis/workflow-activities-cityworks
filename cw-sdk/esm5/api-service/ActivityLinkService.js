var ActivityLinkService = /** @class */ (function () {
    function ActivityLinkService(service) {
        this._service = service;
    }
    ActivityLinkService.prototype.Add = function (request) {
        return this._service.call(request, 'General/ActivityLink/Add');
    };
    ActivityLinkService.prototype.ByActivityIds = function (request) {
        return this._service.call(request, 'General/ActivityLink/ByActivityIds');
    };
    ActivityLinkService.prototype.ByActivitySids = function (request) {
        return this._service.call(request, 'General/ActivityLink/ByActivitySids');
    };
    ActivityLinkService.prototype.CloneByActivitySid = function (request) {
        return this._service.call(request, 'General/ActivityLink/CloneByActivitySid');
    };
    ActivityLinkService.prototype.Delete = function (request) {
        return this._service.call(request, 'General/ActivityLink/Delete');
    };
    ActivityLinkService.prototype.Remove = function (request) {
        return this._service.call(request, 'General/ActivityLink/Remove');
    };
    return ActivityLinkService;
}());
export { ActivityLinkService };
