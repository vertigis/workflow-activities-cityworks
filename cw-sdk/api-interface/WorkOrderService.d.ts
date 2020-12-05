import { WorkOrderRelatedWorkOrder } from '../core/types/WorkOrderRelatedWorkOrder';
import { RequestWorkOrder } from '../core/types/RequestWorkOrder';
import { WorkOrderInspection } from '../core/types/WorkOrderInspection';
import { WOTemplateName } from '../core/types/WOTemplateName';
import { CategoryCustField } from '../core/types/CategoryCustField';
import { WOTemplateBase } from '../core/types/WOTemplateBase';
import { EmployeeNameId } from '../core/types/EmployeeNameId';
import { GISPoint } from '../core/types/GISPoint';
import { WOCustField } from '../core/types/WOCustField';
import { SearchDefinition } from '../core/types/SearchDefinition';
import { CodeDesc } from '../core/types/CodeDesc';
import { WorkOrderBase } from '../core/types/WorkOrderBase';
import { CWMetaData } from '../core/types/CWMetaData';
import { GISExtent } from '../core/types/GISExtent';
import { WorkOrderEntity } from '../core/types/WorkOrderEntity';
import { ServiceTypes } from '../core/service-types';
export declare namespace WorkOrderServiceTypes {
    namespace Requests {
        interface AddComments extends ServiceTypes.CoreRequestBase {
            Comments: string;
            WorkOrderId: string;
            WorkOrderSid: number;
        }
        interface AddEntities extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityUids: string[];
            Facility_Id?: string;
            Level_Id?: string;
            UpdateXY?: boolean;
            WorkOrderId: string;
            WorkOrderSid: number;
        }
        interface AuditLog extends ServiceTypes.CoreRequestBase {
            WorkOrderId?: string;
            WorkOrderSid?: number;
        }
        interface ById extends ServiceTypes.CoreRequestBase {
            WorkOrderId: string;
        }
        interface ByIds extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        interface BySid extends ServiceTypes.CoreRequestBase {
            WorkOrderSid: number;
        }
        interface BySids extends ServiceTypes.CoreRequestBase {
            WorkOrderSids: number[];
        }
        interface Cancel extends ServiceTypes.CoreRequestBase {
            CancelReason?: string;
            DateCancelled?: Date;
            WorkOrderIds: string[];
        }
        interface Categories extends ServiceTypes.CoreRequestBase {
        }
        interface ChangeCustomFieldCategory extends ServiceTypes.CoreRequestBase {
            CategoryId: number;
            WorkOrderIds: string[];
        }
        interface Close extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        interface Combine extends ServiceTypes.CoreRequestBase {
            CancelCombinedWorkOrders?: boolean;
            FromWorkOrderIds: string[];
            ToWorkOrderId: string;
        }
        interface Comments extends ServiceTypes.CoreRequestBase {
            WorkOrderId: string;
        }
        interface CommentsByWorkOrderIds extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        interface Create extends ServiceTypes.CoreRequestBase {
            ActivityZone?: string;
            Address?: string;
            City?: string;
            Comments?: string;
            CustomFieldValues?: {
                [key: number]: string;
            };
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            District?: string;
            Entities?: WorkOrderEntity[];
            EntityType: string;
            ExpenseType?: string;
            Facility_Id?: string;
            GeocodeAddress?: boolean;
            GetGisData?: boolean;
            GroupEntities?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspectionIds?: number[];
            Instructions?: string;
            Level_Id?: string;
            Location?: string;
            MapPage?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Priority?: string;
            ProjectedStartDate?: Date;
            ProjectSid?: number;
            Reactive?: boolean;
            RequestedBy?: number;
            RequestedBySid?: number;
            RequestIds?: number[];
            Shop?: string;
            Stage?: string;
            Status?: string;
            StreetName?: string;
            SubmitTo?: number;
            SubmitToSid?: number;
            Supervisor?: number;
            SupervisorSid?: number;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TileNo?: string;
            WebServiceRequestId?: string;
            WKID?: number;
            WKT?: string;
            WOCustFieldCatId?: number;
            WOTemplateId: string;
            X?: number;
            Y?: number;
            Zip?: string;
        }
        interface CreateFromInspection extends ServiceTypes.CoreRequestBase {
            ActivityZone?: string;
            Address?: string;
            Comments?: string;
            CustomFieldValues?: {
                [key: number]: string;
            };
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            District?: string;
            Entities?: WorkOrderEntity[];
            EntityType: string;
            ExpenseType?: string;
            Facility_Id?: string;
            GetGisData?: boolean;
            GroupEntities?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspectionId: number;
            Instructions?: string;
            Level_Id?: string;
            Location?: string;
            MapPage?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Priority?: string;
            ProjectedStartDate?: Date;
            ProjectSid?: number;
            Reactive?: boolean;
            RequestedBy?: number;
            RequestedBySid?: number;
            Shop?: string;
            Stage?: string;
            Status?: string;
            SubmitTo?: number;
            SubmitToSid?: number;
            Supervisor?: number;
            SupervisorSid?: number;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TileNo?: string;
            WebServiceRequestId?: string;
            WOCustFieldCatId?: number;
            WOTemplateId: string;
        }
        interface CreateFromParent extends ServiceTypes.CoreRequestBase {
            ActivityZone?: string;
            Address?: string;
            Comments?: string;
            CustomFieldValues?: {
                [key: number]: string;
            };
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            District?: string;
            Entities?: WorkOrderEntity[];
            EntityType: string;
            ExpenseType?: string;
            Facility_Id?: string;
            GetGisData?: boolean;
            GroupEntities?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            Instructions?: string;
            Level_Id?: string;
            Location?: string;
            MapPage?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Priority?: string;
            ProjectedStartDate?: Date;
            ProjectSid?: number;
            Reactive?: boolean;
            RequestedBy?: number;
            RequestedBySid?: number;
            Shop?: string;
            Stage?: string;
            Status?: string;
            SubmitTo?: number;
            SubmitToSid?: number;
            Supervisor?: number;
            SupervisorSid?: number;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TileNo?: string;
            WebServiceRequestId?: string;
            WOCustFieldCatId?: number;
            WorkOrderId: string;
            WorkOrderSid: number;
            WOTemplateId: string;
        }
        interface CreateFromServiceRequest extends ServiceTypes.CoreRequestBase {
            ActivityZone?: string;
            Address?: string;
            Comments?: string;
            CustomFieldValues?: {
                [key: number]: string;
            };
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            District?: string;
            Entities?: WorkOrderEntity[];
            EntityType: string;
            ExpenseType?: string;
            Facility_Id?: string;
            GetGisData?: boolean;
            GroupEntities?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            Instructions?: string;
            Level_Id?: string;
            Location?: string;
            MapPage?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Priority?: string;
            ProjectedStartDate?: Date;
            ProjectSid?: number;
            Reactive?: boolean;
            RequestedBy?: number;
            RequestedBySid?: number;
            RequestId: number;
            Shop?: string;
            Stage?: string;
            Status?: string;
            SubmitTo?: number;
            SubmitToSid?: number;
            Supervisor?: number;
            SupervisorSid?: number;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TileNo?: string;
            WebServiceRequestId?: string;
            WOCustFieldCatId?: number;
            WOTemplateId: string;
        }
        interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            AcctNum?: string[];
            ActivityZone?: string[];
            ActualFinishDateBegin?: Date;
            ActualFinishDateEnd?: Date;
            ActualFinishDateIsNull?: boolean;
            ActualFinishDateNotInRange?: boolean;
            ActualFinishDateRangeIncludeCurrent?: boolean;
            ActualFinishDateRangeLast?: number;
            ActualFinishDateRangeNext?: number;
            ActualFinishDateRangeUnits?: number;
            ActualStartDateBegin?: Date;
            ActualStartDateEnd?: Date;
            ActualStartDateIsNull?: boolean;
            ActualStartDateNotInRange?: boolean;
            ActualStartDateRangeIncludeCurrent?: boolean;
            ActualStartDateRangeLast?: number;
            ActualStartDateRangeNext?: number;
            ActualStartDateRangeUnits?: number;
            ApplyToEntity?: string[];
            AssetGroup?: string[];
            Canceled?: boolean;
            CancelledBy?: string[];
            CancelledBySid?: number[];
            CancelledBySidIsInList?: boolean;
            CancelReason?: string[];
            Closed?: boolean;
            ClosedBySid?: number[];
            ClosedBySidIsInList?: boolean;
            ContractorName?: string[];
            ContractorSid?: number[];
            ContractorSidIsInList?: boolean;
            ContractWOId?: string[];
            ContrBillable?: boolean;
            CreatedByCycle?: boolean;
            CycleFrom?: number[];
            CycleIntervalNum?: number[];
            CycleIntervalNumIsInList?: boolean;
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
            DatePrintedBegin?: Date;
            DatePrintedEnd?: Date;
            DatePrintedIsNull?: boolean;
            DatePrintedNotInRange?: boolean;
            DatePrintedRangeIncludeCurrent?: boolean;
            DatePrintedRangeLast?: number;
            DatePrintedRangeNext?: number;
            DatePrintedRangeUnits?: number;
            DateSubmitToBegin?: Date;
            DateSubmitToEnd?: Date;
            DateSubmitToIsNull?: boolean;
            DateSubmitToNotInRange?: boolean;
            DateSubmitToOpenBegin?: Date;
            DateSubmitToOpenEnd?: Date;
            DateSubmitToOpenIsNull?: boolean;
            DateSubmitToOpenNotInRange?: boolean;
            DateSubmitToOpenRangeIncludeCurrent?: boolean;
            DateSubmitToOpenRangeLast?: number;
            DateSubmitToOpenRangeNext?: number;
            DateSubmitToOpenRangeUnits?: number;
            DateSubmitToRangeIncludeCurrent?: boolean;
            DateSubmitToRangeLast?: number;
            DateSubmitToRangeNext?: number;
            DateSubmitToRangeUnits?: number;
            DateToBePrintedBegin?: Date;
            DateToBePrintedEnd?: Date;
            DateToBePrintedIsNull?: boolean;
            DateToBePrintedNotInRange?: boolean;
            DateToBePrintedRangeIncludeCurrent?: boolean;
            DateToBePrintedRangeLast?: number;
            DateToBePrintedRangeNext?: number;
            DateToBePrintedRangeUnits?: number;
            DateWOClosedBegin?: Date;
            DateWOClosedEnd?: Date;
            DateWOClosedIsNull?: boolean;
            DateWOClosedNotInRange?: boolean;
            DateWOClosedRangeIncludeCurrent?: boolean;
            DateWOClosedRangeLast?: number;
            DateWOClosedRangeNext?: number;
            DateWOClosedRangeUnits?: number;
            Description?: string[];
            District?: string[];
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            DomainIds?: number[];
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValues?: number[];
            EnableEurl?: boolean;
            EntityType?: string;
            EntityUids?: string[];
            ExpenseType?: number[];
            Extent?: GISExtent;
            Facility_Id?: string[];
            FeatureType?: string;
            FeatureUids?: string[];
            FromDateBegin?: Date;
            FromDateEnd?: Date;
            FromDateIsNull?: boolean;
            FromDateNotInRange?: boolean;
            FromDateRangeIncludeCurrent?: boolean;
            FromDateRangeLast?: number;
            FromDateRangeNext?: number;
            FromDateRangeUnits?: number;
            HasAttachment?: boolean;
            HasCase?: boolean;
            HasInspection?: boolean;
            HasRequest?: boolean;
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
            IsReactive?: boolean;
            LegalBillable?: boolean;
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
            NumDaysBefore?: number[];
            NumDaysBeforeIsInList?: boolean;
            PastDue?: boolean;
            PrimaryContractId?: number[];
            PrimaryContractIdIsInList?: boolean;
            Priority?: string[];
            ProjectedFinishDateBegin?: Date;
            ProjectedFinishDateEnd?: Date;
            ProjectedFinishDateIsNull?: boolean;
            ProjectedFinishDateNotInRange?: boolean;
            ProjectedFinishDateRangeIncludeCurrent?: boolean;
            ProjectedFinishDateRangeLast?: number;
            ProjectedFinishDateRangeNext?: number;
            ProjectedFinishDateRangeUnits?: number;
            ProjectedStartDateBegin?: Date;
            ProjectedStartDateEnd?: Date;
            ProjectedStartDateIsNull?: boolean;
            ProjectedStartDateNotInRange?: boolean;
            ProjectedStartDateRangeIncludeCurrent?: boolean;
            ProjectedStartDateRangeLast?: number;
            ProjectedStartDateRangeNext?: number;
            ProjectedStartDateRangeUnits?: number;
            ProjectName?: string[];
            ProjectSid?: number[];
            ProjectSidIsInList?: boolean;
            RequestedBy?: string[];
            RequestedBySid?: number[];
            RequestedBySidIsInList?: boolean;
            Resolution?: string[];
            SaveDefinition?: boolean;
            ScheduleDateBegin?: Date;
            ScheduleDateEnd?: Date;
            ScheduleDateIsNull?: boolean;
            ScheduleDateNotInRange?: boolean;
            ScheduleDateRangeIncludeCurrent?: boolean;
            ScheduleDateRangeLast?: number;
            ScheduleDateRangeNext?: number;
            ScheduleDateRangeUnits?: number;
            SearchName?: string;
            SharedWithin?: number;
            Shop?: string[];
            SourceWOId?: string[];
            Stage?: number[];
            Status?: string[];
            StreetName?: string[];
            SubmitTo?: number[];
            SubmitToOpenBy?: string[];
            SubmitToOpenBySid?: number[];
            SubmitToOpenBySidIsInList?: boolean;
            SubmitToSid?: number[];
            SubmitToSidIsInList?: boolean;
            Supervisor?: string[];
            SupervisorSid?: number[];
            SupervisorSidIsInList?: boolean;
            TaskActualFinishDateBegin?: Date;
            TaskActualFinishDateEnd?: Date;
            TaskActualFinishDateIsNull?: boolean;
            TaskActualFinishDateNotInRange?: boolean;
            TaskActualFinishDateRangeIncludeCurrent?: boolean;
            TaskActualFinishDateRangeLast?: number;
            TaskActualFinishDateRangeNext?: number;
            TaskActualFinishDateRangeUnits?: number;
            TaskAssignedTo?: number[];
            TaskAssignedToIsInList?: boolean;
            TaskStatus?: string[];
            Text1?: string[];
            Text10?: string[];
            Text11?: string[];
            Text12?: string[];
            Text13?: string[];
            Text14?: string[];
            Text15?: string[];
            Text16?: string[];
            Text17?: string[];
            Text18?: string[];
            Text19?: string[];
            Text2?: string[];
            Text20?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TileNo?: string[];
            TransToWOId?: string[];
            Unattached?: boolean;
            UnitsAccompDesc?: string[];
            UnitsAccompDescLock?: boolean;
            UnitsAccomplishedIncludeNulls?: boolean;
            UnitsAccomplishedIsMaxValueExclusive?: boolean;
            UnitsAccomplishedIsMinValueExclusive?: boolean;
            UnitsAccomplishedMaxValue?: number;
            UnitsAccomplishedMinValue?: number;
            UnitsAccomplishedRangeType?: number;
            UnitsAccomplishedValues?: number[];
            UpdateMap?: boolean;
            WOAddress?: string[];
            WOCategory?: string[];
            WOClosedBy?: string[];
            WOCostIncludeNulls?: boolean;
            WOCostIsMaxValueExclusive?: boolean;
            WOCostIsMinValueExclusive?: boolean;
            WOCostMaxValue?: number;
            WOCostMinValue?: number;
            WOCostRangeType?: number;
            WOCostValues?: number[];
            WOCustFieldCatId?: number[];
            WOCustFieldCatIdIsInList?: boolean;
            WOEquipCostIncludeNulls?: boolean;
            WOEquipCostIsMaxValueExclusive?: boolean;
            WOEquipCostIsMinValueExclusive?: boolean;
            WOEquipCostMaxValue?: number;
            WOEquipCostMinValue?: number;
            WOEquipCostRangeType?: number;
            WOEquipCostValues?: number[];
            WOLaborCostIncludeNulls?: boolean;
            WOLaborCostIsMaxValueExclusive?: boolean;
            WOLaborCostIsMinValueExclusive?: boolean;
            WOLaborCostMaxValue?: number;
            WOLaborCostMinValue?: number;
            WOLaborCostRangeType?: number;
            WOLaborCostValues?: number[];
            WOMatCostIncludeNulls?: boolean;
            WOMatCostIsMaxValueExclusive?: boolean;
            WOMatCostIsMinValueExclusive?: boolean;
            WOMatCostMaxValue?: number;
            WOMatCostMinValue?: number;
            WOMatCostRangeType?: number;
            WOMatCostValues?: number[];
            WOPermitCostIncludeNulls?: boolean;
            WOPermitCostIsMaxValueExclusive?: boolean;
            WOPermitCostIsMinValueExclusive?: boolean;
            WOPermitCostMaxValue?: number;
            WOPermitCostMinValue?: number;
            WOPermitCostRangeType?: number;
            WOPermitCostValues?: number[];
            WorkCompletedBy?: string[];
            WorkCompletedBySid?: number[];
            WorkCompletedBySidIsInList?: boolean;
            WorkOrderId?: string[];
            WorkOrderIds?: string[];
            WorkOrderSid?: number[];
            WorkOrderSidIsInList?: boolean;
            WOTemplateId?: string[];
            WOTemplateIds?: string[];
        }
        interface CustomFields extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        interface CustomFieldsByWorkOrderSids extends ServiceTypes.CoreRequestBase {
            WorkOrderSids: number[];
        }
        interface CycleFrom extends ServiceTypes.CoreRequestBase {
        }
        interface CycleIntervals extends ServiceTypes.CoreRequestBase {
        }
        interface CycleTypes extends ServiceTypes.CoreRequestBase {
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            WorkOrderSids: number[];
        }
        interface Entities extends ServiceTypes.CoreRequestBase {
            GetGisData?: boolean;
            WorkOrderId?: string;
            WorkOrderIds?: string[];
            WorkOrderSids?: number[];
        }
        interface ExpenseTypes extends ServiceTypes.CoreRequestBase {
        }
        interface InstructionsByWorkOrderIds extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        interface InstructionsByWorkOrderSids extends ServiceTypes.CoreRequestBase {
            WorkOrderSids: number[];
        }
        interface LinkInspections extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
            WorkOrderId: string;
        }
        interface LinkServiceRequests extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
            WorkOrderId: string;
        }
        interface Move extends ServiceTypes.CoreRequestBase {
            WKID?: number;
            WKT?: string;
            WorkOrderId: string;
            WorkOrderSid: number;
            X: number;
            Y: number;
        }
        interface Priorities extends ServiceTypes.CoreRequestBase {
        }
        interface RemoveEntities extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            EntityUids?: string[];
            ObjectIds?: number[];
            UpdateXY?: boolean;
            WorkOrderId: string;
            WorkOrderSid: number;
        }
        interface ReOpen extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            AcctNum?: string[];
            ActivityZone?: string[];
            ActualFinishDateBegin?: Date;
            ActualFinishDateEnd?: Date;
            ActualFinishDateIsNull?: boolean;
            ActualFinishDateNotInRange?: boolean;
            ActualFinishDateRangeIncludeCurrent?: boolean;
            ActualFinishDateRangeLast?: number;
            ActualFinishDateRangeNext?: number;
            ActualFinishDateRangeUnits?: number;
            ActualStartDateBegin?: Date;
            ActualStartDateEnd?: Date;
            ActualStartDateIsNull?: boolean;
            ActualStartDateNotInRange?: boolean;
            ActualStartDateRangeIncludeCurrent?: boolean;
            ActualStartDateRangeLast?: number;
            ActualStartDateRangeNext?: number;
            ActualStartDateRangeUnits?: number;
            ApplyToEntity?: string[];
            AssetGroup?: string[];
            Canceled?: boolean;
            CancelledBy?: string[];
            CancelledBySid?: number[];
            CancelledBySidIsInList?: boolean;
            CancelReason?: string[];
            Closed?: boolean;
            ClosedBySid?: number[];
            ClosedBySidIsInList?: boolean;
            ContractorName?: string[];
            ContractorSid?: number[];
            ContractorSidIsInList?: boolean;
            ContractWOId?: string[];
            ContrBillable?: boolean;
            CreatedByCycle?: boolean;
            CycleFrom?: number[];
            CycleIntervalNum?: number[];
            CycleIntervalNumIsInList?: boolean;
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
            DatePrintedBegin?: Date;
            DatePrintedEnd?: Date;
            DatePrintedIsNull?: boolean;
            DatePrintedNotInRange?: boolean;
            DatePrintedRangeIncludeCurrent?: boolean;
            DatePrintedRangeLast?: number;
            DatePrintedRangeNext?: number;
            DatePrintedRangeUnits?: number;
            DateSubmitToBegin?: Date;
            DateSubmitToEnd?: Date;
            DateSubmitToIsNull?: boolean;
            DateSubmitToNotInRange?: boolean;
            DateSubmitToOpenBegin?: Date;
            DateSubmitToOpenEnd?: Date;
            DateSubmitToOpenIsNull?: boolean;
            DateSubmitToOpenNotInRange?: boolean;
            DateSubmitToOpenRangeIncludeCurrent?: boolean;
            DateSubmitToOpenRangeLast?: number;
            DateSubmitToOpenRangeNext?: number;
            DateSubmitToOpenRangeUnits?: number;
            DateSubmitToRangeIncludeCurrent?: boolean;
            DateSubmitToRangeLast?: number;
            DateSubmitToRangeNext?: number;
            DateSubmitToRangeUnits?: number;
            DateToBePrintedBegin?: Date;
            DateToBePrintedEnd?: Date;
            DateToBePrintedIsNull?: boolean;
            DateToBePrintedNotInRange?: boolean;
            DateToBePrintedRangeIncludeCurrent?: boolean;
            DateToBePrintedRangeLast?: number;
            DateToBePrintedRangeNext?: number;
            DateToBePrintedRangeUnits?: number;
            DateWOClosedBegin?: Date;
            DateWOClosedEnd?: Date;
            DateWOClosedIsNull?: boolean;
            DateWOClosedNotInRange?: boolean;
            DateWOClosedRangeIncludeCurrent?: boolean;
            DateWOClosedRangeLast?: number;
            DateWOClosedRangeNext?: number;
            DateWOClosedRangeUnits?: number;
            Description?: string[];
            District?: string[];
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            DomainIds?: number[];
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValues?: number[];
            EntityType?: string;
            EntityUids?: string[];
            ExpenseType?: number[];
            Extent?: GISExtent;
            Facility_Id?: string[];
            FeatureType?: string;
            FeatureUids?: string[];
            FromDateBegin?: Date;
            FromDateEnd?: Date;
            FromDateIsNull?: boolean;
            FromDateNotInRange?: boolean;
            FromDateRangeIncludeCurrent?: boolean;
            FromDateRangeLast?: number;
            FromDateRangeNext?: number;
            FromDateRangeUnits?: number;
            HasAttachment?: boolean;
            HasCase?: boolean;
            HasInspection?: boolean;
            HasRequest?: boolean;
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
            IsReactive?: boolean;
            LegalBillable?: boolean;
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
            NumDaysBefore?: number[];
            NumDaysBeforeIsInList?: boolean;
            PastDue?: boolean;
            PrimaryContractId?: number[];
            PrimaryContractIdIsInList?: boolean;
            Priority?: string[];
            ProjectedFinishDateBegin?: Date;
            ProjectedFinishDateEnd?: Date;
            ProjectedFinishDateIsNull?: boolean;
            ProjectedFinishDateNotInRange?: boolean;
            ProjectedFinishDateRangeIncludeCurrent?: boolean;
            ProjectedFinishDateRangeLast?: number;
            ProjectedFinishDateRangeNext?: number;
            ProjectedFinishDateRangeUnits?: number;
            ProjectedStartDateBegin?: Date;
            ProjectedStartDateEnd?: Date;
            ProjectedStartDateIsNull?: boolean;
            ProjectedStartDateNotInRange?: boolean;
            ProjectedStartDateRangeIncludeCurrent?: boolean;
            ProjectedStartDateRangeLast?: number;
            ProjectedStartDateRangeNext?: number;
            ProjectedStartDateRangeUnits?: number;
            ProjectName?: string[];
            ProjectSid?: number[];
            ProjectSidIsInList?: boolean;
            RequestedBy?: string[];
            RequestedBySid?: number[];
            RequestedBySidIsInList?: boolean;
            Resolution?: string[];
            ScheduleDateBegin?: Date;
            ScheduleDateEnd?: Date;
            ScheduleDateIsNull?: boolean;
            ScheduleDateNotInRange?: boolean;
            ScheduleDateRangeIncludeCurrent?: boolean;
            ScheduleDateRangeLast?: number;
            ScheduleDateRangeNext?: number;
            ScheduleDateRangeUnits?: number;
            Shop?: string[];
            SourceWOId?: string[];
            Stage?: number[];
            Status?: string[];
            StreetName?: string[];
            SubmitTo?: number[];
            SubmitToOpenBy?: string[];
            SubmitToOpenBySid?: number[];
            SubmitToOpenBySidIsInList?: boolean;
            SubmitToSid?: number[];
            SubmitToSidIsInList?: boolean;
            Supervisor?: string[];
            SupervisorSid?: number[];
            SupervisorSidIsInList?: boolean;
            TaskActualFinishDateBegin?: Date;
            TaskActualFinishDateEnd?: Date;
            TaskActualFinishDateIsNull?: boolean;
            TaskActualFinishDateNotInRange?: boolean;
            TaskActualFinishDateRangeIncludeCurrent?: boolean;
            TaskActualFinishDateRangeLast?: number;
            TaskActualFinishDateRangeNext?: number;
            TaskActualFinishDateRangeUnits?: number;
            TaskAssignedTo?: number[];
            TaskAssignedToIsInList?: boolean;
            TaskStatus?: string[];
            Text1?: string[];
            Text10?: string[];
            Text11?: string[];
            Text12?: string[];
            Text13?: string[];
            Text14?: string[];
            Text15?: string[];
            Text16?: string[];
            Text17?: string[];
            Text18?: string[];
            Text19?: string[];
            Text2?: string[];
            Text20?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TileNo?: string[];
            TransToWOId?: string[];
            Unattached?: boolean;
            UnitsAccompDesc?: string[];
            UnitsAccompDescLock?: boolean;
            UnitsAccomplishedIncludeNulls?: boolean;
            UnitsAccomplishedIsMaxValueExclusive?: boolean;
            UnitsAccomplishedIsMinValueExclusive?: boolean;
            UnitsAccomplishedMaxValue?: number;
            UnitsAccomplishedMinValue?: number;
            UnitsAccomplishedRangeType?: number;
            UnitsAccomplishedValues?: number[];
            UpdateMap?: boolean;
            WOAddress?: string[];
            WOCategory?: string[];
            WOClosedBy?: string[];
            WOCostIncludeNulls?: boolean;
            WOCostIsMaxValueExclusive?: boolean;
            WOCostIsMinValueExclusive?: boolean;
            WOCostMaxValue?: number;
            WOCostMinValue?: number;
            WOCostRangeType?: number;
            WOCostValues?: number[];
            WOCustFieldCatId?: number[];
            WOCustFieldCatIdIsInList?: boolean;
            WOEquipCostIncludeNulls?: boolean;
            WOEquipCostIsMaxValueExclusive?: boolean;
            WOEquipCostIsMinValueExclusive?: boolean;
            WOEquipCostMaxValue?: number;
            WOEquipCostMinValue?: number;
            WOEquipCostRangeType?: number;
            WOEquipCostValues?: number[];
            WOLaborCostIncludeNulls?: boolean;
            WOLaborCostIsMaxValueExclusive?: boolean;
            WOLaborCostIsMinValueExclusive?: boolean;
            WOLaborCostMaxValue?: number;
            WOLaborCostMinValue?: number;
            WOLaborCostRangeType?: number;
            WOLaborCostValues?: number[];
            WOMatCostIncludeNulls?: boolean;
            WOMatCostIsMaxValueExclusive?: boolean;
            WOMatCostIsMinValueExclusive?: boolean;
            WOMatCostMaxValue?: number;
            WOMatCostMinValue?: number;
            WOMatCostRangeType?: number;
            WOMatCostValues?: number[];
            WOPermitCostIncludeNulls?: boolean;
            WOPermitCostIsMaxValueExclusive?: boolean;
            WOPermitCostIsMinValueExclusive?: boolean;
            WOPermitCostMaxValue?: number;
            WOPermitCostMinValue?: number;
            WOPermitCostRangeType?: number;
            WOPermitCostValues?: number[];
            WorkCompletedBy?: string[];
            WorkCompletedBySid?: number[];
            WorkCompletedBySidIsInList?: boolean;
            WorkOrderId?: string[];
            WorkOrderIds?: string[];
            WorkOrderSid?: number[];
            WorkOrderSidIsInList?: boolean;
            WOTemplateId?: string[];
            WOTemplateIds?: string[];
        }
        interface SearchForSids extends ServiceTypes.CoreRequestBase {
            AcctNum?: string[];
            ActivityZone?: string[];
            ActualFinishDateBegin?: Date;
            ActualFinishDateEnd?: Date;
            ActualFinishDateIsNull?: boolean;
            ActualFinishDateNotInRange?: boolean;
            ActualFinishDateRangeIncludeCurrent?: boolean;
            ActualFinishDateRangeLast?: number;
            ActualFinishDateRangeNext?: number;
            ActualFinishDateRangeUnits?: number;
            ActualStartDateBegin?: Date;
            ActualStartDateEnd?: Date;
            ActualStartDateIsNull?: boolean;
            ActualStartDateNotInRange?: boolean;
            ActualStartDateRangeIncludeCurrent?: boolean;
            ActualStartDateRangeLast?: number;
            ActualStartDateRangeNext?: number;
            ActualStartDateRangeUnits?: number;
            ApplyToEntity?: string[];
            AssetGroup?: string[];
            Canceled?: boolean;
            CancelledBy?: string[];
            CancelledBySid?: number[];
            CancelledBySidIsInList?: boolean;
            CancelReason?: string[];
            Closed?: boolean;
            ClosedBySid?: number[];
            ClosedBySidIsInList?: boolean;
            ContractorName?: string[];
            ContractorSid?: number[];
            ContractorSidIsInList?: boolean;
            ContractWOId?: string[];
            ContrBillable?: boolean;
            CreatedByCycle?: boolean;
            CycleFrom?: number[];
            CycleIntervalNum?: number[];
            CycleIntervalNumIsInList?: boolean;
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
            DatePrintedBegin?: Date;
            DatePrintedEnd?: Date;
            DatePrintedIsNull?: boolean;
            DatePrintedNotInRange?: boolean;
            DatePrintedRangeIncludeCurrent?: boolean;
            DatePrintedRangeLast?: number;
            DatePrintedRangeNext?: number;
            DatePrintedRangeUnits?: number;
            DateSubmitToBegin?: Date;
            DateSubmitToEnd?: Date;
            DateSubmitToIsNull?: boolean;
            DateSubmitToNotInRange?: boolean;
            DateSubmitToOpenBegin?: Date;
            DateSubmitToOpenEnd?: Date;
            DateSubmitToOpenIsNull?: boolean;
            DateSubmitToOpenNotInRange?: boolean;
            DateSubmitToOpenRangeIncludeCurrent?: boolean;
            DateSubmitToOpenRangeLast?: number;
            DateSubmitToOpenRangeNext?: number;
            DateSubmitToOpenRangeUnits?: number;
            DateSubmitToRangeIncludeCurrent?: boolean;
            DateSubmitToRangeLast?: number;
            DateSubmitToRangeNext?: number;
            DateSubmitToRangeUnits?: number;
            DateToBePrintedBegin?: Date;
            DateToBePrintedEnd?: Date;
            DateToBePrintedIsNull?: boolean;
            DateToBePrintedNotInRange?: boolean;
            DateToBePrintedRangeIncludeCurrent?: boolean;
            DateToBePrintedRangeLast?: number;
            DateToBePrintedRangeNext?: number;
            DateToBePrintedRangeUnits?: number;
            DateWOClosedBegin?: Date;
            DateWOClosedEnd?: Date;
            DateWOClosedIsNull?: boolean;
            DateWOClosedNotInRange?: boolean;
            DateWOClosedRangeIncludeCurrent?: boolean;
            DateWOClosedRangeLast?: number;
            DateWOClosedRangeNext?: number;
            DateWOClosedRangeUnits?: number;
            Description?: string[];
            District?: string[];
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            DomainIds?: number[];
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValues?: number[];
            EntityType?: string;
            EntityUids?: string[];
            ExpenseType?: number[];
            Extent?: GISExtent;
            Facility_Id?: string[];
            FeatureType?: string;
            FeatureUids?: string[];
            FromDateBegin?: Date;
            FromDateEnd?: Date;
            FromDateIsNull?: boolean;
            FromDateNotInRange?: boolean;
            FromDateRangeIncludeCurrent?: boolean;
            FromDateRangeLast?: number;
            FromDateRangeNext?: number;
            FromDateRangeUnits?: number;
            HasAttachment?: boolean;
            HasCase?: boolean;
            HasInspection?: boolean;
            HasRequest?: boolean;
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
            IsReactive?: boolean;
            LegalBillable?: boolean;
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
            NumDaysBefore?: number[];
            NumDaysBeforeIsInList?: boolean;
            PastDue?: boolean;
            PrimaryContractId?: number[];
            PrimaryContractIdIsInList?: boolean;
            Priority?: string[];
            ProjectedFinishDateBegin?: Date;
            ProjectedFinishDateEnd?: Date;
            ProjectedFinishDateIsNull?: boolean;
            ProjectedFinishDateNotInRange?: boolean;
            ProjectedFinishDateRangeIncludeCurrent?: boolean;
            ProjectedFinishDateRangeLast?: number;
            ProjectedFinishDateRangeNext?: number;
            ProjectedFinishDateRangeUnits?: number;
            ProjectedStartDateBegin?: Date;
            ProjectedStartDateEnd?: Date;
            ProjectedStartDateIsNull?: boolean;
            ProjectedStartDateNotInRange?: boolean;
            ProjectedStartDateRangeIncludeCurrent?: boolean;
            ProjectedStartDateRangeLast?: number;
            ProjectedStartDateRangeNext?: number;
            ProjectedStartDateRangeUnits?: number;
            ProjectName?: string[];
            ProjectSid?: number[];
            ProjectSidIsInList?: boolean;
            RequestedBy?: string[];
            RequestedBySid?: number[];
            RequestedBySidIsInList?: boolean;
            Resolution?: string[];
            ScheduleDateBegin?: Date;
            ScheduleDateEnd?: Date;
            ScheduleDateIsNull?: boolean;
            ScheduleDateNotInRange?: boolean;
            ScheduleDateRangeIncludeCurrent?: boolean;
            ScheduleDateRangeLast?: number;
            ScheduleDateRangeNext?: number;
            ScheduleDateRangeUnits?: number;
            Shop?: string[];
            SourceWOId?: string[];
            Stage?: number[];
            Status?: string[];
            StreetName?: string[];
            SubmitTo?: number[];
            SubmitToOpenBy?: string[];
            SubmitToOpenBySid?: number[];
            SubmitToOpenBySidIsInList?: boolean;
            SubmitToSid?: number[];
            SubmitToSidIsInList?: boolean;
            Supervisor?: string[];
            SupervisorSid?: number[];
            SupervisorSidIsInList?: boolean;
            TaskActualFinishDateBegin?: Date;
            TaskActualFinishDateEnd?: Date;
            TaskActualFinishDateIsNull?: boolean;
            TaskActualFinishDateNotInRange?: boolean;
            TaskActualFinishDateRangeIncludeCurrent?: boolean;
            TaskActualFinishDateRangeLast?: number;
            TaskActualFinishDateRangeNext?: number;
            TaskActualFinishDateRangeUnits?: number;
            TaskAssignedTo?: number[];
            TaskAssignedToIsInList?: boolean;
            TaskStatus?: string[];
            Text1?: string[];
            Text10?: string[];
            Text11?: string[];
            Text12?: string[];
            Text13?: string[];
            Text14?: string[];
            Text15?: string[];
            Text16?: string[];
            Text17?: string[];
            Text18?: string[];
            Text19?: string[];
            Text2?: string[];
            Text20?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TileNo?: string[];
            TransToWOId?: string[];
            Unattached?: boolean;
            UnitsAccompDesc?: string[];
            UnitsAccompDescLock?: boolean;
            UnitsAccomplishedIncludeNulls?: boolean;
            UnitsAccomplishedIsMaxValueExclusive?: boolean;
            UnitsAccomplishedIsMinValueExclusive?: boolean;
            UnitsAccomplishedMaxValue?: number;
            UnitsAccomplishedMinValue?: number;
            UnitsAccomplishedRangeType?: number;
            UnitsAccomplishedValues?: number[];
            UpdateMap?: boolean;
            WOAddress?: string[];
            WOCategory?: string[];
            WOClosedBy?: string[];
            WOCostIncludeNulls?: boolean;
            WOCostIsMaxValueExclusive?: boolean;
            WOCostIsMinValueExclusive?: boolean;
            WOCostMaxValue?: number;
            WOCostMinValue?: number;
            WOCostRangeType?: number;
            WOCostValues?: number[];
            WOCustFieldCatId?: number[];
            WOCustFieldCatIdIsInList?: boolean;
            WOEquipCostIncludeNulls?: boolean;
            WOEquipCostIsMaxValueExclusive?: boolean;
            WOEquipCostIsMinValueExclusive?: boolean;
            WOEquipCostMaxValue?: number;
            WOEquipCostMinValue?: number;
            WOEquipCostRangeType?: number;
            WOEquipCostValues?: number[];
            WOLaborCostIncludeNulls?: boolean;
            WOLaborCostIsMaxValueExclusive?: boolean;
            WOLaborCostIsMinValueExclusive?: boolean;
            WOLaborCostMaxValue?: number;
            WOLaborCostMinValue?: number;
            WOLaborCostRangeType?: number;
            WOLaborCostValues?: number[];
            WOMatCostIncludeNulls?: boolean;
            WOMatCostIsMaxValueExclusive?: boolean;
            WOMatCostIsMinValueExclusive?: boolean;
            WOMatCostMaxValue?: number;
            WOMatCostMinValue?: number;
            WOMatCostRangeType?: number;
            WOMatCostValues?: number[];
            WOPermitCostIncludeNulls?: boolean;
            WOPermitCostIsMaxValueExclusive?: boolean;
            WOPermitCostIsMinValueExclusive?: boolean;
            WOPermitCostMaxValue?: number;
            WOPermitCostMinValue?: number;
            WOPermitCostRangeType?: number;
            WOPermitCostValues?: number[];
            WorkCompletedBy?: string[];
            WorkCompletedBySid?: number[];
            WorkCompletedBySidIsInList?: boolean;
            WorkOrderId?: string[];
            WorkOrderIds?: string[];
            WorkOrderSid?: number[];
            WorkOrderSidIsInList?: boolean;
            WOTemplateId?: string[];
            WOTemplateIds?: string[];
        }
        interface SearchObject extends ServiceTypes.CoreRequestBase {
            WorkOrderId: string;
        }
        interface Stages extends ServiceTypes.CoreRequestBase {
        }
        interface Statuses extends ServiceTypes.CoreRequestBase {
        }
        interface SubmitTos extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
            IncludeInactiveEmployees?: boolean;
        }
        interface Supervisors extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
            IncludeInactiveEmployees?: boolean;
        }
        interface Template extends ServiceTypes.CoreRequestBase {
            WOTemplateId: string;
        }
        interface TemplateCustomFields extends ServiceTypes.CoreRequestBase {
            WOTemplateId: string;
        }
        interface Templates extends ServiceTypes.CoreRequestBase {
            CanCreate?: boolean;
            Category?: string;
            EntityType: string;
            EntityTypes: string[];
            WOTemplateIds?: string[];
        }
        interface Uncancel extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        interface UnlinkInspections extends ServiceTypes.CoreRequestBase {
            InspectionIds?: number[];
            WorkOrderId: string;
        }
        interface UnlinkServiceRequests extends ServiceTypes.CoreRequestBase {
            RequestIds?: number[];
            WorkOrderId: string;
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            Account?: string;
            ActivityZone?: string;
            ActualFinishDate?: Date;
            ActualStartDate?: Date;
            Address?: string;
            ApplyToEntity?: string;
            AssetGroup?: string;
            CompletedBy?: number;
            CompletedBySid?: number;
            ContractorSid?: number;
            ContractWOId?: string;
            ContrBillable?: boolean;
            CustomFieldValues?: {
                [key: number]: string;
            };
            CycleFrom?: string;
            CycleIntervalNum?: number;
            CycleIntervalUnit?: string;
            CycleType?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            DatePrinted?: Date;
            DateSubmitTo?: Date;
            DateSubmitToOpen?: Date;
            DateToBePrinted?: Date;
            Description?: string;
            District?: string;
            Effort?: number;
            ExpenseType?: string;
            Facility_Id?: string;
            FromDate?: Date;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspectionIds?: number[];
            Instructions?: string;
            LegalBillable?: boolean;
            Level_Id?: string;
            Location?: string;
            MapPage?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            PrimaryContractId?: number;
            Priority?: string;
            Project?: number;
            ProjectedFinishDate?: Date;
            ProjectedStartDate?: Date;
            Reactive?: boolean;
            RequestedBySid?: number;
            RequestIds?: number[];
            Resolution?: string;
            ScheduleDate?: Date;
            Shop?: string;
            SourceWOId?: string;
            Stage?: string;
            Status?: string;
            StreetName?: string;
            SubmitTo?: number;
            SubmitToOpenBy?: number;
            SubmitToOpenBySid?: number;
            SubmitToSid?: number;
            Supervisor?: number;
            SupervisorSid?: number;
            SuppressCycle?: boolean;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TileNo?: string;
            UnitsAccompDescLock?: boolean;
            UnitsAccomplished?: number;
            UnitsAccomplishedDescription?: string;
            UpdateMap?: boolean;
            WOCategory?: string;
            WOCustFieldCatId?: number;
            WorkOrderId: string;
            WorkOrderSid: number;
            WOTemplateId?: string;
        }
        interface UpdateEntity extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityUid: string;
            Facility_Id?: string;
            Level_Id?: string;
            WorkComplete?: boolean;
            WorkOrderId: string;
            WorkOrderSid: number;
        }
        interface WorkOrderInspections extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        interface WorkOrderServiceRequests extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        interface WorkOrderWorkOrders extends ServiceTypes.CoreRequestBase {
            CreatedByCycle?: boolean;
            WorkOrderIds: string[];
        }
    }
    namespace Responses {
        interface AddComments extends ServiceTypes.CoreResponseBase_<string> {
        }
        interface AddEntities extends ServiceTypes.CoreResponseBase_<WorkOrderEntity[]> {
        }
        interface AuditLog extends ServiceTypes.CoreResponseBase_<CWMetaData[]> {
        }
        interface ById extends ServiceTypes.CoreResponseBase_<WorkOrderBase> {
        }
        interface ByIds extends ServiceTypes.CoreResponseBase_<WorkOrderBase[]> {
        }
        interface BySid extends ServiceTypes.CoreResponseBase_<WorkOrderBase> {
        }
        interface BySids extends ServiceTypes.CoreResponseBase_<WorkOrderBase[]> {
        }
        interface Cancel extends ServiceTypes.CoreResponseBase_<WorkOrderBase[]> {
        }
        interface Categories extends ServiceTypes.CoreResponseBase_<CodeDesc[]> {
        }
        interface ChangeCustomFieldCategory extends ServiceTypes.CoreResponseBase_<WorkOrderBase[]> {
        }
        interface Close extends ServiceTypes.CoreResponseBase_<WorkOrderBase[]> {
        }
        interface Combine extends ServiceTypes.CoreResponseBase_<WorkOrderBase[]> {
        }
        interface Comments extends ServiceTypes.CoreResponseBase_<string> {
        }
        interface CommentsByWorkOrderIds extends ServiceTypes.CoreResponseBase_<{
            [key: string]: string;
        }> {
        }
        interface Create extends ServiceTypes.CoreResponseVerified_<WorkOrderBase[]> {
        }
        interface CreateFromInspection extends ServiceTypes.CoreResponseBase_<WorkOrderBase[]> {
        }
        interface CreateFromParent extends ServiceTypes.CoreResponseBase_<WorkOrderBase[]> {
        }
        interface CreateFromServiceRequest extends ServiceTypes.CoreResponseBase_<WorkOrderBase[]> {
        }
        interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<SearchDefinition> {
        }
        interface CustomFields extends ServiceTypes.CoreResponseBase_<{
            [key: string]: WOCustField[];
        }> {
        }
        interface CustomFieldsByWorkOrderSids extends ServiceTypes.CoreResponseBase_<{
            [key: number]: WOCustField[];
        }> {
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
        interface Entities extends ServiceTypes.CoreResponseBase_<WorkOrderEntity[]> {
        }
        interface ExpenseTypes extends ServiceTypes.CoreResponseBase_<{
            [key: string]: string;
        }> {
        }
        interface InstructionsByWorkOrderIds extends ServiceTypes.CoreResponseBase_<{
            [key: string]: string;
        }> {
        }
        interface InstructionsByWorkOrderSids extends ServiceTypes.CoreResponseBase_<{
            [key: number]: string;
        }> {
        }
        interface LinkInspections extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface LinkServiceRequests extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface Move extends ServiceTypes.CoreResponseBase_<GISPoint> {
        }
        interface Priorities extends ServiceTypes.CoreResponseBase_<CodeDesc[]> {
        }
        interface RemoveEntities extends ServiceTypes.CoreResponseBase_<string[]> {
        }
        interface ReOpen extends ServiceTypes.CoreResponseBase_<WorkOrderBase[]> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_<string[]> {
        }
        interface SearchForSids extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface SearchObject extends ServiceTypes.CoreResponseBase_<WorkOrderBase[]> {
        }
        interface Stages extends ServiceTypes.CoreResponseBase_<{
            [key: string]: string;
        }> {
        }
        interface Statuses extends ServiceTypes.CoreResponseBase_<CodeDesc[]> {
        }
        interface SubmitTos extends ServiceTypes.CoreResponseBase_<EmployeeNameId[]> {
        }
        interface Supervisors extends ServiceTypes.CoreResponseBase_<EmployeeNameId[]> {
        }
        interface Template extends ServiceTypes.CoreResponseBase_<WOTemplateBase> {
        }
        interface TemplateCustomFields extends ServiceTypes.CoreResponseBase_<CategoryCustField[]> {
        }
        interface Templates extends ServiceTypes.CoreResponseBase_<WOTemplateName[]> {
        }
        interface Uncancel extends ServiceTypes.CoreResponseBase_<WorkOrderBase[]> {
        }
        interface UnlinkInspections extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface UnlinkServiceRequests extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<WorkOrderBase> {
        }
        interface UpdateEntity extends ServiceTypes.CoreResponseBase_<WorkOrderEntity> {
        }
        interface WorkOrderInspections extends ServiceTypes.CoreResponseBase_<WorkOrderInspection[]> {
        }
        interface WorkOrderServiceRequests extends ServiceTypes.CoreResponseBase_<RequestWorkOrder[]> {
        }
        interface WorkOrderWorkOrders extends ServiceTypes.CoreResponseBase_<WorkOrderRelatedWorkOrder[]> {
        }
    }
    interface IWorkOrderService {
        AddComments?: (request: Requests.AddComments) => Promise<Responses.AddComments>;
        AddEntities?: (request: Requests.AddEntities) => Promise<Responses.AddEntities>;
        AuditLog?: (request: Requests.AuditLog) => Promise<Responses.AuditLog>;
        ById?: (request: Requests.ById) => Promise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => Promise<Responses.ByIds>;
        BySid?: (request: Requests.BySid) => Promise<Responses.BySid>;
        BySids?: (request: Requests.BySids) => Promise<Responses.BySids>;
        Cancel?: (request: Requests.Cancel) => Promise<Responses.Cancel>;
        Categories?: (request: Requests.Categories) => Promise<Responses.Categories>;
        ChangeCustomFieldCategory?: (request: Requests.ChangeCustomFieldCategory) => Promise<Responses.ChangeCustomFieldCategory>;
        Close?: (request: Requests.Close) => Promise<Responses.Close>;
        Combine?: (request: Requests.Combine) => Promise<Responses.Combine>;
        Comments?: (request: Requests.Comments) => Promise<Responses.Comments>;
        CommentsByWorkOrderIds?: (request: Requests.CommentsByWorkOrderIds) => Promise<Responses.CommentsByWorkOrderIds>;
        Create?: (request: Requests.Create) => Promise<Responses.Create>;
        CreateFromInspection?: (request: Requests.CreateFromInspection) => Promise<Responses.CreateFromInspection>;
        CreateFromParent?: (request: Requests.CreateFromParent) => Promise<Responses.CreateFromParent>;
        CreateFromServiceRequest?: (request: Requests.CreateFromServiceRequest) => Promise<Responses.CreateFromServiceRequest>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => Promise<Responses.CreateSearchDefinition>;
        CustomFields?: (request: Requests.CustomFields) => Promise<Responses.CustomFields>;
        CustomFieldsByWorkOrderSids?: (request: Requests.CustomFieldsByWorkOrderSids) => Promise<Responses.CustomFieldsByWorkOrderSids>;
        CycleFrom?: (request: Requests.CycleFrom) => Promise<Responses.CycleFrom>;
        CycleIntervals?: (request: Requests.CycleIntervals) => Promise<Responses.CycleIntervals>;
        CycleTypes?: (request: Requests.CycleTypes) => Promise<Responses.CycleTypes>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        Entities?: (request: Requests.Entities) => Promise<Responses.Entities>;
        ExpenseTypes?: (request: Requests.ExpenseTypes) => Promise<Responses.ExpenseTypes>;
        InstructionsByWorkOrderIds?: (request: Requests.InstructionsByWorkOrderIds) => Promise<Responses.InstructionsByWorkOrderIds>;
        InstructionsByWorkOrderSids?: (request: Requests.InstructionsByWorkOrderSids) => Promise<Responses.InstructionsByWorkOrderSids>;
        LinkInspections?: (request: Requests.LinkInspections) => Promise<Responses.LinkInspections>;
        LinkServiceRequests?: (request: Requests.LinkServiceRequests) => Promise<Responses.LinkServiceRequests>;
        Move?: (request: Requests.Move) => Promise<Responses.Move>;
        Priorities?: (request: Requests.Priorities) => Promise<Responses.Priorities>;
        RemoveEntities?: (request: Requests.RemoveEntities) => Promise<Responses.RemoveEntities>;
        ReOpen?: (request: Requests.ReOpen) => Promise<Responses.ReOpen>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        SearchForSids?: (request: Requests.SearchForSids) => Promise<Responses.SearchForSids>;
        SearchObject?: (request: Requests.SearchObject) => Promise<Responses.SearchObject>;
        Stages?: (request: Requests.Stages) => Promise<Responses.Stages>;
        Statuses?: (request: Requests.Statuses) => Promise<Responses.Statuses>;
        SubmitTos?: (request: Requests.SubmitTos) => Promise<Responses.SubmitTos>;
        Supervisors?: (request: Requests.Supervisors) => Promise<Responses.Supervisors>;
        Template?: (request: Requests.Template) => Promise<Responses.Template>;
        TemplateCustomFields?: (request: Requests.TemplateCustomFields) => Promise<Responses.TemplateCustomFields>;
        Templates?: (request: Requests.Templates) => Promise<Responses.Templates>;
        Uncancel?: (request: Requests.Uncancel) => Promise<Responses.Uncancel>;
        UnlinkInspections?: (request: Requests.UnlinkInspections) => Promise<Responses.UnlinkInspections>;
        UnlinkServiceRequests?: (request: Requests.UnlinkServiceRequests) => Promise<Responses.UnlinkServiceRequests>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
        UpdateEntity?: (request: Requests.UpdateEntity) => Promise<Responses.UpdateEntity>;
        WorkOrderInspections?: (request: Requests.WorkOrderInspections) => Promise<Responses.WorkOrderInspections>;
        WorkOrderServiceRequests?: (request: Requests.WorkOrderServiceRequests) => Promise<Responses.WorkOrderServiceRequests>;
        WorkOrderWorkOrders?: (request: Requests.WorkOrderWorkOrders) => Promise<Responses.WorkOrderWorkOrders>;
    }
}
