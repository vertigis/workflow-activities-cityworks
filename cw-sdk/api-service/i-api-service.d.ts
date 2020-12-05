import { AuthenticationServiceTypes } from '../api-interface/AuthenticationService';
export interface IApiService {
    getToken(): string | undefined;
    initializeCsrfToken(): void;
    login(userName: string, password: string): Promise<AuthenticationServiceTypes.Responses.Authenticate>;
    call(data: any, url: string): Promise<any>;
}
