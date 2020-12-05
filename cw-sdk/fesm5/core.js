var ServiceTypes;
(function (ServiceTypes) {
    var CoreResponseMessageType;
    (function (CoreResponseMessageType) {
        CoreResponseMessageType[CoreResponseMessageType["Success"] = 0] = "Success";
        CoreResponseMessageType[CoreResponseMessageType["Warning"] = 1] = "Warning";
        CoreResponseMessageType[CoreResponseMessageType["Error"] = 2] = "Error";
    })(CoreResponseMessageType = ServiceTypes.CoreResponseMessageType || (ServiceTypes.CoreResponseMessageType = {}));
    var CoreResponseStatus;
    (function (CoreResponseStatus) {
        CoreResponseStatus[CoreResponseStatus["Ok"] = 0] = "Ok";
        CoreResponseStatus[CoreResponseStatus["Error"] = 1] = "Error";
        CoreResponseStatus[CoreResponseStatus["Unauthorized"] = 2] = "Unauthorized";
        CoreResponseStatus[CoreResponseStatus["InvalidCredentials"] = 3] = "InvalidCredentials";
        CoreResponseStatus[CoreResponseStatus["ConnectionError"] = -1] = "ConnectionError";
    })(CoreResponseStatus = ServiceTypes.CoreResponseStatus || (ServiceTypes.CoreResponseStatus = {}));
})(ServiceTypes || (ServiceTypes = {}));

var AbcCatClass;
(function (AbcCatClass) {
    AbcCatClass[AbcCatClass["A"] = 1] = "A";
    AbcCatClass[AbcCatClass["B"] = 2] = "B";
    AbcCatClass[AbcCatClass["C"] = 3] = "C";
    AbcCatClass[AbcCatClass["NA"] = 4] = "NA";
})(AbcCatClass || (AbcCatClass = {}));

var ActionType;
(function (ActionType) {
    ActionType[ActionType["Unknown"] = 0] = "Unknown";
    ActionType[ActionType["ActivityUpdate"] = 1] = "ActivityUpdate";
    ActionType[ActionType["Email"] = 2] = "Email";
    ActionType[ActionType["WebHook"] = 3] = "WebHook";
})(ActionType || (ActionType = {}));

var ActivityLinkActivityType;
(function (ActivityLinkActivityType) {
    ActivityLinkActivityType[ActivityLinkActivityType["Null"] = 0] = "Null";
    ActivityLinkActivityType[ActivityLinkActivityType["Case"] = 1] = "Case";
    ActivityLinkActivityType[ActivityLinkActivityType["Inspection"] = 2] = "Inspection";
    ActivityLinkActivityType[ActivityLinkActivityType["ServiceRequest"] = 3] = "ServiceRequest";
    ActivityLinkActivityType[ActivityLinkActivityType["WorkOrder"] = 4] = "WorkOrder";
    ActivityLinkActivityType[ActivityLinkActivityType["WIPCase"] = 5] = "WIPCase";
})(ActivityLinkActivityType || (ActivityLinkActivityType = {}));

var ActivityLinkType;
(function (ActivityLinkType) {
    ActivityLinkType[ActivityLinkType["Null"] = 0] = "Null";
    ActivityLinkType[ActivityLinkType["Parent"] = 1] = "Parent";
    ActivityLinkType[ActivityLinkType["Related"] = 2] = "Related";
})(ActivityLinkType || (ActivityLinkType = {}));

var ApiVersionEnum;
(function (ApiVersionEnum) {
    ApiVersionEnum[ApiVersionEnum["V20121"] = 0] = "V20121";
    ApiVersionEnum[ApiVersionEnum["V2013"] = 1] = "V2013";
    ApiVersionEnum[ApiVersionEnum["V2014"] = 2] = "V2014";
    ApiVersionEnum[ApiVersionEnum["V2015"] = 3] = "V2015";
    ApiVersionEnum[ApiVersionEnum["V15_1"] = 4] = "V15_1";
    ApiVersionEnum[ApiVersionEnum["V15_1_1"] = 5] = "V15_1_1";
    ApiVersionEnum[ApiVersionEnum["V15_1_2"] = 6] = "V15_1_2";
    ApiVersionEnum[ApiVersionEnum["V15_1_3"] = 7] = "V15_1_3";
    ApiVersionEnum[ApiVersionEnum["V15_1_4"] = 8] = "V15_1_4";
    ApiVersionEnum[ApiVersionEnum["V15_1_5"] = 9] = "V15_1_5";
    ApiVersionEnum[ApiVersionEnum["V15_1_6"] = 10] = "V15_1_6";
    ApiVersionEnum[ApiVersionEnum["V15_2"] = 11] = "V15_2";
    ApiVersionEnum[ApiVersionEnum["V15_2_1"] = 12] = "V15_2_1";
    ApiVersionEnum[ApiVersionEnum["V15_2_2"] = 13] = "V15_2_2";
    ApiVersionEnum[ApiVersionEnum["V15_2_3"] = 14] = "V15_2_3";
    ApiVersionEnum[ApiVersionEnum["V15_2_4"] = 15] = "V15_2_4";
    ApiVersionEnum[ApiVersionEnum["V15_2_5"] = 16] = "V15_2_5";
    ApiVersionEnum[ApiVersionEnum["V15_2_6"] = 17] = "V15_2_6";
    ApiVersionEnum[ApiVersionEnum["V15_2_7"] = 18] = "V15_2_7";
    ApiVersionEnum[ApiVersionEnum["V15_3"] = 19] = "V15_3";
    ApiVersionEnum[ApiVersionEnum["V15_3_1"] = 20] = "V15_3_1";
    ApiVersionEnum[ApiVersionEnum["V15_3_2"] = 21] = "V15_3_2";
    ApiVersionEnum[ApiVersionEnum["V15_3_3"] = 22] = "V15_3_3";
    ApiVersionEnum[ApiVersionEnum["V15_3_4"] = 23] = "V15_3_4";
    ApiVersionEnum[ApiVersionEnum["V15_3_5"] = 24] = "V15_3_5";
    ApiVersionEnum[ApiVersionEnum["V15_4"] = 25] = "V15_4";
    ApiVersionEnum[ApiVersionEnum["V15_4_1"] = 26] = "V15_4_1";
    ApiVersionEnum[ApiVersionEnum["V15_4_2"] = 27] = "V15_4_2";
    ApiVersionEnum[ApiVersionEnum["V15_4_3"] = 28] = "V15_4_3";
    ApiVersionEnum[ApiVersionEnum["V15_4_4"] = 29] = "V15_4_4";
    ApiVersionEnum[ApiVersionEnum["V15_4_5"] = 30] = "V15_4_5";
    ApiVersionEnum[ApiVersionEnum["V15_4_6"] = 31] = "V15_4_6";
    ApiVersionEnum[ApiVersionEnum["V15_4_7"] = 32] = "V15_4_7";
    ApiVersionEnum[ApiVersionEnum["V15_5"] = 33] = "V15_5";
    ApiVersionEnum[ApiVersionEnum["V15_5_1"] = 34] = "V15_5_1";
    ApiVersionEnum[ApiVersionEnum["V15_5_2"] = 35] = "V15_5_2";
    ApiVersionEnum[ApiVersionEnum["V15_5_3"] = 36] = "V15_5_3";
    ApiVersionEnum[ApiVersionEnum["V15_5_4"] = 37] = "V15_5_4";
    ApiVersionEnum[ApiVersionEnum["V15_5_5"] = 38] = "V15_5_5";
    ApiVersionEnum[ApiVersionEnum["V15_5_6"] = 39] = "V15_5_6";
    ApiVersionEnum[ApiVersionEnum["V15_6"] = 40] = "V15_6";
    ApiVersionEnum[ApiVersionEnum["V15_6_1"] = 41] = "V15_6_1";
})(ApiVersionEnum || (ApiVersionEnum = {}));

var ApplyLevel;
(function (ApplyLevel) {
    ApplyLevel[ApplyLevel["Null"] = 0] = "Null";
    ApplyLevel[ApplyLevel["Domain"] = 1] = "Domain";
    ApplyLevel[ApplyLevel["Group"] = 2] = "Group";
    ApplyLevel[ApplyLevel["User"] = 3] = "User";
})(ApplyLevel || (ApplyLevel = {}));

var AssetRatingMethod;
(function (AssetRatingMethod) {
    AssetRatingMethod[AssetRatingMethod["Null"] = 0] = "Null";
    AssetRatingMethod[AssetRatingMethod["CONDITIONRATING"] = 1] = "CONDITIONRATING";
    AssetRatingMethod[AssetRatingMethod["SIDEWALKRATING"] = 2] = "SIDEWALKRATING";
    AssetRatingMethod[AssetRatingMethod["TREEDAMAGERATING"] = 3] = "TREEDAMAGERATING";
})(AssetRatingMethod || (AssetRatingMethod = {}));

var AttachmentFileType;
(function (AttachmentFileType) {
    AttachmentFileType[AttachmentFileType["ATTACHMENT"] = 0] = "ATTACHMENT";
    AttachmentFileType[AttachmentFileType["SIGNATURE"] = 1] = "SIGNATURE";
})(AttachmentFileType || (AttachmentFileType = {}));

var ChangeOutOp;
(function (ChangeOutOp) {
    ChangeOutOp[ChangeOutOp["DETACH"] = 0] = "DETACH";
    ChangeOutOp[ChangeOutOp["ATTACH"] = 1] = "ATTACH";
    ChangeOutOp[ChangeOutOp["REPLACE"] = 2] = "REPLACE";
    ChangeOutOp[ChangeOutOp["NULL"] = 3] = "NULL";
    ChangeOutOp[ChangeOutOp["READ"] = 4] = "READ";
})(ChangeOutOp || (ChangeOutOp = {}));

var CodeDescUsage;
(function (CodeDescUsage) {
    CodeDescUsage[CodeDescUsage["Null"] = 0] = "Null";
    CodeDescUsage[CodeDescUsage["Code"] = 1] = "Code";
    CodeDescUsage[CodeDescUsage["Description"] = 2] = "Description";
})(CodeDescUsage || (CodeDescUsage = {}));

var CommentActivityType;
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

var ContractorRateType;
(function (ContractorRateType) {
    ContractorRateType[ContractorRateType["Hourly"] = 0] = "Hourly";
    ContractorRateType[ContractorRateType["Fixed"] = 1] = "Fixed";
    ContractorRateType[ContractorRateType["PerUnit"] = 2] = "PerUnit";
})(ContractorRateType || (ContractorRateType = {}));

var CoreResponseStatus;
(function (CoreResponseStatus) {
    CoreResponseStatus[CoreResponseStatus["Ok"] = 0] = "Ok";
    CoreResponseStatus[CoreResponseStatus["Error"] = 1] = "Error";
    CoreResponseStatus[CoreResponseStatus["Unauthorized"] = 2] = "Unauthorized";
    CoreResponseStatus[CoreResponseStatus["InvalidCredentials"] = 3] = "InvalidCredentials";
    CoreResponseStatus[CoreResponseStatus["ConnectionError"] = -1] = "ConnectionError";
})(CoreResponseStatus || (CoreResponseStatus = {}));

var CostUsage;
(function (CostUsage) {
    CostUsage[CostUsage["Actual"] = 0] = "Actual";
    CostUsage[CostUsage["Projected"] = 1] = "Projected";
    CostUsage[CostUsage["Template"] = 2] = "Template";
    CostUsage[CostUsage["Reported"] = 3] = "Reported";
})(CostUsage || (CostUsage = {}));

var CustomFieldValueSource;
(function (CustomFieldValueSource) {
    CustomFieldValueSource[CustomFieldValueSource["DEFAULT"] = 0] = "DEFAULT";
    CustomFieldValueSource[CustomFieldValueSource["PARENTWO"] = 1] = "PARENTWO";
})(CustomFieldValueSource || (CustomFieldValueSource = {}));

var CWEntityType;
(function (CWEntityType) {
    CWEntityType[CWEntityType["Null"] = 0] = "Null";
    CWEntityType[CWEntityType["Feature"] = 1] = "Feature";
    CWEntityType[CWEntityType["Object"] = 2] = "Object";
    CWEntityType[CWEntityType["Other"] = 3] = "Other";
})(CWEntityType || (CWEntityType = {}));

var DashboardAggregationType;
(function (DashboardAggregationType) {
    DashboardAggregationType[DashboardAggregationType["Null"] = 0] = "Null";
    DashboardAggregationType[DashboardAggregationType["Count"] = 1] = "Count";
    DashboardAggregationType[DashboardAggregationType["Sum"] = 2] = "Sum";
    DashboardAggregationType[DashboardAggregationType["Average"] = 3] = "Average";
})(DashboardAggregationType || (DashboardAggregationType = {}));

var DashboardChartWidgetType;
(function (DashboardChartWidgetType) {
    DashboardChartWidgetType[DashboardChartWidgetType["Null"] = 0] = "Null";
    DashboardChartWidgetType[DashboardChartWidgetType["Pie"] = 1] = "Pie";
    DashboardChartWidgetType[DashboardChartWidgetType["Bar"] = 2] = "Bar";
    DashboardChartWidgetType[DashboardChartWidgetType["Line"] = 3] = "Line";
    DashboardChartWidgetType[DashboardChartWidgetType["HorizBar"] = 4] = "HorizBar";
})(DashboardChartWidgetType || (DashboardChartWidgetType = {}));

var DashboardNumberFormat;
(function (DashboardNumberFormat) {
    DashboardNumberFormat[DashboardNumberFormat["Null"] = 0] = "Null";
    DashboardNumberFormat[DashboardNumberFormat["Numeric"] = 1] = "Numeric";
    DashboardNumberFormat[DashboardNumberFormat["Currency"] = 2] = "Currency";
    DashboardNumberFormat[DashboardNumberFormat["Percent"] = 3] = "Percent";
})(DashboardNumberFormat || (DashboardNumberFormat = {}));

var DateGroupByOption;
(function (DateGroupByOption) {
    DateGroupByOption[DateGroupByOption["Day"] = 0] = "Day";
    DateGroupByOption[DateGroupByOption["Week"] = 1] = "Week";
    DateGroupByOption[DateGroupByOption["Month"] = 2] = "Month";
    DateGroupByOption[DateGroupByOption["Year"] = 3] = "Year";
    DateGroupByOption[DateGroupByOption["DayOfWeek"] = 4] = "DayOfWeek";
    DateGroupByOption[DateGroupByOption["MonthOfYear"] = 5] = "MonthOfYear";
    DateGroupByOption[DateGroupByOption["DayOfYear"] = 6] = "DayOfYear";
    DateGroupByOption[DateGroupByOption["HourOfDay"] = 7] = "HourOfDay";
    DateGroupByOption[DateGroupByOption["Hour"] = 8] = "Hour";
    DateGroupByOption[DateGroupByOption["Quarter"] = 9] = "Quarter";
    DateGroupByOption[DateGroupByOption["QuarterOfYear"] = 10] = "QuarterOfYear";
})(DateGroupByOption || (DateGroupByOption = {}));

var DateSelection;
(function (DateSelection) {
    DateSelection[DateSelection["Null"] = 0] = "Null";
    DateSelection[DateSelection["Exact"] = 1] = "Exact";
    DateSelection[DateSelection["Relative"] = 2] = "Relative";
})(DateSelection || (DateSelection = {}));

var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
    DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
    DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
    DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
    DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
    DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
    DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
})(DayOfWeek || (DayOfWeek = {}));

var DistressSeverity;
(function (DistressSeverity) {
    DistressSeverity[DistressSeverity["L"] = 0] = "L";
    DistressSeverity[DistressSeverity["M"] = 1] = "M";
    DistressSeverity[DistressSeverity["H"] = 2] = "H";
    DistressSeverity[DistressSeverity["NA"] = 3] = "NA";
})(DistressSeverity || (DistressSeverity = {}));

var EquipChangeOutType;
(function (EquipChangeOutType) {
    EquipChangeOutType[EquipChangeOutType["AddRelationship"] = 0] = "AddRelationship";
    EquipChangeOutType[EquipChangeOutType["ModifyRelationship"] = 1] = "ModifyRelationship";
    EquipChangeOutType[EquipChangeOutType["DissolveRelationship"] = 2] = "DissolveRelationship";
    EquipChangeOutType[EquipChangeOutType["Unknown"] = 3] = "Unknown";
})(EquipChangeOutType || (EquipChangeOutType = {}));

var EquipmentRateType;
(function (EquipmentRateType) {
    EquipmentRateType[EquipmentRateType["Hourly"] = 0] = "Hourly";
    EquipmentRateType[EquipmentRateType["Fixed"] = 1] = "Fixed";
})(EquipmentRateType || (EquipmentRateType = {}));

var EquipTransType;
(function (EquipTransType) {
    EquipTransType[EquipTransType["IN"] = 0] = "IN";
    EquipTransType[EquipTransType["OUT"] = 1] = "OUT";
    EquipTransType[EquipTransType["RESERVED"] = 2] = "RESERVED";
    EquipTransType[EquipTransType["NULL"] = 3] = "NULL";
})(EquipTransType || (EquipTransType = {}));

var EventSourceType;
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

var EventTriggerType;
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

var FieldDataType;
(function (FieldDataType) {
    FieldDataType[FieldDataType["VARCHAR"] = 0] = "VARCHAR";
    FieldDataType[FieldDataType["NUMERIC"] = 1] = "NUMERIC";
    FieldDataType[FieldDataType["DATE"] = 2] = "DATE";
})(FieldDataType || (FieldDataType = {}));

var GISRight;
(function (GISRight) {
    GISRight[GISRight["View"] = 0] = "View";
    GISRight[GISRight["Attribute"] = 1] = "Attribute";
    GISRight[GISRight["Geometry"] = 2] = "Geometry";
})(GISRight || (GISRight = {}));

var GISServiceSecurityType;
(function (GISServiceSecurityType) {
    GISServiceSecurityType[GISServiceSecurityType["NONE"] = 0] = "NONE";
    GISServiceSecurityType[GISServiceSecurityType["GENERATETOKEN"] = 1] = "GENERATETOKEN";
    GISServiceSecurityType[GISServiceSecurityType["OAUTHUSER"] = 2] = "OAUTHUSER";
    GISServiceSecurityType[GISServiceSecurityType["OAUTHAPP"] = 3] = "OAUTHAPP";
})(GISServiceSecurityType || (GISServiceSecurityType = {}));

var GISServiceType;
(function (GISServiceType) {
    GISServiceType[GISServiceType["DYNAMICMAP"] = 0] = "DYNAMICMAP";
    GISServiceType[GISServiceType["TILEDMAP"] = 1] = "TILEDMAP";
    GISServiceType[GISServiceType["IMAGEMAP"] = 2] = "IMAGEMAP";
    GISServiceType[GISServiceType["GEOCODE"] = 3] = "GEOCODE";
    GISServiceType[GISServiceType["GEOMETRY"] = 4] = "GEOMETRY";
    GISServiceType[GISServiceType["FEATURELAYER"] = 5] = "FEATURELAYER";
    GISServiceType[GISServiceType["WEBMAP"] = 6] = "WEBMAP";
    GISServiceType[GISServiceType["HEATMAP"] = 7] = "HEATMAP";
    GISServiceType[GISServiceType["KMLLAYER"] = 8] = "KMLLAYER";
    GISServiceType[GISServiceType["WMSLAYER"] = 9] = "WMSLAYER";
    GISServiceType[GISServiceType["GEODATA"] = 10] = "GEODATA";
    GISServiceType[GISServiceType["SOE"] = 11] = "SOE";
    GISServiceType[GISServiceType["UNKNOWN"] = 12] = "UNKNOWN";
    GISServiceType[GISServiceType["RESOURCEPROXY"] = 13] = "RESOURCEPROXY";
    GISServiceType[GISServiceType["TILEPACKAGE"] = 14] = "TILEPACKAGE";
    GISServiceType[GISServiceType["PRINTING"] = 15] = "PRINTING";
    GISServiceType[GISServiceType["ROUTING"] = 16] = "ROUTING";
    GISServiceType[GISServiceType["VECTORTILE"] = 17] = "VECTORTILE";
    GISServiceType[GISServiceType["MOBILEMAPPACKAGE"] = 18] = "MOBILEMAPPACKAGE";
})(GISServiceType || (GISServiceType = {}));

var InspQuestionType;
(function (InspQuestionType) {
    InspQuestionType[InspQuestionType["Single"] = 0] = "Single";
    InspQuestionType[InspQuestionType["Multiple"] = 1] = "Multiple";
    InspQuestionType[InspQuestionType["Assets"] = 2] = "Assets";
})(InspQuestionType || (InspQuestionType = {}));

var LaborCategory;
(function (LaborCategory) {
    LaborCategory[LaborCategory["Employee"] = 0] = "Employee";
    LaborCategory[LaborCategory["Contractor"] = 1] = "Contractor";
})(LaborCategory || (LaborCategory = {}));

var LaborRateType;
(function (LaborRateType) {
    LaborRateType[LaborRateType["Hourly"] = 0] = "Hourly";
    LaborRateType[LaborRateType["Overtime"] = 1] = "Overtime";
    LaborRateType[LaborRateType["Emergency"] = 2] = "Emergency";
    LaborRateType[LaborRateType["Fixed"] = 3] = "Fixed";
    LaborRateType[LaborRateType["PerUnit"] = 4] = "PerUnit";
})(LaborRateType || (LaborRateType = {}));

var LicensedExtension;
(function (LicensedExtension) {
    LicensedExtension[LicensedExtension["UnknownExtension"] = 0] = "UnknownExtension";
    LicensedExtension[LicensedExtension["CwAnalytics"] = 1] = "CwAnalytics";
    LicensedExtension[LicensedExtension["WebHooks"] = 2] = "WebHooks";
    LicensedExtension[LicensedExtension["PLLPublicApp"] = 3] = "PLLPublicApp";
    LicensedExtension[LicensedExtension["ActivityUpdate"] = 4] = "ActivityUpdate";
    LicensedExtension[LicensedExtension["SingleSignOn"] = 5] = "SingleSignOn";
})(LicensedExtension || (LicensedExtension = {}));

var LicensedFeature;
(function (LicensedFeature) {
    LicensedFeature[LicensedFeature["UnknownFeature"] = 0] = "UnknownFeature";
    LicensedFeature[LicensedFeature["ViewInspections"] = 1] = "ViewInspections";
    LicensedFeature[LicensedFeature["EditInspections"] = 2] = "EditInspections";
    LicensedFeature[LicensedFeature["ViewServiceRequest"] = 3] = "ViewServiceRequest";
    LicensedFeature[LicensedFeature["EditServiceRequest"] = 4] = "EditServiceRequest";
    LicensedFeature[LicensedFeature["ViewWorkOrder"] = 5] = "ViewWorkOrder";
    LicensedFeature[LicensedFeature["EditWorkOrder"] = 6] = "EditWorkOrder";
    LicensedFeature[LicensedFeature["EquipmentCheckOut"] = 7] = "EquipmentCheckOut";
    LicensedFeature[LicensedFeature["OfficeField"] = 8] = "OfficeField";
    LicensedFeature[LicensedFeature["Respond"] = 9] = "Respond";
    LicensedFeature[LicensedFeature["Eurl"] = 10] = "Eurl";
    LicensedFeature[LicensedFeature["PaverInterface"] = 11] = "PaverInterface";
    LicensedFeature[LicensedFeature["Contracts"] = 12] = "Contracts";
    LicensedFeature[LicensedFeature["Storeroom"] = 13] = "Storeroom";
    LicensedFeature[LicensedFeature["PLL"] = 14] = "PLL";
    LicensedFeature[LicensedFeature["Cw4XL"] = 15] = "Cw4XL";
    LicensedFeature[LicensedFeature["TableEditor"] = 16] = "TableEditor";
    LicensedFeature[LicensedFeature["CCTVInterface"] = 17] = "CCTVInterface";
    LicensedFeature[LicensedFeature["MobileAndroid"] = 18] = "MobileAndroid";
    LicensedFeature[LicensedFeature["MobileiOS"] = 19] = "MobileiOS";
    LicensedFeature[LicensedFeature["PerformanceBudgeting"] = 20] = "PerformanceBudgeting";
    LicensedFeature[LicensedFeature["Insights"] = 21] = "Insights";
    LicensedFeature[LicensedFeature["RespondCase"] = 22] = "RespondCase";
    LicensedFeature[LicensedFeature["RespondInspection"] = 23] = "RespondInspection";
    LicensedFeature[LicensedFeature["RespondServiceRequest"] = 24] = "RespondServiceRequest";
    LicensedFeature[LicensedFeature["RespondTaskManager"] = 25] = "RespondTaskManager";
    LicensedFeature[LicensedFeature["RespondWorkOrder"] = 26] = "RespondWorkOrder";
    LicensedFeature[LicensedFeature["Workload"] = 27] = "Workload";
    LicensedFeature[LicensedFeature["OpX"] = 28] = "OpX";
})(LicensedFeature || (LicensedFeature = {}));

var MaterialCostType;
(function (MaterialCostType) {
    MaterialCostType[MaterialCostType["AVERAGE"] = 1] = "AVERAGE";
    MaterialCostType[MaterialCostType["CURRENT"] = 2] = "CURRENT";
    MaterialCostType[MaterialCostType["FIFO"] = 3] = "FIFO";
    MaterialCostType[MaterialCostType["LIFO"] = 4] = "LIFO";
})(MaterialCostType || (MaterialCostType = {}));

var NativeAppWorkActivityType;
(function (NativeAppWorkActivityType) {
    NativeAppWorkActivityType[NativeAppWorkActivityType["Case"] = 1] = "Case";
    NativeAppWorkActivityType[NativeAppWorkActivityType["Inspection"] = 2] = "Inspection";
    NativeAppWorkActivityType[NativeAppWorkActivityType["ServiceRequest"] = 3] = "ServiceRequest";
    NativeAppWorkActivityType[NativeAppWorkActivityType["WorkOrder"] = 4] = "WorkOrder";
})(NativeAppWorkActivityType || (NativeAppWorkActivityType = {}));

var NumericValueMode;
(function (NumericValueMode) {
    NumericValueMode[NumericValueMode["Nulls"] = 0] = "Nulls";
    NumericValueMode[NumericValueMode["MinMax"] = 1] = "MinMax";
    NumericValueMode[NumericValueMode["ListOfValues"] = 2] = "ListOfValues";
    NumericValueMode[NumericValueMode["NotListOfValues"] = 3] = "NotListOfValues";
    NumericValueMode[NumericValueMode["Disjoint"] = 4] = "Disjoint";
    NumericValueMode[NumericValueMode["Invalid"] = 5] = "Invalid";
    NumericValueMode[NumericValueMode["NotNull"] = 6] = "NotNull";
})(NumericValueMode || (NumericValueMode = {}));

var PacpMappingDirection;
(function (PacpMappingDirection) {
    PacpMappingDirection[PacpMappingDirection["Export"] = 0] = "Export";
    PacpMappingDirection[PacpMappingDirection["Import"] = 1] = "Import";
    PacpMappingDirection[PacpMappingDirection["ExportImport"] = 2] = "ExportImport";
})(PacpMappingDirection || (PacpMappingDirection = {}));

var PWCodeType;
(function (PWCodeType) {
    PWCodeType[PWCodeType["ACTGCODE"] = 0] = "ACTGCODE";
    PWCodeType[PWCodeType["ACTPAVDP"] = 1] = "ACTPAVDP";
    PWCodeType[PWCodeType["ACTPCODE"] = 2] = "ACTPCODE";
    PWCodeType[PWCodeType["ACTPELEV"] = 3] = "ACTPELEV";
    PWCodeType[PWCodeType["ACTPINVT"] = 4] = "ACTPINVT";
    PWCodeType[PWCodeType["ACTPMGTU"] = 5] = "ACTPMGTU";
    PWCodeType[PWCodeType["ACTPPRGC"] = 6] = "ACTPPRGC";
    PWCodeType[PWCodeType["ACTPWKQD"] = 7] = "ACTPWKQD";
    PWCodeType[PWCodeType["ACALLTYP"] = 8] = "ACALLTYP";
    PWCodeType[PWCodeType["ACALLTITLE"] = 9] = "ACALLTITLE";
    PWCodeType[PWCodeType["ACREWCAT"] = 10] = "ACREWCAT";
    PWCodeType[PWCodeType["ADISTRCT"] = 11] = "ADISTRCT";
    PWCodeType[PWCodeType["ALNDMARK"] = 12] = "ALNDMARK";
    PWCodeType[PWCodeType["AMATCAT"] = 13] = "AMATCAT";
    PWCodeType[PWCodeType["APRIORIT"] = 14] = "APRIORIT";
    PWCodeType[PWCodeType["APROBCAT"] = 15] = "APROBCAT";
    PWCodeType[PWCodeType["APSOURCE"] = 16] = "APSOURCE";
    PWCodeType[PWCodeType["ATSKSTAT"] = 17] = "ATSKSTAT";
    PWCodeType[PWCodeType["AWOCAT"] = 18] = "AWOCAT";
    PWCodeType[PWCodeType["GLACCOUNT"] = 19] = "GLACCOUNT";
    PWCodeType[PWCodeType["INSPRESO"] = 20] = "INSPRESO";
    PWCodeType[PWCodeType["INSPSTAT"] = 21] = "INSPSTAT";
    PWCodeType[PWCodeType["INSPPRINT"] = 22] = "INSPPRINT";
    PWCodeType[PWCodeType["PADDTYPE"] = 23] = "PADDTYPE";
    PWCodeType[PWCodeType["PMTSTAT"] = 24] = "PMTSTAT";
    PWCodeType[PWCodeType["SHOP"] = 25] = "SHOP";
    PWCodeType[PWCodeType["SRRESO"] = 26] = "SRRESO";
    PWCodeType[PWCodeType["SRSTATUS"] = 27] = "SRSTATUS";
    PWCodeType[PWCodeType["UACCDESC"] = 28] = "UACCDESC";
    PWCodeType[PWCodeType["WORESO"] = 29] = "WORESO";
    PWCodeType[PWCodeType["WOSTATUS"] = 30] = "WOSTATUS";
    PWCodeType[PWCodeType["WOPRINT"] = 31] = "WOPRINT";
    PWCodeType[PWCodeType["STORERM"] = 32] = "STORERM";
    PWCodeType[PWCodeType["CONSTAT"] = 33] = "CONSTAT";
    PWCodeType[PWCodeType["AEMPSKIL"] = 34] = "AEMPSKIL";
    PWCodeType[PWCodeType["CONTFUND"] = 35] = "CONTFUND";
    PWCodeType[PWCodeType["TECHUSED"] = 36] = "TECHUSED";
    PWCodeType[PWCodeType["FLWCONTRL"] = 37] = "FLWCONTRL";
    PWCodeType[PWCodeType["PACPINSTAT"] = 38] = "PACPINSTAT";
    PWCodeType[PWCodeType["PIPEUSE"] = 39] = "PIPEUSE";
    PWCodeType[PWCodeType["SSHAPE"] = 40] = "SSHAPE";
    PWCodeType[PWCodeType["CTMETHOD"] = 41] = "CTMETHOD";
    PWCodeType[PWCodeType["PRECLEAN"] = 42] = "PRECLEAN";
    PWCodeType[PWCodeType["WEATHER"] = 43] = "WEATHER";
    PWCodeType[PWCodeType["LOCATIONCODE"] = 44] = "LOCATIONCODE";
    PWCodeType[PWCodeType["PROJECTCAT"] = 45] = "PROJECTCAT";
})(PWCodeType || (PWCodeType = {}));

var QASequenceModel;
(function (QASequenceModel) {
    QASequenceModel[QASequenceModel["Null"] = 0] = "Null";
    QASequenceModel[QASequenceModel["Linear"] = 1] = "Linear";
    QASequenceModel[QASequenceModel["Branch"] = 2] = "Branch";
})(QASequenceModel || (QASequenceModel = {}));

var QuestAnswerFormat;
(function (QuestAnswerFormat) {
    QuestAnswerFormat[QuestAnswerFormat["THISTEXT"] = 0] = "THISTEXT";
    QuestAnswerFormat[QuestAnswerFormat["DATE"] = 1] = "DATE";
    QuestAnswerFormat[QuestAnswerFormat["YES"] = 2] = "YES";
    QuestAnswerFormat[QuestAnswerFormat["NO"] = 3] = "NO";
    QuestAnswerFormat[QuestAnswerFormat["UNKNOWN"] = 4] = "UNKNOWN";
    QuestAnswerFormat[QuestAnswerFormat["FREETEXT"] = 5] = "FREETEXT";
    QuestAnswerFormat[QuestAnswerFormat["CHECKED"] = 6] = "CHECKED";
    QuestAnswerFormat[QuestAnswerFormat["UNCHECK"] = 7] = "UNCHECK";
    QuestAnswerFormat[QuestAnswerFormat["CODEDESC"] = 8] = "CODEDESC";
    QuestAnswerFormat[QuestAnswerFormat["DESCSCORE"] = 9] = "DESCSCORE";
    QuestAnswerFormat[QuestAnswerFormat["CALCULATED"] = 10] = "CALCULATED";
    QuestAnswerFormat[QuestAnswerFormat["NUMERIC"] = 11] = "NUMERIC";
})(QuestAnswerFormat || (QuestAnswerFormat = {}));

var QueueStatus;
(function (QueueStatus) {
    QueueStatus[QueueStatus["Pending"] = 0] = "Pending";
    QueueStatus[QueueStatus["Processing"] = 1] = "Processing";
    QueueStatus[QueueStatus["Complete"] = 2] = "Complete";
    QueueStatus[QueueStatus["Failed"] = 3] = "Failed";
})(QueueStatus || (QueueStatus = {}));

var RateAddMethod;
(function (RateAddMethod) {
    RateAddMethod[RateAddMethod["Percent"] = 0] = "Percent";
    RateAddMethod[RateAddMethod["Fixed"] = 1] = "Fixed";
})(RateAddMethod || (RateAddMethod = {}));

var ReadingActionType;
(function (ReadingActionType) {
    ReadingActionType[ReadingActionType["Null"] = 0] = "Null";
    ReadingActionType[ReadingActionType["Interval"] = 1] = "Interval";
    ReadingActionType[ReadingActionType["Milestone"] = 2] = "Milestone";
    ReadingActionType[ReadingActionType["Threshold"] = 3] = "Threshold";
})(ReadingActionType || (ReadingActionType = {}));

var RelativeDate;
(function (RelativeDate) {
    RelativeDate[RelativeDate["Null"] = 0] = "Null";
    RelativeDate[RelativeDate["Next"] = 1] = "Next";
    RelativeDate[RelativeDate["Last"] = 2] = "Last";
    RelativeDate[RelativeDate["Current"] = 3] = "Current";
    RelativeDate[RelativeDate["Range"] = 4] = "Range";
})(RelativeDate || (RelativeDate = {}));

var RelativeDateUnit;
(function (RelativeDateUnit) {
    RelativeDateUnit[RelativeDateUnit["Null"] = 0] = "Null";
    RelativeDateUnit[RelativeDateUnit["Minutes"] = 1] = "Minutes";
    RelativeDateUnit[RelativeDateUnit["Hours"] = 2] = "Hours";
    RelativeDateUnit[RelativeDateUnit["Days"] = 3] = "Days";
    RelativeDateUnit[RelativeDateUnit["Weeks"] = 4] = "Weeks";
    RelativeDateUnit[RelativeDateUnit["Months"] = 5] = "Months";
    RelativeDateUnit[RelativeDateUnit["Years"] = 6] = "Years";
})(RelativeDateUnit || (RelativeDateUnit = {}));

var RepeatFromDate;
(function (RepeatFromDate) {
    RepeatFromDate[RepeatFromDate["ADATE"] = 0] = "ADATE";
    RepeatFromDate[RepeatFromDate["PROJSTARTDATE"] = 1] = "PROJSTARTDATE";
    RepeatFromDate[RepeatFromDate["ACTUALFINISHDATE"] = 2] = "ACTUALFINISHDATE";
})(RepeatFromDate || (RepeatFromDate = {}));

var RepeatIntervalUnit;
(function (RepeatIntervalUnit) {
    RepeatIntervalUnit[RepeatIntervalUnit["D"] = 0] = "D";
    RepeatIntervalUnit[RepeatIntervalUnit["W"] = 1] = "W";
    RepeatIntervalUnit[RepeatIntervalUnit["M"] = 2] = "M";
    RepeatIntervalUnit[RepeatIntervalUnit["Y"] = 3] = "Y";
})(RepeatIntervalUnit || (RepeatIntervalUnit = {}));

var RepeatType;
(function (RepeatType) {
    RepeatType[RepeatType["NEVER"] = 0] = "NEVER";
    RepeatType[RepeatType["ONCE"] = 1] = "ONCE";
    RepeatType[RepeatType["EVERY"] = 2] = "EVERY";
})(RepeatType || (RepeatType = {}));

var SearchType;
(function (SearchType) {
    SearchType[SearchType["Null"] = 0] = "Null";
    SearchType[SearchType["Request"] = 1] = "Request";
    SearchType[SearchType["WorkOrder"] = 2] = "WorkOrder";
    SearchType[SearchType["Inspection"] = 3] = "Inspection";
    SearchType[SearchType["Contract"] = 4] = "Contract";
    SearchType[SearchType["Permit"] = 5] = "Permit";
    SearchType[SearchType["GIS"] = 6] = "GIS";
    SearchType[SearchType["PermitTask"] = 7] = "PermitTask";
    SearchType[SearchType["PermitAddress"] = 8] = "PermitAddress";
    SearchType[SearchType["InspCommon"] = 9] = "InspCommon";
    SearchType[SearchType["Case"] = 10] = "Case";
    SearchType[SearchType["WorkOrderEntity"] = 11] = "WorkOrderEntity";
    SearchType[SearchType["StoreTransaction"] = 12] = "StoreTransaction";
    SearchType[SearchType["Requisition"] = 13] = "Requisition";
    SearchType[SearchType["Material"] = 14] = "Material";
    SearchType[SearchType["WorkActivity"] = 15] = "WorkActivity";
    SearchType[SearchType["MaterialLeaf"] = 16] = "MaterialLeaf";
    SearchType[SearchType["WoTemplate"] = 17] = "WoTemplate";
    SearchType[SearchType["Unknown"] = 18] = "Unknown";
    SearchType[SearchType["Employee"] = 19] = "Employee";
    SearchType[SearchType["MessageQueue"] = 20] = "MessageQueue";
    SearchType[SearchType["Analytics"] = 21] = "Analytics";
    SearchType[SearchType["TokenState"] = 22] = "TokenState";
    SearchType[SearchType["AssetCalculationResult"] = 23] = "AssetCalculationResult";
    SearchType[SearchType["Equipment"] = 24] = "Equipment";
    SearchType[SearchType["CustomerAccount"] = 25] = "CustomerAccount";
    SearchType[SearchType["InspTemplate"] = 26] = "InspTemplate";
    SearchType[SearchType["ProblemLeaf"] = 27] = "ProblemLeaf";
    SearchType[SearchType["AssetSplitRecord"] = 28] = "AssetSplitRecord";
    SearchType[SearchType["PavementInsp"] = 29] = "PavementInsp";
    SearchType[SearchType["TvInspection"] = 30] = "TvInspection";
    SearchType[SearchType["Projects"] = 31] = "Projects";
})(SearchType || (SearchType = {}));

var SearchView;
(function (SearchView) {
    SearchView[SearchView["Grid"] = 0] = "Grid";
    SearchView[SearchView["Calendar"] = 1] = "Calendar";
    SearchView[SearchView["Map"] = 2] = "Map";
    SearchView[SearchView["Frequency"] = 3] = "Frequency";
    SearchView[SearchView["WorkOrderEntity"] = 4] = "WorkOrderEntity";
})(SearchView || (SearchView = {}));

var SourceEventType;
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

var StandardInspTableName;
(function (StandardInspTableName) {
    StandardInspTableName[StandardInspTableName["SDYETEST"] = 0] = "SDYETEST";
    StandardInspTableName[StandardInspTableName["SMANHOLEINSP"] = 1] = "SMANHOLEINSP";
    StandardInspTableName[StandardInspTableName["SSMOKETEST"] = 2] = "SSMOKETEST";
    StandardInspTableName[StandardInspTableName["STVINSPECTION"] = 3] = "STVINSPECTION";
    StandardInspTableName[StandardInspTableName["WFIREHYDFLOWTEST"] = 4] = "WFIREHYDFLOWTEST";
    StandardInspTableName[StandardInspTableName["EQUIPCHANGEOUT"] = 5] = "EQUIPCHANGEOUT";
    StandardInspTableName[StandardInspTableName["WVALVDEVINSP"] = 6] = "WVALVDEVINSP";
    StandardInspTableName[StandardInspTableName["WHYDDEVINSP"] = 7] = "WHYDDEVINSP";
    StandardInspTableName[StandardInspTableName["SSTINLETINSP"] = 8] = "SSTINLETINSP";
})(StandardInspTableName || (StandardInspTableName = {}));

var TemplateMapLayerSourceType;
(function (TemplateMapLayerSourceType) {
    TemplateMapLayerSourceType[TemplateMapLayerSourceType["Invalid"] = 0] = "Invalid";
    TemplateMapLayerSourceType[TemplateMapLayerSourceType["Inspection"] = 1] = "Inspection";
    TemplateMapLayerSourceType[TemplateMapLayerSourceType["Case"] = 2] = "Case";
    TemplateMapLayerSourceType[TemplateMapLayerSourceType["Request"] = 3] = "Request";
    TemplateMapLayerSourceType[TemplateMapLayerSourceType["WorkOrder"] = 4] = "WorkOrder";
    TemplateMapLayerSourceType[TemplateMapLayerSourceType["InspectionTemplate"] = 5] = "InspectionTemplate";
    TemplateMapLayerSourceType[TemplateMapLayerSourceType["BusCaseTemplate"] = 6] = "BusCaseTemplate";
    TemplateMapLayerSourceType[TemplateMapLayerSourceType["RequestTemplate"] = 7] = "RequestTemplate";
    TemplateMapLayerSourceType[TemplateMapLayerSourceType["WorkOrderTemplate"] = 8] = "WorkOrderTemplate";
})(TemplateMapLayerSourceType || (TemplateMapLayerSourceType = {}));

var TimeIntervalUnit;
(function (TimeIntervalUnit) {
    TimeIntervalUnit[TimeIntervalUnit["HOUR"] = 0] = "HOUR";
    TimeIntervalUnit[TimeIntervalUnit["DAY"] = 1] = "DAY";
    TimeIntervalUnit[TimeIntervalUnit["WEEK"] = 2] = "WEEK";
    TimeIntervalUnit[TimeIntervalUnit["MONTH"] = 3] = "MONTH";
})(TimeIntervalUnit || (TimeIntervalUnit = {}));

var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["NULL"] = 0] = "NULL";
    TransactionType[TransactionType["AUDIT"] = 1] = "AUDIT";
    TransactionType[TransactionType["ISSUE"] = 2] = "ISSUE";
    TransactionType[TransactionType["RECEIVE"] = 3] = "RECEIVE";
    TransactionType[TransactionType["TRANSFER"] = 4] = "TRANSFER";
    TransactionType[TransactionType["FRTRASH"] = 5] = "FRTRASH";
    TransactionType[TransactionType["TOTRASH"] = 6] = "TOTRASH";
})(TransactionType || (TransactionType = {}));

var TraverseNetworkDirection;
(function (TraverseNetworkDirection) {
    TraverseNetworkDirection[TraverseNetworkDirection["Unknown"] = 0] = "Unknown";
    TraverseNetworkDirection[TraverseNetworkDirection["Up"] = 1] = "Up";
    TraverseNetworkDirection[TraverseNetworkDirection["Down"] = 2] = "Down";
    TraverseNetworkDirection[TraverseNetworkDirection["Both"] = 3] = "Both";
})(TraverseNetworkDirection || (TraverseNetworkDirection = {}));

var TreeNodeTextType;
(function (TreeNodeTextType) {
    TreeNodeTextType[TreeNodeTextType["C"] = 0] = "C";
    TreeNodeTextType[TreeNodeTextType["CD"] = 1] = "CD";
    TreeNodeTextType[TreeNodeTextType["D"] = 2] = "D";
})(TreeNodeTextType || (TreeNodeTextType = {}));

var TreeNodeType;
(function (TreeNodeType) {
    TreeNodeType[TreeNodeType["R"] = 0] = "R";
    TreeNodeType[TreeNodeType["N"] = 1] = "N";
    TreeNodeType[TreeNodeType["L"] = 2] = "L";
    TreeNodeType[TreeNodeType["Null"] = 3] = "Null";
})(TreeNodeType || (TreeNodeType = {}));

var TvObservationCause;
(function (TvObservationCause) {
    TvObservationCause[TvObservationCause["S"] = 0] = "S";
    TvObservationCause[TvObservationCause["I"] = 1] = "I";
    TvObservationCause[TvObservationCause["R"] = 2] = "R";
    TvObservationCause[TvObservationCause["O"] = 3] = "O";
})(TvObservationCause || (TvObservationCause = {}));

var TvObservationMethod;
(function (TvObservationMethod) {
    TvObservationMethod[TvObservationMethod["STANDARD"] = 0] = "STANDARD";
    TvObservationMethod[TvObservationMethod["CCTV"] = 1] = "CCTV";
})(TvObservationMethod || (TvObservationMethod = {}));

var UniversalCustomFieldTable;
(function (UniversalCustomFieldTable) {
    UniversalCustomFieldTable[UniversalCustomFieldTable["CONTRACT"] = 0] = "CONTRACT";
    UniversalCustomFieldTable[UniversalCustomFieldTable["CUSTOMERCALL"] = 1] = "CUSTOMERCALL";
    UniversalCustomFieldTable[UniversalCustomFieldTable["INSPECTION"] = 2] = "INSPECTION";
    UniversalCustomFieldTable[UniversalCustomFieldTable["REQUEST"] = 3] = "REQUEST";
    UniversalCustomFieldTable[UniversalCustomFieldTable["WORKORDER"] = 4] = "WORKORDER";
    UniversalCustomFieldTable[UniversalCustomFieldTable["PROJECT"] = 5] = "PROJECT";
})(UniversalCustomFieldTable || (UniversalCustomFieldTable = {}));

var VerificationStatus;
(function (VerificationStatus) {
    VerificationStatus[VerificationStatus["Unverified"] = 0] = "Unverified";
    VerificationStatus[VerificationStatus["Pass"] = 1] = "Pass";
    VerificationStatus[VerificationStatus["Fail"] = 2] = "Fail";
})(VerificationStatus || (VerificationStatus = {}));

var WebHookCustomPacketTemplateFlag;
(function (WebHookCustomPacketTemplateFlag) {
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["Unknown"] = 0] = "Unknown";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["ApiUserToken"] = 1] = "ApiUserToken";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["Comments"] = 2] = "Comments";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["CwWkid"] = 3] = "CwWkid";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["GetDate"] = 4] = "GetDate";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["QuestionAnswer"] = 5] = "QuestionAnswer";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["ServiceResourceSecurityToken"] = 6] = "ServiceResourceSecurityToken";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["GisItemOid"] = 7] = "GisItemOid";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["GisItemGlobalId"] = 8] = "GisItemGlobalId";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["CancelledByPager"] = 9] = "CancelledByPager";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["CancelledByWorkPhone"] = 10] = "CancelledByWorkPhone";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["ClosedByPager"] = 11] = "ClosedByPager";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["ClosedByWorkPhone"] = 12] = "ClosedByWorkPhone";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["CurrentUserPager"] = 13] = "CurrentUserPager";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["CurrentUserWorkPhone"] = 14] = "CurrentUserWorkPhone";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["DispatchOpenByPager"] = 15] = "DispatchOpenByPager";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["DispatchOpenByWorkPhone"] = 16] = "DispatchOpenByWorkPhone";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["DispatchToPager"] = 17] = "DispatchToPager";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["DispatchToWorkPhone"] = 18] = "DispatchToWorkPhone";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["InitiatedByPager"] = 19] = "InitiatedByPager";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["InitiatedByWorkPhone"] = 20] = "InitiatedByWorkPhone";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["InspectedByPager"] = 21] = "InspectedByPager";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["InspectedByWorkPhone"] = 22] = "InspectedByWorkPhone";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["RequestedByPager"] = 23] = "RequestedByPager";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["RequestedByWorkPhone"] = 24] = "RequestedByWorkPhone";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["SubmitToOpenByPager"] = 25] = "SubmitToOpenByPager";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["SubmitToOpenByWorkPhone"] = 26] = "SubmitToOpenByWorkPhone";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["SubmitToPager"] = 27] = "SubmitToPager";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["SubmitToWorkPhone"] = 28] = "SubmitToWorkPhone";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["SupervisorPager"] = 29] = "SupervisorPager";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["SupervisorWorkPhone"] = 30] = "SupervisorWorkPhone";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["WorkCompletedByPager"] = 31] = "WorkCompletedByPager";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["WorkCompletedByWorkPhone"] = 32] = "WorkCompletedByWorkPhone";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["CancelledByPager_Numeric"] = 33] = "CancelledByPager_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["CancelledByWorkPhone_Numeric"] = 34] = "CancelledByWorkPhone_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["ClosedByPager_Numeric"] = 35] = "ClosedByPager_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["ClosedByWorkPhone_Numeric"] = 36] = "ClosedByWorkPhone_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["CurrentUserPager_Numeric"] = 37] = "CurrentUserPager_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["CurrentUserWorkPhone_Numeric"] = 38] = "CurrentUserWorkPhone_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["DispatchOpenByPager_Numeric"] = 39] = "DispatchOpenByPager_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["DispatchOpenByWorkPhone_Numeric"] = 40] = "DispatchOpenByWorkPhone_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["DispatchToPager_Numeric"] = 41] = "DispatchToPager_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["DispatchToWorkPhone_Numeric"] = 42] = "DispatchToWorkPhone_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["InitiatedByPager_Numeric"] = 43] = "InitiatedByPager_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["InitiatedByWorkPhone_Numeric"] = 44] = "InitiatedByWorkPhone_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["InspectedByPager_Numeric"] = 45] = "InspectedByPager_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["InspectedByWorkPhone_Numeric"] = 46] = "InspectedByWorkPhone_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["RequestedByPager_Numeric"] = 47] = "RequestedByPager_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["RequestedByWorkPhone_Numeric"] = 48] = "RequestedByWorkPhone_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["SubmitToOpenByPager_Numeric"] = 49] = "SubmitToOpenByPager_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["SubmitToOpenByWorkPhone_Numeric"] = 50] = "SubmitToOpenByWorkPhone_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["SubmitToPager_Numeric"] = 51] = "SubmitToPager_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["SubmitToWorkPhone_Numeric"] = 52] = "SubmitToWorkPhone_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["SupervisorPager_Numeric"] = 53] = "SupervisorPager_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["SupervisorWorkPhone_Numeric"] = 54] = "SupervisorWorkPhone_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["WorkCompletedByPager_Numeric"] = 55] = "WorkCompletedByPager_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["WorkCompletedByWorkPhone_Numeric"] = 56] = "WorkCompletedByWorkPhone_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["BaseObjectAsJson"] = 57] = "BaseObjectAsJson";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["RequestWorkOrderIds"] = 58] = "RequestWorkOrderIds";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["WorkOrderRequestIds"] = 59] = "WorkOrderRequestIds";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["GetDay"] = 60] = "GetDay";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["GetDayOfWeek"] = 61] = "GetDayOfWeek";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["GetDayOfWeek_Numeric"] = 62] = "GetDayOfWeek_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["GetDayOfYear"] = 63] = "GetDayOfYear";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["GetHour"] = 64] = "GetHour";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["GetMinute"] = 65] = "GetMinute";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["GetMonth_Numeric"] = 66] = "GetMonth_Numeric";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["GetSecond"] = 67] = "GetSecond";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["GetUtcDateTimeString"] = 68] = "GetUtcDateTimeString";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["CurrentUserSid"] = 69] = "CurrentUserSid";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["CurrentUserUniqueName"] = 70] = "CurrentUserUniqueName";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["SiteBaseUrl"] = 71] = "SiteBaseUrl";
    WebHookCustomPacketTemplateFlag[WebHookCustomPacketTemplateFlag["UserIdToEmployeeSid"] = 72] = "UserIdToEmployeeSid";
})(WebHookCustomPacketTemplateFlag || (WebHookCustomPacketTemplateFlag = {}));

var WebHookOutputType;
(function (WebHookOutputType) {
    WebHookOutputType[WebHookOutputType["JSON"] = 0] = "JSON";
    WebHookOutputType[WebHookOutputType["CSV"] = 1] = "CSV";
})(WebHookOutputType || (WebHookOutputType = {}));

var WebHookPacketModel;
(function (WebHookPacketModel) {
    WebHookPacketModel[WebHookPacketModel["Simple"] = 0] = "Simple";
    WebHookPacketModel[WebHookPacketModel["Custom"] = 1] = "Custom";
})(WebHookPacketModel || (WebHookPacketModel = {}));

var WidgetContainerTabType;
(function (WidgetContainerTabType) {
    WidgetContainerTabType[WidgetContainerTabType["Domain"] = 0] = "Domain";
    WidgetContainerTabType[WidgetContainerTabType["User"] = 1] = "User";
})(WidgetContainerTabType || (WidgetContainerTabType = {}));

var WidgetContainerType;
(function (WidgetContainerType) {
    WidgetContainerType[WidgetContainerType["Domain"] = 0] = "Domain";
    WidgetContainerType[WidgetContainerType["User"] = 1] = "User";
})(WidgetContainerType || (WidgetContainerType = {}));

var WOEvent;
(function (WOEvent) {
    WOEvent[WOEvent["CLOSE"] = 1] = "CLOSE";
    WOEvent[WOEvent["INITIATE"] = 2] = "INITIATE";
})(WOEvent || (WOEvent = {}));

var WOExpenseType;
(function (WOExpenseType) {
    WOExpenseType[WOExpenseType["MAINT"] = 0] = "MAINT";
    WOExpenseType[WOExpenseType["CIP"] = 1] = "CIP";
})(WOExpenseType || (WOExpenseType = {}));

var WOOutputType;
(function (WOOutputType) {
    WOOutputType[WOOutputType["WorkOrder"] = 0] = "WorkOrder";
    WOOutputType[WOOutputType["Map"] = 1] = "Map";
    WOOutputType[WOOutputType["WorkOrderAndMap"] = 2] = "WorkOrderAndMap";
})(WOOutputType || (WOOutputType = {}));

var WorkDurationUnit;
(function (WorkDurationUnit) {
    WorkDurationUnit[WorkDurationUnit["Null"] = 0] = "Null";
    WorkDurationUnit[WorkDurationUnit["H"] = 1] = "H";
    WorkDurationUnit[WorkDurationUnit["D"] = 2] = "D";
})(WorkDurationUnit || (WorkDurationUnit = {}));

var WorkType;
(function (WorkType) {
    WorkType[WorkType["ALL"] = 0] = "ALL";
    WorkType[WorkType["WORKORDER"] = 1] = "WORKORDER";
    WorkType[WorkType["INSPECTION"] = 2] = "INSPECTION";
    WorkType[WorkType["REQUEST"] = 3] = "REQUEST";
})(WorkType || (WorkType = {}));

var WOStage;
(function (WOStage) {
    WOStage[WOStage["PROPOSED"] = 0] = "PROPOSED";
    WOStage[WOStage["ACTUAL"] = 1] = "ACTUAL";
})(WOStage || (WOStage = {}));

export { ServiceTypes, AbcCatClass, ActionType, ActivityLinkActivityType, ActivityLinkType, ApiVersionEnum, ApplyLevel, AssetRatingMethod, AttachmentFileType, ChangeOutOp, CodeDescUsage, CommentActivityType, ContractorRateType, CoreResponseStatus, CostUsage, CustomFieldValueSource, CWEntityType, DashboardAggregationType, DashboardChartWidgetType, DashboardNumberFormat, DateGroupByOption, DateSelection, DayOfWeek, DistressSeverity, EquipChangeOutType, EquipmentRateType, EquipTransType, EventSourceType, EventTriggerType, FieldDataType, GISRight, GISServiceSecurityType, GISServiceType, InspQuestionType, LaborCategory, LaborRateType, LicensedExtension, LicensedFeature, MaterialCostType, NativeAppWorkActivityType, NumericValueMode, PacpMappingDirection, PWCodeType, QASequenceModel, QuestAnswerFormat, QueueStatus, RateAddMethod, ReadingActionType, RelativeDate, RelativeDateUnit, RepeatFromDate, RepeatIntervalUnit, RepeatType, SearchType, SearchView, SourceEventType, StandardInspTableName, TemplateMapLayerSourceType, TimeIntervalUnit, TransactionType, TraverseNetworkDirection, TreeNodeTextType, TreeNodeType, TvObservationCause, TvObservationMethod, UniversalCustomFieldTable, VerificationStatus, WebHookCustomPacketTemplateFlag, WebHookOutputType, WebHookPacketModel, WidgetContainerTabType, WidgetContainerType, WOEvent, WOExpenseType, WOOutputType, WorkDurationUnit, WorkType, WOStage };
//# sourceMappingURL=core.js.map
