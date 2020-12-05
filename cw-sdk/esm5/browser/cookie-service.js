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
export { CookieService };
