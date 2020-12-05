import { RecentActivity } from '../core/types/RecentActivity';
import { ServiceTypes } from '../core/service-types';
export declare namespace RecentActivityServiceTypes {
    namespace Requests {
        interface CaseViewed extends ServiceTypes.CoreRequestBase {
            CaseId?: number;
            DateTimeStamp?: Date;
        }
        interface InspectionViewed extends ServiceTypes.CoreRequestBase {
            DateTimeStamp?: Date;
            InspectionId: number;
        }
        interface RequestViewed extends ServiceTypes.CoreRequestBase {
            DateTimeStamp?: Date;
            RequestId: number;
        }
        interface User extends ServiceTypes.CoreRequestBase {
            IncludeCases?: boolean;
            IncludeInspections?: boolean;
            IncludeRequests?: boolean;
            IncludeWorkOrders?: boolean;
            MaxResults?: number;
        }
        interface WorkOrderViewed extends ServiceTypes.CoreRequestBase {
            DateTimeStamp?: Date;
            WorkOrderId?: string;
            WorkOrderSid: number;
        }
    }
    namespace Responses {
        interface CaseViewed extends ServiceTypes.CoreResponseBase_obsolete {
        }
        interface InspectionViewed extends ServiceTypes.CoreResponseBase_obsolete {
        }
        interface RequestViewed extends ServiceTypes.CoreResponseBase_obsolete {
        }
        interface User extends ServiceTypes.CoreResponseBase_obsolete_<RecentActivity[]> {
        }
        interface WorkOrderViewed extends ServiceTypes.CoreResponseBase_obsolete {
        }
    }
    interface IRecentActivityService {
        CaseViewed?: (request: Requests.CaseViewed) => Promise<Responses.CaseViewed>;
        InspectionViewed?: (request: Requests.InspectionViewed) => Promise<Responses.InspectionViewed>;
        RequestViewed?: (request: Requests.RequestViewed) => Promise<Responses.RequestViewed>;
        User?: (request: Requests.User) => Promise<Responses.User>;
        WorkOrderViewed?: (request: Requests.WorkOrderViewed) => Promise<Responses.WorkOrderViewed>;
    }
}
