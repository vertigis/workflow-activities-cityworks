import { AssetRatingMethod } from './AssetRatingMethod';
import { QASequenceModel } from './QASequenceModel';
import { WorkDurationUnit } from './WorkDurationUnit';
import { RepeatType } from './RepeatType';
import { RepeatIntervalUnit } from './RepeatIntervalUnit';
import { RepeatFromDate } from './RepeatFromDate';
export interface InspTemplateBase {
    AllowSignature?: boolean;
    CalculateConditionScore?: boolean;
    CycleFrom?: RepeatFromDate;
    CycleIncludeWeekends?: boolean;
    CycleIntervalNum?: number;
    CycleIntervalUnit?: RepeatIntervalUnit;
    CycleType?: RepeatType;
    DateModified?: Date;
    Description?: string;
    Duration?: number;
    DurationUnit?: WorkDurationUnit;
    Effort?: number;
    InspTemplateId?: number;
    InspTemplateName?: string;
    IsActive?: boolean;
    PrintTemplate?: string;
    Priority?: string;
    QAModel?: QASequenceModel;
    RatingMethod?: AssetRatingMethod;
    RequireAssetOnClose?: boolean;
    SubmitToEmployeeSid?: number;
    SubmitToName?: string;
    WorkMonth?: string;
}