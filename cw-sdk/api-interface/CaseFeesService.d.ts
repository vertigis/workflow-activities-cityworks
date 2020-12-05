import { CaFeesItemBase } from '../core/types/CaFeesItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseFeesServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            Amount?: number;
            AutoRecalculate?: string;
            CaObjectId: number;
            CommentText?: string;
            Factor?: number;
            FeeSetupId: number;
            FeeTypeId?: number;
            Invoiced?: string;
            Quantity?: number;
            Rate?: number;
        }
        interface AddDefault extends ServiceTypes.CoreRequestBase {
            BusCaseId: number;
            CaObjectId: number;
        }
        interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            CaFeeId: number;
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            CaFeeId?: number;
            CaObjectId?: number;
            FeeCode?: string;
            FeeDesc?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<CaFeesItemBase> {
        }
        interface AddDefault extends ServiceTypes.CoreResponseBase_<CaFeesItemBase[]> {
        }
        interface ByCaObjectId extends ServiceTypes.CoreResponseBase_<CaFeesItemBase[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CaFeesItemBase> {
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
    }
    interface ICaseFeesService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        AddDefault?: (request: Requests.AddDefault) => Promise<Responses.AddDefault>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => Promise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => Promise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
    }
}
