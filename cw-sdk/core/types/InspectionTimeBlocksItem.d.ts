import { InspTimeBlocksDetailItem } from './InspTimeBlocksDetailItem';
export interface InspectionTimeBlocksItem {
    CreatedBy?: number;
    DateCreated?: Date;
    DateModified?: Date;
    EndTime?: string;
    InspectionTimeBlockId?: number;
    InspTimeBlockDetails?: InspTimeBlocksDetailItem[];
    LabelText?: string;
    ModifiedBy?: number;
    StartTime?: string;
}
