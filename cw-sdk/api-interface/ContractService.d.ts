import { LineItemCost } from '../core/types/LineItemCost';
import { ContractPermit } from '../core/types/ContractPermit';
import { ContractLineItemSummary } from '../core/types/ContractLineItemSummary';
import { SearchDefinition } from '../core/types/SearchDefinition';
import { ContractBase } from '../core/types/ContractBase';
import { ContractSubmittal } from '../core/types/ContractSubmittal';
import { ContractSubcontractor } from '../core/types/ContractSubcontractor';
import { ContractLineItem } from '../core/types/ContractLineItem';
import { ContractFundSource } from '../core/types/ContractFundSource';
import { ContractClaimBase } from '../core/types/ContractClaimBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace ContractServiceTypes {
    namespace Requests {
        interface AddLineItem extends ServiceTypes.CoreRequestBase {
            ContractId: number;
            ContractPeriod?: number;
            LineItemId: number;
            PrjUnitPrice?: number;
            UnitPrice?: number;
            Units?: number;
            UnitsUsed?: number;
        }
        interface ByIds extends ServiceTypes.CoreRequestBase {
            ContractIds?: number[];
        }
        interface Claims extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        interface Create extends ServiceTypes.CoreRequestBase {
            AccountantSid?: number;
            AcctManagerSid?: number;
            ActualBudget?: number;
            ActualFinishDate?: Date;
            Address?: string;
            BidBondPercent?: number;
            BidBudget?: number;
            BidDate?: Date;
            BidDepositPercent?: number;
            BondReleased?: boolean;
            BondReleaseDate?: Date;
            City?: string;
            Comments?: string;
            ContractClaims?: ContractClaimBase[];
            ContractFundSources?: ContractFundSource[];
            ContractLineItems?: ContractLineItem[];
            ContractNumber: string;
            ContractorSid?: number;
            ContractSubcontractors?: ContractSubcontractor[];
            ContractSubmittals?: ContractSubmittal[];
            ContractTemplateId?: number;
            ContractType?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Description?: string;
            DesignDate?: Date;
            District?: string;
            DomainId?: number;
            Duration?: number;
            DurationUnit?: number;
            EstimatedBudget?: number;
            FinalInspDate?: Date;
            FinalPLInspDate?: Date;
            FundingSource?: string;
            GuaranteeInspDate?: Date;
            GuaranteePLInspDate?: Date;
            IsTemplate?: boolean;
            Location?: string;
            NextWOSeqId?: number;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            OptionalPeriods?: number;
            PaymentBondPercent?: number;
            PerformanceBondDate?: Date;
            PerformanceBondPercent?: number;
            PermitIds?: number[];
            ScheduledFinishDate?: Date;
            SignedDate?: Date;
            StartDate?: Date;
            State?: string;
            Status?: string;
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
            TransmitDate?: Date;
            UseInspDate?: Date;
            UsePLInspDate?: Date;
            Viewable?: boolean;
            WOPrefix?: string;
            X?: number;
            Y?: number;
            Zip?: string;
        }
        interface CreateFundSource extends ServiceTypes.CoreRequestBase {
            ContractId: number;
            Description?: string;
            FundSource?: string;
        }
        interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            Accountant?: string[];
            AccountantSid?: number[];
            AccountantSidInList?: boolean;
            AcctManager?: string[];
            AcctManagerSid?: number[];
            AcctManagerSidInList?: boolean;
            ActualBudgetIncludeNulls?: boolean;
            ActualBudgetIsMaxValueExclusive?: boolean;
            ActualBudgetIsMinValueExclusive?: boolean;
            ActualBudgetMaxValue?: number;
            ActualBudgetMinValue?: number;
            ActualBudgetRangeType?: number;
            ActualBudgetValues?: number[];
            ActualCostIncludeNulls?: boolean;
            ActualCostIsMaxValueExclusive?: boolean;
            ActualCostIsMinValueExclusive?: boolean;
            ActualCostMaxValue?: number;
            ActualCostMinValue?: number;
            ActualCostRangeType?: number;
            ActualCostValues?: number[];
            ActualFinishDateBegin?: Date;
            ActualFinishDateEnd?: Date;
            ActualFinishDateIsNull?: boolean;
            ActualFinishDateNotInRange?: boolean;
            ActualFinishDateRangeIncludeCurrent?: boolean;
            ActualFinishDateRangeLast?: number;
            ActualFinishDateRangeNext?: number;
            ActualFinishDateRangeUnits?: number;
            Address?: string[];
            BidBondPercentIncludeNulls?: boolean;
            BidBondPercentIsMaxValueExclusive?: boolean;
            BidBondPercentIsMinValueExclusive?: boolean;
            BidBondPercentMaxValue?: number;
            BidBondPercentMinValue?: number;
            BidBondPercentRangeType?: number;
            BidBondPercentValues?: number[];
            BidBudgetIncludeNulls?: boolean;
            BidBudgetIsMaxValueExclusive?: boolean;
            BidBudgetIsMinValueExclusive?: boolean;
            BidBudgetMaxValue?: number;
            BidBudgetMinValue?: number;
            BidBudgetRangeType?: number;
            BidBudgetValues?: number[];
            BidDateBegin?: Date;
            BidDateEnd?: Date;
            BidDateIsNull?: boolean;
            BidDateNotInRange?: boolean;
            BidDateRangeIncludeCurrent?: boolean;
            BidDateRangeLast?: number;
            BidDateRangeNext?: number;
            BidDateRangeUnits?: number;
            BidDepositPercentIncludeNulls?: boolean;
            BidDepositPercentIsMaxValueExclusive?: boolean;
            BidDepositPercentIsMinValueExclusive?: boolean;
            BidDepositPercentMaxValue?: number;
            BidDepositPercentMinValue?: number;
            BidDepositPercentRangeType?: number;
            BidDepositPercentValues?: number[];
            BondReleased?: boolean;
            BondReleaseDateBegin?: Date;
            BondReleaseDateEnd?: Date;
            BondReleaseDateIsNull?: boolean;
            BondReleaseDateNotInRange?: boolean;
            BondReleaseDateRangeIncludeCurrent?: boolean;
            BondReleaseDateRangeLast?: number;
            BondReleaseDateRangeNext?: number;
            BondReleaseDateRangeUnits?: number;
            City?: string[];
            Comments?: string[];
            ContractId?: number[];
            ContractNumber?: string[];
            ContractorSid?: number[];
            ContractorSidInList?: boolean;
            ContractTemplateId?: number[];
            ContractTemplateIdInList?: boolean;
            ContractType?: string[];
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
            DateTimeModifiedBegin?: Date;
            DateTimeModifiedEnd?: Date;
            DateTimeModifiedIsNull?: boolean;
            DateTimeModifiedNotInRange?: boolean;
            DateTimeModifiedRangeIncludeCurrent?: boolean;
            DateTimeModifiedRangeLast?: number;
            DateTimeModifiedRangeNext?: number;
            DateTimeModifiedRangeUnits?: number;
            Description?: string[];
            DesignDateBegin?: Date;
            DesignDateEnd?: Date;
            DesignDateIsNull?: boolean;
            DesignDateNotInRange?: boolean;
            DesignDateRangeIncludeCurrent?: boolean;
            DesignDateRangeLast?: number;
            DesignDateRangeNext?: number;
            DesignDateRangeUnits?: number;
            District?: string[];
            DomainId?: number[];
            DurationIncludeNulls?: boolean;
            DurationIsMaxValueExclusive?: boolean;
            DurationIsMinValueExclusive?: boolean;
            DurationMaxValue?: number;
            DurationMinValue?: number;
            DurationRangeType?: number;
            DurationUnit?: number[];
            DurationValues?: number[];
            EstimatedBudgetIncludeNulls?: boolean;
            EstimatedBudgetIsMaxValueExclusive?: boolean;
            EstimatedBudgetIsMinValueExclusive?: boolean;
            EstimatedBudgetMaxValue?: number;
            EstimatedBudgetMinValue?: number;
            EstimatedBudgetRangeType?: number;
            EstimatedBudgetValues?: number[];
            FinalInspDateBegin?: Date;
            FinalInspDateEnd?: Date;
            FinalInspDateIsNull?: boolean;
            FinalInspDateNotInRange?: boolean;
            FinalInspDateRangeIncludeCurrent?: boolean;
            FinalInspDateRangeLast?: number;
            FinalInspDateRangeNext?: number;
            FinalInspDateRangeUnits?: number;
            FinalPlInspDateBegin?: Date;
            FinalPlInspDateEnd?: Date;
            FinalPlInspDateIsNull?: boolean;
            FinalPlInspDateNotInRange?: boolean;
            FinalPlInspDateRangeIncludeCurrent?: boolean;
            FinalPlInspDateRangeLast?: number;
            FinalPlInspDateRangeNext?: number;
            FinalPlInspDateRangeUnits?: number;
            FundingSource?: string[];
            GuaranteeInspDateBegin?: Date;
            GuaranteeInspDateEnd?: Date;
            GuaranteeInspDateIsNull?: boolean;
            GuaranteeInspDateNotInRange?: boolean;
            GuaranteeInspDateRangeIncludeCurrent?: boolean;
            GuaranteeInspDateRangeLast?: number;
            GuaranteeInspDateRangeNext?: number;
            GuaranteeInspDateRangeUnits?: number;
            GuaranteePLInspDateBegin?: Date;
            GuaranteePLInspDateEnd?: Date;
            GuaranteePLInspDateIsNull?: boolean;
            GuaranteePLInspDateNotInRange?: boolean;
            GuaranteePLInspDateRangeIncludeCurrent?: boolean;
            GuaranteePLInspDateRangeLast?: number;
            GuaranteePLInspDateRangeNext?: number;
            GuaranteePLInspDateRangeUnits?: number;
            IsTemplate?: boolean;
            Location?: string[];
            MaxResults?: number;
            NextWOSeqIdIncludeNulls?: boolean;
            NextWOSeqIdIsMaxValueExclusive?: boolean;
            NextWOSeqIdIsMinValueExclusive?: boolean;
            NextWOSeqIdMaxValue?: number;
            NextWOSeqIdMinValue?: number;
            NextWOSeqIdRangeType?: number;
            NextWOSeqIdValues?: number[];
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
            OptionalPeriodsIncludeNulls?: boolean;
            OptionalPeriodsIsMaxValueExclusive?: boolean;
            OptionalPeriodsIsMinValueExclusive?: boolean;
            OptionalPeriodsMaxValue?: number;
            OptionalPeriodsMinValue?: number;
            OptionalPeriodsRangeType?: number;
            OptionalPeriodsValues?: number[];
            PaymentBondPercentIncludeNulls?: boolean;
            PaymentBondPercentIsMaxValueExclusive?: boolean;
            PaymentBondPercentIsMinValueExclusive?: boolean;
            PaymentBondPercentMaxValue?: number;
            PaymentBondPercentMinValue?: number;
            PaymentBondPercentRangeType?: number;
            PaymentBondPercentValues?: number[];
            PerformanceBondDateBegin?: Date;
            PerformanceBondDateEnd?: Date;
            PerformanceBondDateIsNull?: boolean;
            PerformanceBondDateNotInRange?: boolean;
            PerformanceBondDateRangeIncludeCurrent?: boolean;
            PerformanceBondDateRangeLast?: number;
            PerformanceBondDateRangeNext?: number;
            PerformanceBondDateRangeUnits?: number;
            PerformanceBondPercentIncludeNulls?: boolean;
            PerformanceBondPercentIsMaxValueExclusive?: boolean;
            PerformanceBondPercentIsMinValueExclusive?: boolean;
            PerformanceBondPercentMaxValue?: number;
            PerformanceBondPercentMinValue?: number;
            PerformanceBondPercentRangeType?: number;
            PerformanceBondPercentValues?: number[];
            SaveDefinition?: boolean;
            ScheduledFinishDateBegin?: Date;
            ScheduledFinishDateEnd?: Date;
            ScheduledFinishDateIsNull?: boolean;
            ScheduledFinishDateNotInRange?: boolean;
            ScheduledFinishDateRangeIncludeCurrent?: boolean;
            ScheduledFinishDateRangeLast?: number;
            ScheduledFinishDateRangeNext?: number;
            ScheduledFinishDateRangeUnits?: number;
            SearchName?: string;
            SharedWithin?: number;
            SignedDateBegin?: Date;
            SignedDateEnd?: Date;
            SignedDateIsNull?: boolean;
            SignedDateNotInRange?: boolean;
            SignedDateRangeIncludeCurrent?: boolean;
            SignedDateRangeLast?: number;
            SignedDateRangeNext?: number;
            SignedDateRangeUnits?: number;
            StartDateBegin?: Date;
            StartDateEnd?: Date;
            StartDateIsNull?: boolean;
            StartDateNotInRange?: boolean;
            StartDateRangeIncludeCurrent?: boolean;
            StartDateRangeLast?: number;
            StartDateRangeNext?: number;
            StartDateRangeUnits?: number;
            State?: string[];
            Status?: string[];
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
            TransmitDateBegin?: Date;
            TransmitDateEnd?: Date;
            TransmitDateIsNull?: boolean;
            TransmitDateNotInRange?: boolean;
            TransmitDateRangeIncludeCurrent?: boolean;
            TransmitDateRangeLast?: number;
            TransmitDateRangeNext?: number;
            TransmitDateRangeUnits?: number;
            UseInspDateBegin?: Date;
            UseInspDateEnd?: Date;
            UseInspDateIsNull?: boolean;
            UseInspDateNotInRange?: boolean;
            UseInspDateRangeIncludeCurrent?: boolean;
            UseInspDateRangeLast?: number;
            UseInspDateRangeNext?: number;
            UseInspDateRangeUnits?: number;
            UsePlInspDateBegin?: Date;
            UsePlInspDateEnd?: Date;
            UsePlInspDateIsNull?: boolean;
            UsePlInspDateNotInRange?: boolean;
            UsePlInspDateRangeIncludeCurrent?: boolean;
            UsePlInspDateRangeLast?: number;
            UsePlInspDateRangeNext?: number;
            UsePlInspDateRangeUnits?: number;
            Viewable?: boolean;
            WOPrefix?: string[];
            Zip?: string[];
        }
        interface CreateSubcontractor extends ServiceTypes.CoreRequestBase {
            Approved?: boolean;
            Comments?: string;
            ContractId: number;
            ContractorName?: string;
            ContractorSid?: number;
            ContractorType?: string;
            DateApproved?: Date;
            EndDate?: Date;
            StartDate?: Date;
        }
        interface CreateSubmittal extends ServiceTypes.CoreRequestBase {
            Approved?: boolean;
            ApproveDate?: Date;
            Comments?: string;
            ContractId: number;
            Description?: string;
            ReceiveDate?: Date;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            ContractIds?: number[];
        }
        interface DeleteFundSource extends ServiceTypes.CoreRequestBase {
            FundSourceIds: number[];
        }
        interface DeleteLineItems extends ServiceTypes.CoreRequestBase {
            ContractLineItemIds: number[];
        }
        interface DeleteSubcontractor extends ServiceTypes.CoreRequestBase {
            SubcontractorIds: number[];
        }
        interface DeleteSubmittal extends ServiceTypes.CoreRequestBase {
            SubmittalIds: number[];
        }
        interface FundSources extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        interface LineItems extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        interface LineItemSummary extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        interface Permits extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            Accountant?: string[];
            AccountantSid?: number[];
            AccountantSidInList?: boolean;
            AcctManager?: string[];
            AcctManagerSid?: number[];
            AcctManagerSidInList?: boolean;
            ActualBudgetIncludeNulls?: boolean;
            ActualBudgetIsMaxValueExclusive?: boolean;
            ActualBudgetIsMinValueExclusive?: boolean;
            ActualBudgetMaxValue?: number;
            ActualBudgetMinValue?: number;
            ActualBudgetRangeType?: number;
            ActualBudgetValues?: number[];
            ActualCostIncludeNulls?: boolean;
            ActualCostIsMaxValueExclusive?: boolean;
            ActualCostIsMinValueExclusive?: boolean;
            ActualCostMaxValue?: number;
            ActualCostMinValue?: number;
            ActualCostRangeType?: number;
            ActualCostValues?: number[];
            ActualFinishDateBegin?: Date;
            ActualFinishDateEnd?: Date;
            ActualFinishDateIsNull?: boolean;
            ActualFinishDateNotInRange?: boolean;
            ActualFinishDateRangeIncludeCurrent?: boolean;
            ActualFinishDateRangeLast?: number;
            ActualFinishDateRangeNext?: number;
            ActualFinishDateRangeUnits?: number;
            Address?: string[];
            BidBondPercentIncludeNulls?: boolean;
            BidBondPercentIsMaxValueExclusive?: boolean;
            BidBondPercentIsMinValueExclusive?: boolean;
            BidBondPercentMaxValue?: number;
            BidBondPercentMinValue?: number;
            BidBondPercentRangeType?: number;
            BidBondPercentValues?: number[];
            BidBudgetIncludeNulls?: boolean;
            BidBudgetIsMaxValueExclusive?: boolean;
            BidBudgetIsMinValueExclusive?: boolean;
            BidBudgetMaxValue?: number;
            BidBudgetMinValue?: number;
            BidBudgetRangeType?: number;
            BidBudgetValues?: number[];
            BidDateBegin?: Date;
            BidDateEnd?: Date;
            BidDateIsNull?: boolean;
            BidDateNotInRange?: boolean;
            BidDateRangeIncludeCurrent?: boolean;
            BidDateRangeLast?: number;
            BidDateRangeNext?: number;
            BidDateRangeUnits?: number;
            BidDepositPercentIncludeNulls?: boolean;
            BidDepositPercentIsMaxValueExclusive?: boolean;
            BidDepositPercentIsMinValueExclusive?: boolean;
            BidDepositPercentMaxValue?: number;
            BidDepositPercentMinValue?: number;
            BidDepositPercentRangeType?: number;
            BidDepositPercentValues?: number[];
            BondReleased?: boolean;
            BondReleaseDateBegin?: Date;
            BondReleaseDateEnd?: Date;
            BondReleaseDateIsNull?: boolean;
            BondReleaseDateNotInRange?: boolean;
            BondReleaseDateRangeIncludeCurrent?: boolean;
            BondReleaseDateRangeLast?: number;
            BondReleaseDateRangeNext?: number;
            BondReleaseDateRangeUnits?: number;
            City?: string[];
            Comments?: string[];
            ContractId?: number[];
            ContractNumber?: string[];
            ContractorSid?: number[];
            ContractorSidInList?: boolean;
            ContractTemplateId?: number[];
            ContractTemplateIdInList?: boolean;
            ContractType?: string[];
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
            DateTimeModifiedBegin?: Date;
            DateTimeModifiedEnd?: Date;
            DateTimeModifiedIsNull?: boolean;
            DateTimeModifiedNotInRange?: boolean;
            DateTimeModifiedRangeIncludeCurrent?: boolean;
            DateTimeModifiedRangeLast?: number;
            DateTimeModifiedRangeNext?: number;
            DateTimeModifiedRangeUnits?: number;
            Description?: string[];
            DesignDateBegin?: Date;
            DesignDateEnd?: Date;
            DesignDateIsNull?: boolean;
            DesignDateNotInRange?: boolean;
            DesignDateRangeIncludeCurrent?: boolean;
            DesignDateRangeLast?: number;
            DesignDateRangeNext?: number;
            DesignDateRangeUnits?: number;
            District?: string[];
            DomainId?: number[];
            DurationIncludeNulls?: boolean;
            DurationIsMaxValueExclusive?: boolean;
            DurationIsMinValueExclusive?: boolean;
            DurationMaxValue?: number;
            DurationMinValue?: number;
            DurationRangeType?: number;
            DurationUnit?: number[];
            DurationValues?: number[];
            EstimatedBudgetIncludeNulls?: boolean;
            EstimatedBudgetIsMaxValueExclusive?: boolean;
            EstimatedBudgetIsMinValueExclusive?: boolean;
            EstimatedBudgetMaxValue?: number;
            EstimatedBudgetMinValue?: number;
            EstimatedBudgetRangeType?: number;
            EstimatedBudgetValues?: number[];
            FinalInspDateBegin?: Date;
            FinalInspDateEnd?: Date;
            FinalInspDateIsNull?: boolean;
            FinalInspDateNotInRange?: boolean;
            FinalInspDateRangeIncludeCurrent?: boolean;
            FinalInspDateRangeLast?: number;
            FinalInspDateRangeNext?: number;
            FinalInspDateRangeUnits?: number;
            FinalPlInspDateBegin?: Date;
            FinalPlInspDateEnd?: Date;
            FinalPlInspDateIsNull?: boolean;
            FinalPlInspDateNotInRange?: boolean;
            FinalPlInspDateRangeIncludeCurrent?: boolean;
            FinalPlInspDateRangeLast?: number;
            FinalPlInspDateRangeNext?: number;
            FinalPlInspDateRangeUnits?: number;
            FundingSource?: string[];
            GuaranteeInspDateBegin?: Date;
            GuaranteeInspDateEnd?: Date;
            GuaranteeInspDateIsNull?: boolean;
            GuaranteeInspDateNotInRange?: boolean;
            GuaranteeInspDateRangeIncludeCurrent?: boolean;
            GuaranteeInspDateRangeLast?: number;
            GuaranteeInspDateRangeNext?: number;
            GuaranteeInspDateRangeUnits?: number;
            GuaranteePLInspDateBegin?: Date;
            GuaranteePLInspDateEnd?: Date;
            GuaranteePLInspDateIsNull?: boolean;
            GuaranteePLInspDateNotInRange?: boolean;
            GuaranteePLInspDateRangeIncludeCurrent?: boolean;
            GuaranteePLInspDateRangeLast?: number;
            GuaranteePLInspDateRangeNext?: number;
            GuaranteePLInspDateRangeUnits?: number;
            IsTemplate?: boolean;
            Location?: string[];
            MaxResults?: number;
            NextWOSeqIdIncludeNulls?: boolean;
            NextWOSeqIdIsMaxValueExclusive?: boolean;
            NextWOSeqIdIsMinValueExclusive?: boolean;
            NextWOSeqIdMaxValue?: number;
            NextWOSeqIdMinValue?: number;
            NextWOSeqIdRangeType?: number;
            NextWOSeqIdValues?: number[];
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
            OptionalPeriodsIncludeNulls?: boolean;
            OptionalPeriodsIsMaxValueExclusive?: boolean;
            OptionalPeriodsIsMinValueExclusive?: boolean;
            OptionalPeriodsMaxValue?: number;
            OptionalPeriodsMinValue?: number;
            OptionalPeriodsRangeType?: number;
            OptionalPeriodsValues?: number[];
            PaymentBondPercentIncludeNulls?: boolean;
            PaymentBondPercentIsMaxValueExclusive?: boolean;
            PaymentBondPercentIsMinValueExclusive?: boolean;
            PaymentBondPercentMaxValue?: number;
            PaymentBondPercentMinValue?: number;
            PaymentBondPercentRangeType?: number;
            PaymentBondPercentValues?: number[];
            PerformanceBondDateBegin?: Date;
            PerformanceBondDateEnd?: Date;
            PerformanceBondDateIsNull?: boolean;
            PerformanceBondDateNotInRange?: boolean;
            PerformanceBondDateRangeIncludeCurrent?: boolean;
            PerformanceBondDateRangeLast?: number;
            PerformanceBondDateRangeNext?: number;
            PerformanceBondDateRangeUnits?: number;
            PerformanceBondPercentIncludeNulls?: boolean;
            PerformanceBondPercentIsMaxValueExclusive?: boolean;
            PerformanceBondPercentIsMinValueExclusive?: boolean;
            PerformanceBondPercentMaxValue?: number;
            PerformanceBondPercentMinValue?: number;
            PerformanceBondPercentRangeType?: number;
            PerformanceBondPercentValues?: number[];
            ScheduledFinishDateBegin?: Date;
            ScheduledFinishDateEnd?: Date;
            ScheduledFinishDateIsNull?: boolean;
            ScheduledFinishDateNotInRange?: boolean;
            ScheduledFinishDateRangeIncludeCurrent?: boolean;
            ScheduledFinishDateRangeLast?: number;
            ScheduledFinishDateRangeNext?: number;
            ScheduledFinishDateRangeUnits?: number;
            SignedDateBegin?: Date;
            SignedDateEnd?: Date;
            SignedDateIsNull?: boolean;
            SignedDateNotInRange?: boolean;
            SignedDateRangeIncludeCurrent?: boolean;
            SignedDateRangeLast?: number;
            SignedDateRangeNext?: number;
            SignedDateRangeUnits?: number;
            StartDateBegin?: Date;
            StartDateEnd?: Date;
            StartDateIsNull?: boolean;
            StartDateNotInRange?: boolean;
            StartDateRangeIncludeCurrent?: boolean;
            StartDateRangeLast?: number;
            StartDateRangeNext?: number;
            StartDateRangeUnits?: number;
            State?: string[];
            Status?: string[];
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
            TransmitDateBegin?: Date;
            TransmitDateEnd?: Date;
            TransmitDateIsNull?: boolean;
            TransmitDateNotInRange?: boolean;
            TransmitDateRangeIncludeCurrent?: boolean;
            TransmitDateRangeLast?: number;
            TransmitDateRangeNext?: number;
            TransmitDateRangeUnits?: number;
            UseInspDateBegin?: Date;
            UseInspDateEnd?: Date;
            UseInspDateIsNull?: boolean;
            UseInspDateNotInRange?: boolean;
            UseInspDateRangeIncludeCurrent?: boolean;
            UseInspDateRangeLast?: number;
            UseInspDateRangeNext?: number;
            UseInspDateRangeUnits?: number;
            UsePlInspDateBegin?: Date;
            UsePlInspDateEnd?: Date;
            UsePlInspDateIsNull?: boolean;
            UsePlInspDateNotInRange?: boolean;
            UsePlInspDateRangeIncludeCurrent?: boolean;
            UsePlInspDateRangeLast?: number;
            UsePlInspDateRangeNext?: number;
            UsePlInspDateRangeUnits?: number;
            Viewable?: boolean;
            WOPrefix?: string[];
            Zip?: string[];
        }
        interface Subcontractors extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        interface Submittals extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        interface UninvoicedLineItemCosts extends ServiceTypes.CoreRequestBase {
            ContractIds?: number[];
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            AccountantSid?: number;
            AcctManagerSid?: number;
            ActualBudget?: number;
            ActualFinishDate?: Date;
            Address?: string;
            BidBondPercent?: number;
            BidBudget?: number;
            BidDate?: Date;
            BidDepositPercent?: number;
            BondReleased?: boolean;
            BondReleaseDate?: Date;
            City?: string;
            Comments?: string;
            ContractId: number;
            ContractNumber?: string;
            ContractorSid?: number;
            ContractTemplateId?: number;
            ContractType?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Description?: string;
            DesignDate?: Date;
            District?: string;
            DomainId?: number;
            Duration?: number;
            DurationUnit?: number;
            EstimatedBudget?: number;
            FinalInspDate?: Date;
            FinalPLInspDate?: Date;
            FundingSource?: string;
            GuaranteeInspDate?: Date;
            GuaranteePLInspDate?: Date;
            IsTemplate?: boolean;
            Location?: string;
            NextWOSeqId?: number;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            OptionalPeriods?: number;
            PaymentBondPercent?: number;
            PerformanceBondDate?: Date;
            PerformanceBondPercent?: number;
            ScheduledFinishDate?: Date;
            SignedDate?: Date;
            StartDate?: Date;
            State?: string;
            Status?: string;
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
            TransmitDate?: Date;
            UseInspDate?: Date;
            UsePLInspDate?: Date;
            Viewable?: boolean;
            WOPrefix?: string;
            X?: number;
            Y?: number;
            Zip?: string;
        }
        interface UpdateLineItem extends ServiceTypes.CoreRequestBase {
            ContractLineItemId: number;
            ContractPeriod?: number;
            PrjUnitPrice?: number;
            UnitPrice?: number;
            Units?: number;
            UnitsUsed?: number;
        }
        interface UpdateSubcontractor extends ServiceTypes.CoreRequestBase {
            Approved?: boolean;
            Comments?: string;
            ContractorName?: string;
            ContractorSid?: number;
            ContractorType?: string;
            DateApproved?: Date;
            EndDate?: Date;
            StartDate?: Date;
            SubcontractorId: number;
        }
        interface UpdateSubmittal extends ServiceTypes.CoreRequestBase {
            Approved?: boolean;
            ApproveDate?: Date;
            Comments?: string;
            Description?: string;
            ReceiveDate?: Date;
            SubmittalId: number;
        }
        interface User extends ServiceTypes.CoreRequestBase {
        }
    }
    namespace Responses {
        interface AddLineItem extends ServiceTypes.CoreResponseBase_<ContractLineItem> {
        }
        interface ByIds extends ServiceTypes.CoreResponseBase_<ContractBase[]> {
        }
        interface Claims extends ServiceTypes.CoreResponseBase_<ContractClaimBase[]> {
        }
        interface Create extends ServiceTypes.CoreResponseBase_<ContractBase> {
        }
        interface CreateFundSource extends ServiceTypes.CoreResponseBase_<ContractFundSource> {
        }
        interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<SearchDefinition> {
        }
        interface CreateSubcontractor extends ServiceTypes.CoreResponseBase_<ContractSubcontractor> {
        }
        interface CreateSubmittal extends ServiceTypes.CoreResponseBase_<ContractSubmittal> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface DeleteFundSource extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface DeleteLineItems extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface DeleteSubcontractor extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface DeleteSubmittal extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface FundSources extends ServiceTypes.CoreResponseBase_<ContractFundSource[]> {
        }
        interface LineItems extends ServiceTypes.CoreResponseBase_<ContractLineItem[]> {
        }
        interface LineItemSummary extends ServiceTypes.CoreResponseBase_<ContractLineItemSummary[]> {
        }
        interface Permits extends ServiceTypes.CoreResponseBase_<ContractPermit[]> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface Subcontractors extends ServiceTypes.CoreResponseBase_<ContractSubcontractor[]> {
        }
        interface Submittals extends ServiceTypes.CoreResponseBase_<ContractSubmittal[]> {
        }
        interface UninvoicedLineItemCosts extends ServiceTypes.CoreResponseBase_<LineItemCost[]> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<ContractBase> {
        }
        interface UpdateLineItem extends ServiceTypes.CoreResponseBase_<ContractLineItem> {
        }
        interface UpdateSubcontractor extends ServiceTypes.CoreResponseBase_<ContractSubcontractor> {
        }
        interface UpdateSubmittal extends ServiceTypes.CoreResponseBase_<ContractSubmittal> {
        }
        interface User extends ServiceTypes.CoreResponseBase_<ContractBase[]> {
        }
    }
    interface IContractService {
        AddLineItem?: (request: Requests.AddLineItem) => Promise<Responses.AddLineItem>;
        ByIds?: (request: Requests.ByIds) => Promise<Responses.ByIds>;
        Claims?: (request: Requests.Claims) => Promise<Responses.Claims>;
        Create?: (request: Requests.Create) => Promise<Responses.Create>;
        CreateFundSource?: (request: Requests.CreateFundSource) => Promise<Responses.CreateFundSource>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => Promise<Responses.CreateSearchDefinition>;
        CreateSubcontractor?: (request: Requests.CreateSubcontractor) => Promise<Responses.CreateSubcontractor>;
        CreateSubmittal?: (request: Requests.CreateSubmittal) => Promise<Responses.CreateSubmittal>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        DeleteFundSource?: (request: Requests.DeleteFundSource) => Promise<Responses.DeleteFundSource>;
        DeleteLineItems?: (request: Requests.DeleteLineItems) => Promise<Responses.DeleteLineItems>;
        DeleteSubcontractor?: (request: Requests.DeleteSubcontractor) => Promise<Responses.DeleteSubcontractor>;
        DeleteSubmittal?: (request: Requests.DeleteSubmittal) => Promise<Responses.DeleteSubmittal>;
        FundSources?: (request: Requests.FundSources) => Promise<Responses.FundSources>;
        LineItems?: (request: Requests.LineItems) => Promise<Responses.LineItems>;
        LineItemSummary?: (request: Requests.LineItemSummary) => Promise<Responses.LineItemSummary>;
        Permits?: (request: Requests.Permits) => Promise<Responses.Permits>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        Subcontractors?: (request: Requests.Subcontractors) => Promise<Responses.Subcontractors>;
        Submittals?: (request: Requests.Submittals) => Promise<Responses.Submittals>;
        UninvoicedLineItemCosts?: (request: Requests.UninvoicedLineItemCosts) => Promise<Responses.UninvoicedLineItemCosts>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
        UpdateLineItem?: (request: Requests.UpdateLineItem) => Promise<Responses.UpdateLineItem>;
        UpdateSubcontractor?: (request: Requests.UpdateSubcontractor) => Promise<Responses.UpdateSubcontractor>;
        UpdateSubmittal?: (request: Requests.UpdateSubmittal) => Promise<Responses.UpdateSubmittal>;
        User?: (request: Requests.User) => Promise<Responses.User>;
    }
}
