import { InspTemplateBase } from '../core/types/InspTemplateBase';
import { EmployeeNameId } from '../core/types/EmployeeNameId';
import { InspQuestion } from '../core/types/InspQuestion';
import { InspTemplateQA } from '../core/types/InspTemplateQA';
import { GISPoint } from '../core/types/GISPoint';
import { WorkOrderInspection } from '../core/types/WorkOrderInspection';
import { RequestInspection } from '../core/types/RequestInspection';
import { InspectionRelatedInspection } from '../core/types/InspectionRelatedInspection';
import { CodeDesc } from '../core/types/CodeDesc';
import { SearchDefinition } from '../core/types/SearchDefinition';
import { InspectionBase } from '../core/types/InspectionBase';
import { CWMetaData } from '../core/types/CWMetaData';
import { InspectionQuestionDetails } from '../core/types/InspectionQuestionDetails';
import { InspectionAnswer } from '../core/types/InspectionAnswer';
import { GISExtent } from '../core/types/GISExtent';
import { WorkOrderEntity } from '../core/types/WorkOrderEntity';
import { WorkOrderEntityBase } from '../core/types/WorkOrderEntityBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace InspectionServiceTypes {
    namespace Requests {
        interface AddEntity extends ServiceTypes.CoreRequestBase {
            Entity?: WorkOrderEntityBase;
            EntityType: string;
            EntityUid: string;
            Facility_Id?: string;
            InspectionId: number;
            Level_Id?: string;
            UpdateXY?: boolean;
        }
        interface Answers extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
            InspectionIds: number[];
        }
        interface AuditLog extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
        }
        interface ById extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
        }
        interface ByIds extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        interface ByWorkOrderIds extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        interface Cancel extends ServiceTypes.CoreRequestBase {
            CancelReason?: string;
            DateCancelled?: Date;
            InspectionIds: number[];
        }
        interface Close extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        interface Create extends ServiceTypes.CoreRequestBase {
            Address?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            District?: string;
            Entity?: WorkOrderEntity;
            EntityType: string;
            Facility_Id?: string;
            ForemanRecomnd?: string;
            GeocodeAddress?: boolean;
            GetGisData?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspTemplateId: number;
            Level_Id?: string;
            Location?: string;
            MapPage?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            ObservationSum?: string;
            Priority?: string;
            PrjStartDate?: Date;
            RepairsMade?: string;
            Shop?: string;
            Status?: string;
            StreetName?: string;
            SubmitToEmployeeSid?: number;
            Text1?: string;
            Text10?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TileNo?: string;
            WKID?: number;
            WKT?: string;
            X?: number;
            Y?: number;
        }
        interface CreateFromParent extends ServiceTypes.CoreRequestBase {
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Entity?: WorkOrderEntity;
            EntityType: string;
            Facility_Id?: string;
            ForemanRecomnd?: string;
            GetGisData?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspectionId?: number;
            InspTemplateId: number;
            Level_Id?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            ObservationSum?: string;
            RepairsMade?: string;
            Status?: string;
            SubmitToEmployeeSid?: number;
            Text1?: string;
            Text10?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
        }
        interface CreateFromServiceRequest extends ServiceTypes.CoreRequestBase {
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Entity?: WorkOrderEntity;
            EntityType: string;
            Facility_Id?: string;
            ForemanRecomnd?: string;
            GetGisData?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspTemplateId: number;
            Level_Id?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            ObservationSum?: string;
            RepairsMade?: string;
            RequestId: number;
            Status?: string;
            SubmitToEmployeeSid?: number;
            Text1?: string;
            Text10?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
        }
        interface CreateFromWorkOrder extends ServiceTypes.CoreRequestBase {
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Entity?: WorkOrderEntity;
            EntityType: string;
            Facility_Id?: string;
            ForemanRecomnd?: string;
            GetGisData?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspTemplateId: number;
            Level_Id?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            ObservationSum?: string;
            ProjectedStartDate?: Date;
            RepairsMade?: string;
            Status?: string;
            SubmitToEmployeeSid?: number;
            Text1?: string;
            Text10?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            WorkOrderId: string;
            WorkOrderSid: number;
        }
        interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            ActFinishDateBegin?: Date;
            ActFinishDateEnd?: Date;
            ActFinishDateIsNull?: boolean;
            ActFinishDateNotInRange?: boolean;
            ActFinishDateRangeIncludeCurrent?: boolean;
            ActFinishDateRangeLast?: number;
            ActFinishDateRangeNext?: number;
            ActFinishDateRangeUnits?: number;
            Canceled?: boolean;
            CancelledBy?: string[];
            CancelledBySid?: number[];
            CancelledBySidIsInList?: boolean;
            CancelReason?: string[];
            Closed?: boolean;
            ClosedBy?: string[];
            ClosedBySid?: number[];
            ClosedBySidIsInList?: boolean;
            CondRatingIncludeNulls?: boolean;
            CondRatingIsMaxValueExclusive?: boolean;
            CondRatingIsMinValueExclusive?: boolean;
            CondRatingMaxValue?: number;
            CondRatingMinValue?: number;
            CondRatingRangeType?: number;
            CondRatingValues?: number[];
            CondScoreIncludeNulls?: boolean;
            CondScoreIsMaxValueExclusive?: boolean;
            CondScoreIsMinValueExclusive?: boolean;
            CondScoreMaxValue?: number;
            CondScoreMinValue?: number;
            CondScoreRangeType?: number;
            CondScoreValues?: number[];
            CreatedByCycle?: boolean;
            CycleFrom?: number[];
            CycleIntervalNumIncludeNulls?: boolean;
            CycleIntervalNumIsMaxValueExclusive?: boolean;
            CycleIntervalNumIsMinValueExclusive?: boolean;
            CycleIntervalNumMaxValue?: number;
            CycleIntervalNumMinValue?: number;
            CycleIntervalNumRangeType?: number;
            CycleIntervalNumValues?: number[];
            CycleIntervalUnit?: number[];
            CycleType?: number[];
            Date1Begin?: Date;
            Date1End?: Date;
            Date1IsNull?: boolean;
            Date1NotInRange?: boolean;
            Date1RangeIncludeCurrent?: boolean;
            Date1RangeLast?: number;
            Date1RangeNext?: number;
            Date1RangeUnits?: number;
            Date2Begin?: Date;
            Date2End?: Date;
            Date2IsNull?: boolean;
            Date2NotInRange?: boolean;
            Date2RangeIncludeCurrent?: boolean;
            Date2RangeLast?: number;
            Date2RangeNext?: number;
            Date2RangeUnits?: number;
            Date3Begin?: Date;
            Date3End?: Date;
            Date3IsNull?: boolean;
            Date3NotInRange?: boolean;
            Date3RangeIncludeCurrent?: boolean;
            Date3RangeLast?: number;
            Date3RangeNext?: number;
            Date3RangeUnits?: number;
            Date4Begin?: Date;
            Date4End?: Date;
            Date4IsNull?: boolean;
            Date4NotInRange?: boolean;
            Date4RangeIncludeCurrent?: boolean;
            Date4RangeLast?: number;
            Date4RangeNext?: number;
            Date4RangeUnits?: number;
            Date5Begin?: Date;
            Date5End?: Date;
            Date5IsNull?: boolean;
            Date5NotInRange?: boolean;
            Date5RangeIncludeCurrent?: boolean;
            Date5RangeLast?: number;
            Date5RangeNext?: number;
            Date5RangeUnits?: number;
            DateCancelledBegin?: Date;
            DateCancelledEnd?: Date;
            DateCancelledIsNull?: boolean;
            DateCancelledNotInRange?: boolean;
            DateCancelledRangeIncludeCurrent?: boolean;
            DateCancelledRangeLast?: number;
            DateCancelledRangeNext?: number;
            DateCancelledRangeUnits?: number;
            DateClosedBegin?: Date;
            DateClosedEnd?: Date;
            DateClosedIsNull?: boolean;
            DateClosedNotInRange?: boolean;
            DateClosedRangeIncludeCurrent?: boolean;
            DateClosedRangeLast?: number;
            DateClosedRangeNext?: number;
            DateClosedRangeUnits?: number;
            DateSubmitToBegin?: Date;
            DateSubmitToEnd?: Date;
            DateSubmitToIsNull?: boolean;
            DateSubmitToNotInRange?: boolean;
            DateSubmitToRangeIncludeCurrent?: boolean;
            DateSubmitToRangeLast?: number;
            DateSubmitToRangeNext?: number;
            DateSubmitToRangeUnits?: number;
            District?: string[];
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValues?: number[];
            EnableEurl?: boolean;
            EntitySidIncludeNulls?: boolean;
            EntitySidIsMaxValueExclusive?: boolean;
            EntitySidIsMinValueExclusive?: boolean;
            EntitySidMaxValue?: number;
            EntitySidMinValue?: number;
            EntitySidRangeType?: number;
            EntitySidValues?: number[];
            EntityType?: string;
            EntityUids?: string[];
            Extent?: GISExtent;
            Facility_Id?: string[];
            FeatureIdIncludeNulls?: boolean;
            FeatureIdIsMaxValueExclusive?: boolean;
            FeatureIdIsMinValueExclusive?: boolean;
            FeatureIdMaxValue?: number;
            FeatureIdMinValue?: number;
            FeatureIdRangeType?: number;
            FeatureIdValues?: number[];
            FeatureType?: string;
            FeatureUids?: string[];
            ForemanRecomnd?: string[];
            FromDateBegin?: Date;
            FromDateEnd?: Date;
            FromDateIsNull?: boolean;
            FromDateNotInRange?: boolean;
            FromDateRangeIncludeCurrent?: boolean;
            FromDateRangeLast?: number;
            FromDateRangeNext?: number;
            FromDateRangeUnits?: number;
            HasAttachment?: boolean;
            HasRequest?: boolean;
            HasWorkOrder?: boolean;
            InitiateDateBegin?: Date;
            InitiateDateEnd?: Date;
            InitiateDateIsNull?: boolean;
            InitiateDateNotInRange?: boolean;
            InitiateDateRangeIncludeCurrent?: boolean;
            InitiateDateRangeLast?: number;
            InitiateDateRangeNext?: number;
            InitiateDateRangeUnits?: number;
            InitiatedBy?: string[];
            InitiatedByApp?: string[];
            InitiatedBySid?: number[];
            InitiatedBySidIsInList?: boolean;
            InspDateBegin?: Date;
            InspDateEnd?: Date;
            InspDateIsNull?: boolean;
            InspDateNotInRange?: boolean;
            InspDateRangeIncludeCurrent?: boolean;
            InspDateRangeLast?: number;
            InspDateRangeNext?: number;
            InspDateRangeUnits?: number;
            InspectedBy?: number[];
            InspectedBySid?: number[];
            InspectedBySidIsInList?: boolean;
            InspectionDateBegin?: Date;
            InspectionDateEnd?: Date;
            InspectionDateIsNull?: boolean;
            InspectionDateNotInRange?: boolean;
            InspectionDateRangeIncludeCurrent?: boolean;
            InspectionDateRangeLast?: number;
            InspectionDateRangeNext?: number;
            InspectionDateRangeUnits?: number;
            InspectionId?: number[];
            InspectionIdIsInList?: boolean;
            InspectionIds?: number[];
            InspTemplateId?: number[];
            InspTemplateIdIsInList?: boolean;
            InspTemplateName?: string[];
            IsAttached?: boolean;
            Level_Id?: string[];
            Location?: string[];
            MapPage?: string[];
            MaxResults?: number;
            Num1IncludeNulls?: boolean;
            Num1IsMaxValueExclusive?: boolean;
            Num1IsMinValueExclusive?: boolean;
            Num1MaxValue?: number;
            Num1MinValue?: number;
            Num1RangeType?: number;
            Num1Values?: number[];
            Num2IncludeNulls?: boolean;
            Num2IsMaxValueExclusive?: boolean;
            Num2IsMinValueExclusive?: boolean;
            Num2MaxValue?: number;
            Num2MinValue?: number;
            Num2RangeType?: number;
            Num2Values?: number[];
            Num3IncludeNulls?: boolean;
            Num3IsMaxValueExclusive?: boolean;
            Num3IsMinValueExclusive?: boolean;
            Num3MaxValue?: number;
            Num3MinValue?: number;
            Num3RangeType?: number;
            Num3Values?: number[];
            Num4IncludeNulls?: boolean;
            Num4IsMaxValueExclusive?: boolean;
            Num4IsMinValueExclusive?: boolean;
            Num4MaxValue?: number;
            Num4MinValue?: number;
            Num4RangeType?: number;
            Num4Values?: number[];
            Num5IncludeNulls?: boolean;
            Num5IsMaxValueExclusive?: boolean;
            Num5IsMinValueExclusive?: boolean;
            Num5MaxValue?: number;
            Num5MinValue?: number;
            Num5RangeType?: number;
            Num5Values?: number[];
            ObservationSum?: string[];
            ParentInspId?: number[];
            ParentInspIdIsInList?: boolean;
            PastDue?: boolean;
            Priority?: string[];
            PrjFinishDateBegin?: Date;
            PrjFinishDateEnd?: Date;
            PrjFinishDateIsNull?: boolean;
            PrjFinishDateNotInRange?: boolean;
            PrjFinishDateRangeIncludeCurrent?: boolean;
            PrjFinishDateRangeLast?: number;
            PrjFinishDateRangeNext?: number;
            PrjFinishDateRangeUnits?: number;
            PrjStartDateBegin?: Date;
            PrjStartDateEnd?: Date;
            PrjStartDateIsNull?: boolean;
            PrjStartDateNotInRange?: boolean;
            PrjStartDateRangeIncludeCurrent?: boolean;
            PrjStartDateRangeLast?: number;
            PrjStartDateRangeNext?: number;
            PrjStartDateRangeUnits?: number;
            RepairsMade?: string[];
            RequestId?: number[];
            RequestIdIsInList?: boolean;
            Resolution?: string[];
            SaveDefinition?: boolean;
            SearchName?: string;
            SharedWithin?: number;
            Shop?: string[];
            Status?: string[];
            StreetName?: string[];
            SubmitTo?: number[];
            SubmitToEmployeeSid?: number[];
            SubmitToEmployeeSidIsInList?: boolean;
            SubmitToName?: string[];
            Text1?: string[];
            Text10?: string[];
            Text2?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TileNo?: string[];
            Unattached?: boolean;
            UpdateMap?: boolean;
            WorkOrderId?: string[];
        }
        interface CycleFrom extends ServiceTypes.CoreRequestBase {
        }
        interface CycleIntervals extends ServiceTypes.CoreRequestBase {
        }
        interface CycleTypes extends ServiceTypes.CoreRequestBase {
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        interface Districts extends ServiceTypes.CoreRequestBase {
        }
        interface InspectionInspections extends ServiceTypes.CoreRequestBase {
            CreatedByCycle?: boolean;
            InspectionIds: number[];
        }
        interface InspectionServiceRequests extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        interface InspectionWorkOrders extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        interface Move extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
            WKID?: number;
            WKT?: string;
            X: number;
            Y: number;
        }
        interface Priorities extends ServiceTypes.CoreRequestBase {
        }
        interface QA extends ServiceTypes.CoreRequestBase {
            InspTemplateId: number;
        }
        interface Questions extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
            InspectionIds: number[];
        }
        interface RemoveEntity extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
            UpdateXY?: boolean;
        }
        interface Resolutions extends ServiceTypes.CoreRequestBase {
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            ActFinishDateBegin?: Date;
            ActFinishDateEnd?: Date;
            ActFinishDateIsNull?: boolean;
            ActFinishDateNotInRange?: boolean;
            ActFinishDateRangeIncludeCurrent?: boolean;
            ActFinishDateRangeLast?: number;
            ActFinishDateRangeNext?: number;
            ActFinishDateRangeUnits?: number;
            Canceled?: boolean;
            CancelledBy?: string[];
            CancelledBySid?: number[];
            CancelledBySidIsInList?: boolean;
            CancelReason?: string[];
            Closed?: boolean;
            ClosedBy?: string[];
            ClosedBySid?: number[];
            ClosedBySidIsInList?: boolean;
            CondRatingIncludeNulls?: boolean;
            CondRatingIsMaxValueExclusive?: boolean;
            CondRatingIsMinValueExclusive?: boolean;
            CondRatingMaxValue?: number;
            CondRatingMinValue?: number;
            CondRatingRangeType?: number;
            CondRatingValues?: number[];
            CondScoreIncludeNulls?: boolean;
            CondScoreIsMaxValueExclusive?: boolean;
            CondScoreIsMinValueExclusive?: boolean;
            CondScoreMaxValue?: number;
            CondScoreMinValue?: number;
            CondScoreRangeType?: number;
            CondScoreValues?: number[];
            CreatedByCycle?: boolean;
            CycleFrom?: number[];
            CycleIntervalNumIncludeNulls?: boolean;
            CycleIntervalNumIsMaxValueExclusive?: boolean;
            CycleIntervalNumIsMinValueExclusive?: boolean;
            CycleIntervalNumMaxValue?: number;
            CycleIntervalNumMinValue?: number;
            CycleIntervalNumRangeType?: number;
            CycleIntervalNumValues?: number[];
            CycleIntervalUnit?: number[];
            CycleType?: number[];
            Date1Begin?: Date;
            Date1End?: Date;
            Date1IsNull?: boolean;
            Date1NotInRange?: boolean;
            Date1RangeIncludeCurrent?: boolean;
            Date1RangeLast?: number;
            Date1RangeNext?: number;
            Date1RangeUnits?: number;
            Date2Begin?: Date;
            Date2End?: Date;
            Date2IsNull?: boolean;
            Date2NotInRange?: boolean;
            Date2RangeIncludeCurrent?: boolean;
            Date2RangeLast?: number;
            Date2RangeNext?: number;
            Date2RangeUnits?: number;
            Date3Begin?: Date;
            Date3End?: Date;
            Date3IsNull?: boolean;
            Date3NotInRange?: boolean;
            Date3RangeIncludeCurrent?: boolean;
            Date3RangeLast?: number;
            Date3RangeNext?: number;
            Date3RangeUnits?: number;
            Date4Begin?: Date;
            Date4End?: Date;
            Date4IsNull?: boolean;
            Date4NotInRange?: boolean;
            Date4RangeIncludeCurrent?: boolean;
            Date4RangeLast?: number;
            Date4RangeNext?: number;
            Date4RangeUnits?: number;
            Date5Begin?: Date;
            Date5End?: Date;
            Date5IsNull?: boolean;
            Date5NotInRange?: boolean;
            Date5RangeIncludeCurrent?: boolean;
            Date5RangeLast?: number;
            Date5RangeNext?: number;
            Date5RangeUnits?: number;
            DateCancelledBegin?: Date;
            DateCancelledEnd?: Date;
            DateCancelledIsNull?: boolean;
            DateCancelledNotInRange?: boolean;
            DateCancelledRangeIncludeCurrent?: boolean;
            DateCancelledRangeLast?: number;
            DateCancelledRangeNext?: number;
            DateCancelledRangeUnits?: number;
            DateClosedBegin?: Date;
            DateClosedEnd?: Date;
            DateClosedIsNull?: boolean;
            DateClosedNotInRange?: boolean;
            DateClosedRangeIncludeCurrent?: boolean;
            DateClosedRangeLast?: number;
            DateClosedRangeNext?: number;
            DateClosedRangeUnits?: number;
            DateSubmitToBegin?: Date;
            DateSubmitToEnd?: Date;
            DateSubmitToIsNull?: boolean;
            DateSubmitToNotInRange?: boolean;
            DateSubmitToRangeIncludeCurrent?: boolean;
            DateSubmitToRangeLast?: number;
            DateSubmitToRangeNext?: number;
            DateSubmitToRangeUnits?: number;
            District?: string[];
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValues?: number[];
            EntitySidIncludeNulls?: boolean;
            EntitySidIsMaxValueExclusive?: boolean;
            EntitySidIsMinValueExclusive?: boolean;
            EntitySidMaxValue?: number;
            EntitySidMinValue?: number;
            EntitySidRangeType?: number;
            EntitySidValues?: number[];
            EntityType?: string;
            EntityUids?: string[];
            Extent?: GISExtent;
            Facility_Id?: string[];
            FeatureIdIncludeNulls?: boolean;
            FeatureIdIsMaxValueExclusive?: boolean;
            FeatureIdIsMinValueExclusive?: boolean;
            FeatureIdMaxValue?: number;
            FeatureIdMinValue?: number;
            FeatureIdRangeType?: number;
            FeatureIdValues?: number[];
            FeatureType?: string;
            FeatureUids?: string[];
            ForemanRecomnd?: string[];
            FromDateBegin?: Date;
            FromDateEnd?: Date;
            FromDateIsNull?: boolean;
            FromDateNotInRange?: boolean;
            FromDateRangeIncludeCurrent?: boolean;
            FromDateRangeLast?: number;
            FromDateRangeNext?: number;
            FromDateRangeUnits?: number;
            HasAttachment?: boolean;
            HasRequest?: boolean;
            HasWorkOrder?: boolean;
            InitiateDateBegin?: Date;
            InitiateDateEnd?: Date;
            InitiateDateIsNull?: boolean;
            InitiateDateNotInRange?: boolean;
            InitiateDateRangeIncludeCurrent?: boolean;
            InitiateDateRangeLast?: number;
            InitiateDateRangeNext?: number;
            InitiateDateRangeUnits?: number;
            InitiatedBy?: string[];
            InitiatedByApp?: string[];
            InitiatedBySid?: number[];
            InitiatedBySidIsInList?: boolean;
            InspDateBegin?: Date;
            InspDateEnd?: Date;
            InspDateIsNull?: boolean;
            InspDateNotInRange?: boolean;
            InspDateRangeIncludeCurrent?: boolean;
            InspDateRangeLast?: number;
            InspDateRangeNext?: number;
            InspDateRangeUnits?: number;
            InspectedBy?: number[];
            InspectedBySid?: number[];
            InspectedBySidIsInList?: boolean;
            InspectionDateBegin?: Date;
            InspectionDateEnd?: Date;
            InspectionDateIsNull?: boolean;
            InspectionDateNotInRange?: boolean;
            InspectionDateRangeIncludeCurrent?: boolean;
            InspectionDateRangeLast?: number;
            InspectionDateRangeNext?: number;
            InspectionDateRangeUnits?: number;
            InspectionId?: number[];
            InspectionIdIsInList?: boolean;
            InspectionIds?: number[];
            InspTemplateId?: number[];
            InspTemplateIdIsInList?: boolean;
            InspTemplateName?: string[];
            IsAttached?: boolean;
            Level_Id?: string[];
            Location?: string[];
            MapPage?: string[];
            MaxResults?: number;
            Num1IncludeNulls?: boolean;
            Num1IsMaxValueExclusive?: boolean;
            Num1IsMinValueExclusive?: boolean;
            Num1MaxValue?: number;
            Num1MinValue?: number;
            Num1RangeType?: number;
            Num1Values?: number[];
            Num2IncludeNulls?: boolean;
            Num2IsMaxValueExclusive?: boolean;
            Num2IsMinValueExclusive?: boolean;
            Num2MaxValue?: number;
            Num2MinValue?: number;
            Num2RangeType?: number;
            Num2Values?: number[];
            Num3IncludeNulls?: boolean;
            Num3IsMaxValueExclusive?: boolean;
            Num3IsMinValueExclusive?: boolean;
            Num3MaxValue?: number;
            Num3MinValue?: number;
            Num3RangeType?: number;
            Num3Values?: number[];
            Num4IncludeNulls?: boolean;
            Num4IsMaxValueExclusive?: boolean;
            Num4IsMinValueExclusive?: boolean;
            Num4MaxValue?: number;
            Num4MinValue?: number;
            Num4RangeType?: number;
            Num4Values?: number[];
            Num5IncludeNulls?: boolean;
            Num5IsMaxValueExclusive?: boolean;
            Num5IsMinValueExclusive?: boolean;
            Num5MaxValue?: number;
            Num5MinValue?: number;
            Num5RangeType?: number;
            Num5Values?: number[];
            ObservationSum?: string[];
            ParentInspId?: number[];
            ParentInspIdIsInList?: boolean;
            PastDue?: boolean;
            Priority?: string[];
            PrjFinishDateBegin?: Date;
            PrjFinishDateEnd?: Date;
            PrjFinishDateIsNull?: boolean;
            PrjFinishDateNotInRange?: boolean;
            PrjFinishDateRangeIncludeCurrent?: boolean;
            PrjFinishDateRangeLast?: number;
            PrjFinishDateRangeNext?: number;
            PrjFinishDateRangeUnits?: number;
            PrjStartDateBegin?: Date;
            PrjStartDateEnd?: Date;
            PrjStartDateIsNull?: boolean;
            PrjStartDateNotInRange?: boolean;
            PrjStartDateRangeIncludeCurrent?: boolean;
            PrjStartDateRangeLast?: number;
            PrjStartDateRangeNext?: number;
            PrjStartDateRangeUnits?: number;
            RepairsMade?: string[];
            RequestId?: number[];
            RequestIdIsInList?: boolean;
            Resolution?: string[];
            Shop?: string[];
            Status?: string[];
            StreetName?: string[];
            SubmitTo?: number[];
            SubmitToEmployeeSid?: number[];
            SubmitToEmployeeSidIsInList?: boolean;
            SubmitToName?: string[];
            Text1?: string[];
            Text10?: string[];
            Text2?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TileNo?: string[];
            Unattached?: boolean;
            UpdateMap?: boolean;
            WorkOrderId?: string[];
        }
        interface SearchObject extends ServiceTypes.CoreRequestBase {
            InspectionId: string;
        }
        interface Shops extends ServiceTypes.CoreRequestBase {
        }
        interface Statuses extends ServiceTypes.CoreRequestBase {
        }
        interface SubmitTos extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
            IncludeInactiveEmployees?: boolean;
        }
        interface Templates extends ServiceTypes.CoreRequestBase {
            CanCreate?: boolean;
            EntityType?: string;
            IncludeInactive?: boolean;
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
            TemplateIds?: number[];
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            ActualFinishDate?: Date;
            Answers?: InspectionAnswer[];
            CondRating?: number;
            CondScore?: number;
            CycleFrom?: string;
            CycleIntervalNum?: number;
            CycleIntervalUnit?: string;
            CycleType?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            DateSubmitTo?: Date;
            District?: string;
            Effort?: number;
            Facility_Id?: string;
            ForemanRecomnd?: string;
            FromDate?: Date;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InspectedBy?: number;
            InspectedBySid?: number;
            InspectionDate?: Date;
            InspectionId: number;
            Level_Id?: string;
            Location?: string;
            MapPage?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            ObservationSum?: string;
            Priority?: string;
            ProjectedFinishDate?: Date;
            ProjectedStartDate?: Date;
            Questions?: InspectionQuestionDetails[];
            RepairsMade?: string;
            RequestId?: number;
            Resolution?: string;
            Shop?: string;
            Status?: string;
            StreetName?: string;
            SubmitTo?: number;
            SubmitToEmployeeSid?: number;
            SuppressCycle?: boolean;
            Text1?: string;
            Text10?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TileNo?: string;
            UpdateMap?: boolean;
            WorkOrderId?: string;
        }
    }
    namespace Responses {
        interface AddEntity extends ServiceTypes.CoreResponseBase_<WorkOrderEntity> {
        }
        interface Answers extends ServiceTypes.CoreResponseBase_<InspectionAnswer[]> {
        }
        interface AuditLog extends ServiceTypes.CoreResponseBase_<CWMetaData[]> {
        }
        interface ById extends ServiceTypes.CoreResponseBase_<InspectionBase> {
        }
        interface ByIds extends ServiceTypes.CoreResponseBase_<InspectionBase[]> {
        }
        interface ByWorkOrderIds extends ServiceTypes.CoreResponseBase_<InspectionBase[]> {
        }
        interface Cancel extends ServiceTypes.CoreResponseBase_<InspectionBase[]> {
        }
        interface Close extends ServiceTypes.CoreResponseBase_<InspectionBase[]> {
        }
        interface Create extends ServiceTypes.CoreResponseBase_<InspectionBase> {
        }
        interface CreateFromParent extends ServiceTypes.CoreResponseBase_<InspectionBase> {
        }
        interface CreateFromServiceRequest extends ServiceTypes.CoreResponseBase_<InspectionBase> {
        }
        interface CreateFromWorkOrder extends ServiceTypes.CoreResponseBase_<InspectionBase> {
        }
        interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<SearchDefinition> {
        }
        interface CycleFrom extends ServiceTypes.CoreResponseBase_<{
            [key: string]: string;
        }> {
        }
        interface CycleIntervals extends ServiceTypes.CoreResponseBase_<{
            [key: string]: string;
        }> {
        }
        interface CycleTypes extends ServiceTypes.CoreResponseBase_<{
            [key: string]: string;
        }> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface Districts extends ServiceTypes.CoreResponseBase_<CodeDesc[]> {
        }
        interface InspectionInspections extends ServiceTypes.CoreResponseBase_<InspectionRelatedInspection[]> {
        }
        interface InspectionServiceRequests extends ServiceTypes.CoreResponseBase_<RequestInspection[]> {
        }
        interface InspectionWorkOrders extends ServiceTypes.CoreResponseBase_<WorkOrderInspection[]> {
        }
        interface Move extends ServiceTypes.CoreResponseBase_<GISPoint> {
        }
        interface Priorities extends ServiceTypes.CoreResponseBase_<CodeDesc[]> {
        }
        interface QA extends ServiceTypes.CoreResponseBase_<InspTemplateQA> {
        }
        interface Questions extends ServiceTypes.CoreResponseBase_<InspQuestion[]> {
        }
        interface RemoveEntity extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface Resolutions extends ServiceTypes.CoreResponseBase_<CodeDesc[]> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface SearchObject extends ServiceTypes.CoreResponseBase_<InspectionBase[]> {
        }
        interface Shops extends ServiceTypes.CoreResponseBase_<CodeDesc[]> {
        }
        interface Statuses extends ServiceTypes.CoreResponseBase_<CodeDesc[]> {
        }
        interface SubmitTos extends ServiceTypes.CoreResponseBase_<EmployeeNameId[]> {
        }
        interface Templates extends ServiceTypes.CoreResponseBase_<InspTemplateBase[]> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<InspectionBase> {
        }
    }
    interface IInspectionService {
        AddEntity?: (request: Requests.AddEntity) => Promise<Responses.AddEntity>;
        Answers?: (request: Requests.Answers) => Promise<Responses.Answers>;
        AuditLog?: (request: Requests.AuditLog) => Promise<Responses.AuditLog>;
        ById?: (request: Requests.ById) => Promise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => Promise<Responses.ByIds>;
        ByWorkOrderIds?: (request: Requests.ByWorkOrderIds) => Promise<Responses.ByWorkOrderIds>;
        Cancel?: (request: Requests.Cancel) => Promise<Responses.Cancel>;
        Close?: (request: Requests.Close) => Promise<Responses.Close>;
        Create?: (request: Requests.Create) => Promise<Responses.Create>;
        CreateFromParent?: (request: Requests.CreateFromParent) => Promise<Responses.CreateFromParent>;
        CreateFromServiceRequest?: (request: Requests.CreateFromServiceRequest) => Promise<Responses.CreateFromServiceRequest>;
        CreateFromWorkOrder?: (request: Requests.CreateFromWorkOrder) => Promise<Responses.CreateFromWorkOrder>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => Promise<Responses.CreateSearchDefinition>;
        CycleFrom?: (request: Requests.CycleFrom) => Promise<Responses.CycleFrom>;
        CycleIntervals?: (request: Requests.CycleIntervals) => Promise<Responses.CycleIntervals>;
        CycleTypes?: (request: Requests.CycleTypes) => Promise<Responses.CycleTypes>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        Districts?: (request: Requests.Districts) => Promise<Responses.Districts>;
        InspectionInspections?: (request: Requests.InspectionInspections) => Promise<Responses.InspectionInspections>;
        InspectionServiceRequests?: (request: Requests.InspectionServiceRequests) => Promise<Responses.InspectionServiceRequests>;
        InspectionWorkOrders?: (request: Requests.InspectionWorkOrders) => Promise<Responses.InspectionWorkOrders>;
        Move?: (request: Requests.Move) => Promise<Responses.Move>;
        Priorities?: (request: Requests.Priorities) => Promise<Responses.Priorities>;
        QA?: (request: Requests.QA) => Promise<Responses.QA>;
        Questions?: (request: Requests.Questions) => Promise<Responses.Questions>;
        RemoveEntity?: (request: Requests.RemoveEntity) => Promise<Responses.RemoveEntity>;
        Resolutions?: (request: Requests.Resolutions) => Promise<Responses.Resolutions>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => Promise<Responses.SearchObject>;
        Shops?: (request: Requests.Shops) => Promise<Responses.Shops>;
        Statuses?: (request: Requests.Statuses) => Promise<Responses.Statuses>;
        SubmitTos?: (request: Requests.SubmitTos) => Promise<Responses.SubmitTos>;
        Templates?: (request: Requests.Templates) => Promise<Responses.Templates>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
