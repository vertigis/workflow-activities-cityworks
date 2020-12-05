export var NumericValueMode;
(function (NumericValueMode) {
    NumericValueMode[NumericValueMode["Nulls"] = 0] = "Nulls";
    NumericValueMode[NumericValueMode["MinMax"] = 1] = "MinMax";
    NumericValueMode[NumericValueMode["ListOfValues"] = 2] = "ListOfValues";
    NumericValueMode[NumericValueMode["NotListOfValues"] = 3] = "NotListOfValues";
    NumericValueMode[NumericValueMode["Disjoint"] = 4] = "Disjoint";
    NumericValueMode[NumericValueMode["Invalid"] = 5] = "Invalid";
    NumericValueMode[NumericValueMode["NotNull"] = 6] = "NotNull";
})(NumericValueMode || (NumericValueMode = {}));
