import { CaPeopleItemBase } from '../core/types/CaPeopleItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CasePeopleServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            AddressLine1?: string;
            AddressLine2?: string;
            AddressLine3?: string;
            AddToPeople?: boolean;
            CaObjectId: number;
            City?: string;
            CommentText?: string;
            Company?: string;
            CountryCode?: string;
            Email?: string;
            FaxNumber?: string;
            Name: string;
            PeopleId?: number;
            PhoneHome?: string;
            PhoneMobile?: string;
            PhoneWork?: string;
            PhoneWorkExt?: string;
            RoleId?: number;
            StateCode?: string;
            WebSiteUrl?: string;
            ZipCode?: string;
        }
        interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            CaPeopleId: number;
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            AddressLine1?: string;
            AddressLine2?: string;
            CaObjectId?: number;
            CaPeopleId?: number;
            CityName?: string;
            CountryCode?: string;
            CountryName?: string;
            Email?: string;
            Name?: string;
            PhoneHome?: string;
            PhoneMobile?: string;
            PhoneWork?: string;
            RoleCode?: string;
            RoleDesc?: string;
            RoleId?: number;
            StateCode?: string;
            StateName?: string;
            ZipCode?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<CaPeopleItemBase> {
        }
        interface ByCaObjectId extends ServiceTypes.CoreResponseBase_<CaPeopleItemBase[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_<CaPeopleItemBase> {
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_<number> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_<number[]> {
        }
    }
    interface ICasePeopleService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => Promise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => Promise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
    }
}
