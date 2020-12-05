import { CaConditionItemBase } from '../core/types/CaConditionItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseConditionServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            AppliedBy?: number;
            CaObjectId: number;
            CompletedBy?: number;
            ConditionId: number;
            DateApplied?: Date;
            DateCompleted?: Date;
            DefaultText?: string;
            DisciplineId?: number;
            Notes?: string;
            PrePostExistFlag?: string;
            TaskId?: number;
        }
        interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            CaConditionId?: number;
            CaObjectId?: number;
            ConditionCode?: string;
            ConditionDesc?: string;
        }
        interface SearchObject extends ServiceTypes.CoreRequestBase {
            CaConditionId?: number;
            CaObjectId?: number;
            ConditionCode?: string;
            ConditionDesc?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CaConditionItemBase> {
        }
        interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CaConditionItemBase[]> {
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
        interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CaConditionItemBase[]> {
        }
    }
    interface ICaseConditionService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => Promise<Responses.ByCaObjectId>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => Promise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => Promise<Responses.SearchObject>;
    }
}
