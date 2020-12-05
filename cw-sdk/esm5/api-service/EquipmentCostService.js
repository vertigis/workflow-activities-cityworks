var EquipmentCostService = /** @class */ (function () {
    function EquipmentCostService(service) {
        this._service = service;
    }
    EquipmentCostService.prototype.AddWorkOrderCosts = function (request) {
        return this._service.call(request, 'Ams/EquipmentCost/AddWorkOrderCosts');
    };
    EquipmentCostService.prototype.DeleteWorkOrderCosts = function (request) {
        return this._service.call(request, 'Ams/EquipmentCost/DeleteWorkOrderCosts');
    };
    EquipmentCostService.prototype.WorkOrderCostsByWorkOrder = function (request) {
        return this._service.call(request, 'Ams/EquipmentCost/WorkOrderCostsByWorkOrder');
    };
    return EquipmentCostService;
}());
export { EquipmentCostService };
