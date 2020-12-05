import { AuthenticationServiceTypes } from '../api-interface/AuthenticationService';
import { IApiService } from '../api-service/i-api-service';
export declare class ApiService implements IApiService {
    private readonly _csrfTokenCookieName;
    private readonly _csrfHeaderName;
    private _baseUrl;
    private _csrfToken;
    private _token;
    constructor(baseUrl: string, token?: string | undefined);
    getToken(): string | undefined;
    initializeCsrfToken(): void;
    login(userName: string, password: string): Promise<AuthenticationServiceTypes.Responses.Authenticate>;
    call(data: any, url: string): Promise<any>;
}
