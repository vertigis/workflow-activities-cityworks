import { CaDepositItemBase } from '../core/types/CaDepositItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseDepositServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            Amount?: number;
            CaObjectId: number;
            CommentText?: string;
            DepositId: number;
        }
        interface AddDefault extends ServiceTypes.CoreRequestBase {
            BusCaseId: number;
            CaObjectId: number;
        }
        interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            CaDepositId: number;
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            CaDepositId?: number;
            CaObjectId?: number;
            DepositCode?: string;
            DepositDesc?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<CaDepositItemBase> {
        }
        interface AddDefault extends ServiceTypes.CoreResponseBase_<CaDepositItemBase[]> {
        }
        interface ByCaObjectId extends ServiceTypes.CoreResponseBase_<CaDepositItemBase[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_<CaDepositItemBase> {
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_<number> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_<number[]> {
        }
    }
    interface ICaseDepositService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        AddDefault?: (request: Requests.AddDefault) => Promise<Responses.AddDefault>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => Promise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => Promise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
    }
}
