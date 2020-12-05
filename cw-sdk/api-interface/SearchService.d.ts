import { SearchTypeInfo } from '../core/types/SearchTypeInfo';
import { SearchDisplayField } from '../core/types/SearchDisplayField';
import { SearchDefinition } from '../core/types/SearchDefinition';
import { SearchDefinitionName } from '../core/types/SearchDefinitionName';
import { SearchQAField } from '../core/types/SearchQAField';
import { SearchPolygonField } from '../core/types/SearchPolygonField';
import { SearchNumericField } from '../core/types/SearchNumericField';
import { SearchResultField } from '../core/types/SearchResultField';
import { SearchField } from '../core/types/SearchField';
import { SearchDateField } from '../core/types/SearchDateField';
import { SearchCustomField } from '../core/types/SearchCustomField';
import { GISExtent } from '../core/types/GISExtent';
import { ServiceTypes } from '../core/service-types';
export declare namespace SearchServiceTypes {
    namespace Requests {
        interface AssetCalculationResultSaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
        interface Definition extends ServiceTypes.CoreRequestBase {
            EmployeeSid?: number;
            SearchId: number;
        }
        interface DefinitionNames extends ServiceTypes.CoreRequestBase {
            SearchIds: number[];
        }
        interface Definitions extends ServiceTypes.CoreRequestBase {
            EmployeeSid?: number;
            SearchIds: number[];
        }
        interface DeleteDefinitions extends ServiceTypes.CoreRequestBase {
            SearchIds: number[];
        }
        interface DisplayFields extends ServiceTypes.CoreRequestBase {
            SearchType: number;
        }
        interface Execute extends ServiceTypes.CoreRequestBase {
            EmployeeSid?: number;
            ExcludeEmptyXY?: boolean;
            Extent?: GISExtent;
            Frequency?: boolean;
            IdsOnly?: boolean;
            IncludeSearchOrder?: boolean;
            MaxResults?: number;
            ResultFields?: string[];
            SearchId: number;
            TotalOnly?: boolean;
        }
        interface GISSaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
        interface InspectionSaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
        interface MaterialSaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
        interface PllSaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
        interface RecentActivity extends ServiceTypes.CoreRequestBase {
        }
        interface RequestSaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
        interface RequisitionSaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
        interface SavedByType extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            DomainId?: number;
            EmployeeSid?: number;
            Keywords?: string[];
            SearchType?: number;
        }
        interface SaveDefinition extends ServiceTypes.CoreRequestBase {
            ApplyToEntity?: string;
            CalculationId?: number;
            Description?: string;
            EmployeeSid?: number;
            EnableEurl?: boolean;
            Keywords?: string[];
            SearchCustomFields?: SearchCustomField[];
            SearchDateFields?: SearchDateField[];
            SearchFields?: SearchField[];
            SearchFor: number;
            SearchGroupByFields?: SearchResultField[];
            SearchId?: number;
            SearchName?: string;
            SearchNumericFields?: SearchNumericField[];
            SearchPolygonFields?: SearchPolygonField[];
            SearchQAFields?: SearchQAField[];
            SearchResultFields?: SearchResultField[];
            SharedWithin?: number;
            StartDayOfWeek?: number;
        }
        interface StoreTransactionSaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
        interface Types extends ServiceTypes.CoreRequestBase {
        }
        interface UpdateEurl extends ServiceTypes.CoreRequestBase {
            Enable?: boolean;
            SearchIds: number[];
        }
        interface WorkActivitySaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
        interface WorkOrderEntitySaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
        interface WorkOrderSaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
    }
    namespace Responses {
        interface Saved extends ServiceTypes.CoreResponseBase_<SearchDefinitionName[]> {
        }
        interface Definition extends ServiceTypes.CoreResponseBase_<SearchDefinition> {
        }
        interface Definitions extends ServiceTypes.CoreResponseBase_<SearchDefinition[]> {
        }
        interface DeleteDefinitions extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface DisplayFields extends ServiceTypes.CoreResponseBase_<SearchDisplayField[]> {
        }
        interface Execute extends ServiceTypes.CoreResponseBase_<{
            [key: string]: Object;
        }[]> {
        }
        interface RecentActivity extends ServiceTypes.CoreResponseBase_<RecentActivity[]> {
        }
        interface SaveDefinition extends ServiceTypes.CoreResponseBase_<SearchDefinitionName> {
        }
        interface Types extends ServiceTypes.CoreResponseBase_<SearchTypeInfo[]> {
        }
        interface UpdateEurl extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
    }
    interface ISearchService {
        AssetCalculationResultSaved?: (request: Requests.AssetCalculationResultSaved) => Promise<Responses.Saved>;
        Definition?: (request: Requests.Definition) => Promise<Responses.Definition>;
        DefinitionNames?: (request: Requests.DefinitionNames) => Promise<Responses.Saved>;
        Definitions?: (request: Requests.Definitions) => Promise<Responses.Definitions>;
        DeleteDefinitions?: (request: Requests.DeleteDefinitions) => Promise<Responses.DeleteDefinitions>;
        DisplayFields?: (request: Requests.DisplayFields) => Promise<Responses.DisplayFields>;
        Execute?: (request: Requests.Execute) => Promise<Responses.Execute>;
        GISSaved?: (request: Requests.GISSaved) => Promise<Responses.Saved>;
        InspectionSaved?: (request: Requests.InspectionSaved) => Promise<Responses.Saved>;
        MaterialSaved?: (request: Requests.MaterialSaved) => Promise<Responses.Saved>;
        PllSaved?: (request: Requests.PllSaved) => Promise<Responses.Saved>;
        RecentActivity?: (request: Requests.RecentActivity) => Promise<Responses.RecentActivity>;
        RequestSaved?: (request: Requests.RequestSaved) => Promise<Responses.Saved>;
        RequisitionSaved?: (request: Requests.RequisitionSaved) => Promise<Responses.Saved>;
        SavedByType?: (request: Requests.SavedByType) => Promise<Responses.Saved>;
        SaveDefinition?: (request: Requests.SaveDefinition) => Promise<Responses.SaveDefinition>;
        StoreTransactionSaved?: (request: Requests.StoreTransactionSaved) => Promise<Responses.Saved>;
        Types?: (request: Requests.Types) => Promise<Responses.Types>;
        UpdateEurl?: (request: Requests.UpdateEurl) => Promise<Responses.UpdateEurl>;
        WorkActivitySaved?: (request: Requests.WorkActivitySaved) => Promise<Responses.Saved>;
        WorkOrderEntitySaved?: (request: Requests.WorkOrderEntitySaved) => Promise<Responses.Saved>;
        WorkOrderSaved?: (request: Requests.WorkOrderSaved) => Promise<Responses.Saved>;
    }
}
