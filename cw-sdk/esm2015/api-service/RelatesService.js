export class RelatesService {
    constructor(service) { this._service = service; }
    ByTableName(request) {
        return this._service.call(request, 'Ams/Relates/ByTableName');
    }
    EquipChangeOutChangedBy(request) {
        return this._service.call(request, 'Ams/Relates/EquipChangeOutChangedBy');
    }
    InspectionCancelledBy(request) {
        return this._service.call(request, 'Ams/Relates/InspectionCancelledBy');
    }
    InspectionClosedBy(request) {
        return this._service.call(request, 'Ams/Relates/InspectionClosedBy');
    }
    InspectionEditAfterClose(request) {
        return this._service.call(request, 'Ams/Relates/InspectionEditAfterClose');
    }
    InspectionInitiatedBy(request) {
        return this._service.call(request, 'Ams/Relates/InspectionInitiatedBy');
    }
    InspectionInspectedBy(request) {
        return this._service.call(request, 'Ams/Relates/InspectionInspectedBy');
    }
    InspectionSubmitTo(request) {
        return this._service.call(request, 'Ams/Relates/InspectionSubmitTo');
    }
    ProblemLeafDispatchTo(request) {
        return this._service.call(request, 'Ams/Relates/ProblemLeafDispatchTo');
    }
    ProblemLeafSubmitTo(request) {
        return this._service.call(request, 'Ams/Relates/ProblemLeafSubmitTo');
    }
    ProjectApprovedBy(request) {
        return this._service.call(request, 'Ams/Relates/ProjectApprovedBy');
    }
    ProjectAssignedTo(request) {
        return this._service.call(request, 'Ams/Relates/ProjectAssignedTo');
    }
    ProjectInitiatedBy(request) {
        return this._service.call(request, 'Ams/Relates/ProjectInitiatedBy');
    }
    RequestCancelledBy(request) {
        return this._service.call(request, 'Ams/Relates/RequestCancelledBy');
    }
    RequestClosedBy(request) {
        return this._service.call(request, 'Ams/Relates/RequestClosedBy');
    }
    RequestDispatchTo(request) {
        return this._service.call(request, 'Ams/Relates/RequestDispatchTo');
    }
    RequestEditAfterClose(request) {
        return this._service.call(request, 'Ams/Relates/RequestEditAfterClose');
    }
    RequestInitiatedBy(request) {
        return this._service.call(request, 'Ams/Relates/RequestInitiatedBy');
    }
    RequestSubmitTo(request) {
        return this._service.call(request, 'Ams/Relates/RequestSubmitTo');
    }
    SearchViewCost(request) {
        return this._service.call(request, 'Ams/Relates/SearchViewCost');
    }
    TableFields(request) {
        return this._service.call(request, 'Ams/Relates/TableFields');
    }
    TaskAssignTo(request) {
        return this._service.call(request, 'Ams/Relates/TaskAssignTo');
    }
    TransferRequestedBy(request) {
        return this._service.call(request, 'Ams/Relates/TransferRequestedBy');
    }
    WorkOrderCancelledBy(request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderCancelledBy');
    }
    WorkOrderClosedBy(request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderClosedBy');
    }
    WorkOrderCompletedBy(request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderCompletedBy');
    }
    WorkOrderEditAfterClose(request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderEditAfterClose');
    }
    WorkOrderInitiatedBy(request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderInitiatedBy');
    }
    WorkOrderRequestedBy(request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderRequestedBy');
    }
    WorkOrderSubmitTo(request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderSubmitTo');
    }
    WorkOrderSupervisors(request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderSupervisors');
    }
}
