import { ProblemWOTemplate } from '../core/types/ProblemWOTemplate';
import { ProblemQA } from '../core/types/ProblemQA';
import { SearchDefinition } from '../core/types/SearchDefinition';
import { ProblemLeafBase } from '../core/types/ProblemLeafBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace ServiceRequestTemplateServiceTypes {
    namespace Requests {
        interface ByIds extends ServiceTypes.CoreRequestBase {
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
            ProblemSids: number[];
        }
        interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            AutoClose?: boolean;
            Cancel?: boolean;
            DateModifiedBegin?: Date;
            DateModifiedEnd?: Date;
            DateModifiedIsNull?: boolean;
            DateModifiedNotInRange?: boolean;
            DateModifiedRangeIncludeCurrent?: boolean;
            DateModifiedRangeLast?: number;
            DateModifiedRangeNext?: number;
            DateModifiedRangeUnits?: number;
            DefaultProject?: string[];
            DefaultProjectSid?: number[];
            DefaultProjectSidIsInList?: boolean;
            Description?: string[];
            DispatchTo?: number[];
            DispatchToIsInList?: boolean;
            DomainId?: number[];
            DomainIdIsInList?: boolean;
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
            ForPublicSite?: boolean;
            MaxResults?: number;
            OtherSysCodeCWId?: number[];
            OtherSysCodeCWIdIsInList?: boolean;
            Printer?: string[];
            Priority?: string[];
            ProbCategory?: string[];
            ProblemCode?: string[];
            ProblemSid?: number[];
            ProblemSidIsInList?: boolean;
            QAModel?: number[];
            ReqCustFieldCatId?: number[];
            ReqCustFieldCatIdIsInList?: boolean;
            SaveDefinition?: boolean;
            SearchName?: string;
            SharedWithin?: number;
            SRPrintTmpt?: string[];
            SubmitTo?: number[];
            SubmitToIsInList?: boolean;
        }
        interface QA extends ServiceTypes.CoreRequestBase {
            ProblemSids: number[];
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            AutoClose?: boolean;
            Cancel?: boolean;
            DateModifiedBegin?: Date;
            DateModifiedEnd?: Date;
            DateModifiedIsNull?: boolean;
            DateModifiedNotInRange?: boolean;
            DateModifiedRangeIncludeCurrent?: boolean;
            DateModifiedRangeLast?: number;
            DateModifiedRangeNext?: number;
            DateModifiedRangeUnits?: number;
            DefaultProject?: string[];
            DefaultProjectSid?: number[];
            DefaultProjectSidIsInList?: boolean;
            Description?: string[];
            DispatchTo?: number[];
            DispatchToIsInList?: boolean;
            DomainId?: number[];
            DomainIdIsInList?: boolean;
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
            ForPublicSite?: boolean;
            MaxResults?: number;
            OtherSysCodeCWId?: number[];
            OtherSysCodeCWIdIsInList?: boolean;
            Printer?: string[];
            Priority?: string[];
            ProbCategory?: string[];
            ProblemCode?: string[];
            ProblemSid?: number[];
            ProblemSidIsInList?: boolean;
            QAModel?: number[];
            ReqCustFieldCatId?: number[];
            ReqCustFieldCatIdIsInList?: boolean;
            SRPrintTmpt?: string[];
            SubmitTo?: number[];
            SubmitToIsInList?: boolean;
        }
        interface Templates extends ServiceTypes.CoreRequestBase {
            CanCreate?: boolean;
            IncludeInactive?: boolean;
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
            TemplateIds?: number[];
        }
        interface WorkOrderTemplates extends ServiceTypes.CoreRequestBase {
            IncludeInactive?: boolean;
            ProblemSids: number[];
        }
    }
    namespace Responses {
        interface ByIds extends ServiceTypes.CoreResponseBase_<ProblemLeafBase[]> {
        }
        interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<SearchDefinition> {
        }
        interface QA extends ServiceTypes.CoreResponseBase_<ProblemQA[]> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface Templates extends ServiceTypes.CoreResponseBase_<ProblemLeafBase[]> {
        }
        interface WorkOrderTemplates extends ServiceTypes.CoreResponseBase_<ProblemWOTemplate[]> {
        }
    }
    interface IServiceRequestTemplateService {
        ByIds?: (request: Requests.ByIds) => Promise<Responses.ByIds>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => Promise<Responses.CreateSearchDefinition>;
        QA?: (request: Requests.QA) => Promise<Responses.QA>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        Templates?: (request: Requests.Templates) => Promise<Responses.Templates>;
        WorkOrderTemplates?: (request: Requests.WorkOrderTemplates) => Promise<Responses.WorkOrderTemplates>;
    }
}
