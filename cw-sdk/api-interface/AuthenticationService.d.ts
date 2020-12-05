import { CWUser } from '../core/types/CWUser';
import { CWDomain } from '../core/types/CWDomain';
import { CityworksOnlineSite } from '../core/types/CityworksOnlineSite';
import { CityworksOnlineAuthToken } from '../core/types/CityworksOnlineAuthToken';
import { AuthToken } from '../core/types/AuthToken';
import { ServiceTypes } from '../core/service-types';
export declare namespace AuthenticationServiceTypes {
    namespace Requests {
        interface Authenticate extends ServiceTypes.CoreRequestBase {
            Expires?: number;
            LoginName: string;
            Password: string;
        }
        interface CityworksOnlineAuthenticate extends ServiceTypes.CoreRequestBase {
            LoginName: string;
            Password: string;
        }
        interface CityworksOnlineSites extends ServiceTypes.CoreRequestBase {
            LoginName: string;
            Password: string;
        }
        interface Domains extends ServiceTypes.CoreRequestBase {
        }
        interface User extends ServiceTypes.CoreRequestBase {
            LoginName?: string;
        }
        interface Validate extends ServiceTypes.CoreRequestBase {
            Token: string;
        }
        interface Version extends ServiceTypes.CoreRequestBase {
        }
    }
    namespace Responses {
        interface Authenticate extends ServiceTypes.CoreResponseBase_<AuthToken> {
        }
        interface CityworksOnlineAuthenticate extends ServiceTypes.CoreResponseBase_<CityworksOnlineAuthToken> {
        }
        interface CityworksOnlineSites extends ServiceTypes.CoreResponseBase_<CityworksOnlineSite[]> {
        }
        interface Domains extends ServiceTypes.CoreResponseBase_<CWDomain[]> {
        }
        interface User extends ServiceTypes.CoreResponseBase_<CWUser> {
        }
        interface Validate extends ServiceTypes.CoreResponseBase_<boolean> {
        }
        interface Version extends ServiceTypes.CoreResponseBase_<string> {
        }
    }
    interface IAuthenticationService {
        Authenticate?: (request: Requests.Authenticate) => Promise<Responses.Authenticate>;
        CityworksOnlineAuthenticate?: (request: Requests.CityworksOnlineAuthenticate) => Promise<Responses.CityworksOnlineAuthenticate>;
        CityworksOnlineSites?: (request: Requests.CityworksOnlineSites) => Promise<Responses.CityworksOnlineSites>;
        Domains?: (request: Requests.Domains) => Promise<Responses.Domains>;
        User?: (request: Requests.User) => Promise<Responses.User>;
        Validate?: (request: Requests.Validate) => Promise<Responses.Validate>;
        Version?: (request: Requests.Version) => Promise<Responses.Version>;
    }
}
