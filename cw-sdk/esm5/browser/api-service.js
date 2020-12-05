import { AuthenticationService } from '../api-service/AuthenticationService';
import { ServiceTypes } from '../core/service-types';
import * as http from './http-service';
import { CookieService } from './cookie-service';
var ApiService = /** @class */ (function () {
    function ApiService(baseUrl, token) {
        if (token === void 0) { token = undefined; }
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
    ApiService.prototype.getToken = function () {
        return this._token;
    };
    ApiService.prototype.initializeCsrfToken = function () {
        this._csrfToken = CookieService.getCookieStringValue(this._csrfTokenCookieName);
    };
    ApiService.prototype.login = function (userName, password) {
        var _this = this;
        if (this._baseUrl === null) {
            return Promise.reject("No Cityworks URL is set. URL must be set in the constructor.");
        }
        var request = {
            LoginName: userName,
            Password: password
        };
        var svc = new AuthenticationService(this);
        var promise = svc.Authenticate(request);
        promise.then(function (resp) {
            if (resp && resp.Status === ServiceTypes.CoreResponseStatus.Ok && resp.Value) {
                _this._token = resp.Value.Token;
            }
            else {
                _this._token = undefined;
            }
            return resp;
        }, function (response) {
            console.error("error logging in");
            console.error(response);
            _this._token = undefined;
            return response;
        });
        return promise;
    };
    ApiService.prototype.call = function (data, url) {
        if (this._baseUrl === null) {
            return Promise.reject("No Cityworks URL is set. URL must be set in the constructor.");
        }
        return http.post(this._baseUrl + 'Services/' + url, this._token, this._csrfToken || undefined, this._csrfHeaderName, data);
    };
    return ApiService;
}());
export { ApiService };
function cleanUrl(u) {
    var viewUrl = u[u.length - 1] === '/' || u[u.length - 1] == '\\' ? '' : (u.indexOf('/') > -1 ? '/' : '\\');
    return u + viewUrl;
}
;
