import { CaObjectItem } from '../core/types/CaObjectItem';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseServiceTypes {
    namespace Requests {
        interface Create extends ServiceTypes.CoreRequestBase {
            AcceptedBy?: number;
            CaseName?: string;
            CaseNumber?: string;
            CaseTypeId: number;
            DateAccepted?: Date;
            Location?: string;
            ProjectCode?: string;
            SubTypeId?: number;
            WKID?: number;
            WKT?: string;
            X?: number;
            Y?: number;
        }
        interface CreateChild extends ServiceTypes.CoreRequestBase {
            AcceptedBy?: number;
            BusCaseId: number;
            CaseName?: string;
            CaseNumber?: string;
            CX?: number;
            CY?: number;
            DateAccepted?: Date;
            Location?: string;
            NoOfCases?: number;
            ParentCaObjectId: number;
            ProjectCode?: string;
            WKID?: number;
            WKT?: string;
        }
    }
    namespace Responses {
        interface Create extends ServiceTypes.CoreResponseBase_obsolete_<CaObjectItem> {
        }
        interface CreateChild extends ServiceTypes.CoreResponseBase_obsolete_<CaObjectItem> {
        }
    }
    interface ICaseService {
        Create?: (request: Requests.Create) => Promise<Responses.Create>;
        CreateChild?: (request: Requests.CreateChild) => Promise<Responses.CreateChild>;
    }
}
