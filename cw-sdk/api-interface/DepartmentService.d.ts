import { DepartmentItem } from '../core/types/DepartmentItem';
import { ServiceTypes } from '../core/service-types';
export declare namespace DepartmentServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            AddressLine1?: string;
            AddressLine2?: string;
            AddressLine3?: string;
            CityName?: string;
            CountryCode?: string;
            DepartmentCode: string;
            DepartmentName: string;
            ExpiredFlag?: string;
            FaxNumber?: string;
            PhoneNumber?: string;
            PhoneNumberExt?: string;
            StateCode?: string;
            ZipCode?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<DepartmentItem> {
        }
    }
    interface IDepartmentService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
    }
}
