import { GISPoint } from '../core/types/GISPoint';
import { CaObjectItem } from '../core/types/CaObjectItem';
import { CaObjectItemBase } from '../core/types/CaObjectItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseObjectServiceTypes {
    namespace Requests {
        interface ByIds extends ServiceTypes.CoreRequestBase {
            CaObjectIds?: number[];
        }
        interface CreateCaseFromServiceRequest extends ServiceTypes.CoreRequestBase {
            AcceptedBy?: number;
            CaseName?: string;
            CaseNumber?: string;
            CaseTypeId: number;
            DateAccepted?: Date;
            Entities?: {
                [key: string]: string[];
            };
            Facility_Id?: string;
            Level_Id?: string;
            Location?: string;
            ProjectCode?: string;
            ProjectDesc?: string;
            ServiceRequestId: number;
            SubTypeId?: number;
            X?: number;
            Y?: number;
        }
        interface DeleteCase extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Move extends ServiceTypes.CoreRequestBase {
            caObjectId: number;
            WKID?: number;
            WKT?: string;
            X: number;
            Y: number;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            BusinessName?: string;
            CaObjectId?: number;
            CaseName?: string;
            CaseNumber?: string;
            CaseStatus?: string;
            CaseStatusId?: number;
            CaseType?: string;
            CaseTypeDesc?: string;
            CaseTypeId?: number;
            DateEnteredFrom?: Date;
            DateEnteredTo?: Date;
            Facility_Id?: string;
            IssuedBy?: number;
            IssuedFlag?: string;
            Level_Id?: string;
            Location?: string;
            ProjectCode?: string;
            ProjectDesc?: string;
            ProjectId?: number;
            StatusCode?: string;
            SubType?: string;
            SubTypeDesc?: string;
            SubTypeId?: number;
        }
    }
    namespace Responses {
        interface ByIds extends ServiceTypes.CoreResponseBase_obsolete_<CaObjectItemBase[]> {
        }
        interface CreateCase extends ServiceTypes.CoreResponseBase_obsolete_<CaObjectItem> {
        }
        interface DeleteCase extends ServiceTypes.CoreResponseBase_obsolete_<number> {
        }
        interface Move extends ServiceTypes.CoreResponseBase_<GISPoint> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
    }
    interface ICaseObjectService {
        ByIds?: (request: Requests.ByIds) => Promise<Responses.ByIds>;
        CreateCaseFromServiceRequest?: (request: Requests.CreateCaseFromServiceRequest) => Promise<Responses.CreateCase>;
        DeleteCase?: (request: Requests.DeleteCase) => Promise<Responses.DeleteCase>;
        Move?: (request: Requests.Move) => Promise<Responses.Move>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
    }
}
