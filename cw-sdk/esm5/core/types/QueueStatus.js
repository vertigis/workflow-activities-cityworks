export var QueueStatus;
(function (QueueStatus) {
    QueueStatus[QueueStatus["Pending"] = 0] = "Pending";
    QueueStatus[QueueStatus["Processing"] = 1] = "Processing";
    QueueStatus[QueueStatus["Complete"] = 2] = "Complete";
    QueueStatus[QueueStatus["Failed"] = 3] = "Failed";
})(QueueStatus || (QueueStatus = {}));
