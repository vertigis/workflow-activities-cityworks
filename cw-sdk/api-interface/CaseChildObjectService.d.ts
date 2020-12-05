import { CaChildObjectItemBase } from '../core/types/CaChildObjectItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseChildObjectServiceTypes {
    namespace Requests {
        interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
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
            CaChildObjectId?: number;
            CaseNumber?: string;
            ChildCaseNumber?: string;
            ChildId?: number;
        }
        interface SearchObject extends ServiceTypes.CoreRequestBase {
            CaChildObjectId?: number;
            CaseNumber?: string;
            ChildCaseNumber?: string;
            ChildId?: number;
        }
    }
    namespace Responses {
        interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CaChildObjectItemBase[]> {
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {
        }
        interface GetList extends ServiceTypes.CoreResponseBase_obsolete_<CaChildObjectItemBase[]> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
        interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CaChildObjectItemBase[]> {
        }
    }
    interface ICaseChildObjectService {
        ByCaObjectId?: (request: Requests.ByCaObjectId) => Promise<Responses.ByCaObjectId>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => Promise<Responses.DeleteByCaObjectId>;
        GetList?: (request: Requests.GetList) => Promise<Responses.GetList>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => Promise<Responses.SearchObject>;
    }
}
