export var CommentActivityType;
(function (CommentActivityType) {
    CommentActivityType[CommentActivityType["Unknown"] = 0] = "Unknown";
    CommentActivityType[CommentActivityType["Request"] = 1] = "Request";
    CommentActivityType[CommentActivityType["WorkOrder"] = 2] = "WorkOrder";
    CommentActivityType[CommentActivityType["CaTask"] = 3] = "CaTask";
    CommentActivityType[CommentActivityType["CaObject"] = 4] = "CaObject";
    CommentActivityType[CommentActivityType["CaCorrection"] = 5] = "CaCorrection";
    CommentActivityType[CommentActivityType["Project"] = 6] = "Project";
    CommentActivityType[CommentActivityType["Contract"] = 7] = "Contract";
})(CommentActivityType || (CommentActivityType = {}));
