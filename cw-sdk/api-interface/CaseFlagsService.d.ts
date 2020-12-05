import { CaFlagsItemBase } from '../core/types/CaFlagsItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseFlagsServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            AppliedBy: number;
            CaObjectId: number;
            CompletedBy?: number;
            DateApplied: Date;
            DateCompleted?: Date;
            DisciplineId?: number;
            FlagId: number;
            Notes?: string;
            Severity: string;
        }
        interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            CaFlagId: number;
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            CaFlagId?: number;
            Flag?: string;
            FlagDesc?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CaFlagsItemBase> {
        }
        interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CaFlagsItemBase[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CaFlagsItemBase> {
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
    }
    interface ICaseFlagsService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => Promise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => Promise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
    }
}
