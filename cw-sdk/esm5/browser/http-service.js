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
export function post(url, token, csrfToken, csrfTokenHeader, dataParams) {
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
