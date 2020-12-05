class AuthenticationService {
    constructor(service) { this._service = service; }
    Authenticate(request) {
        return this._service.call(request, 'General/Authentication/Authenticate');
    }
    CityworksOnlineAuthenticate(request) {
        return this._service.call(request, 'General/Authentication/CityworksOnlineAuthenticate');
    }
    CityworksOnlineSites(request) {
        return this._service.call(request, 'General/Authentication/CityworksOnlineSites');
    }
    Domains(request) {
        return this._service.call(request, 'General/Authentication/Domains');
    }
    User(request) {
        return this._service.call(request, 'General/Authentication/User');
    }
    Validate(request) {
        return this._service.call(request, 'General/Authentication/Validate');
    }
    Version(request) {
        return this._service.call(request, 'General/Authentication/Version');
    }
}

var ServiceTypes;
(function (ServiceTypes) {
    let CoreResponseMessageType;
    (function (CoreResponseMessageType) {
        CoreResponseMessageType[CoreResponseMessageType["Success"] = 0] = "Success";
        CoreResponseMessageType[CoreResponseMessageType["Warning"] = 1] = "Warning";
        CoreResponseMessageType[CoreResponseMessageType["Error"] = 2] = "Error";
    })(CoreResponseMessageType = ServiceTypes.CoreResponseMessageType || (ServiceTypes.CoreResponseMessageType = {}));
    let CoreResponseStatus;
    (function (CoreResponseStatus) {
        CoreResponseStatus[CoreResponseStatus["Ok"] = 0] = "Ok";
        CoreResponseStatus[CoreResponseStatus["Error"] = 1] = "Error";
        CoreResponseStatus[CoreResponseStatus["Unauthorized"] = 2] = "Unauthorized";
        CoreResponseStatus[CoreResponseStatus["InvalidCredentials"] = 3] = "InvalidCredentials";
        CoreResponseStatus[CoreResponseStatus["ConnectionError"] = -1] = "ConnectionError";
    })(CoreResponseStatus = ServiceTypes.CoreResponseStatus || (ServiceTypes.CoreResponseStatus = {}));
})(ServiceTypes || (ServiceTypes = {}));

function jsonParse(jsonText) {
    //Date format is YYYY-MM-DDThh:mm:ss
    //This is assumed to be local time and is only here for legacy reasons.
    const DATE_REGEX_LOCAL = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/;
    return JSON.parse(jsonText, function (key, value) {
        let retVal = value;
        const isString = (value) && (typeof value == 'string');
        const isStandardDate = isString && DATE_REGEX_LOCAL.test(value);
        //------------------------------------------------------------
        //  Try to parse dates
        //------------------------------------------------------------
        if (isStandardDate) {
            const result = DATE_REGEX_LOCAL.exec(value);
            if (result) {
                // Get all of the date's components.
                const year = parseInt(result[1]);
                const month = parseInt(result[2]) - 1; // Month is zero based.
                const day = parseInt(result[3]);
                const hour = parseInt(result[4]);
                const min = parseInt(result[5]);
                const sec = parseInt(result[6]);
                //Check for null date
                if (year === 1 && month === 0 && day === 1) {
                    retVal = null;
                }
                else {
                    //Create the date. This is local time and is not correct unless the server
                    //time is the same as local time.
                    const localDate = new Date(year, month, day, hour, min, sec);
                    //MUST set full year to handle cases such as "0001-01-01"
                    localDate.setFullYear(year);
                    retVal = localDate;
                }
            }
        }
        return retVal;
    });
}
function post(url, token, csrfToken, csrfTokenHeader, dataParams) {
    const xhr = new XMLHttpRequest();
    const promise = new Promise((resolve, reject) => {
        const apiUrl = url;
        let uri = '';
        if (!dataParams)
            dataParams = { data: {}, token: (token !== null ? token : '') };
        else {
            dataParams = { data: JSON.stringify(dataParams), token: (token !== null ? token : '') };
        }
        for (let key in dataParams) {
            uri += encodeURIComponent(key) + '=' + encodeURIComponent(dataParams[key]) + '&';
        }
        xhr.open('POST', apiUrl, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        if (csrfTokenHeader && csrfTokenHeader.length > 0 && csrfToken && csrfToken.length > 0) {
            xhr.setRequestHeader(csrfTokenHeader, csrfToken);
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(jsonParse(xhr.response));
                }
                else {
                    reject(Error(xhr.statusText));
                }
            }
        };
        xhr.onerror = () => {
            reject(Error('Network Error'));
        };
        xhr.send(uri);
    });
    return promise;
}

class CookieService {
    /**
     *
     */
    static getCookieStringValue(cookieName) {
        cookieName = (cookieName || '').toLowerCase();
        if (cookieName.length < 1) {
            return undefined;
        }
        let cookies = (document.cookie || '').split(';').map(a => a.trim());
        let cookieIndex = -1;
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            let name = cookie.toLowerCase().slice(0, `${cookieName}=`.length);
            let match = name === `${cookieName}=`;
            if (match) {
                cookieIndex = i;
                break;
            }
        }
        if (cookieIndex < 0) {
            return undefined;
        }
        let rawCookie = cookies[cookieIndex];
        let rawValue = rawCookie.slice(`${cookieName}=`.length) || '';
        if (rawValue.length > 0) {
            return decodeURIComponent(rawValue);
        }
        else {
            return undefined;
        }
    }
}

class ApiService {
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
        return post(this._baseUrl + 'Services/' + url, this._token, this._csrfToken || undefined, this._csrfHeaderName, data);
    }
}
function cleanUrl(u) {
    const viewUrl = u[u.length - 1] === '/' || u[u.length - 1] == '\\' ? '' : (u.indexOf('/') > -1 ? '/' : '\\');
    return u + viewUrl;
}

export { ApiService, CookieService, post };
//# sourceMappingURL=browser.js.map
