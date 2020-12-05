import { AttachmentBase } from './AttachmentBase';
export interface RequestAttachment extends AttachmentBase {
    AttachedBy?: string;
    Id?: number;
    RequestId?: number;
}
