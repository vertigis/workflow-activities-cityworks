import { IApiService } from './i-api-service';
import { AuthenticationServiceTypes as SvcDef } from '../api-interface/AuthenticationService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IAuthenticationService = SvcDef.IAuthenticationService;
export declare class AuthenticationService implements IAuthenticationService {
    private _service;
    constructor(service: IApiService);
    Authenticate(request: Requests.Authenticate): Promise<Responses.Authenticate>;
    CityworksOnlineAuthenticate(request: Requests.CityworksOnlineAuthenticate): Promise<Responses.CityworksOnlineAuthenticate>;
    CityworksOnlineSites(request: Requests.CityworksOnlineSites): Promise<Responses.CityworksOnlineSites>;
    Domains(request: Requests.Domains): Promise<Responses.Domains>;
    User(request: Requests.User): Promise<Responses.User>;
    Validate(request: Requests.Validate): Promise<Responses.Validate>;
    Version(request: Requests.Version): Promise<Responses.Version>;
}
