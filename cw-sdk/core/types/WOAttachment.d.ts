import { AttachmentBase } from './AttachmentBase';
export interface WOAttachment extends AttachmentBase {
    AttachedBy?: string;
    Id?: number;
    TaskName?: string;
    WorkOrderId?: string;
    WorkOrderSid?: number;
    WOTaskId?: number;
}
