export var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["NULL"] = 0] = "NULL";
    TransactionType[TransactionType["AUDIT"] = 1] = "AUDIT";
    TransactionType[TransactionType["ISSUE"] = 2] = "ISSUE";
    TransactionType[TransactionType["RECEIVE"] = 3] = "RECEIVE";
    TransactionType[TransactionType["TRANSFER"] = 4] = "TRANSFER";
    TransactionType[TransactionType["FRTRASH"] = 5] = "FRTRASH";
    TransactionType[TransactionType["TOTRASH"] = 6] = "TOTRASH";
})(TransactionType || (TransactionType = {}));
