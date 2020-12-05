import { CaViolationsItem } from '../core/types/CaViolationsItem';
import { CaViolationsItemBase } from '../core/types/CaViolationsItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseViolationsServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CaFeeId?: number;
            CaObjectId: number;
            CaTaskId?: number;
            CompletedBy?: number;
            DateCompleted?: Date;
            DateIssued: Date;
            Issuedby?: number;
            RemedialText?: string;
            ViolationId: number;
            ViolationText?: string;
        }
        interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface ByCaObjectIds extends ServiceTypes.CoreRequestBase {
            CaObjectIds: number[];
        }
        interface ByIds extends ServiceTypes.CoreRequestBase {
            CaViolationIds?: number[];
        }
        interface CompleteViolations extends ServiceTypes.CoreRequestBase {
            CaViolationId: number;
            CompletedBy?: number;
            DateCompleted?: Date;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            CaViolationId: number;
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            CaTaskId?: number;
            CaViolationId?: number;
            RemedialText?: string;
            TaskCode?: string;
            TaskDesc?: string;
            ViolationDesc?: string;
            ViolationText?: string;
            ViolationType?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CaViolationsItemBase> {
        }
        interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CaViolationsItemBase[]> {
        }
        interface ByCaObjectIds extends ServiceTypes.CoreResponseBase_obsolete_<CaViolationsItemBase[]> {
        }
        interface ByIds extends ServiceTypes.CoreResponseBase_obsolete_<CaViolationsItem[]> {
        }
        interface CompleteViolations extends ServiceTypes.CoreResponseBase_obsolete_<CaViolationsItemBase> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CaViolationsItemBase> {
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
    }
    interface ICaseViolationsService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => Promise<Responses.ByCaObjectId>;
        ByCaObjectIds?: (request: Requests.ByCaObjectIds) => Promise<Responses.ByCaObjectIds>;
        ByIds?: (request: Requests.ByIds) => Promise<Responses.ByIds>;
        CompleteViolations?: (request: Requests.CompleteViolations) => Promise<Responses.CompleteViolations>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => Promise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
    }
}
