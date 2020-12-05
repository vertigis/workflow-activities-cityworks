export var CoreResponseStatus;
(function (CoreResponseStatus) {
    CoreResponseStatus[CoreResponseStatus["Ok"] = 0] = "Ok";
    CoreResponseStatus[CoreResponseStatus["Error"] = 1] = "Error";
    CoreResponseStatus[CoreResponseStatus["Unauthorized"] = 2] = "Unauthorized";
    CoreResponseStatus[CoreResponseStatus["InvalidCredentials"] = 3] = "InvalidCredentials";
    CoreResponseStatus[CoreResponseStatus["ConnectionError"] = -1] = "ConnectionError";
})(CoreResponseStatus || (CoreResponseStatus = {}));
