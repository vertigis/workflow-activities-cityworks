import { CaInstrumentItem } from '../core/types/CaInstrumentItem';
import { CaInstrumentItemBase } from '../core/types/CaInstrumentItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseInstrumentServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            AddressLine1?: string;
            AddressLine2?: string;
            Amount: number;
            CaObjectId: number;
            CityName?: string;
            CommentText?: string;
            Company?: string;
            ContactEmail?: string;
            ContactName?: string;
            ContactPhone?: string;
            CountryCode?: string;
            DateExpire: Date;
            EffectiveDate?: Date;
            InstTypeId: number;
            IssueDate?: Date;
            SerialNumber?: string;
            StateCode?: string;
            ZipCode?: string;
        }
        interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            CaInstrumentId: number;
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
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
            AddressLine1?: string;
            Amount?: number;
            CaInstrumentId?: number;
            CityName?: string;
            CommentText?: string;
            Company?: string;
            ContactEmail?: string;
            ContactName?: string;
            ContactPhone?: string;
            CountryCode?: string;
            InstTypeId?: number;
            SerialNumber?: string;
            StateCode?: string;
            ZipCode?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CaInstrumentItemBase> {
        }
        interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CaInstrumentItemBase[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CaInstrumentItemBase> {
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {
        }
        interface GetList extends ServiceTypes.CoreResponseBase_obsolete_<CaInstrumentItem[]> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
    }
    interface ICaseInstrumentService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => Promise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => Promise<Responses.DeleteByCaObjectId>;
        GetList?: (request: Requests.GetList) => Promise<Responses.GetList>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
    }
}
