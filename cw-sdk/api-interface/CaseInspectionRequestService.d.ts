import { CaInspectionRequestItemBase } from '../core/types/CaInspectionRequestItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseInspectionRequestServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            LocationSpecific?: string;
            RequestorComment?: string;
            RequestorName?: string;
            RequestorPhone?: string;
            RequestorPhoneExt?: string;
            RequestSource?: string;
        }
        interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            RequestId: number;
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            ConfirmationId?: number;
            LocationSpecific?: string;
            RequestId?: number;
            RequestorComment?: string;
            RequestorName?: string;
            RequestorPhone?: string;
            RequestSource?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CaInspectionRequestItemBase> {
        }
        interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CaInspectionRequestItemBase[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CaInspectionRequestItemBase> {
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
    }
    interface ICaseInspectionRequestService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => Promise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => Promise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
    }
}
