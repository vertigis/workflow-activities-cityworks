import { ProblemComment } from '../core/types/ProblemComment';
import { CategoryComment } from '../core/types/CategoryComment';
import { CommentRecord } from '../core/types/CommentRecord';
import { CommentActivityType } from '../core/types/CommentActivityType';
import { ServiceTypes } from '../core/service-types';
export declare namespace CommentServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            ActivityId?: string;
            ActivitySid: number;
            ActivityType: CommentActivityType;
            Comments: string;
        }
        interface ByActivityIds extends ServiceTypes.CoreRequestBase {
            ActivityIds: string[];
            ActivityType: CommentActivityType;
        }
        interface ByActivitySids extends ServiceTypes.CoreRequestBase {
            ActivitySids: number[];
            ActivityType: CommentActivityType;
        }
        interface ByActivityTypes extends ServiceTypes.CoreRequestBase {
            ActivityTypes: number[];
            Categories?: string[];
        }
        interface ProblemComments extends ServiceTypes.CoreRequestBase {
            ProblemSids: number[];
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            ActivityType: CommentActivityType;
            CommentId: number;
            Comments: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<CommentRecord> {
        }
        interface ByActivityIds extends ServiceTypes.CoreResponseBase_<{
            [key: string]: CommentRecord[];
        }> {
        }
        interface ByActivitySids extends ServiceTypes.CoreResponseBase_<{
            [key: number]: CommentRecord[];
        }> {
        }
        interface ByActivityTypes extends ServiceTypes.CoreResponseBase_<CategoryComment[]> {
        }
        interface ProblemComments extends ServiceTypes.CoreResponseBase_<ProblemComment[]> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<CommentRecord> {
        }
    }
    interface ICommentService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByActivityIds?: (request: Requests.ByActivityIds) => Promise<Responses.ByActivityIds>;
        ByActivitySids?: (request: Requests.ByActivitySids) => Promise<Responses.ByActivitySids>;
        ByActivityTypes?: (request: Requests.ByActivityTypes) => Promise<Responses.ByActivityTypes>;
        ProblemComments?: (request: Requests.ProblemComments) => Promise<Responses.ProblemComments>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
