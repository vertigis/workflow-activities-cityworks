import { WOTemplateName } from '../core/types/WOTemplateName';
import { WOTemplateDefaultTestBase } from '../core/types/WOTemplateDefaultTestBase';
import { CategoryCustField } from '../core/types/CategoryCustField';
import { CustFieldCategoryBase } from '../core/types/CustFieldCategoryBase';
import { ProblemWOTemplateBase } from '../core/types/ProblemWOTemplateBase';
import { WOTemplateBase } from '../core/types/WOTemplateBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace WorkOrderTemplateServiceTypes {
    namespace Requests {
        interface ByIds extends ServiceTypes.CoreRequestBase {
            IncludeComments?: boolean;
            IncludeInstructions?: boolean;
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
            WOTemplateIds?: string[];
        }
        interface ByProblemSids extends ServiceTypes.CoreRequestBase {
            OnlyActiveTemplates?: boolean;
            ProblemSids: number[];
        }
        interface CustomFieldCategories extends ServiceTypes.CoreRequestBase {
            IsActive?: boolean;
        }
        interface CustomFields extends ServiceTypes.CoreRequestBase {
            WOTemplateIds: string[];
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            AcctNum?: string[];
            ApplyToEntity?: string[];
            AutoCreateTask?: boolean;
            Cancel?: boolean;
            CopyCustomFieldVal?: number[];
            CycleFrom?: number[];
            CycleIncludeWeekends?: boolean;
            CycleIntervalNum?: number[];
            CycleIntervalUnit?: number[];
            CycleType?: number[];
            DaysToComplete?: number[];
            DefaultProject?: string[];
            DefaultProjectSid?: number[];
            Description?: string[];
            DomainId?: number[];
            ExpenseType?: number[];
            IncludeComments?: boolean;
            IncludeInstructions?: boolean;
            IsReactive?: boolean;
            MaintScore?: number[];
            MapTemplateName?: string[];
            MaximumCreateDate?: Date;
            MaximumCycleIntervalNum?: number;
            MaximumDateModified?: Date;
            MaximumDefaultProjectSid?: number;
            MaximumEffort?: number;
            MaximumMaintScore?: number;
            MaximumNumDaysBefore?: number;
            MaximumWarrantyDuration?: number;
            MaximumWOMapScale?: number;
            MaximumWoTemplateId?: string;
            MiminumNumDaysBefore?: number;
            MinimumCreateDate?: Date;
            MinimumCycleIntervalNum?: number;
            MinimumDateModified?: Date;
            MinimumDefaultProjectSid?: number;
            MinimumEffort?: number;
            MinimumMaintScore?: number;
            MinimumWarrantyDuration?: number;
            MinimumWOMapScale?: number;
            MinimumWoTemplateId?: string;
            NumDaysBefore?: number[];
            Printer?: string[];
            Priority?: string[];
            RequireAssetOnClose?: boolean;
            Shop?: string[];
            Stage?: number[];
            SubmitToEmployeeSid?: number[];
            SupervisorEmployeeSid?: number[];
            UnitsAccompDesc?: string[];
            UnitsAccompDescLock?: boolean;
            WarrantyDuration?: number[];
            WarrantyDurationUnit?: number[];
            WOCategory?: string[];
            WOCustFieldCatId?: number[];
            WOMapScale?: number[];
            WOOutput?: number[];
            WOPrintTmpt?: string[];
            WorkMonth?: string[];
            WoTemplateIds?: string[];
        }
        interface TemplateInspections extends ServiceTypes.CoreRequestBase {
            WoTemplateIds?: string[];
        }
        interface TemplateNames extends ServiceTypes.CoreRequestBase {
            AllDomainTemplates?: boolean;
            Category?: string;
            EntityTypes: string[];
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
            OnlyCanCreate?: boolean;
            WOTemplateIds?: string[];
        }
    }
    namespace Responses {
        interface ByIds extends ServiceTypes.CoreResponseBase_<WOTemplateBase[]> {
        }
        interface ByProblemSids extends ServiceTypes.CoreResponseBase_<ProblemWOTemplateBase[]> {
        }
        interface CustomFieldCategories extends ServiceTypes.CoreResponseBase_<CustFieldCategoryBase[]> {
        }
        interface CustomFields extends ServiceTypes.CoreResponseBase_<{
            [key: string]: CategoryCustField[];
        }> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_<string[]> {
        }
        interface TemplateInspections extends ServiceTypes.CoreResponseBase_<WOTemplateDefaultTestBase[]> {
        }
        interface TemplateNames extends ServiceTypes.CoreResponseBase_<WOTemplateName[]> {
        }
    }
    interface IWorkOrderTemplateService {
        ByIds?: (request: Requests.ByIds) => Promise<Responses.ByIds>;
        ByProblemSids?: (request: Requests.ByProblemSids) => Promise<Responses.ByProblemSids>;
        CustomFieldCategories?: (request: Requests.CustomFieldCategories) => Promise<Responses.CustomFieldCategories>;
        CustomFields?: (request: Requests.CustomFields) => Promise<Responses.CustomFields>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        TemplateInspections?: (request: Requests.TemplateInspections) => Promise<Responses.TemplateInspections>;
        TemplateNames?: (request: Requests.TemplateNames) => Promise<Responses.TemplateNames>;
    }
}
