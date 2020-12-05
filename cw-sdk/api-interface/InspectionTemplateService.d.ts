import { TestType } from '../core/types/TestType';
import { InspTemplateQA } from '../core/types/InspTemplateQA';
import { InspTempEntityBase } from '../core/types/InspTempEntityBase';
import { SearchDefinition } from '../core/types/SearchDefinition';
import { InspTemplateBase } from '../core/types/InspTemplateBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace InspectionTemplateServiceTypes {
    namespace Requests {
        interface ByIds extends ServiceTypes.CoreRequestBase {
            InspTemplateIds: number[];
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
        }
        interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            CycleFrom?: number[];
            CycleIncludeWeekends?: boolean;
            CycleIntervalNumIncludeNulls?: boolean;
            CycleIntervalNumIsMaxValueExclusive?: boolean;
            CycleIntervalNumIsMinValueExclusive?: boolean;
            CycleIntervalNumMaxValue?: number;
            CycleIntervalNumMinValue?: number;
            CycleIntervalNumRangeType?: number;
            CycleIntervalNumValue?: number;
            CycleIntervalNumValues?: number[];
            CycleIntervalUnit?: number[];
            CycleType?: number[];
            DateModifiedBegin?: Date;
            DateModifiedEnd?: Date;
            DateModifiedIsNull?: boolean;
            DateModifiedNotInRange?: boolean;
            DateModifiedRangeIncludeCurrent?: boolean;
            DateModifiedRangeLast?: number;
            DateModifiedRangeNext?: number;
            DateModifiedRangeUnits?: number;
            Description?: string[];
            DurationIncludeNulls?: boolean;
            DurationIsMaxValueExclusive?: boolean;
            DurationIsMinValueExclusive?: boolean;
            DurationMaxValue?: number;
            DurationMinValue?: number;
            DurationRangeType?: number;
            DurationUnit?: number[];
            DurationValue?: number;
            DurationValues?: number[];
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValue?: number;
            EffortValues?: number[];
            EntityType?: string[];
            InspTemplateId?: number[];
            InspTemplateIdIsInList?: boolean;
            InspTemplateName?: string[];
            IsActive?: boolean;
            MaxResults?: number;
            PrintTemplate?: string[];
            Priority?: string[];
            QAModel?: number[];
            RequireAssetOnClose?: boolean;
            SaveDefinition?: boolean;
            SearchName?: string;
            SharedWithin?: number;
            SubmitToEmployeeSid?: number[];
            SubmitToEmployeeSidIsInList?: boolean;
            WorkMonth?: string[];
        }
        interface EntityTypes extends ServiceTypes.CoreRequestBase {
            InspTemplateIds?: number[];
        }
        interface QA extends ServiceTypes.CoreRequestBase {
            InspTemplateIds: number[];
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            CycleFrom?: number[];
            CycleIncludeWeekends?: boolean;
            CycleIntervalNumIncludeNulls?: boolean;
            CycleIntervalNumIsMaxValueExclusive?: boolean;
            CycleIntervalNumIsMinValueExclusive?: boolean;
            CycleIntervalNumMaxValue?: number;
            CycleIntervalNumMinValue?: number;
            CycleIntervalNumRangeType?: number;
            CycleIntervalNumValue?: number;
            CycleIntervalNumValues?: number[];
            CycleIntervalUnit?: number[];
            CycleType?: number[];
            DateModifiedBegin?: Date;
            DateModifiedEnd?: Date;
            DateModifiedIsNull?: boolean;
            DateModifiedNotInRange?: boolean;
            DateModifiedRangeIncludeCurrent?: boolean;
            DateModifiedRangeLast?: number;
            DateModifiedRangeNext?: number;
            DateModifiedRangeUnits?: number;
            Description?: string[];
            DurationIncludeNulls?: boolean;
            DurationIsMaxValueExclusive?: boolean;
            DurationIsMinValueExclusive?: boolean;
            DurationMaxValue?: number;
            DurationMinValue?: number;
            DurationRangeType?: number;
            DurationUnit?: number[];
            DurationValue?: number;
            DurationValues?: number[];
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValue?: number;
            EffortValues?: number[];
            EntityType?: string[];
            InspTemplateId?: number[];
            InspTemplateIdIsInList?: boolean;
            InspTemplateName?: string[];
            IsActive?: boolean;
            MaxResults?: number;
            PrintTemplate?: string[];
            Priority?: string[];
            QAModel?: number[];
            RequireAssetOnClose?: boolean;
            SubmitToEmployeeSid?: number[];
            SubmitToEmployeeSidIsInList?: boolean;
            WorkMonth?: string[];
        }
        interface Templates extends ServiceTypes.CoreRequestBase {
            CanCreate?: boolean;
            EntityTypes?: string[];
            IncludeInactive?: boolean;
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
            TemplateIds?: number[];
        }
        interface TestTypes extends ServiceTypes.CoreRequestBase {
            EntityTypes?: string[];
        }
    }
    namespace Responses {
        interface ByIds extends ServiceTypes.CoreResponseBase_<InspTemplateBase[]> {
        }
        interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<SearchDefinition> {
        }
        interface EntityTypes extends ServiceTypes.CoreResponseBase_<InspTempEntityBase[]> {
        }
        interface QA extends ServiceTypes.CoreResponseBase_<InspTemplateQA[]> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface Templates extends ServiceTypes.CoreResponseBase_<InspTemplateBase[]> {
        }
        interface TestTypes extends ServiceTypes.CoreResponseBase_<{
            [key: string]: TestType[];
        }> {
        }
    }
    interface IInspectionTemplateService {
        ByIds?: (request: Requests.ByIds) => Promise<Responses.ByIds>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => Promise<Responses.CreateSearchDefinition>;
        EntityTypes?: (request: Requests.EntityTypes) => Promise<Responses.EntityTypes>;
        QA?: (request: Requests.QA) => Promise<Responses.QA>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        Templates?: (request: Requests.Templates) => Promise<Responses.Templates>;
        TestTypes?: (request: Requests.TestTypes) => Promise<Responses.TestTypes>;
    }
}
