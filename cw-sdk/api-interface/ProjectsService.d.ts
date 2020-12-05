import { ProjectNameDescription } from '../core/types/ProjectNameDescription';
import { SearchDefinition } from '../core/types/SearchDefinition';
import { ProjectBase } from '../core/types/ProjectBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace ProjectsServiceTypes {
    namespace Requests {
        interface ByContractIds extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        interface ByIds extends ServiceTypes.CoreRequestBase {
            ProjectSids: number[];
        }
        interface Create extends ServiceTypes.CoreRequestBase {
            ActualEquipmentCost?: number;
            ActualLaborCost?: number;
            ActualMaterialCost?: number;
            ActualRevenue?: number;
            ActualTotalCost?: number;
            ApprovedBySid?: number;
            AssignedToSid?: number;
            CancelledBySid?: number;
            Category?: string;
            ClosedBySid?: number;
            Comments?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            DateCancelled?: Date;
            DateClosed?: Date;
            DateTimeModified?: Date;
            Description?: string;
            EstimatedBudget?: number;
            EstimatedEquipmentCost?: number;
            EstimatedLaborCost?: number;
            EstimatedMaterialCost?: number;
            EstimatedRevenue?: number;
            EstimatedTotalCost?: number;
            FiscalYear?: number;
            NoBudget?: boolean;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            ParentProjectSid?: number;
            ProjectFinishDate?: Date;
            ProjectName: string;
            ProjectStartDate?: Date;
            QuickView?: boolean;
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
            X?: number;
            Y?: number;
        }
        interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            ApprovedBy?: string[];
            ApprovedBySid?: number[];
            ApprovedBySidIsInList?: boolean;
            AssignedTo?: string[];
            AssignedToSid?: number[];
            AssignedToSidIsInList?: boolean;
            Comments?: string[];
            DateTimeModifiedBegin?: Date;
            DateTimeModifiedEnd?: Date;
            DateTimeModifiedIsNull?: boolean;
            DateTimeModifiedNotInRange?: boolean;
            DateTimeModifiedRangeIncludeCurrent?: boolean;
            DateTimeModifiedRangeLast?: number;
            DateTimeModifiedRangeNext?: number;
            DateTimeModifiedRangeUnits?: number;
            Description?: string[];
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            EstimatedBudgetIncludeNulls?: boolean;
            EstimatedBudgetIsMaxValueExclusive?: boolean;
            EstimatedBudgetIsMinValueExclusive?: boolean;
            EstimatedBudgetMaxValue?: number;
            EstimatedBudgetMinValue?: number;
            EstimatedBudgetRangeType?: number;
            EstimatedBudgetValues?: number[];
            InitiatedBy?: string[];
            InitiatedBySid?: number[];
            InitiatedBySidIsInList?: boolean;
            MaxResults?: number;
            NoBudget?: boolean;
            ParentProjectSid?: number[];
            ParentProjectSidIsInList?: boolean;
            ProjectFinishDateBegin?: Date;
            ProjectFinishDateEnd?: Date;
            ProjectFinishDateIsNull?: boolean;
            ProjectFinishDateNotInRange?: boolean;
            ProjectFinishDateRangeIncludeCurrent?: boolean;
            ProjectFinishDateRangeLast?: number;
            ProjectFinishDateRangeNext?: number;
            ProjectFinishDateRangeUnits?: number;
            ProjectName?: string[];
            ProjectSid?: number[];
            ProjectSidIsInList?: boolean;
            ProjectStartDateBegin?: Date;
            ProjectStartDateEnd?: Date;
            ProjectStartDateIsNull?: boolean;
            ProjectStartDateNotInRange?: boolean;
            ProjectStartDateRangeIncludeCurrent?: boolean;
            ProjectStartDateRangeLast?: number;
            ProjectStartDateRangeNext?: number;
            ProjectStartDateRangeUnits?: number;
            QuickView?: boolean;
            SaveDefinition?: boolean;
            SearchName?: string;
            SharedWithin?: number;
            Status?: string[];
        }
        interface QuickView extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            ApprovedBy?: string[];
            ApprovedBySid?: number[];
            ApprovedBySidIsInList?: boolean;
            AssignedTo?: string[];
            AssignedToSid?: number[];
            AssignedToSidIsInList?: boolean;
            Comments?: string[];
            DateTimeModifiedBegin?: Date;
            DateTimeModifiedEnd?: Date;
            DateTimeModifiedIsNull?: boolean;
            DateTimeModifiedNotInRange?: boolean;
            DateTimeModifiedRangeIncludeCurrent?: boolean;
            DateTimeModifiedRangeLast?: number;
            DateTimeModifiedRangeNext?: number;
            DateTimeModifiedRangeUnits?: number;
            Description?: string[];
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            EstimatedBudgetIncludeNulls?: boolean;
            EstimatedBudgetIsMaxValueExclusive?: boolean;
            EstimatedBudgetIsMinValueExclusive?: boolean;
            EstimatedBudgetMaxValue?: number;
            EstimatedBudgetMinValue?: number;
            EstimatedBudgetRangeType?: number;
            EstimatedBudgetValues?: number[];
            InitiatedBy?: string[];
            InitiatedBySid?: number[];
            InitiatedBySidIsInList?: boolean;
            MaxResults?: number;
            NoBudget?: boolean;
            ParentProjectSid?: number[];
            ParentProjectSidIsInList?: boolean;
            ProjectFinishDateBegin?: Date;
            ProjectFinishDateEnd?: Date;
            ProjectFinishDateIsNull?: boolean;
            ProjectFinishDateNotInRange?: boolean;
            ProjectFinishDateRangeIncludeCurrent?: boolean;
            ProjectFinishDateRangeLast?: number;
            ProjectFinishDateRangeNext?: number;
            ProjectFinishDateRangeUnits?: number;
            ProjectName?: string[];
            ProjectSid?: number[];
            ProjectSidIsInList?: boolean;
            ProjectStartDateBegin?: Date;
            ProjectStartDateEnd?: Date;
            ProjectStartDateIsNull?: boolean;
            ProjectStartDateNotInRange?: boolean;
            ProjectStartDateRangeIncludeCurrent?: boolean;
            ProjectStartDateRangeLast?: number;
            ProjectStartDateRangeNext?: number;
            ProjectStartDateRangeUnits?: number;
            QuickView?: boolean;
            Status?: string[];
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            ActualEquipmentCost?: number;
            ActualLaborCost?: number;
            ActualMaterialCost?: number;
            ActualRevenue?: number;
            ActualTotalCost?: number;
            ApprovedBySid?: number;
            AssignedToSid?: number;
            CancelledBySid?: number;
            Category?: string;
            ClosedBySid?: number;
            Comments?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            DateCancelled?: Date;
            DateClosed?: Date;
            DateTimeModified?: Date;
            Description?: string;
            EstimatedBudget?: number;
            EstimatedEquipmentCost?: number;
            EstimatedLaborCost?: number;
            EstimatedMaterialCost?: number;
            EstimatedRevenue?: number;
            EstimatedTotalCost?: number;
            FiscalYear?: number;
            NoBudget?: boolean;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            ParentProjectSid?: number;
            ProjectFinishDate?: Date;
            ProjectName?: string;
            ProjectSid: number;
            ProjectStartDate?: Date;
            QuickView?: boolean;
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
            X?: number;
            Y?: number;
        }
    }
    namespace Responses {
        interface ByContractIds extends ServiceTypes.CoreResponseBase_<{
            [key: number]: ProjectBase[];
        }> {
        }
        interface ByIds extends ServiceTypes.CoreResponseBase_<ProjectBase[]> {
        }
        interface Create extends ServiceTypes.CoreResponseBase_<ProjectBase> {
        }
        interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<SearchDefinition> {
        }
        interface QuickView extends ServiceTypes.CoreResponseBase_<ProjectNameDescription[]> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<ProjectBase> {
        }
    }
    interface IProjectsService {
        ByContractIds?: (request: Requests.ByContractIds) => Promise<Responses.ByContractIds>;
        ByIds?: (request: Requests.ByIds) => Promise<Responses.ByIds>;
        Create?: (request: Requests.Create) => Promise<Responses.Create>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => Promise<Responses.CreateSearchDefinition>;
        QuickView?: (request: Requests.QuickView) => Promise<Responses.QuickView>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
