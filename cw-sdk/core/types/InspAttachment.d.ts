import { AttachmentFileType } from './AttachmentFileType';
import { AttachmentBase } from './AttachmentBase';
export interface InspAttachment extends AttachmentBase {
    AttachedBy?: string;
    AttachmentType?: AttachmentFileType;
    Id?: number;
    InspectionId?: number;
}
