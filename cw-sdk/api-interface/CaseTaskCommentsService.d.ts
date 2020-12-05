import { CommentRecord } from '../core/types/CommentRecord';
import { CaTaskCommentsItemBase } from '../core/types/CaTaskCommentsItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseTaskCommentsServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CaTaskId: number;
            CommentId?: number;
            CommentText: string;
        }
        interface ByCaTaskId extends ServiceTypes.CoreRequestBase {
            CaTaskId?: number;
        }
        interface ByCaTaskIds extends ServiceTypes.CoreRequestBase {
            CaTaskIds?: number[];
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            CaTaskCommentIds?: number[];
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            CaTaskCommentId?: number;
            CommentId?: number;
            Commenttext?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<CaTaskCommentsItemBase> {
        }
        interface ByCaTaskId extends ServiceTypes.CoreResponseBase_<CommentRecord[]> {
        }
        interface ByCaTaskIds extends ServiceTypes.CoreResponseBase_obsolete_<CaTaskCommentsItemBase[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<CaTaskCommentsItemBase> {
        }
    }
    interface ICaseTaskCommentsService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByCaTaskId?: (request: Requests.ByCaTaskId) => Promise<Responses.ByCaTaskId>;
        ByCaTaskIds?: (request: Requests.ByCaTaskIds) => Promise<Responses.ByCaTaskIds>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
