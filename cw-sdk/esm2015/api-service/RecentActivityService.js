export class RecentActivityService {
    constructor(service) { this._service = service; }
    CaseViewed(request) {
        return this._service.call(request, 'Ams/RecentActivity/CaseViewed');
    }
    InspectionViewed(request) {
        return this._service.call(request, 'Ams/RecentActivity/InspectionViewed');
    }
    RequestViewed(request) {
        return this._service.call(request, 'Ams/RecentActivity/RequestViewed');
    }
    User(request) {
        return this._service.call(request, 'Ams/RecentActivity/User');
    }
    WorkOrderViewed(request) {
        return this._service.call(request, 'Ams/RecentActivity/WorkOrderViewed');
    }
}
