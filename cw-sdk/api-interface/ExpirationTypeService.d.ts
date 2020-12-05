import { ExpirationTypeItem } from '../core/types/ExpirationTypeItem';
import { ServiceTypes } from '../core/service-types';
export declare namespace ExpirationTypeServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            AfterDays?: number;
            AfterMonths?: number;
            AfterYear?: number;
            EomFlag?: string;
            ExpirationTypeCode?: string;
            ExpirationTypeDesc: string;
            ExpiredFlag?: string;
            OrgId: number;
            RenewalMargin?: number;
            SpecificMonthDay?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<ExpirationTypeItem> {
        }
    }
    interface IExpirationTypeService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
    }
}
