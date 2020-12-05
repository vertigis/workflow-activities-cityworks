import { AuthenticationService } from '../api-service/AuthenticationService';
import { ServiceTypes } from '../core/service-types';
import * as http from './http-service';
import { CookieService } from './cookie-service';
export class ApiService {
    constructor(baseUrl, token = undefined) {
        this._csrfTokenCookieName = 'cw-reqtkn';
        this._csrfHeaderName = 'cw-csrf';
        this._baseUrl = undefined;
        this._csrfToken = undefined;
        this._token = undefined;
        if (typeof token === 'undefined' || !token || token.length < 1) {
            this._token = undefined;
        }
        else {
            this._token = token;
        }
        if (typeof baseUrl === 'undefined' || !baseUrl || baseUrl.length < 1) {
            this._baseUrl = undefined;
        }
        else {
            this._baseUrl = cleanUrl(baseUrl);
        }
    }
    getToken() {
        return this._token;
    }
    initializeCsrfToken() {
        this._csrfToken = CookieService.getCookieStringValue(this._csrfTokenCookieName);
    }
    login(userName, password) {
        if (this._baseUrl === null) {
            return Promise.reject("No Cityworks URL is set. URL must be set in the constructor.");
        }
        const request = {
            LoginName: userName,
            Password: password
        };
        const svc = new AuthenticationService(this);
        const promise = svc.Authenticate(request);
        promise.then((resp) => {
            if (resp && resp.Status === ServiceTypes.CoreResponseStatus.Ok && resp.Value) {
                this._token = resp.Value.Token;
            }
            else {
                this._token = undefined;
            }
            return resp;
        }, (response) => {
            console.error("error logging in");
            console.error(response);
            this._token = undefined;
            return response;
        });
        return promise;
    }
    call(data, url) {
        if (this._baseUrl === null) {
            return Promise.reject("No Cityworks URL is set. URL must be set in the constructor.");
        }
        return http.post(this._baseUrl + 'Services/' + url, this._token, this._csrfToken || undefined, this._csrfHeaderName, data);
    }
}
function cleanUrl(u) {
    const viewUrl = u[u.length - 1] === '/' || u[u.length - 1] == '\\' ? '' : (u.indexOf('/') > -1 ? '/' : '\\');
    return u + viewUrl;
}
;
