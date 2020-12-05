var RelatesService = /** @class */ (function () {
    function RelatesService(service) {
        this._service = service;
    }
    RelatesService.prototype.ByTableName = function (request) {
        return this._service.call(request, 'Ams/Relates/ByTableName');
    };
    RelatesService.prototype.EquipChangeOutChangedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/EquipChangeOutChangedBy');
    };
    RelatesService.prototype.InspectionCancelledBy = function (request) {
        return this._service.call(request, 'Ams/Relates/InspectionCancelledBy');
    };
    RelatesService.prototype.InspectionClosedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/InspectionClosedBy');
    };
    RelatesService.prototype.InspectionEditAfterClose = function (request) {
        return this._service.call(request, 'Ams/Relates/InspectionEditAfterClose');
    };
    RelatesService.prototype.InspectionInitiatedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/InspectionInitiatedBy');
    };
    RelatesService.prototype.InspectionInspectedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/InspectionInspectedBy');
    };
    RelatesService.prototype.InspectionSubmitTo = function (request) {
        return this._service.call(request, 'Ams/Relates/InspectionSubmitTo');
    };
    RelatesService.prototype.ProblemLeafDispatchTo = function (request) {
        return this._service.call(request, 'Ams/Relates/ProblemLeafDispatchTo');
    };
    RelatesService.prototype.ProblemLeafSubmitTo = function (request) {
        return this._service.call(request, 'Ams/Relates/ProblemLeafSubmitTo');
    };
    RelatesService.prototype.ProjectApprovedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/ProjectApprovedBy');
    };
    RelatesService.prototype.ProjectAssignedTo = function (request) {
        return this._service.call(request, 'Ams/Relates/ProjectAssignedTo');
    };
    RelatesService.prototype.ProjectInitiatedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/ProjectInitiatedBy');
    };
    RelatesService.prototype.RequestCancelledBy = function (request) {
        return this._service.call(request, 'Ams/Relates/RequestCancelledBy');
    };
    RelatesService.prototype.RequestClosedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/RequestClosedBy');
    };
    RelatesService.prototype.RequestDispatchTo = function (request) {
        return this._service.call(request, 'Ams/Relates/RequestDispatchTo');
    };
    RelatesService.prototype.RequestEditAfterClose = function (request) {
        return this._service.call(request, 'Ams/Relates/RequestEditAfterClose');
    };
    RelatesService.prototype.RequestInitiatedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/RequestInitiatedBy');
    };
    RelatesService.prototype.RequestSubmitTo = function (request) {
        return this._service.call(request, 'Ams/Relates/RequestSubmitTo');
    };
    RelatesService.prototype.SearchViewCost = function (request) {
        return this._service.call(request, 'Ams/Relates/SearchViewCost');
    };
    RelatesService.prototype.TableFields = function (request) {
        return this._service.call(request, 'Ams/Relates/TableFields');
    };
    RelatesService.prototype.TaskAssignTo = function (request) {
        return this._service.call(request, 'Ams/Relates/TaskAssignTo');
    };
    RelatesService.prototype.TransferRequestedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/TransferRequestedBy');
    };
    RelatesService.prototype.WorkOrderCancelledBy = function (request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderCancelledBy');
    };
    RelatesService.prototype.WorkOrderClosedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderClosedBy');
    };
    RelatesService.prototype.WorkOrderCompletedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderCompletedBy');
    };
    RelatesService.prototype.WorkOrderEditAfterClose = function (request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderEditAfterClose');
    };
    RelatesService.prototype.WorkOrderInitiatedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderInitiatedBy');
    };
    RelatesService.prototype.WorkOrderRequestedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderRequestedBy');
    };
    RelatesService.prototype.WorkOrderSubmitTo = function (request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderSubmitTo');
    };
    RelatesService.prototype.WorkOrderSupervisors = function (request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderSupervisors');
    };
    return RelatesService;
}());
export { RelatesService };
