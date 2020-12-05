var MaterialCostService = /** @class */ (function () {
    function MaterialCostService(service) {
        this._service = service;
    }
    MaterialCostService.prototype.AddWorkOrderCosts = function (request) {
        return this._service.call(request, 'Ams/MaterialCost/AddWorkOrderCosts');
    };
    MaterialCostService.prototype.DeleteWorkOrderCosts = function (request) {
        return this._service.call(request, 'Ams/MaterialCost/DeleteWorkOrderCosts');
    };
    MaterialCostService.prototype.WorkOrderCostsByWorkOrder = function (request) {
        return this._service.call(request, 'Ams/MaterialCost/WorkOrderCostsByWorkOrder');
    };
    return MaterialCostService;
}());
export { MaterialCostService };
