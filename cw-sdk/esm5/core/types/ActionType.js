export var ActionType;
(function (ActionType) {
    ActionType[ActionType["Unknown"] = 0] = "Unknown";
    ActionType[ActionType["ActivityUpdate"] = 1] = "ActivityUpdate";
    ActionType[ActionType["Email"] = 2] = "Email";
    ActionType[ActionType["WebHook"] = 3] = "WebHook";
})(ActionType || (ActionType = {}));
