export class CookieService {
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
