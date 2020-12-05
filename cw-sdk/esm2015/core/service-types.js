export var ServiceTypes;
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
