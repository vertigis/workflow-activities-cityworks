import { AttachmentFileType } from './AttachmentFileType';
export interface AttachmentBase {
    AttachedBySid?: number;
    Attachment?: string;
    AttachmentType?: AttachmentFileType;
    Comments?: string;
    DateTimeAttached?: Date;
}
