import { SearchDefinition } from '../core/types/SearchDefinition';
import { WorkOrderEntity } from '../core/types/WorkOrderEntity';
import { GISExtent } from '../core/types/GISExtent';
import { ServiceTypes } from '../core/service-types';
export declare namespace WorkOrderEntityServiceTypes {
    namespace Requests {
        interface ByIds extends ServiceTypes.CoreRequestBase {
            GetGisData?: boolean;
            ObjectIds: number[];
        }
        interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            Address?: string[];
            EnableEurl?: boolean;
            EntitySid?: number[];
            EntitySidIncludeNulls?: boolean;
            EntitySidIsInList?: boolean;
            EntitySidIsMaxValueExclusive?: boolean;
            EntitySidIsMinValueExclusive?: boolean;
            EntitySidMaxValue?: number;
            EntitySidMinValue?: number;
            EntitySidRangeType?: number;
            EntitySidValues?: number[];
            EntityType?: string[];
            EntityUid?: string[];
            EquipmentCostIncludeNulls?: boolean;
            EquipmentCostIsMaxValueExclusive?: boolean;
            EquipmentCostIsMinValueExclusive?: boolean;
            EquipmentCostMaxValue?: number;
            EquipmentCostMinValue?: number;
            EquipmentCostRangeType?: number;
            EquipmentCostValues?: number[];
            Extent?: GISExtent;
            Facility_Id?: string[];
            FeatureId?: number[];
            FeatureIdIncludeNulls?: boolean;
            FeatureIdIsInList?: boolean;
            FeatureIdIsMaxValueExclusive?: boolean;
            FeatureIdIsMinValueExclusive?: boolean;
            FeatureIdMaxValue?: number;
            FeatureIdMinValue?: number;
            FeatureIdRangeType?: number;
            FeatureIdValues?: number[];
            FeatureType?: string[];
            FeatureUid?: string[];
            LaborCostIncludeNulls?: boolean;
            LaborCostIsMaxValueExclusive?: boolean;
            LaborCostIsMinValueExclusive?: boolean;
            LaborCostMaxValue?: number;
            LaborCostMinValue?: number;
            LaborCostRangeType?: number;
            LaborCostValues?: number[];
            LegacyId?: string[];
            Level_Id?: string[];
            LineItemCostIncludeNulls?: boolean;
            LineItemCostIsMaxValueExclusive?: boolean;
            LineItemCostIsMinValueExclusive?: boolean;
            LineItemCostMaxValue?: number;
            LineItemCostMinValue?: number;
            LineItemCostRangeType?: number;
            LineItemCostValues?: number[];
            Location?: string[];
            MaterialCostIncludeNulls?: boolean;
            MaterialCostIsMaxValueExclusive?: boolean;
            MaterialCostIsMinValueExclusive?: boolean;
            MaterialCostMaxValue?: number;
            MaterialCostMinValue?: number;
            MaterialCostRangeType?: number;
            MaterialCostValues?: number[];
            MaxResults?: number;
            ObjectId?: number[];
            ObjectIdIsInList?: boolean;
            SaveDefinition?: boolean;
            SearchName?: string;
            Sequence?: number[];
            SequenceIsInList?: boolean;
            SharedWithin?: number;
            TileNo?: string[];
            TotalCostIncludeNulls?: boolean;
            TotalCostIsMaxValueExclusive?: boolean;
            TotalCostIsMinValueExclusive?: boolean;
            TotalCostMaxValue?: number;
            TotalCostMinValue?: number;
            TotalCostRangeType?: number;
            TotalCostValues?: number[];
            TotalHoursIncludeNulls?: boolean;
            TotalHoursIsMaxValueExclusive?: boolean;
            TotalHoursIsMinValueExclusive?: boolean;
            TotalHoursMaxValue?: number;
            TotalHoursMinValue?: number;
            TotalHoursRangeType?: number;
            TotalHoursValues?: number[];
            WarrantyDateBegin?: Date;
            WarrantyDateEnd?: Date;
            WarrantyDateIsNull?: boolean;
            WarrantyDateNotInRange?: boolean;
            WarrantyDateRangeIncludeCurrent?: boolean;
            WarrantyDateRangeLast?: number;
            WarrantyDateRangeNext?: number;
            WarrantyDateRangeUnits?: number;
            WoActualFinishDateBegin?: Date;
            WoActualFinishDateEnd?: Date;
            WoActualFinishDateIsNull?: boolean;
            WoActualFinishDateNotInRange?: boolean;
            WoActualFinishDateRangeIncludeCurrent?: boolean;
            WoActualFinishDateRangeLast?: number;
            WoActualFinishDateRangeNext?: number;
            WoActualFinishDateRangeUnits?: number;
            WoActualStartDateBegin?: Date;
            WoActualStartDateEnd?: Date;
            WoActualStartDateIsNull?: boolean;
            WoActualStartDateNotInRange?: boolean;
            WoActualStartDateRangeIncludeCurrent?: boolean;
            WoActualStartDateRangeLast?: number;
            WoActualStartDateRangeNext?: number;
            WoActualStartDateRangeUnits?: number;
            WoCancelDateBegin?: Date;
            WoCancelDateEnd?: Date;
            WoCancelDateIsNull?: boolean;
            WoCancelDateNotInRange?: boolean;
            WoCancelDateRangeIncludeCurrent?: boolean;
            WoCancelDateRangeLast?: number;
            WoCancelDateRangeNext?: number;
            WoCancelDateRangeUnits?: number;
            WoCanceled?: boolean;
            WoCanceledBySid?: number[];
            WoCanceledBySidIsInList?: boolean;
            WoClosed?: boolean;
            WoCloseDateBegin?: Date;
            WoCloseDateEnd?: Date;
            WoCloseDateIsNull?: boolean;
            WoCloseDateNotInRange?: boolean;
            WoCloseDateRangeIncludeCurrent?: boolean;
            WoCloseDateRangeLast?: number;
            WoCloseDateRangeNext?: number;
            WoCloseDateRangeUnits?: number;
            WoClosedBySid?: number[];
            WoClosedBySidIsInList?: boolean;
            WoDate1Begin?: Date;
            WoDate1End?: Date;
            WoDate1IsNull?: boolean;
            WoDate1NotInRange?: boolean;
            WoDate1RangeIncludeCurrent?: boolean;
            WoDate1RangeLast?: number;
            WoDate1RangeNext?: number;
            WoDate1RangeUnits?: number;
            WoDate2Begin?: Date;
            WoDate2End?: Date;
            WoDate2IsNull?: boolean;
            WoDate2NotInRange?: boolean;
            WoDate2RangeIncludeCurrent?: boolean;
            WoDate2RangeLast?: number;
            WoDate2RangeNext?: number;
            WoDate2RangeUnits?: number;
            WoDate3Begin?: Date;
            WoDate3End?: Date;
            WoDate3IsNull?: boolean;
            WoDate3NotInRange?: boolean;
            WoDate3RangeIncludeCurrent?: boolean;
            WoDate3RangeLast?: number;
            WoDate3RangeNext?: number;
            WoDate3RangeUnits?: number;
            WoDate4Begin?: Date;
            WoDate4End?: Date;
            WoDate4IsNull?: boolean;
            WoDate4NotInRange?: boolean;
            WoDate4RangeIncludeCurrent?: boolean;
            WoDate4RangeLast?: number;
            WoDate4RangeNext?: number;
            WoDate4RangeUnits?: number;
            WoDate5Begin?: Date;
            WoDate5End?: Date;
            WoDate5IsNull?: boolean;
            WoDate5NotInRange?: boolean;
            WoDate5RangeIncludeCurrent?: boolean;
            WoDate5RangeLast?: number;
            WoDate5RangeNext?: number;
            WoDate5RangeUnits?: number;
            WoDateSubmitToBegin?: Date;
            WoDateSubmitToEnd?: Date;
            WoDateSubmitToIsNull?: boolean;
            WoDateSubmitToNotInRange?: boolean;
            WoDateSubmitToRangeIncludeCurrent?: boolean;
            WoDateSubmitToRangeLast?: number;
            WoDateSubmitToRangeNext?: number;
            WoDateSubmitToRangeUnits?: number;
            WoDescription?: string[];
            WoDomainId?: number[];
            WoDomainIdIsInList?: boolean;
            WoInitiatedByApp?: string[];
            WoIsReactive?: boolean;
            WoNum1IncludeNulls?: boolean;
            WoNum1IsMaxValueExclusive?: boolean;
            WoNum1IsMinValueExclusive?: boolean;
            WoNum1MaxValue?: number;
            WoNum1MinValue?: number;
            WoNum1RangeType?: number;
            WoNum1Values?: number[];
            WoNum2IncludeNulls?: boolean;
            WoNum2IsMaxValueExclusive?: boolean;
            WoNum2IsMinValueExclusive?: boolean;
            WoNum2MaxValue?: number;
            WoNum2MinValue?: number;
            WoNum2RangeType?: number;
            WoNum2Values?: number[];
            WoNum3IncludeNulls?: boolean;
            WoNum3IsMaxValueExclusive?: boolean;
            WoNum3IsMinValueExclusive?: boolean;
            WoNum3MaxValue?: number;
            WoNum3MinValue?: number;
            WoNum3RangeType?: number;
            WoNum3Values?: number[];
            WoNum4IncludeNulls?: boolean;
            WoNum4IsMaxValueExclusive?: boolean;
            WoNum4IsMinValueExclusive?: boolean;
            WoNum4MaxValue?: number;
            WoNum4MinValue?: number;
            WoNum4RangeType?: number;
            WoNum4Values?: number[];
            WoNum5IncludeNulls?: boolean;
            WoNum5IsMaxValueExclusive?: boolean;
            WoNum5IsMinValueExclusive?: boolean;
            WoNum5MaxValue?: number;
            WoNum5MinValue?: number;
            WoNum5RangeType?: number;
            WoNum5Values?: number[];
            WoPastDue?: boolean;
            WoPriority?: string[];
            WoProjectedFinishDateBegin?: Date;
            WoProjectedFinishDateEnd?: Date;
            WoProjectedFinishDateIsNull?: boolean;
            WoProjectedFinishDateNotInRange?: boolean;
            WoProjectedFinishDateRangeIncludeCurrent?: boolean;
            WoProjectedFinishDateRangeLast?: number;
            WoProjectedFinishDateRangeNext?: number;
            WoProjectedFinishDateRangeUnits?: number;
            WoProjectedStartDateBegin?: Date;
            WoProjectedStartDateEnd?: Date;
            WoProjectedStartDateIsNull?: boolean;
            WoProjectedStartDateNotInRange?: boolean;
            WoProjectedStartDateRangeIncludeCurrent?: boolean;
            WoProjectedStartDateRangeLast?: number;
            WoProjectedStartDateRangeNext?: number;
            WoProjectedStartDateRangeUnits?: number;
            WorkCompleted?: boolean;
            WorkOrderId?: string[];
            WoStatus?: string[];
            WoSubmitToSid?: number[];
            WoSubmitToSidIsInList?: boolean;
            WoText1?: string[];
            WoText10?: string[];
            WoText11?: string[];
            WoText12?: string[];
            WoText13?: string[];
            WoText14?: string[];
            WoText15?: string[];
            WoText16?: string[];
            WoText17?: string[];
            WoText18?: string[];
            WoText19?: string[];
            WoText2?: string[];
            WoText20?: string[];
            WoText3?: string[];
            WoText4?: string[];
            WoText5?: string[];
            WoText6?: string[];
            WoText7?: string[];
            WoText8?: string[];
            WoText9?: string[];
            WoWOTemplateId?: string[];
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            Address?: string[];
            EntitySid?: number[];
            EntitySidIncludeNulls?: boolean;
            EntitySidIsInList?: boolean;
            EntitySidIsMaxValueExclusive?: boolean;
            EntitySidIsMinValueExclusive?: boolean;
            EntitySidMaxValue?: number;
            EntitySidMinValue?: number;
            EntitySidRangeType?: number;
            EntitySidValues?: number[];
            EntityType?: string[];
            EntityUid?: string[];
            EquipmentCostIncludeNulls?: boolean;
            EquipmentCostIsMaxValueExclusive?: boolean;
            EquipmentCostIsMinValueExclusive?: boolean;
            EquipmentCostMaxValue?: number;
            EquipmentCostMinValue?: number;
            EquipmentCostRangeType?: number;
            EquipmentCostValues?: number[];
            Extent?: GISExtent;
            Facility_Id?: string[];
            FeatureId?: number[];
            FeatureIdIncludeNulls?: boolean;
            FeatureIdIsInList?: boolean;
            FeatureIdIsMaxValueExclusive?: boolean;
            FeatureIdIsMinValueExclusive?: boolean;
            FeatureIdMaxValue?: number;
            FeatureIdMinValue?: number;
            FeatureIdRangeType?: number;
            FeatureIdValues?: number[];
            FeatureType?: string[];
            FeatureUid?: string[];
            LaborCostIncludeNulls?: boolean;
            LaborCostIsMaxValueExclusive?: boolean;
            LaborCostIsMinValueExclusive?: boolean;
            LaborCostMaxValue?: number;
            LaborCostMinValue?: number;
            LaborCostRangeType?: number;
            LaborCostValues?: number[];
            LegacyId?: string[];
            Level_Id?: string[];
            LineItemCostIncludeNulls?: boolean;
            LineItemCostIsMaxValueExclusive?: boolean;
            LineItemCostIsMinValueExclusive?: boolean;
            LineItemCostMaxValue?: number;
            LineItemCostMinValue?: number;
            LineItemCostRangeType?: number;
            LineItemCostValues?: number[];
            Location?: string[];
            MaterialCostIncludeNulls?: boolean;
            MaterialCostIsMaxValueExclusive?: boolean;
            MaterialCostIsMinValueExclusive?: boolean;
            MaterialCostMaxValue?: number;
            MaterialCostMinValue?: number;
            MaterialCostRangeType?: number;
            MaterialCostValues?: number[];
            MaxResults?: number;
            ObjectId?: number[];
            ObjectIdIsInList?: boolean;
            Sequence?: number[];
            SequenceIsInList?: boolean;
            TileNo?: string[];
            TotalCostIncludeNulls?: boolean;
            TotalCostIsMaxValueExclusive?: boolean;
            TotalCostIsMinValueExclusive?: boolean;
            TotalCostMaxValue?: number;
            TotalCostMinValue?: number;
            TotalCostRangeType?: number;
            TotalCostValues?: number[];
            TotalHoursIncludeNulls?: boolean;
            TotalHoursIsMaxValueExclusive?: boolean;
            TotalHoursIsMinValueExclusive?: boolean;
            TotalHoursMaxValue?: number;
            TotalHoursMinValue?: number;
            TotalHoursRangeType?: number;
            TotalHoursValues?: number[];
            WarrantyDateBegin?: Date;
            WarrantyDateEnd?: Date;
            WarrantyDateIsNull?: boolean;
            WarrantyDateNotInRange?: boolean;
            WarrantyDateRangeIncludeCurrent?: boolean;
            WarrantyDateRangeLast?: number;
            WarrantyDateRangeNext?: number;
            WarrantyDateRangeUnits?: number;
            WoActualFinishDateBegin?: Date;
            WoActualFinishDateEnd?: Date;
            WoActualFinishDateIsNull?: boolean;
            WoActualFinishDateNotInRange?: boolean;
            WoActualFinishDateRangeIncludeCurrent?: boolean;
            WoActualFinishDateRangeLast?: number;
            WoActualFinishDateRangeNext?: number;
            WoActualFinishDateRangeUnits?: number;
            WoActualStartDateBegin?: Date;
            WoActualStartDateEnd?: Date;
            WoActualStartDateIsNull?: boolean;
            WoActualStartDateNotInRange?: boolean;
            WoActualStartDateRangeIncludeCurrent?: boolean;
            WoActualStartDateRangeLast?: number;
            WoActualStartDateRangeNext?: number;
            WoActualStartDateRangeUnits?: number;
            WoCancelDateBegin?: Date;
            WoCancelDateEnd?: Date;
            WoCancelDateIsNull?: boolean;
            WoCancelDateNotInRange?: boolean;
            WoCancelDateRangeIncludeCurrent?: boolean;
            WoCancelDateRangeLast?: number;
            WoCancelDateRangeNext?: number;
            WoCancelDateRangeUnits?: number;
            WoCanceled?: boolean;
            WoCanceledBySid?: number[];
            WoCanceledBySidIsInList?: boolean;
            WoClosed?: boolean;
            WoCloseDateBegin?: Date;
            WoCloseDateEnd?: Date;
            WoCloseDateIsNull?: boolean;
            WoCloseDateNotInRange?: boolean;
            WoCloseDateRangeIncludeCurrent?: boolean;
            WoCloseDateRangeLast?: number;
            WoCloseDateRangeNext?: number;
            WoCloseDateRangeUnits?: number;
            WoClosedBySid?: number[];
            WoClosedBySidIsInList?: boolean;
            WoDate1Begin?: Date;
            WoDate1End?: Date;
            WoDate1IsNull?: boolean;
            WoDate1NotInRange?: boolean;
            WoDate1RangeIncludeCurrent?: boolean;
            WoDate1RangeLast?: number;
            WoDate1RangeNext?: number;
            WoDate1RangeUnits?: number;
            WoDate2Begin?: Date;
            WoDate2End?: Date;
            WoDate2IsNull?: boolean;
            WoDate2NotInRange?: boolean;
            WoDate2RangeIncludeCurrent?: boolean;
            WoDate2RangeLast?: number;
            WoDate2RangeNext?: number;
            WoDate2RangeUnits?: number;
            WoDate3Begin?: Date;
            WoDate3End?: Date;
            WoDate3IsNull?: boolean;
            WoDate3NotInRange?: boolean;
            WoDate3RangeIncludeCurrent?: boolean;
            WoDate3RangeLast?: number;
            WoDate3RangeNext?: number;
            WoDate3RangeUnits?: number;
            WoDate4Begin?: Date;
            WoDate4End?: Date;
            WoDate4IsNull?: boolean;
            WoDate4NotInRange?: boolean;
            WoDate4RangeIncludeCurrent?: boolean;
            WoDate4RangeLast?: number;
            WoDate4RangeNext?: number;
            WoDate4RangeUnits?: number;
            WoDate5Begin?: Date;
            WoDate5End?: Date;
            WoDate5IsNull?: boolean;
            WoDate5NotInRange?: boolean;
            WoDate5RangeIncludeCurrent?: boolean;
            WoDate5RangeLast?: number;
            WoDate5RangeNext?: number;
            WoDate5RangeUnits?: number;
            WoDateSubmitToBegin?: Date;
            WoDateSubmitToEnd?: Date;
            WoDateSubmitToIsNull?: boolean;
            WoDateSubmitToNotInRange?: boolean;
            WoDateSubmitToRangeIncludeCurrent?: boolean;
            WoDateSubmitToRangeLast?: number;
            WoDateSubmitToRangeNext?: number;
            WoDateSubmitToRangeUnits?: number;
            WoDescription?: string[];
            WoDomainId?: number[];
            WoDomainIdIsInList?: boolean;
            WoInitiatedByApp?: string[];
            WoIsReactive?: boolean;
            WoNum1IncludeNulls?: boolean;
            WoNum1IsMaxValueExclusive?: boolean;
            WoNum1IsMinValueExclusive?: boolean;
            WoNum1MaxValue?: number;
            WoNum1MinValue?: number;
            WoNum1RangeType?: number;
            WoNum1Values?: number[];
            WoNum2IncludeNulls?: boolean;
            WoNum2IsMaxValueExclusive?: boolean;
            WoNum2IsMinValueExclusive?: boolean;
            WoNum2MaxValue?: number;
            WoNum2MinValue?: number;
            WoNum2RangeType?: number;
            WoNum2Values?: number[];
            WoNum3IncludeNulls?: boolean;
            WoNum3IsMaxValueExclusive?: boolean;
            WoNum3IsMinValueExclusive?: boolean;
            WoNum3MaxValue?: number;
            WoNum3MinValue?: number;
            WoNum3RangeType?: number;
            WoNum3Values?: number[];
            WoNum4IncludeNulls?: boolean;
            WoNum4IsMaxValueExclusive?: boolean;
            WoNum4IsMinValueExclusive?: boolean;
            WoNum4MaxValue?: number;
            WoNum4MinValue?: number;
            WoNum4RangeType?: number;
            WoNum4Values?: number[];
            WoNum5IncludeNulls?: boolean;
            WoNum5IsMaxValueExclusive?: boolean;
            WoNum5IsMinValueExclusive?: boolean;
            WoNum5MaxValue?: number;
            WoNum5MinValue?: number;
            WoNum5RangeType?: number;
            WoNum5Values?: number[];
            WoPastDue?: boolean;
            WoPriority?: string[];
            WoProjectedFinishDateBegin?: Date;
            WoProjectedFinishDateEnd?: Date;
            WoProjectedFinishDateIsNull?: boolean;
            WoProjectedFinishDateNotInRange?: boolean;
            WoProjectedFinishDateRangeIncludeCurrent?: boolean;
            WoProjectedFinishDateRangeLast?: number;
            WoProjectedFinishDateRangeNext?: number;
            WoProjectedFinishDateRangeUnits?: number;
            WoProjectedStartDateBegin?: Date;
            WoProjectedStartDateEnd?: Date;
            WoProjectedStartDateIsNull?: boolean;
            WoProjectedStartDateNotInRange?: boolean;
            WoProjectedStartDateRangeIncludeCurrent?: boolean;
            WoProjectedStartDateRangeLast?: number;
            WoProjectedStartDateRangeNext?: number;
            WoProjectedStartDateRangeUnits?: number;
            WorkCompleted?: boolean;
            WorkOrderId?: string[];
            WoStatus?: string[];
            WoSubmitToSid?: number[];
            WoSubmitToSidIsInList?: boolean;
            WoText1?: string[];
            WoText10?: string[];
            WoText11?: string[];
            WoText12?: string[];
            WoText13?: string[];
            WoText14?: string[];
            WoText15?: string[];
            WoText16?: string[];
            WoText17?: string[];
            WoText18?: string[];
            WoText19?: string[];
            WoText2?: string[];
            WoText20?: string[];
            WoText3?: string[];
            WoText4?: string[];
            WoText5?: string[];
            WoText6?: string[];
            WoText7?: string[];
            WoText8?: string[];
            WoText9?: string[];
            WoWOTemplateId?: string[];
        }
    }
    namespace Responses {
        interface ByIds extends ServiceTypes.CoreResponseBase_<WorkOrderEntity[]> {
        }
        interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<SearchDefinition> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_<number[]> {
        }
    }
    interface IWorkOrderEntityService {
        ByIds?: (request: Requests.ByIds) => Promise<Responses.ByIds>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => Promise<Responses.CreateSearchDefinition>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
    }
}
