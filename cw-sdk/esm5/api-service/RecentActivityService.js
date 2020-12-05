var RecentActivityService = /** @class */ (function () {
    function RecentActivityService(service) {
        this._service = service;
    }
    RecentActivityService.prototype.CaseViewed = function (request) {
        return this._service.call(request, 'Ams/RecentActivity/CaseViewed');
    };
    RecentActivityService.prototype.InspectionViewed = function (request) {
        return this._service.call(request, 'Ams/RecentActivity/InspectionViewed');
    };
    RecentActivityService.prototype.RequestViewed = function (request) {
        return this._service.call(request, 'Ams/RecentActivity/RequestViewed');
    };
    RecentActivityService.prototype.User = function (request) {
        return this._service.call(request, 'Ams/RecentActivity/User');
    };
    RecentActivityService.prototype.WorkOrderViewed = function (request) {
        return this._service.call(request, 'Ams/RecentActivity/WorkOrderViewed');
    };
    return RecentActivityService;
}());
export { RecentActivityService };
