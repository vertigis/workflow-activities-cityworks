export var EventTriggerType;
(function (EventTriggerType) {
    EventTriggerType[EventTriggerType["Always"] = 0] = "Always";
    EventTriggerType[EventTriggerType["Equal"] = 1] = "Equal";
    EventTriggerType[EventTriggerType["NotEqual"] = 2] = "NotEqual";
    EventTriggerType[EventTriggerType["LessThan"] = 3] = "LessThan";
    EventTriggerType[EventTriggerType["GreaterThan"] = 4] = "GreaterThan";
    EventTriggerType[EventTriggerType["Contains"] = 5] = "Contains";
    EventTriggerType[EventTriggerType["NotContains"] = 6] = "NotContains";
    EventTriggerType[EventTriggerType["NullOrEmpty"] = 7] = "NullOrEmpty";
    EventTriggerType[EventTriggerType["NotNullOrEmpty"] = 8] = "NotNullOrEmpty";
    EventTriggerType[EventTriggerType["Unknown"] = 9] = "Unknown";
})(EventTriggerType || (EventTriggerType = {}));
