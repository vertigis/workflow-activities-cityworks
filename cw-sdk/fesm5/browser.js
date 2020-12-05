var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(service) {
        this._service = service;
    }
    AuthenticationService.prototype.Authenticate = function (request) {
        return this._service.call(request, 'General/Authentication/Authenticate');
    };
    AuthenticationService.prototype.CityworksOnlineAuthenticate = function (request) {
        return this._service.call(request, 'General/Authentication/CityworksOnlineAuthenticate');
    };
    AuthenticationService.prototype.CityworksOnlineSites = function (request) {
        return this._service.call(request, 'General/Authentication/CityworksOnlineSites');
    };
    AuthenticationService.prototype.Domains = function (request) {
        return this._service.call(request, 'General/Authentication/Domains');
    };
    AuthenticationService.prototype.User = function (request) {
        return this._service.call(request, 'General/Authentication/User');
    };
    AuthenticationService.prototype.Validate = function (request) {
        return this._service.call(request, 'General/Authentication/Validate');
    };
    AuthenticationService.prototype.Version = function (request) {
        return this._service.call(request, 'General/Authentication/Version');
    };
    return AuthenticationService;
}());

var ServiceTypes;
(function (ServiceTypes) {
    var CoreResponseMessageType;
    (function (CoreResponseMessageType) {
        CoreResponseMessageType[CoreResponseMessageType["Success"] = 0] = "Success";
        CoreResponseMessageType[CoreResponseMessageType["Warning"] = 1] = "Warning";
        CoreResponseMessageType[CoreResponseMessageType["Error"] = 2] = "Error";
    })(CoreResponseMessageType = ServiceTypes.CoreResponseMessageType || (ServiceTypes.CoreResponseMessageType = {}));
    var CoreResponseStatus;
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
    var DATE_REGEX_LOCAL = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/;
    return JSON.parse(jsonText, function (key, value) {
        var retVal = value;
        var isString = (value) && (typeof value == 'string');
        var isStandardDate = isString && DATE_REGEX_LOCAL.test(value);
        //------------------------------------------------------------
        //  Try to parse dates
        //------------------------------------------------------------
        if (isStandardDate) {
            var result = DATE_REGEX_LOCAL.exec(value);
            if (result) {
                // Get all of the date's components.
                var year = parseInt(result[1]);
                var month = parseInt(result[2]) - 1; // Month is zero based.
                var day = parseInt(result[3]);
                var hour = parseInt(result[4]);
                var min = parseInt(result[5]);
                var sec = parseInt(result[6]);
                //Check for null date
                if (year === 1 && month === 0 && day === 1) {
                    retVal = null;
                }
                else {
                    //Create the date. This is local time and is not correct unless the server
                    //time is the same as local time.
                    var localDate = new Date(year, month, day, hour, min, sec);
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
    var xhr = new XMLHttpRequest();
    var promise = new Promise(function (resolve, reject) {
        var apiUrl = url;
        var uri = '';
        if (!dataParams)
            dataParams = { data: {}, token: (token !== null ? token : '') };
        else {
            dataParams = { data: JSON.stringify(dataParams), token: (token !== null ? token : '') };
        }
        for (var key in dataParams) {
            uri += encodeURIComponent(key) + '=' + encodeURIComponent(dataParams[key]) + '&';
        }
        xhr.open('POST', apiUrl, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        if (csrfTokenHeader && csrfTokenHeader.length > 0 && csrfToken && csrfToken.length > 0) {
            xhr.setRequestHeader(csrfTokenHeader, csrfToken);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(jsonParse(xhr.response));
                }
                else {
                    reject(Error(xhr.statusText));
                }
            }
        };
        xhr.onerror = function () {
            reject(Error('Network Error'));
        };
        xhr.send(uri);
    });
    return promise;
}

var CookieService = /** @class */ (function () {
    function CookieService() {
    }
    /**
     *
     */
    CookieService.getCookieStringValue = function (cookieName) {
        cookieName = (cookieName || '').toLowerCase();
        if (cookieName.length < 1) {
            return undefined;
        }
        var cookies = (document.cookie || '').split(';').map(function (a) { return a.trim(); });
        var cookieIndex = -1;
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var name_1 = cookie.toLowerCase().slice(0, (cookieName + "=").length);
            var match = name_1 === cookieName + "=";
            if (match) {
                cookieIndex = i;
                break;
            }
        }
        if (cookieIndex < 0) {
            return undefined;
        }
        var rawCookie = cookies[cookieIndex];
        var rawValue = rawCookie.slice((cookieName + "=").length) || '';
        if (rawValue.length > 0) {
            return decodeURIComponent(rawValue);
        }
        else {
            return undefined;
        }
    };
    return CookieService;
}());

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
        return post(this._baseUrl + 'Services/' + url, this._token, this._csrfToken || undefined, this._csrfHeaderName, data);
    };
    return ApiService;
}());
function cleanUrl(u) {
    var viewUrl = u[u.length - 1] === '/' || u[u.length - 1] == '\\' ? '' : (u.indexOf('/') > -1 ? '/' : '\\');
    return u + viewUrl;
}

export { ApiService, CookieService, post };
//# sourceMappingURL=browser.js.map
