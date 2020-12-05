import { CaTaskResultsItem } from '../core/types/CaTaskResultsItem';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseTaskResultsServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            CaseStatus?: string;
            CaseStatusId?: number;
            CaTaskId: number;
            CloseTaskFlag?: string;
            ExtendExpirationDateFlag?: string;
            InsertFlag?: string;
            NextTaskFlag?: string;
            ReInsertFlag?: string;
            ResultCode: string;
            ResultDesc?: string;
            ResultDisplay?: string;
            ResultID: number;
            ResultSetID: number;
            SkipTaskFlag?: string;
            StatusCode?: string;
        }
        interface ByCaTaskIds extends ServiceTypes.CoreRequestBase {
            CaTaskIds?: number[];
        }
        interface SearchObject extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
            CaseStatus?: string;
            CaseStatusId?: number;
            CaTaskId?: number;
            CaTaskResultsId?: number;
            CloseTaskFlag?: string;
            ExtendExpirationDateFlag?: string;
            InsertFlag?: string;
            NextTaskFlag?: string;
            ReInsertFlag?: string;
            ResultCode?: string;
            ResultDesc?: string;
            ResultDisplay?: string;
            ResultID?: number;
            ResultSetID?: number;
            SkipTaskFlag?: string;
            StatusCode?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<CaTaskResultsItem> {
        }
        interface ByCaTaskIds extends ServiceTypes.CoreResponseBase_obsolete_<CaTaskResultsItem[]> {
        }
        interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CaTaskResultsItem[]> {
        }
    }
    interface ICaseTaskResultsService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByCaTaskIds?: (request: Requests.ByCaTaskIds) => Promise<Responses.ByCaTaskIds>;
        SearchObject?: (request: Requests.SearchObject) => Promise<Responses.SearchObject>;
    }
}
