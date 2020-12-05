import { IApiService } from './i-api-service';
import { TokenServiceTypes as SvcDef } from '../api-interface/TokenService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ITokenService = SvcDef.ITokenService;
export declare class TokenService implements ITokenService {
    private _service;
    constructor(service: IApiService);
    RevokeUser(request: Requests.RevokeUser): Promise<Responses.RevokeUser>;
}
