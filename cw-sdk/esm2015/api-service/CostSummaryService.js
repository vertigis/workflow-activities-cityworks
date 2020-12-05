export class CostSummaryService {
    constructor(service) { this._service = service; }
    WorkOrderEntity(request) {
        return this._service.call(request, 'General/CostSummary/WorkOrderEntity');
    }
    WorkOrderEntitySearch(request) {
        return this._service.call(request, 'General/CostSummary/WorkOrderEntitySearch');
    }
}
