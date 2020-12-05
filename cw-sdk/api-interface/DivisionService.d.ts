import { DivisionItem } from '../core/types/DivisionItem';
import { ServiceTypes } from '../core/service-types';
export declare namespace DivisionServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            AddressLine1?: string;
            AddressLine2?: string;
            AddressLine3?: string;
            CityName?: string;
            CountryCode?: string;
            DepartmentId: number;
            DivisionCode?: string;
            DivisionName: string;
            ExpiredFlag?: string;
            FaxNumber?: string;
            PhoneNumber?: string;
            PhoneNumberExt?: string;
            StateCode?: string;
            ZipCode?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<DivisionItem> {
        }
    }
    interface IDivisionService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
    }
}
