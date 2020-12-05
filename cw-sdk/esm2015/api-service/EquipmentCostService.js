export class EquipmentCostService {
    constructor(service) { this._service = service; }
    AddWorkOrderCosts(request) {
        return this._service.call(request, 'Ams/EquipmentCost/AddWorkOrderCosts');
    }
    DeleteWorkOrderCosts(request) {
        return this._service.call(request, 'Ams/EquipmentCost/DeleteWorkOrderCosts');
    }
    WorkOrderCostsByWorkOrder(request) {
        return this._service.call(request, 'Ams/EquipmentCost/WorkOrderCostsByWorkOrder');
    }
}
