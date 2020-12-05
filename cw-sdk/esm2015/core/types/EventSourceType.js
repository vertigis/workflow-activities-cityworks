export var EventSourceType;
(function (EventSourceType) {
    EventSourceType[EventSourceType["Request"] = 0] = "Request";
    EventSourceType[EventSourceType["WorkOrder"] = 1] = "WorkOrder";
    EventSourceType[EventSourceType["Inspection"] = 2] = "Inspection";
    EventSourceType[EventSourceType["Permit"] = 3] = "Permit";
    EventSourceType[EventSourceType["Comment"] = 4] = "Comment";
    EventSourceType[EventSourceType["WorkOrderLabor"] = 5] = "WorkOrderLabor";
    EventSourceType[EventSourceType["RequestLabor"] = 6] = "RequestLabor";
    EventSourceType[EventSourceType["Unknown"] = 7] = "Unknown";
    EventSourceType[EventSourceType["SMS"] = 8] = "SMS";
    EventSourceType[EventSourceType["CaTaskItem"] = 9] = "CaTaskItem";
    EventSourceType[EventSourceType["WoTask"] = 10] = "WoTask";
    EventSourceType[EventSourceType["RequestAttachment"] = 11] = "RequestAttachment";
    EventSourceType[EventSourceType["WorkOrderAttachment"] = 12] = "WorkOrderAttachment";
    EventSourceType[EventSourceType["InspectionAttachment"] = 13] = "InspectionAttachment";
    EventSourceType[EventSourceType["CaRelDocs"] = 14] = "CaRelDocs";
})(EventSourceType || (EventSourceType = {}));
