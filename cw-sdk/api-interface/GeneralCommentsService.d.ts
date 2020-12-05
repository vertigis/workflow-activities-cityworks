import { GeneralCommentsItem } from '../core/types/GeneralCommentsItem';
import { ServiceTypes } from '../core/service-types';
export declare namespace GeneralCommentsServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CommentCode?: string;
            ExpiredFlag?: string;
            GeneralComment?: string;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            CommentId: number;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<GeneralCommentsItem> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_<GeneralCommentsItem> {
        }
    }
    interface IGeneralCommentsService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
    }
}
