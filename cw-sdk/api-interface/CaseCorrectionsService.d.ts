import { CaCorrectionsItemBase } from '../core/types/CaCorrectionsItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseCorrectionsServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            CaTaskId: number;
            CorrId: number;
        }
        interface ByCaTaskIds extends ServiceTypes.CoreRequestBase {
            CaTaskIds?: number[];
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            CaCorrectionsId?: number;
            CaTaskId?: number;
            CommentText?: string;
            CompletedBy?: number;
            CorrId?: number;
            RecheckFlag?: string;
            RecheckHistoryFlag?: string;
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            CaCorrectionsId: number;
            CommentText?: string;
            CompletedBy?: number;
            CorrStatusId?: number;
            DateCompleted?: Date;
            RecheckCaCorrId?: number;
            RecheckFlag?: string;
            RecheckHistoryFlag?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<CaCorrectionsItemBase> {
        }
        interface ByCaTaskIds extends ServiceTypes.CoreResponseBase_obsolete_<CaCorrectionsItemBase[]> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<CaCorrectionsItemBase> {
        }
    }
    interface ICaseCorrectionsService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByCaTaskIds?: (request: Requests.ByCaTaskIds) => Promise<Responses.ByCaTaskIds>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
