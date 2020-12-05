export var SourceEventType;
(function (SourceEventType) {
    SourceEventType[SourceEventType["WorkOrderManualEmail"] = 0] = "WorkOrderManualEmail";
    SourceEventType[SourceEventType["WorkOrderSubmitToChanged"] = 1] = "WorkOrderSubmitToChanged";
    SourceEventType[SourceEventType["WorkOrderCreated"] = 2] = "WorkOrderCreated";
    SourceEventType[SourceEventType["WorkOrderClosed"] = 3] = "WorkOrderClosed";
    SourceEventType[SourceEventType["WorkOrderPrintQueue"] = 4] = "WorkOrderPrintQueue";
    SourceEventType[SourceEventType["WorkOrderCanceled"] = 5] = "WorkOrderCanceled";
    SourceEventType[SourceEventType["WorkOrderDeleted"] = 6] = "WorkOrderDeleted";
    SourceEventType[SourceEventType["RequestManualCallerEmail"] = 7] = "RequestManualCallerEmail";
    SourceEventType[SourceEventType["RequestManualEmail"] = 8] = "RequestManualEmail";
    SourceEventType[SourceEventType["RequestSubmitToChanged"] = 9] = "RequestSubmitToChanged";
    SourceEventType[SourceEventType["RequestDispatchedToChanged"] = 10] = "RequestDispatchedToChanged";
    SourceEventType[SourceEventType["RequestCreated"] = 11] = "RequestCreated";
    SourceEventType[SourceEventType["RequestClosed"] = 12] = "RequestClosed";
    SourceEventType[SourceEventType["RequestCanceled"] = 13] = "RequestCanceled";
    SourceEventType[SourceEventType["RequestDeleted"] = 14] = "RequestDeleted";
    SourceEventType[SourceEventType["InspectionManualEmail"] = 15] = "InspectionManualEmail";
    SourceEventType[SourceEventType["InspectionCreated"] = 16] = "InspectionCreated";
    SourceEventType[SourceEventType["InspectionSubmitToChanged"] = 17] = "InspectionSubmitToChanged";
    SourceEventType[SourceEventType["InspectionClosed"] = 18] = "InspectionClosed";
    SourceEventType[SourceEventType["InspectionDeleted"] = 19] = "InspectionDeleted";
    SourceEventType[SourceEventType["InspectionCanceled"] = 20] = "InspectionCanceled";
    SourceEventType[SourceEventType["CommentMention"] = 21] = "CommentMention";
    SourceEventType[SourceEventType["RequestLaborAdded"] = 22] = "RequestLaborAdded";
    SourceEventType[SourceEventType["RequestLaborDeleted"] = 23] = "RequestLaborDeleted";
    SourceEventType[SourceEventType["WorkOrderLaborAdded"] = 24] = "WorkOrderLaborAdded";
    SourceEventType[SourceEventType["WorkOrderLaborDeleted"] = 25] = "WorkOrderLaborDeleted";
    SourceEventType[SourceEventType["CaObjectCreated"] = 26] = "CaObjectCreated";
    SourceEventType[SourceEventType["CaObjectUpdated"] = 27] = "CaObjectUpdated";
    SourceEventType[SourceEventType["CaObjectDeleted"] = 28] = "CaObjectDeleted";
    SourceEventType[SourceEventType["Unknown"] = 29] = "Unknown";
    SourceEventType[SourceEventType["WorkOrderStatusChanged"] = 30] = "WorkOrderStatusChanged";
    SourceEventType[SourceEventType["RequestStatusChanged"] = 31] = "RequestStatusChanged";
    SourceEventType[SourceEventType["InspectionStatusChanged"] = 32] = "InspectionStatusChanged";
    SourceEventType[SourceEventType["RequestCommentAdded"] = 33] = "RequestCommentAdded";
    SourceEventType[SourceEventType["RequestCommentUpdated"] = 34] = "RequestCommentUpdated";
    SourceEventType[SourceEventType["RequestCommentDeleted"] = 35] = "RequestCommentDeleted";
    SourceEventType[SourceEventType["WorkOrderCommentAdded"] = 36] = "WorkOrderCommentAdded";
    SourceEventType[SourceEventType["WorkOrderCommentUpdated"] = 37] = "WorkOrderCommentUpdated";
    SourceEventType[SourceEventType["WorkOrderCommentDeleted"] = 38] = "WorkOrderCommentDeleted";
    SourceEventType[SourceEventType["CaCorrectionCommentAdded"] = 39] = "CaCorrectionCommentAdded";
    SourceEventType[SourceEventType["CaCorrectionCommentUpdated"] = 40] = "CaCorrectionCommentUpdated";
    SourceEventType[SourceEventType["CaCorrectionCommentDeleted"] = 41] = "CaCorrectionCommentDeleted";
    SourceEventType[SourceEventType["CaTaskCommentAdded"] = 42] = "CaTaskCommentAdded";
    SourceEventType[SourceEventType["CaTaskCommentUpdated"] = 43] = "CaTaskCommentUpdated";
    SourceEventType[SourceEventType["CaTaskCommentDeleted"] = 44] = "CaTaskCommentDeleted";
    SourceEventType[SourceEventType["CaObjectCommentAdded"] = 45] = "CaObjectCommentAdded";
    SourceEventType[SourceEventType["CaObjectCommentUpdated"] = 46] = "CaObjectCommentUpdated";
    SourceEventType[SourceEventType["CaObjectCommentDeleted"] = 47] = "CaObjectCommentDeleted";
    SourceEventType[SourceEventType["CaTaskItemCompleted"] = 48] = "CaTaskItemCompleted";
    SourceEventType[SourceEventType["WoTaskAdded"] = 50] = "WoTaskAdded";
    SourceEventType[SourceEventType["WoTaskAssignedToChanged"] = 51] = "WoTaskAssignedToChanged";
    SourceEventType[SourceEventType["WoTaskCommentAdded"] = 52] = "WoTaskCommentAdded";
    SourceEventType[SourceEventType["WoTaskCommentDeleted"] = 53] = "WoTaskCommentDeleted";
    SourceEventType[SourceEventType["WoTaskCommentUpdated"] = 54] = "WoTaskCommentUpdated";
    SourceEventType[SourceEventType["WoTaskDeleted"] = 55] = "WoTaskDeleted";
    SourceEventType[SourceEventType["WoTaskProceedUpdated"] = 56] = "WoTaskProceedUpdated";
    SourceEventType[SourceEventType["WoTaskReworkUpdated"] = 57] = "WoTaskReworkUpdated";
    SourceEventType[SourceEventType["WoTaskStatusChanged"] = 58] = "WoTaskStatusChanged";
    SourceEventType[SourceEventType["WorkOrderReopened"] = 60] = "WorkOrderReopened";
    SourceEventType[SourceEventType["WorkOrderUncanceled"] = 61] = "WorkOrderUncanceled";
    SourceEventType[SourceEventType["RequestReopened"] = 62] = "RequestReopened";
    SourceEventType[SourceEventType["RequestUncanceled"] = 63] = "RequestUncanceled";
    SourceEventType[SourceEventType["InspectionReopened"] = 64] = "InspectionReopened";
    SourceEventType[SourceEventType["InspectionUncanceled"] = 65] = "InspectionUncanceled";
    SourceEventType[SourceEventType["CaTaskItemAdded"] = 66] = "CaTaskItemAdded";
    SourceEventType[SourceEventType["CaTaskItemDeleted"] = 67] = "CaTaskItemDeleted";
    SourceEventType[SourceEventType["CaTaskItemAvailable"] = 68] = "CaTaskItemAvailable";
    SourceEventType[SourceEventType["CaObjectAttachmentAdded"] = 69] = "CaObjectAttachmentAdded";
    SourceEventType[SourceEventType["CaObjectAttachmentDeleted"] = 70] = "CaObjectAttachmentDeleted";
    SourceEventType[SourceEventType["InspectionAttachmentAdded"] = 71] = "InspectionAttachmentAdded";
    SourceEventType[SourceEventType["InspectionAttachmentDeleted"] = 72] = "InspectionAttachmentDeleted";
    SourceEventType[SourceEventType["RequestAttachmentAdded"] = 73] = "RequestAttachmentAdded";
    SourceEventType[SourceEventType["RequestAttachmentDeleted"] = 74] = "RequestAttachmentDeleted";
    SourceEventType[SourceEventType["WorkOrderAttachmentAdded"] = 75] = "WorkOrderAttachmentAdded";
    SourceEventType[SourceEventType["WorkOrderAttachmentDeleted"] = 76] = "WorkOrderAttachmentDeleted";
})(SourceEventType || (SourceEventType = {}));
