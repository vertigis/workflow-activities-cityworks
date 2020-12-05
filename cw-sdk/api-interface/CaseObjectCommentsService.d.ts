import { CommentRecord } from '../core/types/CommentRecord';
import { CaObjectCommentsItemBase } from '../core/types/CaObjectCommentsItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseObjectCommentsServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            CommentText: string;
        }
        interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            CaObjectCommentIds?: number[];
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            CaObjectCommentId?: number;
            Commenttext?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<CaObjectCommentsItemBase> {
        }
        interface ByCaObjectId extends ServiceTypes.CoreResponseBase_<CommentRecord[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<CaObjectCommentsItemBase> {
        }
    }
    interface ICaseObjectCommentsService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => Promise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
