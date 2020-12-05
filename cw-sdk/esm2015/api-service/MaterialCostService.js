export class MaterialCostService {
    constructor(service) { this._service = service; }
    AddWorkOrderCosts(request) {
        return this._service.call(request, 'Ams/MaterialCost/AddWorkOrderCosts');
    }
    DeleteWorkOrderCosts(request) {
        return this._service.call(request, 'Ams/MaterialCost/DeleteWorkOrderCosts');
    }
    WorkOrderCostsByWorkOrder(request) {
        return this._service.call(request, 'Ams/MaterialCost/WorkOrderCostsByWorkOrder');
    }
}
