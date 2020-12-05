import { WOAttachment } from '../core/types/WOAttachment';
import { RequestAttachment } from '../core/types/RequestAttachment';
import { InspAttachment } from '../core/types/InspAttachment';
import { ServiceTypes } from '../core/service-types';
export declare namespace AttachmentsServiceTypes {
    namespace Requests {
        interface AddInspectionAttachment extends ServiceTypes.CoreRequestBase {
            AttachmentType?: number;
            Comments?: string;
            Filename?: string;
            InspectionId: number;
        }
        interface AddRequestAttachment extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            Filename?: string;
            RequestId: number;
        }
        interface AddWorkOrderAttachment extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            Filename?: string;
            TaskId?: number;
            WorkOrderId: string;
            WorkOrderSid: number;
        }
        interface DeleteInspectionAttachments extends ServiceTypes.CoreRequestBase {
            AttachmentIds: number[];
        }
        interface DeleteRequestAttachments extends ServiceTypes.CoreRequestBase {
            AttachmentIds: number[];
        }
        interface DeleteWorkOrderAttachments extends ServiceTypes.CoreRequestBase {
            AttachmentIds: number[];
        }
        interface DownloadInspectionAttachment extends ServiceTypes.CoreRequestBase {
            AttachmentId: number;
        }
        interface DownloadRequestAttachment extends ServiceTypes.CoreRequestBase {
            AttachmentId: number;
        }
        interface DownloadWorkOrderAttachment extends ServiceTypes.CoreRequestBase {
            AttachmentId: number;
        }
        interface InspectionAttachmentById extends ServiceTypes.CoreRequestBase {
            AttachmentId: number;
        }
        interface InspectionAttachments extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        interface RequestAttachmentById extends ServiceTypes.CoreRequestBase {
            AttachmentId: number;
        }
        interface RequestAttachments extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        interface WorkOrderAttachments extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
            WorkOrderSids: number[];
        }
    }
    namespace Responses {
        interface AddInspectionAttachment extends ServiceTypes.CoreResponseBase_obsolete_<InspAttachment> {
        }
        interface AddRequestAttachment extends ServiceTypes.CoreResponseBase_obsolete_<RequestAttachment> {
        }
        interface AddWorkOrderAttachment extends ServiceTypes.CoreResponseBase_obsolete_<WOAttachment> {
        }
        interface DeleteInspectionAttachments extends ServiceTypes.CoreResponseBase_obsolete {
        }
        interface DeleteRequestAttachments extends ServiceTypes.CoreResponseBase_obsolete {
        }
        interface DeleteWorkOrderAttachments extends ServiceTypes.CoreResponseBase_obsolete {
        }
        interface DownloadInspectionAttachment extends ServiceTypes.CoreResponseBase_obsolete {
        }
        interface DownloadRequestAttachment extends ServiceTypes.CoreResponseBase_obsolete {
        }
        interface DownloadWorkOrderAttachment extends ServiceTypes.CoreResponseBase_obsolete {
        }
        interface InspectionAttachmentById extends ServiceTypes.CoreResponseBase_obsolete_<InspAttachment> {
        }
        interface InspectionAttachments extends ServiceTypes.CoreResponseBase_obsolete_<InspAttachment[]> {
        }
        interface RequestAttachmentById extends ServiceTypes.CoreResponseBase_obsolete_<RequestAttachment> {
        }
        interface RequestAttachments extends ServiceTypes.CoreResponseBase_obsolete_<RequestAttachment[]> {
        }
        interface WorkOrderAttachments extends ServiceTypes.CoreResponseBase_obsolete_<WOAttachment[]> {
        }
    }
    interface IAttachmentsService {
        AddInspectionAttachment?: (request: Requests.AddInspectionAttachment) => Promise<Responses.AddInspectionAttachment>;
        AddRequestAttachment?: (request: Requests.AddRequestAttachment) => Promise<Responses.AddRequestAttachment>;
        AddWorkOrderAttachment?: (request: Requests.AddWorkOrderAttachment) => Promise<Responses.AddWorkOrderAttachment>;
        DeleteInspectionAttachments?: (request: Requests.DeleteInspectionAttachments) => Promise<Responses.DeleteInspectionAttachments>;
        DeleteRequestAttachments?: (request: Requests.DeleteRequestAttachments) => Promise<Responses.DeleteRequestAttachments>;
        DeleteWorkOrderAttachments?: (request: Requests.DeleteWorkOrderAttachments) => Promise<Responses.DeleteWorkOrderAttachments>;
        DownloadInspectionAttachment?: (request: Requests.DownloadInspectionAttachment) => Promise<Responses.DownloadInspectionAttachment>;
        DownloadRequestAttachment?: (request: Requests.DownloadRequestAttachment) => Promise<Responses.DownloadRequestAttachment>;
        DownloadWorkOrderAttachment?: (request: Requests.DownloadWorkOrderAttachment) => Promise<Responses.DownloadWorkOrderAttachment>;
        InspectionAttachmentById?: (request: Requests.InspectionAttachmentById) => Promise<Responses.InspectionAttachmentById>;
        InspectionAttachments?: (request: Requests.InspectionAttachments) => Promise<Responses.InspectionAttachments>;
        RequestAttachmentById?: (request: Requests.RequestAttachmentById) => Promise<Responses.RequestAttachmentById>;
        RequestAttachments?: (request: Requests.RequestAttachments) => Promise<Responses.RequestAttachments>;
        WorkOrderAttachments?: (request: Requests.WorkOrderAttachments) => Promise<Responses.WorkOrderAttachments>;
    }
}
