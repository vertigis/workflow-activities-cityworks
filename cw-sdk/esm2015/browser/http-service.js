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
export function post(url, token, csrfToken, csrfTokenHeader, dataParams) {
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
