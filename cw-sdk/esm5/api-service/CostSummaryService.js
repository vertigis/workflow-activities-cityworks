var CostSummaryService = /** @class */ (function () {
    function CostSummaryService(service) {
        this._service = service;
    }
    CostSummaryService.prototype.WorkOrderEntity = function (request) {
        return this._service.call(request, 'General/CostSummary/WorkOrderEntity');
    };
    CostSummaryService.prototype.WorkOrderEntitySearch = function (request) {
        return this._service.call(request, 'General/CostSummary/WorkOrderEntitySearch');
    };
    return CostSummaryService;
}());
export { CostSummaryService };
