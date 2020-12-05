import { ActivityLink } from '../core/types/ActivityLink';
import { ActivityLinkType } from '../core/types/ActivityLinkType';
import { ActivityLinkActivityType } from '../core/types/ActivityLinkActivityType';
import { ServiceTypes } from '../core/service-types';
export declare namespace ActivityLinkServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            DestId?: string;
            DestSid: number;
            DestType: ActivityLinkActivityType;
            LinkType: ActivityLinkType;
            SourceId?: string;
            SourceSid: number;
            SourceType: ActivityLinkActivityType;
        }
        interface ByActivityIds extends ServiceTypes.CoreRequestBase {
            ActivityIds: string[];
            ActivityType: ActivityLinkActivityType;
        }
        interface ByActivitySids extends ServiceTypes.CoreRequestBase {
            ActivitySids: number[];
            ActivityType: ActivityLinkActivityType;
        }
        interface CloneByActivitySid extends ServiceTypes.CoreRequestBase {
            DestinationActivitySid: number;
            DestinationActivityType: ActivityLinkActivityType;
            SourceActivitySid: number;
            SourceActivityType: ActivityLinkActivityType;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            ActivityLinkId: number;
        }
        interface Remove extends ServiceTypes.CoreRequestBase {
            DestId?: string;
            DestSid: number;
            DestType: ActivityLinkActivityType;
            LinkType: ActivityLinkType;
            SourceId?: string;
            SourceSid: number;
            SourceType: ActivityLinkActivityType;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<ActivityLink> {
        }
        interface ByActivityIds extends ServiceTypes.CoreResponseBase_<ActivityLink[]> {
        }
        interface ByActivitySids extends ServiceTypes.CoreResponseBase_<ActivityLink[]> {
        }
        interface CloneByActivitySid extends ServiceTypes.CoreResponseBase_<ActivityLink[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase {
        }
        interface Remove extends ServiceTypes.CoreResponseBase {
        }
    }
    interface IActivityLinkService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByActivityIds?: (request: Requests.ByActivityIds) => Promise<Responses.ByActivityIds>;
        ByActivitySids?: (request: Requests.ByActivitySids) => Promise<Responses.ByActivitySids>;
        CloneByActivitySid?: (request: Requests.CloneByActivitySid) => Promise<Responses.CloneByActivitySid>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        Remove?: (request: Requests.Remove) => Promise<Responses.Remove>;
    }
}
