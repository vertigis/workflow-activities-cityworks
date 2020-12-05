export class LaborCostService {
    constructor(service) { this._service = service; }
    AddRequestCosts(request) {
        return this._service.call(request, 'Ams/LaborCost/AddRequestCosts');
    }
    AddWorkOrderCosts(request) {
        return this._service.call(request, 'Ams/LaborCost/AddWorkOrderCosts');
    }
    CostCodes(request) {
        return this._service.call(request, 'Ams/LaborCost/CostCodes');
    }
    DeleteRequestCosts(request) {
        return this._service.call(request, 'Ams/LaborCost/DeleteRequestCosts');
    }
    DeleteWorkOrderCosts(request) {
        return this._service.call(request, 'Ams/LaborCost/DeleteWorkOrderCosts');
    }
    JobCodes(request) {
        return this._service.call(request, 'Ams/LaborCost/JobCodes');
    }
    RequestCostsByRequest(request) {
        return this._service.call(request, 'Ams/LaborCost/RequestCostsByRequest');
    }
    WorkOrderCostsByWorkOrder(request) {
        return this._service.call(request, 'Ams/LaborCost/WorkOrderCostsByWorkOrder');
    }
}
