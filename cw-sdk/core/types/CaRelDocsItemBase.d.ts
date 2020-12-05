import { AttachmentActivityTagsItem } from './AttachmentActivityTagsItem';
export interface CaRelDocsItemBase {
    CaObjectId?: number;
    CaRelDocId?: number;
    CommentText?: string;
    CreatedBy?: number;
    CreatedByLoginId?: string;
    DateCreated?: Date;
    DateModified?: Date;
    Description?: string;
    DocContentInString?: string;
    DocName?: string;
    DocumentContent?: number[];
    LabelText?: string;
    Location?: string;
    LocationType?: string;
    ModifiedBy?: number;
    Tags?: AttachmentActivityTagsItem[];
    Title?: string;
}
