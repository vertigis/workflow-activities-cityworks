export class AttachmentsService {
    constructor(service) { this._service = service; }
    AddInspectionAttachment(request) {
        return this._service.call(request, 'Ams/Attachments/AddInspectionAttachment');
    }
    AddRequestAttachment(request) {
        return this._service.call(request, 'Ams/Attachments/AddRequestAttachment');
    }
    AddWorkOrderAttachment(request) {
        return this._service.call(request, 'Ams/Attachments/AddWorkOrderAttachment');
    }
    DeleteInspectionAttachments(request) {
        return this._service.call(request, 'Ams/Attachments/DeleteInspectionAttachments');
    }
    DeleteRequestAttachments(request) {
        return this._service.call(request, 'Ams/Attachments/DeleteRequestAttachments');
    }
    DeleteWorkOrderAttachments(request) {
        return this._service.call(request, 'Ams/Attachments/DeleteWorkOrderAttachments');
    }
    DownloadInspectionAttachment(request) {
        return this._service.call(request, 'Ams/Attachments/DownloadInspectionAttachment');
    }
    DownloadRequestAttachment(request) {
        return this._service.call(request, 'Ams/Attachments/DownloadRequestAttachment');
    }
    DownloadWorkOrderAttachment(request) {
        return this._service.call(request, 'Ams/Attachments/DownloadWorkOrderAttachment');
    }
    InspectionAttachmentById(request) {
        return this._service.call(request, 'Ams/Attachments/InspectionAttachmentById');
    }
    InspectionAttachments(request) {
        return this._service.call(request, 'Ams/Attachments/InspectionAttachments');
    }
    RequestAttachmentById(request) {
        return this._service.call(request, 'Ams/Attachments/RequestAttachmentById');
    }
    RequestAttachments(request) {
        return this._service.call(request, 'Ams/Attachments/RequestAttachments');
    }
    WorkOrderAttachments(request) {
        return this._service.call(request, 'Ams/Attachments/WorkOrderAttachments');
    }
}
