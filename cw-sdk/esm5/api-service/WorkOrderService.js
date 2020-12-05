var WorkOrderService = /** @class */ (function () {
    function WorkOrderService(service) {
        this._service = service;
    }
    WorkOrderService.prototype.AddComments = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/AddComments');
    };
    WorkOrderService.prototype.AddEntities = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/AddEntities');
    };
    WorkOrderService.prototype.AuditLog = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/AuditLog');
    };
    WorkOrderService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/ById');
    };
    WorkOrderService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/ByIds');
    };
    WorkOrderService.prototype.BySid = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/BySid');
    };
    WorkOrderService.prototype.BySids = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/BySids');
    };
    WorkOrderService.prototype.Cancel = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Cancel');
    };
    WorkOrderService.prototype.Categories = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Categories');
    };
    WorkOrderService.prototype.ChangeCustomFieldCategory = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/ChangeCustomFieldCategory');
    };
    WorkOrderService.prototype.Close = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Close');
    };
    WorkOrderService.prototype.Combine = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Combine');
    };
    WorkOrderService.prototype.Comments = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Comments');
    };
    WorkOrderService.prototype.CommentsByWorkOrderIds = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CommentsByWorkOrderIds');
    };
    WorkOrderService.prototype.Create = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Create');
    };
    WorkOrderService.prototype.CreateFromInspection = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CreateFromInspection');
    };
    WorkOrderService.prototype.CreateFromParent = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CreateFromParent');
    };
    WorkOrderService.prototype.CreateFromServiceRequest = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CreateFromServiceRequest');
    };
    WorkOrderService.prototype.CreateSearchDefinition = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CreateSearchDefinition');
    };
    WorkOrderService.prototype.CustomFields = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CustomFields');
    };
    WorkOrderService.prototype.CustomFieldsByWorkOrderSids = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CustomFieldsByWorkOrderSids');
    };
    WorkOrderService.prototype.CycleFrom = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CycleFrom');
    };
    WorkOrderService.prototype.CycleIntervals = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CycleIntervals');
    };
    WorkOrderService.prototype.CycleTypes = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CycleTypes');
    };
    WorkOrderService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Delete');
    };
    WorkOrderService.prototype.Entities = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Entities');
    };
    WorkOrderService.prototype.ExpenseTypes = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/ExpenseTypes');
    };
    WorkOrderService.prototype.InstructionsByWorkOrderIds = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/InstructionsByWorkOrderIds');
    };
    WorkOrderService.prototype.InstructionsByWorkOrderSids = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/InstructionsByWorkOrderSids');
    };
    WorkOrderService.prototype.LinkInspections = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/LinkInspections');
    };
    WorkOrderService.prototype.LinkServiceRequests = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/LinkServiceRequests');
    };
    WorkOrderService.prototype.Move = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Move');
    };
    WorkOrderService.prototype.Priorities = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Priorities');
    };
    WorkOrderService.prototype.RemoveEntities = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/RemoveEntities');
    };
    WorkOrderService.prototype.ReOpen = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/ReOpen');
    };
    WorkOrderService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Search');
    };
    WorkOrderService.prototype.SearchForSids = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/SearchForSids');
    };
    WorkOrderService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/SearchObject');
    };
    WorkOrderService.prototype.Stages = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Stages');
    };
    WorkOrderService.prototype.Statuses = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Statuses');
    };
    WorkOrderService.prototype.SubmitTos = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/SubmitTos');
    };
    WorkOrderService.prototype.Supervisors = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Supervisors');
    };
    WorkOrderService.prototype.Template = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Template');
    };
    WorkOrderService.prototype.TemplateCustomFields = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/TemplateCustomFields');
    };
    WorkOrderService.prototype.Templates = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Templates');
    };
    WorkOrderService.prototype.Uncancel = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Uncancel');
    };
    WorkOrderService.prototype.UnlinkInspections = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/UnlinkInspections');
    };
    WorkOrderService.prototype.UnlinkServiceRequests = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/UnlinkServiceRequests');
    };
    WorkOrderService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Update');
    };
    WorkOrderService.prototype.UpdateEntity = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/UpdateEntity');
    };
    WorkOrderService.prototype.WorkOrderInspections = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/WorkOrderInspections');
    };
    WorkOrderService.prototype.WorkOrderServiceRequests = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/WorkOrderServiceRequests');
    };
    WorkOrderService.prototype.WorkOrderWorkOrders = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/WorkOrderWorkOrders');
    };
    return WorkOrderService;
}());
export { WorkOrderService };
