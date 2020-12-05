import { CaDataListValuesItemBase } from '../core/types/CaDataListValuesItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseDataListValuesServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CaDataDetailId: number;
            ListValue: string;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            CaDataListId: number;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            CaDataDetailId?: number;
            CaDataListId?: number;
            ListValue?: string;
        }
        interface SearchObject extends ServiceTypes.CoreRequestBase {
            CaDataDetailId?: number;
            CaDataListId?: number;
            ListValue?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CaDataListValuesItemBase> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CaDataListValuesItemBase> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
        interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CaDataListValuesItemBase[]> {
        }
    }
    interface ICaseDataListValuesService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => Promise<Responses.SearchObject>;
    }
}
