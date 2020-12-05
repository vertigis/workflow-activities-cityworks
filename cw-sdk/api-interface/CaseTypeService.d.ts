import { CaseTypeItem } from '../core/types/CaseTypeItem';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseTypeServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            AnonymousFlag?: string;
            AutoExtExprFromInsp?: number;
            AutoNumberFlag?: string;
            BLicenseFlag?: string;
            CaseGroup?: string;
            CaseType?: string;
            CaseTypeDesc?: string;
            DepartmentId?: number;
            DivisionId?: number;
            ExpiredFlag?: string;
            InitialCaseStatusId?: number;
            InTakeExpirationTypeId?: number;
            NumberingGroupId?: number;
            OrgId?: number;
            ReCalcExpirationStatus?: number;
            ReCalcExpirationTypeId?: number;
            RegisteredFlag?: string;
            RemoveTempCharacterStatus?: string;
            TableName?: string;
            UseTempCharacter?: string;
        }
        interface GetList extends ServiceTypes.CoreRequestBase {
            FilterColumn?: string;
            FilterOperator?: string;
            FilterValue?: string;
            GroupBy?: string;
            HavingCondition?: string;
            PageNumber?: number;
            PageSize?: number;
            SingleRecordFlag?: boolean;
            SortColumn?: string;
            SortDirection?: string;
            WhereClause?: string;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            CaseType?: string;
            CaseTypeDesc?: string;
            CaseTypeId?: number;
        }
        interface SearchObject extends ServiceTypes.CoreRequestBase {
            CaseType?: string;
            CaseTypeDesc?: string;
            CaseTypeId?: number;
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            AnonymousFlag?: string;
            AutoExtExprFromInsp?: number;
            AutoNumberFlag?: string;
            BLicenseFlag?: string;
            CaseGroup?: string;
            CaseType?: string;
            CaseTypeDesc?: string;
            CaseTypeId?: number;
            DepartmentId?: number;
            DivisionId?: number;
            ExpiredFlag?: string;
            InitialCaseStatusId?: number;
            InTakeExpirationTypeId?: number;
            NumberingGroupId?: number;
            OrgId?: number;
            ReCalcExpirationStatus?: number;
            ReCalcExpirationTypeId?: number;
            RegisteredFlag?: string;
            RemoveTempCharacterStatus?: string;
            TableName?: string;
            UseTempCharacter?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<CaseTypeItem> {
        }
        interface GetList extends ServiceTypes.CoreResponseBase_obsolete_<CaseTypeItem[]> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
        interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CaseTypeItem[]> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<CaseTypeItem> {
        }
    }
    interface ICaseTypeService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        GetList?: (request: Requests.GetList) => Promise<Responses.GetList>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => Promise<Responses.SearchObject>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
