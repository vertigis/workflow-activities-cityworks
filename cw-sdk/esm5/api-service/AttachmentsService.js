var AttachmentsService = /** @class */ (function () {
    function AttachmentsService(service) {
        this._service = service;
    }
    AttachmentsService.prototype.AddInspectionAttachment = function (request) {
        return this._service.call(request, 'Ams/Attachments/AddInspectionAttachment');
    };
    AttachmentsService.prototype.AddRequestAttachment = function (request) {
        return this._service.call(request, 'Ams/Attachments/AddRequestAttachment');
    };
    AttachmentsService.prototype.AddWorkOrderAttachment = function (request) {
        return this._service.call(request, 'Ams/Attachments/AddWorkOrderAttachment');
    };
    AttachmentsService.prototype.DeleteInspectionAttachments = function (request) {
        return this._service.call(request, 'Ams/Attachments/DeleteInspectionAttachments');
    };
    AttachmentsService.prototype.DeleteRequestAttachments = function (request) {
        return this._service.call(request, 'Ams/Attachments/DeleteRequestAttachments');
    };
    AttachmentsService.prototype.DeleteWorkOrderAttachments = function (request) {
        return this._service.call(request, 'Ams/Attachments/DeleteWorkOrderAttachments');
    };
    AttachmentsService.prototype.DownloadInspectionAttachment = function (request) {
        return this._service.call(request, 'Ams/Attachments/DownloadInspectionAttachment');
    };
    AttachmentsService.prototype.DownloadRequestAttachment = function (request) {
        return this._service.call(request, 'Ams/Attachments/DownloadRequestAttachment');
    };
    AttachmentsService.prototype.DownloadWorkOrderAttachment = function (request) {
        return this._service.call(request, 'Ams/Attachments/DownloadWorkOrderAttachment');
    };
    AttachmentsService.prototype.InspectionAttachmentById = function (request) {
        return this._service.call(request, 'Ams/Attachments/InspectionAttachmentById');
    };
    AttachmentsService.prototype.InspectionAttachments = function (request) {
        return this._service.call(request, 'Ams/Attachments/InspectionAttachments');
    };
    AttachmentsService.prototype.RequestAttachmentById = function (request) {
        return this._service.call(request, 'Ams/Attachments/RequestAttachmentById');
    };
    AttachmentsService.prototype.RequestAttachments = function (request) {
        return this._service.call(request, 'Ams/Attachments/RequestAttachments');
    };
    AttachmentsService.prototype.WorkOrderAttachments = function (request) {
        return this._service.call(request, 'Ams/Attachments/WorkOrderAttachments');
    };
    return AttachmentsService;
}());
export { AttachmentsService };
