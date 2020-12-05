import { IApiService } from './i-api-service';
import { AttachmentsServiceTypes as SvcDef } from '../api-interface/AttachmentsService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IAttachmentsService = SvcDef.IAttachmentsService;
export declare class AttachmentsService implements IAttachmentsService {
    private _service;
    constructor(service: IApiService);
    AddInspectionAttachment(request: Requests.AddInspectionAttachment): Promise<Responses.AddInspectionAttachment>;
    AddRequestAttachment(request: Requests.AddRequestAttachment): Promise<Responses.AddRequestAttachment>;
    AddWorkOrderAttachment(request: Requests.AddWorkOrderAttachment): Promise<Responses.AddWorkOrderAttachment>;
    DeleteInspectionAttachments(request: Requests.DeleteInspectionAttachments): Promise<Responses.DeleteInspectionAttachments>;
    DeleteRequestAttachments(request: Requests.DeleteRequestAttachments): Promise<Responses.DeleteRequestAttachments>;
    DeleteWorkOrderAttachments(request: Requests.DeleteWorkOrderAttachments): Promise<Responses.DeleteWorkOrderAttachments>;
    DownloadInspectionAttachment(request: Requests.DownloadInspectionAttachment): Promise<Responses.DownloadInspectionAttachment>;
    DownloadRequestAttachment(request: Requests.DownloadRequestAttachment): Promise<Responses.DownloadRequestAttachment>;
    DownloadWorkOrderAttachment(request: Requests.DownloadWorkOrderAttachment): Promise<Responses.DownloadWorkOrderAttachment>;
    InspectionAttachmentById(request: Requests.InspectionAttachmentById): Promise<Responses.InspectionAttachmentById>;
    InspectionAttachments(request: Requests.InspectionAttachments): Promise<Responses.InspectionAttachments>;
    RequestAttachmentById(request: Requests.RequestAttachmentById): Promise<Responses.RequestAttachmentById>;
    RequestAttachments(request: Requests.RequestAttachments): Promise<Responses.RequestAttachments>;
    WorkOrderAttachments(request: Requests.WorkOrderAttachments): Promise<Responses.WorkOrderAttachments>;
}
