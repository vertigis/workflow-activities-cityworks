import { AttachmentActivityTagsItem } from './AttachmentActivityTagsItem';
export interface ViewDataUploadFilesResult {
    AttachedBy?: string;
    CaObjectId?: number;
    CaTaskId?: number;
    Comments?: string;
    Date?: Date;
    DeleteType?: string;
    DeleteUrl?: string;
    Description?: string;
    LabelText?: string;
    Name?: string;
    ReldocsId?: number;
    Size?: number;
    Tags?: AttachmentActivityTagsItem[];
    TaskCode?: string;
    TaskDesc?: string;
    ThumbnailUrl?: string;
    Title?: string;
    Type?: string;
    Url?: string;
}
