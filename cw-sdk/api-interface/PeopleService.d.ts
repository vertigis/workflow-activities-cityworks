import { PeopleItem } from '../core/types/PeopleItem';
import { ServiceTypes } from '../core/service-types';
export declare namespace PeopleServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            AddressLine1?: string;
            AddressLine2?: string;
            AddressLine3?: string;
            CityName?: string;
            CommentText?: string;
            CompanyName?: string;
            CountryCode?: string;
            Email?: string;
            ExpiredFlag?: string;
            FaxNumber?: string;
            Name: string;
            PhoneHome?: string;
            PhoneMobile?: string;
            PhoneNumber?: string;
            PhoneWork?: string;
            PhoneWorkExt?: string;
            RoleId?: number;
            StateCode?: string;
            TableName?: string;
            UserId?: number;
            WebSiteUrl?: string;
            ZipCode?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<PeopleItem> {
        }
    }
    interface IPeopleService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
    }
}
