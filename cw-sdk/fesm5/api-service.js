var AttachmentsService = /** @class */ (function () {
    function AttachmentsService(service) {
        this._service = service;
    }
    AttachmentsService.prototype.AddInspectionAttachment = function (request) {
        return this._service.call(request, 'Ams/Attachments/AddInspectionAttachment');
    };
    AttachmentsService.prototype.AddRequestAttachment = function (request) {
        return this._service.call(request, 'Ams/Attachments/AddRequestAttachment');
    };
    AttachmentsService.prototype.AddWorkOrderAttachment = function (request) {
        return this._service.call(request, 'Ams/Attachments/AddWorkOrderAttachment');
    };
    AttachmentsService.prototype.DeleteInspectionAttachments = function (request) {
        return this._service.call(request, 'Ams/Attachments/DeleteInspectionAttachments');
    };
    AttachmentsService.prototype.DeleteRequestAttachments = function (request) {
        return this._service.call(request, 'Ams/Attachments/DeleteRequestAttachments');
    };
    AttachmentsService.prototype.DeleteWorkOrderAttachments = function (request) {
        return this._service.call(request, 'Ams/Attachments/DeleteWorkOrderAttachments');
    };
    AttachmentsService.prototype.DownloadInspectionAttachment = function (request) {
        return this._service.call(request, 'Ams/Attachments/DownloadInspectionAttachment');
    };
    AttachmentsService.prototype.DownloadRequestAttachment = function (request) {
        return this._service.call(request, 'Ams/Attachments/DownloadRequestAttachment');
    };
    AttachmentsService.prototype.DownloadWorkOrderAttachment = function (request) {
        return this._service.call(request, 'Ams/Attachments/DownloadWorkOrderAttachment');
    };
    AttachmentsService.prototype.InspectionAttachmentById = function (request) {
        return this._service.call(request, 'Ams/Attachments/InspectionAttachmentById');
    };
    AttachmentsService.prototype.InspectionAttachments = function (request) {
        return this._service.call(request, 'Ams/Attachments/InspectionAttachments');
    };
    AttachmentsService.prototype.RequestAttachmentById = function (request) {
        return this._service.call(request, 'Ams/Attachments/RequestAttachmentById');
    };
    AttachmentsService.prototype.RequestAttachments = function (request) {
        return this._service.call(request, 'Ams/Attachments/RequestAttachments');
    };
    AttachmentsService.prototype.WorkOrderAttachments = function (request) {
        return this._service.call(request, 'Ams/Attachments/WorkOrderAttachments');
    };
    return AttachmentsService;
}());

var BookmarkService = /** @class */ (function () {
    function BookmarkService(service) {
        this._service = service;
    }
    BookmarkService.prototype.AddBookmark = function (request) {
        return this._service.call(request, 'Ams/Bookmark/AddBookmark');
    };
    BookmarkService.prototype.AddScale = function (request) {
        return this._service.call(request, 'Ams/Bookmark/AddScale');
    };
    BookmarkService.prototype.DeleteBookmarks = function (request) {
        return this._service.call(request, 'Ams/Bookmark/DeleteBookmarks');
    };
    BookmarkService.prototype.DeleteScales = function (request) {
        return this._service.call(request, 'Ams/Bookmark/DeleteScales');
    };
    BookmarkService.prototype.GetBookmarks = function (request) {
        return this._service.call(request, 'Ams/Bookmark/GetBookmarks');
    };
    BookmarkService.prototype.GetScales = function (request) {
        return this._service.call(request, 'Ams/Bookmark/GetScales');
    };
    BookmarkService.prototype.SetInitialExtent = function (request) {
        return this._service.call(request, 'Ams/Bookmark/SetInitialExtent');
    };
    BookmarkService.prototype.UpdateBookmark = function (request) {
        return this._service.call(request, 'Ams/Bookmark/UpdateBookmark');
    };
    BookmarkService.prototype.UpdateScale = function (request) {
        return this._service.call(request, 'Ams/Bookmark/UpdateScale');
    };
    return BookmarkService;
}());

var CodesService = /** @class */ (function () {
    function CodesService(service) {
        this._service = service;
    }
    CodesService.prototype.All = function (request) {
        return this._service.call(request, 'Ams/Codes/All');
    };
    CodesService.prototype.AllCCTVCodeDescScore = function (request) {
        return this._service.call(request, 'Ams/Codes/AllCCTVCodeDescScore');
    };
    CodesService.prototype.AllDescScore = function (request) {
        return this._service.call(request, 'Ams/Codes/AllDescScore');
    };
    CodesService.prototype.ByCodeType = function (request) {
        return this._service.call(request, 'Ams/Codes/ByCodeType');
    };
    CodesService.prototype.Export = function (request) {
        return this._service.call(request, 'Ams/Codes/Export');
    };
    CodesService.prototype.ExportCCTVCodeDescScore = function (request) {
        return this._service.call(request, 'Ams/Codes/ExportCCTVCodeDescScore');
    };
    CodesService.prototype.ExportDescScore = function (request) {
        return this._service.call(request, 'Ams/Codes/ExportDescScore');
    };
    CodesService.prototype.Import = function (request) {
        return this._service.call(request, 'Ams/Codes/Import');
    };
    CodesService.prototype.ImportCCTVCodeDescScore = function (request) {
        return this._service.call(request, 'Ams/Codes/ImportCCTVCodeDescScore');
    };
    CodesService.prototype.ImportDescScore = function (request) {
        return this._service.call(request, 'Ams/Codes/ImportDescScore');
    };
    return CodesService;
}());

var CommentService = /** @class */ (function () {
    function CommentService(service) {
        this._service = service;
    }
    CommentService.prototype.Add = function (request) {
        return this._service.call(request, 'Ams/Comment/Add');
    };
    CommentService.prototype.ByActivityIds = function (request) {
        return this._service.call(request, 'Ams/Comment/ByActivityIds');
    };
    CommentService.prototype.ByActivitySids = function (request) {
        return this._service.call(request, 'Ams/Comment/ByActivitySids');
    };
    CommentService.prototype.ByActivityTypes = function (request) {
        return this._service.call(request, 'Ams/Comment/ByActivityTypes');
    };
    CommentService.prototype.ProblemComments = function (request) {
        return this._service.call(request, 'Ams/Comment/ProblemComments');
    };
    CommentService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/Comment/Update');
    };
    return CommentService;
}());

var ConditionService = /** @class */ (function () {
    function ConditionService(service) {
        this._service = service;
    }
    ConditionService.prototype.Current = function (request) {
        return this._service.call(request, 'Ams/Condition/Current');
    };
    ConditionService.prototype.History = function (request) {
        return this._service.call(request, 'Ams/Condition/History');
    };
    return ConditionService;
}());

var ContractService = /** @class */ (function () {
    function ContractService(service) {
        this._service = service;
    }
    ContractService.prototype.AddLineItem = function (request) {
        return this._service.call(request, 'Ams/Contract/AddLineItem');
    };
    ContractService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/Contract/ByIds');
    };
    ContractService.prototype.Claims = function (request) {
        return this._service.call(request, 'Ams/Contract/Claims');
    };
    ContractService.prototype.Create = function (request) {
        return this._service.call(request, 'Ams/Contract/Create');
    };
    ContractService.prototype.CreateFundSource = function (request) {
        return this._service.call(request, 'Ams/Contract/CreateFundSource');
    };
    ContractService.prototype.CreateSearchDefinition = function (request) {
        return this._service.call(request, 'Ams/Contract/CreateSearchDefinition');
    };
    ContractService.prototype.CreateSubcontractor = function (request) {
        return this._service.call(request, 'Ams/Contract/CreateSubcontractor');
    };
    ContractService.prototype.CreateSubmittal = function (request) {
        return this._service.call(request, 'Ams/Contract/CreateSubmittal');
    };
    ContractService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/Contract/Delete');
    };
    ContractService.prototype.DeleteFundSource = function (request) {
        return this._service.call(request, 'Ams/Contract/DeleteFundSource');
    };
    ContractService.prototype.DeleteLineItems = function (request) {
        return this._service.call(request, 'Ams/Contract/DeleteLineItems');
    };
    ContractService.prototype.DeleteSubcontractor = function (request) {
        return this._service.call(request, 'Ams/Contract/DeleteSubcontractor');
    };
    ContractService.prototype.DeleteSubmittal = function (request) {
        return this._service.call(request, 'Ams/Contract/DeleteSubmittal');
    };
    ContractService.prototype.FundSources = function (request) {
        return this._service.call(request, 'Ams/Contract/FundSources');
    };
    ContractService.prototype.LineItems = function (request) {
        return this._service.call(request, 'Ams/Contract/LineItems');
    };
    ContractService.prototype.LineItemSummary = function (request) {
        return this._service.call(request, 'Ams/Contract/LineItemSummary');
    };
    ContractService.prototype.Permits = function (request) {
        return this._service.call(request, 'Ams/Contract/Permits');
    };
    ContractService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/Contract/Search');
    };
    ContractService.prototype.Subcontractors = function (request) {
        return this._service.call(request, 'Ams/Contract/Subcontractors');
    };
    ContractService.prototype.Submittals = function (request) {
        return this._service.call(request, 'Ams/Contract/Submittals');
    };
    ContractService.prototype.UninvoicedLineItemCosts = function (request) {
        return this._service.call(request, 'Ams/Contract/UninvoicedLineItemCosts');
    };
    ContractService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/Contract/Update');
    };
    ContractService.prototype.UpdateLineItem = function (request) {
        return this._service.call(request, 'Ams/Contract/UpdateLineItem');
    };
    ContractService.prototype.UpdateSubcontractor = function (request) {
        return this._service.call(request, 'Ams/Contract/UpdateSubcontractor');
    };
    ContractService.prototype.UpdateSubmittal = function (request) {
        return this._service.call(request, 'Ams/Contract/UpdateSubmittal');
    };
    ContractService.prototype.User = function (request) {
        return this._service.call(request, 'Ams/Contract/User');
    };
    return ContractService;
}());

var ContractorService = /** @class */ (function () {
    function ContractorService(service) {
        this._service = service;
    }
    ContractorService.prototype.Add = function (request) {
        return this._service.call(request, 'Ams/Contractor/Add');
    };
    ContractorService.prototype.AddKeywords = function (request) {
        return this._service.call(request, 'Ams/Contractor/AddKeywords');
    };
    ContractorService.prototype.All = function (request) {
        return this._service.call(request, 'Ams/Contractor/All');
    };
    ContractorService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/Contractor/ById');
    };
    ContractorService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/Contractor/Delete');
    };
    ContractorService.prototype.DeleteKeywords = function (request) {
        return this._service.call(request, 'Ams/Contractor/DeleteKeywords');
    };
    ContractorService.prototype.Keywords = function (request) {
        return this._service.call(request, 'Ams/Contractor/Keywords');
    };
    ContractorService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/Contractor/Search');
    };
    ContractorService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/Contractor/Update');
    };
    return ContractorService;
}());

var CrewService = /** @class */ (function () {
    function CrewService(service) {
        this._service = service;
    }
    CrewService.prototype.ByEmployee = function (request) {
        return this._service.call(request, 'Ams/Crew/ByEmployee');
    };
    CrewService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/Crew/ByIds');
    };
    CrewService.prototype.Employees = function (request) {
        return this._service.call(request, 'Ams/Crew/Employees');
    };
    CrewService.prototype.Equipment = function (request) {
        return this._service.call(request, 'Ams/Crew/Equipment');
    };
    CrewService.prototype.Material = function (request) {
        return this._service.call(request, 'Ams/Crew/Material');
    };
    return CrewService;
}());

var CustomerAccountService = /** @class */ (function () {
    function CustomerAccountService(service) {
        this._service = service;
    }
    CustomerAccountService.prototype.Add = function (request) {
        return this._service.call(request, 'Ams/CustomerAccount/Add');
    };
    CustomerAccountService.prototype.ByAccountNumbers = function (request) {
        return this._service.call(request, 'Ams/CustomerAccount/ByAccountNumbers');
    };
    CustomerAccountService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/CustomerAccount/ByIds');
    };
    CustomerAccountService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/CustomerAccount/Delete');
    };
    CustomerAccountService.prototype.Import = function (request) {
        return this._service.call(request, 'Ams/CustomerAccount/Import');
    };
    CustomerAccountService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/CustomerAccount/Search');
    };
    CustomerAccountService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/CustomerAccount/Update');
    };
    return CustomerAccountService;
}());

var CustomerCallService = /** @class */ (function () {
    function CustomerCallService(service) {
        this._service = service;
    }
    CustomerCallService.prototype.AddToRequest = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/AddToRequest');
    };
    CustomerCallService.prototype.ByIncidentNum = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/ByIncidentNum');
    };
    CustomerCallService.prototype.ByRequestId = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/ByRequestId');
    };
    CustomerCallService.prototype.ByRequestIds = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/ByRequestIds');
    };
    CustomerCallService.prototype.CallerQuestions = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/CallerQuestions');
    };
    CustomerCallService.prototype.CallerQuestionsByRequestIds = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/CallerQuestionsByRequestIds');
    };
    CustomerCallService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/Delete');
    };
    CustomerCallService.prototype.Move = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/Move');
    };
    CustomerCallService.prototype.MoveToRequest = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/MoveToRequest');
    };
    CustomerCallService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/CustomerCall/Update');
    };
    return CustomerCallService;
}());

var DesignerService = /** @class */ (function () {
    function DesignerService(service) {
        this._service = service;
    }
    DesignerService.prototype.AddAttachmentMapping = function (request) {
        return this._service.call(request, 'Ams/Designer/AddAttachmentMapping');
    };
    DesignerService.prototype.AddCodeDescription = function (request) {
        return this._service.call(request, 'Ams/Designer/AddCodeDescription');
    };
    DesignerService.prototype.AddCodeDescScore = function (request) {
        return this._service.call(request, 'Ams/Designer/AddCodeDescScore');
    };
    DesignerService.prototype.AddCodeType = function (request) {
        return this._service.call(request, 'Ams/Designer/AddCodeType');
    };
    DesignerService.prototype.AddDescScore = function (request) {
        return this._service.call(request, 'Ams/Designer/AddDescScore');
    };
    DesignerService.prototype.AddDomain = function (request) {
        return this._service.call(request, 'Ams/Designer/AddDomain');
    };
    DesignerService.prototype.AddEmployeeSkillCode = function (request) {
        return this._service.call(request, 'Ams/Designer/AddEmployeeSkillCode');
    };
    DesignerService.prototype.AddGroup = function (request) {
        return this._service.call(request, 'Ams/Designer/AddGroup');
    };
    DesignerService.prototype.AddRole = function (request) {
        return this._service.call(request, 'Ams/Designer/AddRole');
    };
    DesignerService.prototype.AddUsersToRole = function (request) {
        return this._service.call(request, 'Ams/Designer/AddUsersToRole');
    };
    DesignerService.prototype.AttachmentMappings = function (request) {
        return this._service.call(request, 'Ams/Designer/AttachmentMappings');
    };
    DesignerService.prototype.CctvCodes = function (request) {
        return this._service.call(request, 'Ams/Designer/CctvCodes');
    };
    DesignerService.prototype.CodeDescriptions = function (request) {
        return this._service.call(request, 'Ams/Designer/CodeDescriptions');
    };
    DesignerService.prototype.CodeDescScores = function (request) {
        return this._service.call(request, 'Ams/Designer/CodeDescScores');
    };
    DesignerService.prototype.CodeTypes = function (request) {
        return this._service.call(request, 'Ams/Designer/CodeTypes');
    };
    DesignerService.prototype.CreateUser = function (request) {
        return this._service.call(request, 'Ams/Designer/CreateUser');
    };
    DesignerService.prototype.DeleteAttachmentMappings = function (request) {
        return this._service.call(request, 'Ams/Designer/DeleteAttachmentMappings');
    };
    DesignerService.prototype.DeleteCodeDescriptions = function (request) {
        return this._service.call(request, 'Ams/Designer/DeleteCodeDescriptions');
    };
    DesignerService.prototype.DeleteDomains = function (request) {
        return this._service.call(request, 'Ams/Designer/DeleteDomains');
    };
    DesignerService.prototype.DeleteEmployeeSkillCodes = function (request) {
        return this._service.call(request, 'Ams/Designer/DeleteEmployeeSkillCodes');
    };
    DesignerService.prototype.DeleteGroups = function (request) {
        return this._service.call(request, 'Ams/Designer/DeleteGroups');
    };
    DesignerService.prototype.DeleteLogin = function (request) {
        return this._service.call(request, 'Ams/Designer/DeleteLogin');
    };
    DesignerService.prototype.DeleteRoles = function (request) {
        return this._service.call(request, 'Ams/Designer/DeleteRoles');
    };
    DesignerService.prototype.DescScores = function (request) {
        return this._service.call(request, 'Ams/Designer/DescScores');
    };
    DesignerService.prototype.Domains = function (request) {
        return this._service.call(request, 'Ams/Designer/Domains');
    };
    DesignerService.prototype.EmployeeGroups = function (request) {
        return this._service.call(request, 'Ams/Designer/EmployeeGroups');
    };
    DesignerService.prototype.GroupMembers = function (request) {
        return this._service.call(request, 'Ams/Designer/GroupMembers');
    };
    DesignerService.prototype.Groups = function (request) {
        return this._service.call(request, 'Ams/Designer/Groups');
    };
    DesignerService.prototype.RemoveUsersFromRole = function (request) {
        return this._service.call(request, 'Ams/Designer/RemoveUsersFromRole');
    };
    DesignerService.prototype.Roles = function (request) {
        return this._service.call(request, 'Ams/Designer/Roles');
    };
    DesignerService.prototype.SaveCctvCode = function (request) {
        return this._service.call(request, 'Ams/Designer/SaveCctvCode');
    };
    DesignerService.prototype.UnlockUsers = function (request) {
        return this._service.call(request, 'Ams/Designer/UnlockUsers');
    };
    DesignerService.prototype.UpdateAttachmentMapping = function (request) {
        return this._service.call(request, 'Ams/Designer/UpdateAttachmentMapping');
    };
    DesignerService.prototype.UpdateCodeDescription = function (request) {
        return this._service.call(request, 'Ams/Designer/UpdateCodeDescription');
    };
    DesignerService.prototype.UpdateCodeDescScore = function (request) {
        return this._service.call(request, 'Ams/Designer/UpdateCodeDescScore');
    };
    DesignerService.prototype.UpdateCodeType = function (request) {
        return this._service.call(request, 'Ams/Designer/UpdateCodeType');
    };
    DesignerService.prototype.UpdateDescScore = function (request) {
        return this._service.call(request, 'Ams/Designer/UpdateDescScore');
    };
    DesignerService.prototype.UpdateDomain = function (request) {
        return this._service.call(request, 'Ams/Designer/UpdateDomain');
    };
    DesignerService.prototype.UpdateGroup = function (request) {
        return this._service.call(request, 'Ams/Designer/UpdateGroup');
    };
    DesignerService.prototype.UserRoles = function (request) {
        return this._service.call(request, 'Ams/Designer/UserRoles');
    };
    DesignerService.prototype.UsersInRole = function (request) {
        return this._service.call(request, 'Ams/Designer/UsersInRole');
    };
    DesignerService.prototype.UserStatus = function (request) {
        return this._service.call(request, 'Ams/Designer/UserStatus');
    };
    return DesignerService;
}());

var EmployeeService = /** @class */ (function () {
    function EmployeeService(service) {
        this._service = service;
    }
    EmployeeService.prototype.Add = function (request) {
        return this._service.call(request, 'Ams/Employee/Add');
    };
    EmployeeService.prototype.AddLicensedItems = function (request) {
        return this._service.call(request, 'Ams/Employee/AddLicensedItems');
    };
    EmployeeService.prototype.All = function (request) {
        return this._service.call(request, 'Ams/Employee/All');
    };
    EmployeeService.prototype.ByGroupId = function (request) {
        return this._service.call(request, 'Ams/Employee/ByGroupId');
    };
    EmployeeService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/Employee/ById');
    };
    EmployeeService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/Employee/ByIds');
    };
    EmployeeService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/Employee/Delete');
    };
    EmployeeService.prototype.DeleteLicensedItems = function (request) {
        return this._service.call(request, 'Ams/Employee/DeleteLicensedItems');
    };
    EmployeeService.prototype.Groups = function (request) {
        return this._service.call(request, 'Ams/Employee/Groups');
    };
    EmployeeService.prototype.NamesAreUnique = function (request) {
        return this._service.call(request, 'Ams/Employee/NamesAreUnique');
    };
    EmployeeService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/Employee/Search');
    };
    EmployeeService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/Employee/Update');
    };
    return EmployeeService;
}());

var EntityService = /** @class */ (function () {
    function EntityService(service) {
        this._service = service;
    }
    EntityService.prototype.AddAlias = function (request) {
        return this._service.call(request, 'Ams/Entity/AddAlias');
    };
    EntityService.prototype.AddSplit = function (request) {
        return this._service.call(request, 'Ams/Entity/AddSplit');
    };
    EntityService.prototype.AliasAssets = function (request) {
        return this._service.call(request, 'Ams/Entity/AliasAssets');
    };
    EntityService.prototype.Aliases = function (request) {
        return this._service.call(request, 'Ams/Entity/Aliases');
    };
    EntityService.prototype.AllAliases = function (request) {
        return this._service.call(request, 'Ams/Entity/AllAliases');
    };
    EntityService.prototype.Attributes = function (request) {
        return this._service.call(request, 'Ams/Entity/Attributes');
    };
    EntityService.prototype.CloneWorkOrderEntities = function (request) {
        return this._service.call(request, 'Ams/Entity/CloneWorkOrderEntities');
    };
    EntityService.prototype.Configuration = function (request) {
        return this._service.call(request, 'Ams/Entity/Configuration');
    };
    EntityService.prototype.CostHistory = function (request) {
        return this._service.call(request, 'Ams/Entity/CostHistory');
    };
    EntityService.prototype.CostTotal = function (request) {
        return this._service.call(request, 'Ams/Entity/CostTotal');
    };
    EntityService.prototype.DistinctValues = function (request) {
        return this._service.call(request, 'Ams/Entity/DistinctValues');
    };
    EntityService.prototype.DomainTypes = function (request) {
        return this._service.call(request, 'Ams/Entity/DomainTypes');
    };
    EntityService.prototype.EntityUidField = function (request) {
        return this._service.call(request, 'Ams/Entity/EntityUidField');
    };
    EntityService.prototype.FiveNumberSummary = function (request) {
        return this._service.call(request, 'Ams/Entity/FiveNumberSummary');
    };
    EntityService.prototype.GetByIdentifier = function (request) {
        return this._service.call(request, 'Ams/Entity/GetByIdentifier');
    };
    EntityService.prototype.GetByIdentifiers = function (request) {
        return this._service.call(request, 'Ams/Entity/GetByIdentifiers');
    };
    EntityService.prototype.Groups = function (request) {
        return this._service.call(request, 'Ams/Entity/Groups');
    };
    EntityService.prototype.ProcessSplits = function (request) {
        return this._service.call(request, 'Ams/Entity/ProcessSplits');
    };
    EntityService.prototype.RemoveAlias = function (request) {
        return this._service.call(request, 'Ams/Entity/RemoveAlias');
    };
    EntityService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/Entity/Search');
    };
    EntityService.prototype.SearchAsWorkOrderEntity = function (request) {
        return this._service.call(request, 'Ams/Entity/SearchAsWorkOrderEntity');
    };
    EntityService.prototype.SplitEntities = function (request) {
        return this._service.call(request, 'Ams/Entity/SplitEntities');
    };
    EntityService.prototype.Splits = function (request) {
        return this._service.call(request, 'Ams/Entity/Splits');
    };
    EntityService.prototype.SubTypes = function (request) {
        return this._service.call(request, 'Ams/Entity/SubTypes');
    };
    EntityService.prototype.TypeRelationships = function (request) {
        return this._service.call(request, 'Ams/Entity/TypeRelationships');
    };
    EntityService.prototype.Types = function (request) {
        return this._service.call(request, 'Ams/Entity/Types');
    };
    EntityService.prototype.VisibleFields = function (request) {
        return this._service.call(request, 'Ams/Entity/VisibleFields');
    };
    EntityService.prototype.WorkActivityHistory = function (request) {
        return this._service.call(request, 'Ams/Entity/WorkActivityHistory');
    };
    return EntityService;
}());

var EquipmentService = /** @class */ (function () {
    function EquipmentService(service) {
        this._service = service;
    }
    EquipmentService.prototype.Add = function (request) {
        return this._service.call(request, 'Ams/Equipment/Add');
    };
    EquipmentService.prototype.All = function (request) {
        return this._service.call(request, 'Ams/Equipment/All');
    };
    EquipmentService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/Equipment/ById');
    };
    EquipmentService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/Equipment/ByIds');
    };
    EquipmentService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/Equipment/Delete');
    };
    EquipmentService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/Equipment/Search');
    };
    EquipmentService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/Equipment/Update');
    };
    return EquipmentService;
}());

var EquipmentChangeOutService = /** @class */ (function () {
    function EquipmentChangeOutService(service) {
        this._service = service;
    }
    EquipmentChangeOutService.prototype.AddChangeOutRead = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/AddChangeOutRead');
    };
    EquipmentChangeOutService.prototype.AddOperation = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/AddOperation');
    };
    EquipmentChangeOutService.prototype.Attach = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Attach');
    };
    EquipmentChangeOutService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/ById');
    };
    EquipmentChangeOutService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/ByIds');
    };
    EquipmentChangeOutService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Delete');
    };
    EquipmentChangeOutService.prototype.DeleteChangeOutReads = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/DeleteChangeOutReads');
    };
    EquipmentChangeOutService.prototype.DeleteOperations = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/DeleteOperations');
    };
    EquipmentChangeOutService.prototype.Detach = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Detach');
    };
    EquipmentChangeOutService.prototype.DirectParent = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/DirectParent');
    };
    EquipmentChangeOutService.prototype.Entities = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Entities');
    };
    EquipmentChangeOutService.prototype.Entity = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Entity');
    };
    EquipmentChangeOutService.prototype.History = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/History');
    };
    EquipmentChangeOutService.prototype.Read = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Read');
    };
    EquipmentChangeOutService.prototype.ReadConfigs = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/ReadConfigs');
    };
    EquipmentChangeOutService.prototype.Related = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Related');
    };
    EquipmentChangeOutService.prototype.Replace = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Replace');
    };
    EquipmentChangeOutService.prototype.UpdateChangeOutRead = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/UpdateChangeOutRead');
    };
    EquipmentChangeOutService.prototype.UpdateOperation = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/UpdateOperation');
    };
    return EquipmentChangeOutService;
}());

var EquipmentCostService = /** @class */ (function () {
    function EquipmentCostService(service) {
        this._service = service;
    }
    EquipmentCostService.prototype.AddWorkOrderCosts = function (request) {
        return this._service.call(request, 'Ams/EquipmentCost/AddWorkOrderCosts');
    };
    EquipmentCostService.prototype.DeleteWorkOrderCosts = function (request) {
        return this._service.call(request, 'Ams/EquipmentCost/DeleteWorkOrderCosts');
    };
    EquipmentCostService.prototype.WorkOrderCostsByWorkOrder = function (request) {
        return this._service.call(request, 'Ams/EquipmentCost/WorkOrderCostsByWorkOrder');
    };
    return EquipmentCostService;
}());

var EquipmentReservationService = /** @class */ (function () {
    function EquipmentReservationService(service) {
        this._service = service;
    }
    EquipmentReservationService.prototype.CheckedOut = function (request) {
        return this._service.call(request, 'Ams/EquipmentReservation/CheckedOut');
    };
    EquipmentReservationService.prototype.CheckIn = function (request) {
        return this._service.call(request, 'Ams/EquipmentReservation/CheckIn');
    };
    EquipmentReservationService.prototype.CheckOut = function (request) {
        return this._service.call(request, 'Ams/EquipmentReservation/CheckOut');
    };
    EquipmentReservationService.prototype.CheckOutHistory = function (request) {
        return this._service.call(request, 'Ams/EquipmentReservation/CheckOutHistory');
    };
    EquipmentReservationService.prototype.DeleteReservation = function (request) {
        return this._service.call(request, 'Ams/EquipmentReservation/DeleteReservation');
    };
    EquipmentReservationService.prototype.Reservations = function (request) {
        return this._service.call(request, 'Ams/EquipmentReservation/Reservations');
    };
    EquipmentReservationService.prototype.Reserve = function (request) {
        return this._service.call(request, 'Ams/EquipmentReservation/Reserve');
    };
    EquipmentReservationService.prototype.Status = function (request) {
        return this._service.call(request, 'Ams/EquipmentReservation/Status');
    };
    EquipmentReservationService.prototype.UpdateReservation = function (request) {
        return this._service.call(request, 'Ams/EquipmentReservation/UpdateReservation');
    };
    return EquipmentReservationService;
}());

var EventLayerService = /** @class */ (function () {
    function EventLayerService(service) {
        this._service = service;
    }
    EventLayerService.prototype.All = function (request) {
        return this._service.call(request, 'Ams/EventLayer/All');
    };
    EventLayerService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/EventLayer/ById');
    };
    return EventLayerService;
}());

var GISServiceService = /** @class */ (function () {
    function GISServiceService(service) {
        this._service = service;
    }
    GISServiceService.prototype.AddGISServiceDefinition = function (request) {
        return this._service.call(request, 'Ams/GISService/AddGISServiceDefinition');
    };
    GISServiceService.prototype.AddGISServiceEndPointSecurity = function (request) {
        return this._service.call(request, 'Ams/GISService/AddGISServiceEndPointSecurity');
    };
    GISServiceService.prototype.CloneGISServiceDefinition = function (request) {
        return this._service.call(request, 'Ams/GISService/CloneGISServiceDefinition');
    };
    GISServiceService.prototype.DeleteGISServiceDefinitions = function (request) {
        return this._service.call(request, 'Ams/GISService/DeleteGISServiceDefinitions');
    };
    GISServiceService.prototype.DeleteGISServiceEndPointSecurities = function (request) {
        return this._service.call(request, 'Ams/GISService/DeleteGISServiceEndPointSecurities');
    };
    GISServiceService.prototype.GISServiceDefinitions = function (request) {
        return this._service.call(request, 'Ams/GISService/GISServiceDefinitions');
    };
    GISServiceService.prototype.UpdateGISServiceEndPointSecurity = function (request) {
        return this._service.call(request, 'Ams/GISService/UpdateGISServiceEndPointSecurity');
    };
    GISServiceService.prototype.ValidateServiceSecurity = function (request) {
        return this._service.call(request, 'Ams/GISService/ValidateServiceSecurity');
    };
    return GISServiceService;
}());

var InboxService = /** @class */ (function () {
    function InboxService(service) {
        this._service = service;
    }
    InboxService.prototype.CopyWidgetContainerTab = function (request) {
        return this._service.call(request, 'Ams/Inbox/CopyWidgetContainerTab');
    };
    InboxService.prototype.CreateWidget = function (request) {
        return this._service.call(request, 'Ams/Inbox/CreateWidget');
    };
    InboxService.prototype.CreateWidgetContainer = function (request) {
        return this._service.call(request, 'Ams/Inbox/CreateWidgetContainer');
    };
    InboxService.prototype.CreateWidgetContainerTab = function (request) {
        return this._service.call(request, 'Ams/Inbox/CreateWidgetContainerTab');
    };
    InboxService.prototype.CreateWidgetZone = function (request) {
        return this._service.call(request, 'Ams/Inbox/CreateWidgetZone');
    };
    InboxService.prototype.DeleteWidget = function (request) {
        return this._service.call(request, 'Ams/Inbox/DeleteWidget');
    };
    InboxService.prototype.DeleteWidgetContainer = function (request) {
        return this._service.call(request, 'Ams/Inbox/DeleteWidgetContainer');
    };
    InboxService.prototype.DeleteWidgetContainerTab = function (request) {
        return this._service.call(request, 'Ams/Inbox/DeleteWidgetContainerTab');
    };
    InboxService.prototype.DeleteWidgetZone = function (request) {
        return this._service.call(request, 'Ams/Inbox/DeleteWidgetZone');
    };
    InboxService.prototype.MoveWidget = function (request) {
        return this._service.call(request, 'Ams/Inbox/MoveWidget');
    };
    InboxService.prototype.MoveWidgetContainerTab = function (request) {
        return this._service.call(request, 'Ams/Inbox/MoveWidgetContainerTab');
    };
    InboxService.prototype.MoveWidgetZone = function (request) {
        return this._service.call(request, 'Ams/Inbox/MoveWidgetZone');
    };
    InboxService.prototype.UpdateChartWidget = function (request) {
        return this._service.call(request, 'Ams/Inbox/UpdateChartWidget');
    };
    InboxService.prototype.UpdateHtmlWidget = function (request) {
        return this._service.call(request, 'Ams/Inbox/UpdateHtmlWidget');
    };
    InboxService.prototype.UpdateNotesWidget = function (request) {
        return this._service.call(request, 'Ams/Inbox/UpdateNotesWidget');
    };
    InboxService.prototype.UpdateReportLinksWidget = function (request) {
        return this._service.call(request, 'Ams/Inbox/UpdateReportLinksWidget');
    };
    InboxService.prototype.UpdateSearchResultsWidget = function (request) {
        return this._service.call(request, 'Ams/Inbox/UpdateSearchResultsWidget');
    };
    InboxService.prototype.UpdateWeatherWidget = function (request) {
        return this._service.call(request, 'Ams/Inbox/UpdateWeatherWidget');
    };
    InboxService.prototype.UpdateWidgetContainer = function (request) {
        return this._service.call(request, 'Ams/Inbox/UpdateWidgetContainer');
    };
    InboxService.prototype.UpdateWidgetContainerTab = function (request) {
        return this._service.call(request, 'Ams/Inbox/UpdateWidgetContainerTab');
    };
    InboxService.prototype.UpdateWidgetZone = function (request) {
        return this._service.call(request, 'Ams/Inbox/UpdateWidgetZone');
    };
    return InboxService;
}());

var InspectionService = /** @class */ (function () {
    function InspectionService(service) {
        this._service = service;
    }
    InspectionService.prototype.AddEntity = function (request) {
        return this._service.call(request, 'Ams/Inspection/AddEntity');
    };
    InspectionService.prototype.Answers = function (request) {
        return this._service.call(request, 'Ams/Inspection/Answers');
    };
    InspectionService.prototype.AuditLog = function (request) {
        return this._service.call(request, 'Ams/Inspection/AuditLog');
    };
    InspectionService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/Inspection/ById');
    };
    InspectionService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/Inspection/ByIds');
    };
    InspectionService.prototype.ByWorkOrderIds = function (request) {
        return this._service.call(request, 'Ams/Inspection/ByWorkOrderIds');
    };
    InspectionService.prototype.Cancel = function (request) {
        return this._service.call(request, 'Ams/Inspection/Cancel');
    };
    InspectionService.prototype.Close = function (request) {
        return this._service.call(request, 'Ams/Inspection/Close');
    };
    InspectionService.prototype.Create = function (request) {
        return this._service.call(request, 'Ams/Inspection/Create');
    };
    InspectionService.prototype.CreateFromParent = function (request) {
        return this._service.call(request, 'Ams/Inspection/CreateFromParent');
    };
    InspectionService.prototype.CreateFromServiceRequest = function (request) {
        return this._service.call(request, 'Ams/Inspection/CreateFromServiceRequest');
    };
    InspectionService.prototype.CreateFromWorkOrder = function (request) {
        return this._service.call(request, 'Ams/Inspection/CreateFromWorkOrder');
    };
    InspectionService.prototype.CreateSearchDefinition = function (request) {
        return this._service.call(request, 'Ams/Inspection/CreateSearchDefinition');
    };
    InspectionService.prototype.CycleFrom = function (request) {
        return this._service.call(request, 'Ams/Inspection/CycleFrom');
    };
    InspectionService.prototype.CycleIntervals = function (request) {
        return this._service.call(request, 'Ams/Inspection/CycleIntervals');
    };
    InspectionService.prototype.CycleTypes = function (request) {
        return this._service.call(request, 'Ams/Inspection/CycleTypes');
    };
    InspectionService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/Inspection/Delete');
    };
    InspectionService.prototype.Districts = function (request) {
        return this._service.call(request, 'Ams/Inspection/Districts');
    };
    InspectionService.prototype.InspectionInspections = function (request) {
        return this._service.call(request, 'Ams/Inspection/InspectionInspections');
    };
    InspectionService.prototype.InspectionServiceRequests = function (request) {
        return this._service.call(request, 'Ams/Inspection/InspectionServiceRequests');
    };
    InspectionService.prototype.InspectionWorkOrders = function (request) {
        return this._service.call(request, 'Ams/Inspection/InspectionWorkOrders');
    };
    InspectionService.prototype.Move = function (request) {
        return this._service.call(request, 'Ams/Inspection/Move');
    };
    InspectionService.prototype.Priorities = function (request) {
        return this._service.call(request, 'Ams/Inspection/Priorities');
    };
    InspectionService.prototype.QA = function (request) {
        return this._service.call(request, 'Ams/Inspection/QA');
    };
    InspectionService.prototype.Questions = function (request) {
        return this._service.call(request, 'Ams/Inspection/Questions');
    };
    InspectionService.prototype.RemoveEntity = function (request) {
        return this._service.call(request, 'Ams/Inspection/RemoveEntity');
    };
    InspectionService.prototype.Resolutions = function (request) {
        return this._service.call(request, 'Ams/Inspection/Resolutions');
    };
    InspectionService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/Inspection/Search');
    };
    InspectionService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'Ams/Inspection/SearchObject');
    };
    InspectionService.prototype.Shops = function (request) {
        return this._service.call(request, 'Ams/Inspection/Shops');
    };
    InspectionService.prototype.Statuses = function (request) {
        return this._service.call(request, 'Ams/Inspection/Statuses');
    };
    InspectionService.prototype.SubmitTos = function (request) {
        return this._service.call(request, 'Ams/Inspection/SubmitTos');
    };
    InspectionService.prototype.Templates = function (request) {
        return this._service.call(request, 'Ams/Inspection/Templates');
    };
    InspectionService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/Inspection/Update');
    };
    return InspectionService;
}());

var InspectionTemplateService = /** @class */ (function () {
    function InspectionTemplateService(service) {
        this._service = service;
    }
    InspectionTemplateService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/InspectionTemplate/ByIds');
    };
    InspectionTemplateService.prototype.CreateSearchDefinition = function (request) {
        return this._service.call(request, 'Ams/InspectionTemplate/CreateSearchDefinition');
    };
    InspectionTemplateService.prototype.EntityTypes = function (request) {
        return this._service.call(request, 'Ams/InspectionTemplate/EntityTypes');
    };
    InspectionTemplateService.prototype.QA = function (request) {
        return this._service.call(request, 'Ams/InspectionTemplate/QA');
    };
    InspectionTemplateService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/InspectionTemplate/Search');
    };
    InspectionTemplateService.prototype.Templates = function (request) {
        return this._service.call(request, 'Ams/InspectionTemplate/Templates');
    };
    InspectionTemplateService.prototype.TestTypes = function (request) {
        return this._service.call(request, 'Ams/InspectionTemplate/TestTypes');
    };
    return InspectionTemplateService;
}());

var LaborCostService = /** @class */ (function () {
    function LaborCostService(service) {
        this._service = service;
    }
    LaborCostService.prototype.AddRequestCosts = function (request) {
        return this._service.call(request, 'Ams/LaborCost/AddRequestCosts');
    };
    LaborCostService.prototype.AddWorkOrderCosts = function (request) {
        return this._service.call(request, 'Ams/LaborCost/AddWorkOrderCosts');
    };
    LaborCostService.prototype.CostCodes = function (request) {
        return this._service.call(request, 'Ams/LaborCost/CostCodes');
    };
    LaborCostService.prototype.DeleteRequestCosts = function (request) {
        return this._service.call(request, 'Ams/LaborCost/DeleteRequestCosts');
    };
    LaborCostService.prototype.DeleteWorkOrderCosts = function (request) {
        return this._service.call(request, 'Ams/LaborCost/DeleteWorkOrderCosts');
    };
    LaborCostService.prototype.JobCodes = function (request) {
        return this._service.call(request, 'Ams/LaborCost/JobCodes');
    };
    LaborCostService.prototype.RequestCostsByRequest = function (request) {
        return this._service.call(request, 'Ams/LaborCost/RequestCostsByRequest');
    };
    LaborCostService.prototype.WorkOrderCostsByWorkOrder = function (request) {
        return this._service.call(request, 'Ams/LaborCost/WorkOrderCostsByWorkOrder');
    };
    return LaborCostService;
}());

var MaterialService = /** @class */ (function () {
    function MaterialService(service) {
        this._service = service;
    }
    MaterialService.prototype.All = function (request) {
        return this._service.call(request, 'Ams/Material/All');
    };
    MaterialService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/Material/ById');
    };
    MaterialService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/Material/ByIds');
    };
    MaterialService.prototype.ByParent = function (request) {
        return this._service.call(request, 'Ams/Material/ByParent');
    };
    MaterialService.prototype.ByStoreroom = function (request) {
        return this._service.call(request, 'Ams/Material/ByStoreroom');
    };
    MaterialService.prototype.ByStoreroomAndId = function (request) {
        return this._service.call(request, 'Ams/Material/ByStoreroomAndId');
    };
    MaterialService.prototype.Keywords = function (request) {
        return this._service.call(request, 'Ams/Material/Keywords');
    };
    MaterialService.prototype.MaterialBom = function (request) {
        return this._service.call(request, 'Ams/Material/MaterialBom');
    };
    MaterialService.prototype.MaterialCategories = function (request) {
        return this._service.call(request, 'Ams/Material/MaterialCategories');
    };
    MaterialService.prototype.MaterialNodes = function (request) {
        return this._service.call(request, 'Ams/Material/MaterialNodes');
    };
    MaterialService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/Material/Search');
    };
    return MaterialService;
}());

var MaterialCostService = /** @class */ (function () {
    function MaterialCostService(service) {
        this._service = service;
    }
    MaterialCostService.prototype.AddWorkOrderCosts = function (request) {
        return this._service.call(request, 'Ams/MaterialCost/AddWorkOrderCosts');
    };
    MaterialCostService.prototype.DeleteWorkOrderCosts = function (request) {
        return this._service.call(request, 'Ams/MaterialCost/DeleteWorkOrderCosts');
    };
    MaterialCostService.prototype.WorkOrderCostsByWorkOrder = function (request) {
        return this._service.call(request, 'Ams/MaterialCost/WorkOrderCostsByWorkOrder');
    };
    return MaterialCostService;
}());

var PavementInspectionService = /** @class */ (function () {
    function PavementInspectionService(service) {
        this._service = service;
    }
    PavementInspectionService.prototype.AddDistress = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/AddDistress');
    };
    PavementInspectionService.prototype.AddSample = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/AddSample');
    };
    PavementInspectionService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/ById');
    };
    PavementInspectionService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/ByIds');
    };
    PavementInspectionService.prototype.CodeDesc = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/CodeDesc');
    };
    PavementInspectionService.prototype.Create = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/Create');
    };
    PavementInspectionService.prototype.CreateSearchDefinition = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/CreateSearchDefinition');
    };
    PavementInspectionService.prototype.DistressCodes = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/DistressCodes');
    };
    PavementInspectionService.prototype.Distresses = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/Distresses');
    };
    PavementInspectionService.prototype.Samples = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/Samples');
    };
    PavementInspectionService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/Search');
    };
    PavementInspectionService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/Update');
    };
    PavementInspectionService.prototype.UpdateDistress = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/UpdateDistress');
    };
    PavementInspectionService.prototype.UpdateSample = function (request) {
        return this._service.call(request, 'Ams/PavementInspection/UpdateSample');
    };
    return PavementInspectionService;
}());

var PluginLayoutService = /** @class */ (function () {
    function PluginLayoutService(service) {
        this._service = service;
    }
    PluginLayoutService.prototype.Definition = function (request) {
        return this._service.call(request, 'Ams/PluginLayout/Definition');
    };
    PluginLayoutService.prototype.Definitions = function (request) {
        return this._service.call(request, 'Ams/PluginLayout/Definitions');
    };
    PluginLayoutService.prototype.Public = function (request) {
        return this._service.call(request, 'Ams/PluginLayout/Public');
    };
    PluginLayoutService.prototype.PublicDefinitions = function (request) {
        return this._service.call(request, 'Ams/PluginLayout/PublicDefinitions');
    };
    return PluginLayoutService;
}());

var PreferencesService = /** @class */ (function () {
    function PreferencesService(service) {
        this._service = service;
    }
    PreferencesService.prototype.Global = function (request) {
        return this._service.call(request, 'Ams/Preferences/Global');
    };
    PreferencesService.prototype.User = function (request) {
        return this._service.call(request, 'Ams/Preferences/User');
    };
    PreferencesService.prototype.UserSave = function (request) {
        return this._service.call(request, 'Ams/Preferences/UserSave');
    };
    return PreferencesService;
}());

var ProjectsService = /** @class */ (function () {
    function ProjectsService(service) {
        this._service = service;
    }
    ProjectsService.prototype.ByContractIds = function (request) {
        return this._service.call(request, 'Ams/Projects/ByContractIds');
    };
    ProjectsService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/Projects/ByIds');
    };
    ProjectsService.prototype.Create = function (request) {
        return this._service.call(request, 'Ams/Projects/Create');
    };
    ProjectsService.prototype.CreateSearchDefinition = function (request) {
        return this._service.call(request, 'Ams/Projects/CreateSearchDefinition');
    };
    ProjectsService.prototype.QuickView = function (request) {
        return this._service.call(request, 'Ams/Projects/QuickView');
    };
    ProjectsService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/Projects/Search');
    };
    ProjectsService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/Projects/Update');
    };
    return ProjectsService;
}());

var ReadingService = /** @class */ (function () {
    function ReadingService(service) {
        this._service = service;
    }
    ReadingService.prototype.Add = function (request) {
        return this._service.call(request, 'Ams/Reading/Add');
    };
    ReadingService.prototype.ByEntity = function (request) {
        return this._service.call(request, 'Ams/Reading/ByEntity');
    };
    ReadingService.prototype.Configuration = function (request) {
        return this._service.call(request, 'Ams/Reading/Configuration');
    };
    ReadingService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/Reading/Update');
    };
    return ReadingService;
}());

var RecentActivityService = /** @class */ (function () {
    function RecentActivityService(service) {
        this._service = service;
    }
    RecentActivityService.prototype.CaseViewed = function (request) {
        return this._service.call(request, 'Ams/RecentActivity/CaseViewed');
    };
    RecentActivityService.prototype.InspectionViewed = function (request) {
        return this._service.call(request, 'Ams/RecentActivity/InspectionViewed');
    };
    RecentActivityService.prototype.RequestViewed = function (request) {
        return this._service.call(request, 'Ams/RecentActivity/RequestViewed');
    };
    RecentActivityService.prototype.User = function (request) {
        return this._service.call(request, 'Ams/RecentActivity/User');
    };
    RecentActivityService.prototype.WorkOrderViewed = function (request) {
        return this._service.call(request, 'Ams/RecentActivity/WorkOrderViewed');
    };
    return RecentActivityService;
}());

var RelatesService = /** @class */ (function () {
    function RelatesService(service) {
        this._service = service;
    }
    RelatesService.prototype.ByTableName = function (request) {
        return this._service.call(request, 'Ams/Relates/ByTableName');
    };
    RelatesService.prototype.EquipChangeOutChangedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/EquipChangeOutChangedBy');
    };
    RelatesService.prototype.InspectionCancelledBy = function (request) {
        return this._service.call(request, 'Ams/Relates/InspectionCancelledBy');
    };
    RelatesService.prototype.InspectionClosedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/InspectionClosedBy');
    };
    RelatesService.prototype.InspectionEditAfterClose = function (request) {
        return this._service.call(request, 'Ams/Relates/InspectionEditAfterClose');
    };
    RelatesService.prototype.InspectionInitiatedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/InspectionInitiatedBy');
    };
    RelatesService.prototype.InspectionInspectedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/InspectionInspectedBy');
    };
    RelatesService.prototype.InspectionSubmitTo = function (request) {
        return this._service.call(request, 'Ams/Relates/InspectionSubmitTo');
    };
    RelatesService.prototype.ProblemLeafDispatchTo = function (request) {
        return this._service.call(request, 'Ams/Relates/ProblemLeafDispatchTo');
    };
    RelatesService.prototype.ProblemLeafSubmitTo = function (request) {
        return this._service.call(request, 'Ams/Relates/ProblemLeafSubmitTo');
    };
    RelatesService.prototype.ProjectApprovedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/ProjectApprovedBy');
    };
    RelatesService.prototype.ProjectAssignedTo = function (request) {
        return this._service.call(request, 'Ams/Relates/ProjectAssignedTo');
    };
    RelatesService.prototype.ProjectInitiatedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/ProjectInitiatedBy');
    };
    RelatesService.prototype.RequestCancelledBy = function (request) {
        return this._service.call(request, 'Ams/Relates/RequestCancelledBy');
    };
    RelatesService.prototype.RequestClosedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/RequestClosedBy');
    };
    RelatesService.prototype.RequestDispatchTo = function (request) {
        return this._service.call(request, 'Ams/Relates/RequestDispatchTo');
    };
    RelatesService.prototype.RequestEditAfterClose = function (request) {
        return this._service.call(request, 'Ams/Relates/RequestEditAfterClose');
    };
    RelatesService.prototype.RequestInitiatedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/RequestInitiatedBy');
    };
    RelatesService.prototype.RequestSubmitTo = function (request) {
        return this._service.call(request, 'Ams/Relates/RequestSubmitTo');
    };
    RelatesService.prototype.SearchViewCost = function (request) {
        return this._service.call(request, 'Ams/Relates/SearchViewCost');
    };
    RelatesService.prototype.TableFields = function (request) {
        return this._service.call(request, 'Ams/Relates/TableFields');
    };
    RelatesService.prototype.TaskAssignTo = function (request) {
        return this._service.call(request, 'Ams/Relates/TaskAssignTo');
    };
    RelatesService.prototype.TransferRequestedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/TransferRequestedBy');
    };
    RelatesService.prototype.WorkOrderCancelledBy = function (request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderCancelledBy');
    };
    RelatesService.prototype.WorkOrderClosedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderClosedBy');
    };
    RelatesService.prototype.WorkOrderCompletedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderCompletedBy');
    };
    RelatesService.prototype.WorkOrderEditAfterClose = function (request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderEditAfterClose');
    };
    RelatesService.prototype.WorkOrderInitiatedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderInitiatedBy');
    };
    RelatesService.prototype.WorkOrderRequestedBy = function (request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderRequestedBy');
    };
    RelatesService.prototype.WorkOrderSubmitTo = function (request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderSubmitTo');
    };
    RelatesService.prototype.WorkOrderSupervisors = function (request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderSupervisors');
    };
    return RelatesService;
}());

var SearchService = /** @class */ (function () {
    function SearchService(service) {
        this._service = service;
    }
    SearchService.prototype.AssetCalculationResultSaved = function (request) {
        return this._service.call(request, 'Ams/Search/AssetCalculationResultSaved');
    };
    SearchService.prototype.Definition = function (request) {
        return this._service.call(request, 'Ams/Search/Definition');
    };
    SearchService.prototype.DefinitionNames = function (request) {
        return this._service.call(request, 'Ams/Search/DefinitionNames');
    };
    SearchService.prototype.Definitions = function (request) {
        return this._service.call(request, 'Ams/Search/Definitions');
    };
    SearchService.prototype.DeleteDefinitions = function (request) {
        return this._service.call(request, 'Ams/Search/DeleteDefinitions');
    };
    SearchService.prototype.DisplayFields = function (request) {
        return this._service.call(request, 'Ams/Search/DisplayFields');
    };
    SearchService.prototype.Execute = function (request) {
        return this._service.call(request, 'Ams/Search/Execute');
    };
    SearchService.prototype.GISSaved = function (request) {
        return this._service.call(request, 'Ams/Search/GISSaved');
    };
    SearchService.prototype.InspectionSaved = function (request) {
        return this._service.call(request, 'Ams/Search/InspectionSaved');
    };
    SearchService.prototype.MaterialSaved = function (request) {
        return this._service.call(request, 'Ams/Search/MaterialSaved');
    };
    SearchService.prototype.PllSaved = function (request) {
        return this._service.call(request, 'Ams/Search/PllSaved');
    };
    SearchService.prototype.RecentActivity = function (request) {
        return this._service.call(request, 'Ams/Search/RecentActivity');
    };
    SearchService.prototype.RequestSaved = function (request) {
        return this._service.call(request, 'Ams/Search/RequestSaved');
    };
    SearchService.prototype.RequisitionSaved = function (request) {
        return this._service.call(request, 'Ams/Search/RequisitionSaved');
    };
    SearchService.prototype.SavedByType = function (request) {
        return this._service.call(request, 'Ams/Search/SavedByType');
    };
    SearchService.prototype.SaveDefinition = function (request) {
        return this._service.call(request, 'Ams/Search/SaveDefinition');
    };
    SearchService.prototype.StoreTransactionSaved = function (request) {
        return this._service.call(request, 'Ams/Search/StoreTransactionSaved');
    };
    SearchService.prototype.Types = function (request) {
        return this._service.call(request, 'Ams/Search/Types');
    };
    SearchService.prototype.UpdateEurl = function (request) {
        return this._service.call(request, 'Ams/Search/UpdateEurl');
    };
    SearchService.prototype.WorkActivitySaved = function (request) {
        return this._service.call(request, 'Ams/Search/WorkActivitySaved');
    };
    SearchService.prototype.WorkOrderEntitySaved = function (request) {
        return this._service.call(request, 'Ams/Search/WorkOrderEntitySaved');
    };
    SearchService.prototype.WorkOrderSaved = function (request) {
        return this._service.call(request, 'Ams/Search/WorkOrderSaved');
    };
    return SearchService;
}());

var SecurityService = /** @class */ (function () {
    function SecurityService(service) {
        this._service = service;
    }
    SecurityService.prototype.Contract = function (request) {
        return this._service.call(request, 'Ams/Security/Contract');
    };
    SecurityService.prototype.Contracts = function (request) {
        return this._service.call(request, 'Ams/Security/Contracts');
    };
    SecurityService.prototype.Employee = function (request) {
        return this._service.call(request, 'Ams/Security/Employee');
    };
    SecurityService.prototype.Inspection = function (request) {
        return this._service.call(request, 'Ams/Security/Inspection');
    };
    SecurityService.prototype.Inspections = function (request) {
        return this._service.call(request, 'Ams/Security/Inspections');
    };
    SecurityService.prototype.InspectionTemplate = function (request) {
        return this._service.call(request, 'Ams/Security/InspectionTemplate');
    };
    SecurityService.prototype.InspectionTemplates = function (request) {
        return this._service.call(request, 'Ams/Security/InspectionTemplates');
    };
    SecurityService.prototype.Problem = function (request) {
        return this._service.call(request, 'Ams/Security/Problem');
    };
    SecurityService.prototype.Problems = function (request) {
        return this._service.call(request, 'Ams/Security/Problems');
    };
    SecurityService.prototype.Projects = function (request) {
        return this._service.call(request, 'Ams/Security/Projects');
    };
    SecurityService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/Security/Search');
    };
    SecurityService.prototype.ServiceRequest = function (request) {
        return this._service.call(request, 'Ams/Security/ServiceRequest');
    };
    SecurityService.prototype.ServiceRequests = function (request) {
        return this._service.call(request, 'Ams/Security/ServiceRequests');
    };
    SecurityService.prototype.WorkOrder = function (request) {
        return this._service.call(request, 'Ams/Security/WorkOrder');
    };
    SecurityService.prototype.WorkOrderBySid = function (request) {
        return this._service.call(request, 'Ams/Security/WorkOrderBySid');
    };
    SecurityService.prototype.WorkOrders = function (request) {
        return this._service.call(request, 'Ams/Security/WorkOrders');
    };
    SecurityService.prototype.WorkOrderTemplate = function (request) {
        return this._service.call(request, 'Ams/Security/WorkOrderTemplate');
    };
    return SecurityService;
}());

var ServiceRequestService = /** @class */ (function () {
    function ServiceRequestService(service) {
        this._service = service;
    }
    ServiceRequestService.prototype.AddComments = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/AddComments');
    };
    ServiceRequestService.prototype.AllStreetCode = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/AllStreetCode');
    };
    ServiceRequestService.prototype.AuditLog = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/AuditLog');
    };
    ServiceRequestService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ById');
    };
    ServiceRequestService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ByIds');
    };
    ServiceRequestService.prototype.ByIncidentAndEmail = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ByIncidentAndEmail');
    };
    ServiceRequestService.prototype.ByOtherSystemId = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ByOtherSystemId');
    };
    ServiceRequestService.prototype.Cancel = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Cancel');
    };
    ServiceRequestService.prototype.ChangeCustomFieldCategory = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ChangeCustomFieldCategory');
    };
    ServiceRequestService.prototype.ChangeProblem = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ChangeProblem');
    };
    ServiceRequestService.prototype.Close = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Close');
    };
    ServiceRequestService.prototype.Combine = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Combine');
    };
    ServiceRequestService.prototype.Comments = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Comments');
    };
    ServiceRequestService.prototype.CommentsByRequestIds = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/CommentsByRequestIds');
    };
    ServiceRequestService.prototype.Create = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Create');
    };
    ServiceRequestService.prototype.CreateSearchDefinition = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/CreateSearchDefinition');
    };
    ServiceRequestService.prototype.CustomFieldCategories = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/CustomFieldCategories');
    };
    ServiceRequestService.prototype.CustomFields = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/CustomFields');
    };
    ServiceRequestService.prototype.DefaultStatus = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/DefaultStatus');
    };
    ServiceRequestService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Delete');
    };
    ServiceRequestService.prototype.DispatchTo = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/DispatchTo');
    };
    ServiceRequestService.prototype.LinkCases = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/LinkCases');
    };
    ServiceRequestService.prototype.LinkInspections = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/LinkInspections');
    };
    ServiceRequestService.prototype.LinkWorkOrders = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/LinkWorkOrders');
    };
    ServiceRequestService.prototype.Move = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Move');
    };
    ServiceRequestService.prototype.Priorities = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Priorities');
    };
    ServiceRequestService.prototype.ProblemLeafByOtherSysCodeDescs = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ProblemLeafByOtherSysCodeDescs');
    };
    ServiceRequestService.prototype.ProblemLeafBySid = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ProblemLeafBySid');
    };
    ServiceRequestService.prototype.ProblemNodes = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ProblemNodes');
    };
    ServiceRequestService.prototype.Problems = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Problems');
    };
    ServiceRequestService.prototype.ProblemsByKeywords = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/ProblemsByKeywords');
    };
    ServiceRequestService.prototype.QA = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/QA');
    };
    ServiceRequestService.prototype.Reopen = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Reopen');
    };
    ServiceRequestService.prototype.RequestInspections = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/RequestInspections');
    };
    ServiceRequestService.prototype.RequestWorkOrders = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/RequestWorkOrders');
    };
    ServiceRequestService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Search');
    };
    ServiceRequestService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/SearchObject');
    };
    ServiceRequestService.prototype.Statuses = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Statuses');
    };
    ServiceRequestService.prototype.SubmitTo = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/SubmitTo');
    };
    ServiceRequestService.prototype.TemplateCustomFields = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/TemplateCustomFields');
    };
    ServiceRequestService.prototype.Uncancel = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Uncancel');
    };
    ServiceRequestService.prototype.UnlinkInspections = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/UnlinkInspections');
    };
    ServiceRequestService.prototype.UnlinkWorkOrders = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/UnlinkWorkOrders');
    };
    ServiceRequestService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/ServiceRequest/Update');
    };
    return ServiceRequestService;
}());

var ServiceRequestTemplateService = /** @class */ (function () {
    function ServiceRequestTemplateService(service) {
        this._service = service;
    }
    ServiceRequestTemplateService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/ByIds');
    };
    ServiceRequestTemplateService.prototype.CreateSearchDefinition = function (request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/CreateSearchDefinition');
    };
    ServiceRequestTemplateService.prototype.QA = function (request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/QA');
    };
    ServiceRequestTemplateService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/Search');
    };
    ServiceRequestTemplateService.prototype.Templates = function (request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/Templates');
    };
    ServiceRequestTemplateService.prototype.WorkOrderTemplates = function (request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/WorkOrderTemplates');
    };
    return ServiceRequestTemplateService;
}());

var StoreroomService = /** @class */ (function () {
    function StoreroomService(service) {
        this._service = service;
    }
    StoreroomService.prototype.Accounts = function (request) {
        return this._service.call(request, 'Ams/Storeroom/Accounts');
    };
    StoreroomService.prototype.AddAudit = function (request) {
        return this._service.call(request, 'Ams/Storeroom/AddAudit');
    };
    StoreroomService.prototype.AddIssue = function (request) {
        return this._service.call(request, 'Ams/Storeroom/AddIssue');
    };
    StoreroomService.prototype.AddReceive = function (request) {
        return this._service.call(request, 'Ams/Storeroom/AddReceive');
    };
    StoreroomService.prototype.AddRequisition = function (request) {
        return this._service.call(request, 'Ams/Storeroom/AddRequisition');
    };
    StoreroomService.prototype.AddRequisitionItem = function (request) {
        return this._service.call(request, 'Ams/Storeroom/AddRequisitionItem');
    };
    StoreroomService.prototype.AddSupplier = function (request) {
        return this._service.call(request, 'Ams/Storeroom/AddSupplier');
    };
    StoreroomService.prototype.AddSupplierMaterial = function (request) {
        return this._service.call(request, 'Ams/Storeroom/AddSupplierMaterial');
    };
    StoreroomService.prototype.AddTransfer = function (request) {
        return this._service.call(request, 'Ams/Storeroom/AddTransfer');
    };
    StoreroomService.prototype.AssemblyMaterial = function (request) {
        return this._service.call(request, 'Ams/Storeroom/AssemblyMaterial');
    };
    StoreroomService.prototype.BuildAssemblyMaterial = function (request) {
        return this._service.call(request, 'Ams/Storeroom/BuildAssemblyMaterial');
    };
    StoreroomService.prototype.MaterialsByEmployeeSid = function (request) {
        return this._service.call(request, 'Ams/Storeroom/MaterialsByEmployeeSid');
    };
    StoreroomService.prototype.MaterialSearch = function (request) {
        return this._service.call(request, 'Ams/Storeroom/MaterialSearch');
    };
    StoreroomService.prototype.RequisitionItems = function (request) {
        return this._service.call(request, 'Ams/Storeroom/RequisitionItems');
    };
    StoreroomService.prototype.Requisitions = function (request) {
        return this._service.call(request, 'Ams/Storeroom/Requisitions');
    };
    StoreroomService.prototype.SearchSuppliersByUid = function (request) {
        return this._service.call(request, 'Ams/Storeroom/SearchSuppliersByUid');
    };
    StoreroomService.prototype.StoreDomainsByEmployee = function (request) {
        return this._service.call(request, 'Ams/Storeroom/StoreDomainsByEmployee');
    };
    StoreroomService.prototype.Storerooms = function (request) {
        return this._service.call(request, 'Ams/Storeroom/Storerooms');
    };
    StoreroomService.prototype.StoreroomSecurity = function (request) {
        return this._service.call(request, 'Ams/Storeroom/StoreroomSecurity');
    };
    StoreroomService.prototype.StoreroomStocks = function (request) {
        return this._service.call(request, 'Ams/Storeroom/StoreroomStocks');
    };
    StoreroomService.prototype.SupplierMaterial = function (request) {
        return this._service.call(request, 'Ams/Storeroom/SupplierMaterial');
    };
    StoreroomService.prototype.Suppliers = function (request) {
        return this._service.call(request, 'Ams/Storeroom/Suppliers');
    };
    StoreroomService.prototype.UpdateRequisition = function (request) {
        return this._service.call(request, 'Ams/Storeroom/UpdateRequisition');
    };
    StoreroomService.prototype.UpdateStoreroomStock = function (request) {
        return this._service.call(request, 'Ams/Storeroom/UpdateStoreroomStock');
    };
    StoreroomService.prototype.UpdateSupplier = function (request) {
        return this._service.call(request, 'Ams/Storeroom/UpdateSupplier');
    };
    StoreroomService.prototype.UpdateSupplierMaterial = function (request) {
        return this._service.call(request, 'Ams/Storeroom/UpdateSupplierMaterial');
    };
    return StoreroomService;
}());

var TasksService = /** @class */ (function () {
    function TasksService(service) {
        this._service = service;
    }
    TasksService.prototype.Add = function (request) {
        return this._service.call(request, 'Ams/Tasks/Add');
    };
    TasksService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/Tasks/ById');
    };
    TasksService.prototype.ByWorkOrder = function (request) {
        return this._service.call(request, 'Ams/Tasks/ByWorkOrder');
    };
    TasksService.prototype.ByWorkOrderTemplate = function (request) {
        return this._service.call(request, 'Ams/Tasks/ByWorkOrderTemplate');
    };
    TasksService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/Tasks/Delete');
    };
    TasksService.prototype.Keywords = function (request) {
        return this._service.call(request, 'Ams/Tasks/Keywords');
    };
    TasksService.prototype.Statuses = function (request) {
        return this._service.call(request, 'Ams/Tasks/Statuses');
    };
    TasksService.prototype.TaskCodes = function (request) {
        return this._service.call(request, 'Ams/Tasks/TaskCodes');
    };
    TasksService.prototype.TaskNodes = function (request) {
        return this._service.call(request, 'Ams/Tasks/TaskNodes');
    };
    TasksService.prototype.Template = function (request) {
        return this._service.call(request, 'Ams/Tasks/Template');
    };
    TasksService.prototype.Templates = function (request) {
        return this._service.call(request, 'Ams/Tasks/Templates');
    };
    TasksService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/Tasks/Update');
    };
    return TasksService;
}());

var TvInspectionService = /** @class */ (function () {
    function TvInspectionService(service) {
        this._service = service;
    }
    TvInspectionService.prototype.AddObservation = function (request) {
        return this._service.call(request, 'Ams/TvInspection/AddObservation');
    };
    TvInspectionService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/TvInspection/ById');
    };
    TvInspectionService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/TvInspection/ByIds');
    };
    TvInspectionService.prototype.ByWorkOrder = function (request) {
        return this._service.call(request, 'Ams/TvInspection/ByWorkOrder');
    };
    TvInspectionService.prototype.CctvObservationCodeTypes = function (request) {
        return this._service.call(request, 'Ams/TvInspection/CctvObservationCodeTypes');
    };
    TvInspectionService.prototype.ChangeCustomFieldCategory = function (request) {
        return this._service.call(request, 'Ams/TvInspection/ChangeCustomFieldCategory');
    };
    TvInspectionService.prototype.CodeDescriptions = function (request) {
        return this._service.call(request, 'Ams/TvInspection/CodeDescriptions');
    };
    TvInspectionService.prototype.ConfirmDyeLeaks = function (request) {
        return this._service.call(request, 'Ams/TvInspection/ConfirmDyeLeaks');
    };
    TvInspectionService.prototype.ConfirmSmokeTests = function (request) {
        return this._service.call(request, 'Ams/TvInspection/ConfirmSmokeTests');
    };
    TvInspectionService.prototype.Create = function (request) {
        return this._service.call(request, 'Ams/TvInspection/Create');
    };
    TvInspectionService.prototype.CreateFromPacp = function (request) {
        return this._service.call(request, 'Ams/TvInspection/CreateFromPacp');
    };
    TvInspectionService.prototype.CreateSearchDefinition = function (request) {
        return this._service.call(request, 'Ams/TvInspection/CreateSearchDefinition');
    };
    TvInspectionService.prototype.DescriptionScores = function (request) {
        return this._service.call(request, 'Ams/TvInspection/DescriptionScores');
    };
    TvInspectionService.prototype.DownstreamNode = function (request) {
        return this._service.call(request, 'Ams/TvInspection/DownstreamNode');
    };
    TvInspectionService.prototype.InspectedBy = function (request) {
        return this._service.call(request, 'Ams/TvInspection/InspectedBy');
    };
    TvInspectionService.prototype.Observation = function (request) {
        return this._service.call(request, 'Ams/TvInspection/Observation');
    };
    TvInspectionService.prototype.ObservationCauseCodeDescriptions = function (request) {
        return this._service.call(request, 'Ams/TvInspection/ObservationCauseCodeDescriptions');
    };
    TvInspectionService.prototype.ObservationCodeTypes = function (request) {
        return this._service.call(request, 'Ams/TvInspection/ObservationCodeTypes');
    };
    TvInspectionService.prototype.Observations = function (request) {
        return this._service.call(request, 'Ams/TvInspection/Observations');
    };
    TvInspectionService.prototype.ReviewedBy = function (request) {
        return this._service.call(request, 'Ams/TvInspection/ReviewedBy');
    };
    TvInspectionService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/TvInspection/Search');
    };
    TvInspectionService.prototype.UnitsOfMeasure = function (request) {
        return this._service.call(request, 'Ams/TvInspection/UnitsOfMeasure');
    };
    TvInspectionService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/TvInspection/Update');
    };
    TvInspectionService.prototype.UpdateObservation = function (request) {
        return this._service.call(request, 'Ams/TvInspection/UpdateObservation');
    };
    TvInspectionService.prototype.UpstreamNode = function (request) {
        return this._service.call(request, 'Ams/TvInspection/UpstreamNode');
    };
    return TvInspectionService;
}());

var UniversalCustomFieldService = /** @class */ (function () {
    function UniversalCustomFieldService(service) {
        this._service = service;
    }
    UniversalCustomFieldService.prototype.Add = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Add');
    };
    UniversalCustomFieldService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/ById');
    };
    UniversalCustomFieldService.prototype.ByType = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/ByType');
    };
    UniversalCustomFieldService.prototype.Contract = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Contract');
    };
    UniversalCustomFieldService.prototype.CustomerCall = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/CustomerCall');
    };
    UniversalCustomFieldService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Delete');
    };
    UniversalCustomFieldService.prototype.Inspection = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Inspection');
    };
    UniversalCustomFieldService.prototype.MoveField = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/MoveField');
    };
    UniversalCustomFieldService.prototype.ServiceRequest = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/ServiceRequest');
    };
    UniversalCustomFieldService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Update');
    };
    UniversalCustomFieldService.prototype.WorkOrder = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/WorkOrder');
    };
    return UniversalCustomFieldService;
}());

var WorkOrderService = /** @class */ (function () {
    function WorkOrderService(service) {
        this._service = service;
    }
    WorkOrderService.prototype.AddComments = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/AddComments');
    };
    WorkOrderService.prototype.AddEntities = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/AddEntities');
    };
    WorkOrderService.prototype.AuditLog = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/AuditLog');
    };
    WorkOrderService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/ById');
    };
    WorkOrderService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/ByIds');
    };
    WorkOrderService.prototype.BySid = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/BySid');
    };
    WorkOrderService.prototype.BySids = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/BySids');
    };
    WorkOrderService.prototype.Cancel = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Cancel');
    };
    WorkOrderService.prototype.Categories = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Categories');
    };
    WorkOrderService.prototype.ChangeCustomFieldCategory = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/ChangeCustomFieldCategory');
    };
    WorkOrderService.prototype.Close = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Close');
    };
    WorkOrderService.prototype.Combine = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Combine');
    };
    WorkOrderService.prototype.Comments = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Comments');
    };
    WorkOrderService.prototype.CommentsByWorkOrderIds = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CommentsByWorkOrderIds');
    };
    WorkOrderService.prototype.Create = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Create');
    };
    WorkOrderService.prototype.CreateFromInspection = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CreateFromInspection');
    };
    WorkOrderService.prototype.CreateFromParent = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CreateFromParent');
    };
    WorkOrderService.prototype.CreateFromServiceRequest = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CreateFromServiceRequest');
    };
    WorkOrderService.prototype.CreateSearchDefinition = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CreateSearchDefinition');
    };
    WorkOrderService.prototype.CustomFields = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CustomFields');
    };
    WorkOrderService.prototype.CustomFieldsByWorkOrderSids = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CustomFieldsByWorkOrderSids');
    };
    WorkOrderService.prototype.CycleFrom = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CycleFrom');
    };
    WorkOrderService.prototype.CycleIntervals = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CycleIntervals');
    };
    WorkOrderService.prototype.CycleTypes = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/CycleTypes');
    };
    WorkOrderService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Delete');
    };
    WorkOrderService.prototype.Entities = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Entities');
    };
    WorkOrderService.prototype.ExpenseTypes = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/ExpenseTypes');
    };
    WorkOrderService.prototype.InstructionsByWorkOrderIds = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/InstructionsByWorkOrderIds');
    };
    WorkOrderService.prototype.InstructionsByWorkOrderSids = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/InstructionsByWorkOrderSids');
    };
    WorkOrderService.prototype.LinkInspections = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/LinkInspections');
    };
    WorkOrderService.prototype.LinkServiceRequests = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/LinkServiceRequests');
    };
    WorkOrderService.prototype.Move = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Move');
    };
    WorkOrderService.prototype.Priorities = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Priorities');
    };
    WorkOrderService.prototype.RemoveEntities = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/RemoveEntities');
    };
    WorkOrderService.prototype.ReOpen = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/ReOpen');
    };
    WorkOrderService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Search');
    };
    WorkOrderService.prototype.SearchForSids = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/SearchForSids');
    };
    WorkOrderService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/SearchObject');
    };
    WorkOrderService.prototype.Stages = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Stages');
    };
    WorkOrderService.prototype.Statuses = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Statuses');
    };
    WorkOrderService.prototype.SubmitTos = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/SubmitTos');
    };
    WorkOrderService.prototype.Supervisors = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Supervisors');
    };
    WorkOrderService.prototype.Template = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Template');
    };
    WorkOrderService.prototype.TemplateCustomFields = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/TemplateCustomFields');
    };
    WorkOrderService.prototype.Templates = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Templates');
    };
    WorkOrderService.prototype.Uncancel = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Uncancel');
    };
    WorkOrderService.prototype.UnlinkInspections = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/UnlinkInspections');
    };
    WorkOrderService.prototype.UnlinkServiceRequests = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/UnlinkServiceRequests');
    };
    WorkOrderService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/Update');
    };
    WorkOrderService.prototype.UpdateEntity = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/UpdateEntity');
    };
    WorkOrderService.prototype.WorkOrderInspections = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/WorkOrderInspections');
    };
    WorkOrderService.prototype.WorkOrderServiceRequests = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/WorkOrderServiceRequests');
    };
    WorkOrderService.prototype.WorkOrderWorkOrders = function (request) {
        return this._service.call(request, 'Ams/WorkOrder/WorkOrderWorkOrders');
    };
    return WorkOrderService;
}());

var WorkOrderEntityService = /** @class */ (function () {
    function WorkOrderEntityService(service) {
        this._service = service;
    }
    WorkOrderEntityService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/WorkOrderEntity/ByIds');
    };
    WorkOrderEntityService.prototype.CreateSearchDefinition = function (request) {
        return this._service.call(request, 'Ams/WorkOrderEntity/CreateSearchDefinition');
    };
    WorkOrderEntityService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/WorkOrderEntity/Search');
    };
    return WorkOrderEntityService;
}());

var WorkOrderTemplateService = /** @class */ (function () {
    function WorkOrderTemplateService(service) {
        this._service = service;
    }
    WorkOrderTemplateService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/ByIds');
    };
    WorkOrderTemplateService.prototype.ByProblemSids = function (request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/ByProblemSids');
    };
    WorkOrderTemplateService.prototype.CustomFieldCategories = function (request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/CustomFieldCategories');
    };
    WorkOrderTemplateService.prototype.CustomFields = function (request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/CustomFields');
    };
    WorkOrderTemplateService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/Search');
    };
    WorkOrderTemplateService.prototype.TemplateInspections = function (request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/TemplateInspections');
    };
    WorkOrderTemplateService.prototype.TemplateNames = function (request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/TemplateNames');
    };
    return WorkOrderTemplateService;
}());

var MapServiceService = /** @class */ (function () {
    function MapServiceService(service) {
        this._service = service;
    }
    MapServiceService.prototype.Configuration = function (request) {
        return this._service.call(request, 'Gis/MapService/Configuration');
    };
    MapServiceService.prototype.Domain = function (request) {
        return this._service.call(request, 'Gis/MapService/Domain');
    };
    MapServiceService.prototype.DownloadMobileMapCache = function (request) {
        return this._service.call(request, 'Gis/MapService/DownloadMobileMapCache');
    };
    MapServiceService.prototype.InitialExtent = function (request) {
        return this._service.call(request, 'Gis/MapService/InitialExtent');
    };
    MapServiceService.prototype.InspectionConfiguration = function (request) {
        return this._service.call(request, 'Gis/MapService/InspectionConfiguration');
    };
    MapServiceService.prototype.ServiceRequestConfiguration = function (request) {
        return this._service.call(request, 'Gis/MapService/ServiceRequestConfiguration');
    };
    MapServiceService.prototype.User = function (request) {
        return this._service.call(request, 'Gis/MapService/User');
    };
    MapServiceService.prototype.WorkOrderConfiguration = function (request) {
        return this._service.call(request, 'Gis/MapService/WorkOrderConfiguration');
    };
    return MapServiceService;
}());

var BusinessCaseService = /** @class */ (function () {
    function BusinessCaseService(service) {
        this._service = service;
    }
    BusinessCaseService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/BusinessCase/Add');
    };
    BusinessCaseService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/BusinessCase/Update');
    };
    return BusinessCaseService;
}());

var CaseService = /** @class */ (function () {
    function CaseService(service) {
        this._service = service;
    }
    CaseService.prototype.Create = function (request) {
        return this._service.call(request, 'PLL/Case/Create');
    };
    CaseService.prototype.CreateChild = function (request) {
        return this._service.call(request, 'PLL/Case/CreateChild');
    };
    return CaseService;
}());

var CaseAddressService = /** @class */ (function () {
    function CaseAddressService(service) {
        this._service = service;
    }
    CaseAddressService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseAddress/Add');
    };
    CaseAddressService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseAddress/ByCaObjectId');
    };
    CaseAddressService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseAddress/Delete');
    };
    CaseAddressService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseAddress/DeleteByCaObjectId');
    };
    CaseAddressService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseAddress/Search');
    };
    CaseAddressService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'PLL/CaseAddress/SearchObject');
    };
    return CaseAddressService;
}());

var CaseAssetService = /** @class */ (function () {
    function CaseAssetService(service) {
        this._service = service;
    }
    CaseAssetService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseAsset/ByCaObjectId');
    };
    CaseAssetService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseAsset/DeleteByCaObjectId');
    };
    CaseAssetService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseAsset/Search');
    };
    CaseAssetService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'PLL/CaseAsset/SearchObject');
    };
    return CaseAssetService;
}());

var CaseChildObjectService = /** @class */ (function () {
    function CaseChildObjectService(service) {
        this._service = service;
    }
    CaseChildObjectService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseChildObject/ByCaObjectId');
    };
    CaseChildObjectService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseChildObject/DeleteByCaObjectId');
    };
    CaseChildObjectService.prototype.GetList = function (request) {
        return this._service.call(request, 'PLL/CaseChildObject/GetList');
    };
    CaseChildObjectService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseChildObject/Search');
    };
    CaseChildObjectService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'PLL/CaseChildObject/SearchObject');
    };
    return CaseChildObjectService;
}());

var CaseConditionService = /** @class */ (function () {
    function CaseConditionService(service) {
        this._service = service;
    }
    CaseConditionService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseCondition/Add');
    };
    CaseConditionService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseCondition/ByCaObjectId');
    };
    CaseConditionService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseCondition/DeleteByCaObjectId');
    };
    CaseConditionService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseCondition/Search');
    };
    CaseConditionService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'PLL/CaseCondition/SearchObject');
    };
    return CaseConditionService;
}());

var CaseContractorService = /** @class */ (function () {
    function CaseContractorService(service) {
        this._service = service;
    }
    CaseContractorService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseContractor/Add');
    };
    CaseContractorService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseContractor/ByCaObjectId');
    };
    CaseContractorService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseContractor/DeleteByCaObjectId');
    };
    CaseContractorService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseContractor/Search');
    };
    CaseContractorService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'PLL/CaseContractor/SearchObject');
    };
    return CaseContractorService;
}());

var CaseCorrectionsService = /** @class */ (function () {
    function CaseCorrectionsService(service) {
        this._service = service;
    }
    CaseCorrectionsService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseCorrections/Add');
    };
    CaseCorrectionsService.prototype.ByCaTaskIds = function (request) {
        return this._service.call(request, 'PLL/CaseCorrections/ByCaTaskIds');
    };
    CaseCorrectionsService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseCorrections/Search');
    };
    CaseCorrectionsService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/CaseCorrections/Update');
    };
    return CaseCorrectionsService;
}());

var CaseCorrStatusService = /** @class */ (function () {
    function CaseCorrStatusService(service) {
        this._service = service;
    }
    CaseCorrStatusService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseCorrStatus/Add');
    };
    CaseCorrStatusService.prototype.ByCaCorrectionsIds = function (request) {
        return this._service.call(request, 'PLL/CaseCorrStatus/ByCaCorrectionsIds');
    };
    CaseCorrStatusService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseCorrStatus/Search');
    };
    return CaseCorrStatusService;
}());

var CaseDataDetailService = /** @class */ (function () {
    function CaseDataDetailService(service) {
        this._service = service;
    }
    CaseDataDetailService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseDataDetail/Add');
    };
    CaseDataDetailService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseDataDetail/Search');
    };
    CaseDataDetailService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'PLL/CaseDataDetail/SearchObject');
    };
    CaseDataDetailService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/CaseDataDetail/Update');
    };
    CaseDataDetailService.prototype.UpdateLock = function (request) {
        return this._service.call(request, 'PLL/CaseDataDetail/UpdateLock');
    };
    CaseDataDetailService.prototype.WIPAdd = function (request) {
        return this._service.call(request, 'PLL/CaseDataDetail/WIPAdd');
    };
    return CaseDataDetailService;
}());

var CaseDataGroupService = /** @class */ (function () {
    function CaseDataGroupService(service) {
        this._service = service;
    }
    CaseDataGroupService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseDataGroup/Add');
    };
    CaseDataGroupService.prototype.AddDefault = function (request) {
        return this._service.call(request, 'PLL/CaseDataGroup/AddDefault');
    };
    CaseDataGroupService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseDataGroup/ByCaObjectId');
    };
    CaseDataGroupService.prototype.CheckGISChanges = function (request) {
        return this._service.call(request, 'PLL/CaseDataGroup/CheckGISChanges');
    };
    CaseDataGroupService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseDataGroup/DeleteByCaObjectId');
    };
    CaseDataGroupService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseDataGroup/Search');
    };
    CaseDataGroupService.prototype.UpdateFromAsset = function (request) {
        return this._service.call(request, 'PLL/CaseDataGroup/UpdateFromAsset');
    };
    return CaseDataGroupService;
}());

var CaseDataListValuesService = /** @class */ (function () {
    function CaseDataListValuesService(service) {
        this._service = service;
    }
    CaseDataListValuesService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseDataListValues/Add');
    };
    CaseDataListValuesService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseDataListValues/Delete');
    };
    CaseDataListValuesService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseDataListValues/Search');
    };
    CaseDataListValuesService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'PLL/CaseDataListValues/SearchObject');
    };
    return CaseDataListValuesService;
}());

var CaseDepositService = /** @class */ (function () {
    function CaseDepositService(service) {
        this._service = service;
    }
    CaseDepositService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseDeposit/Add');
    };
    CaseDepositService.prototype.AddDefault = function (request) {
        return this._service.call(request, 'PLL/CaseDeposit/AddDefault');
    };
    CaseDepositService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseDeposit/ByCaObjectId');
    };
    CaseDepositService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseDeposit/Delete');
    };
    CaseDepositService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseDeposit/DeleteByCaObjectId');
    };
    CaseDepositService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseDeposit/Search');
    };
    return CaseDepositService;
}());

var CaseFeesService = /** @class */ (function () {
    function CaseFeesService(service) {
        this._service = service;
    }
    CaseFeesService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseFees/Add');
    };
    CaseFeesService.prototype.AddDefault = function (request) {
        return this._service.call(request, 'PLL/CaseFees/AddDefault');
    };
    CaseFeesService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseFees/ByCaObjectId');
    };
    CaseFeesService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseFees/Delete');
    };
    CaseFeesService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseFees/DeleteByCaObjectId');
    };
    CaseFeesService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseFees/Search');
    };
    return CaseFeesService;
}());

var CaseFeesDataDetailService = /** @class */ (function () {
    function CaseFeesDataDetailService(service) {
        this._service = service;
    }
    CaseFeesDataDetailService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseFeesDataDetail/Add');
    };
    CaseFeesDataDetailService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseFeesDataDetail/Delete');
    };
    CaseFeesDataDetailService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseFeesDataDetail/Search');
    };
    return CaseFeesDataDetailService;
}());

var CaseFeesDataGroupService = /** @class */ (function () {
    function CaseFeesDataGroupService(service) {
        this._service = service;
    }
    CaseFeesDataGroupService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseFeesDataGroup/Add');
    };
    CaseFeesDataGroupService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseFeesDataGroup/Delete');
    };
    CaseFeesDataGroupService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseFeesDataGroup/Search');
    };
    return CaseFeesDataGroupService;
}());

var CaseFlagsService = /** @class */ (function () {
    function CaseFlagsService(service) {
        this._service = service;
    }
    CaseFlagsService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseFlags/Add');
    };
    CaseFlagsService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseFlags/ByCaObjectId');
    };
    CaseFlagsService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseFlags/Delete');
    };
    CaseFlagsService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseFlags/DeleteByCaObjectId');
    };
    CaseFlagsService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseFlags/Search');
    };
    return CaseFlagsService;
}());

var CaseInspectionRequestService = /** @class */ (function () {
    function CaseInspectionRequestService(service) {
        this._service = service;
    }
    CaseInspectionRequestService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseInspectionRequest/Add');
    };
    CaseInspectionRequestService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseInspectionRequest/ByCaObjectId');
    };
    CaseInspectionRequestService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseInspectionRequest/Delete');
    };
    CaseInspectionRequestService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseInspectionRequest/DeleteByCaObjectId');
    };
    CaseInspectionRequestService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseInspectionRequest/Search');
    };
    return CaseInspectionRequestService;
}());

var CaseInstReleasesService = /** @class */ (function () {
    function CaseInstReleasesService(service) {
        this._service = service;
    }
    CaseInstReleasesService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseInstReleases/Add');
    };
    CaseInstReleasesService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseInstReleases/Delete');
    };
    CaseInstReleasesService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseInstReleases/Search');
    };
    return CaseInstReleasesService;
}());

var CaseInstrumentService = /** @class */ (function () {
    function CaseInstrumentService(service) {
        this._service = service;
    }
    CaseInstrumentService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseInstrument/Add');
    };
    CaseInstrumentService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseInstrument/ByCaObjectId');
    };
    CaseInstrumentService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseInstrument/Delete');
    };
    CaseInstrumentService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseInstrument/DeleteByCaObjectId');
    };
    CaseInstrumentService.prototype.GetList = function (request) {
        return this._service.call(request, 'PLL/CaseInstrument/GetList');
    };
    CaseInstrumentService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseInstrument/Search');
    };
    return CaseInstrumentService;
}());

var CaseLicenseService = /** @class */ (function () {
    function CaseLicenseService(service) {
        this._service = service;
    }
    CaseLicenseService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseLicense/Add');
    };
    CaseLicenseService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseLicense/ByCaObjectId');
    };
    CaseLicenseService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseLicense/Delete');
    };
    CaseLicenseService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseLicense/DeleteByCaObjectId');
    };
    CaseLicenseService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseLicense/Search');
    };
    return CaseLicenseService;
}());

var CaseNotesService = /** @class */ (function () {
    function CaseNotesService(service) {
        this._service = service;
    }
    CaseNotesService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseNotes/Add');
    };
    CaseNotesService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseNotes/ByCaObjectId');
    };
    CaseNotesService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseNotes/Delete');
    };
    CaseNotesService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseNotes/DeleteByCaObjectId');
    };
    CaseNotesService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseNotes/Search');
    };
    return CaseNotesService;
}());

var CaseObjectService = /** @class */ (function () {
    function CaseObjectService(service) {
        this._service = service;
    }
    CaseObjectService.prototype.ByIds = function (request) {
        return this._service.call(request, 'PLL/CaseObject/ByIds');
    };
    CaseObjectService.prototype.CreateCaseFromServiceRequest = function (request) {
        return this._service.call(request, 'PLL/CaseObject/CreateCaseFromServiceRequest');
    };
    CaseObjectService.prototype.DeleteCase = function (request) {
        return this._service.call(request, 'PLL/CaseObject/DeleteCase');
    };
    CaseObjectService.prototype.Move = function (request) {
        return this._service.call(request, 'PLL/CaseObject/Move');
    };
    CaseObjectService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseObject/Search');
    };
    return CaseObjectService;
}());

var CaseObjectCommentsService = /** @class */ (function () {
    function CaseObjectCommentsService(service) {
        this._service = service;
    }
    CaseObjectCommentsService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseObjectComments/Add');
    };
    CaseObjectCommentsService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseObjectComments/ByCaObjectId');
    };
    CaseObjectCommentsService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseObjectComments/Delete');
    };
    CaseObjectCommentsService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/CaseObjectComments/Update');
    };
    return CaseObjectCommentsService;
}());

var CasePaymentService = /** @class */ (function () {
    function CasePaymentService(service) {
        this._service = service;
    }
    CasePaymentService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CasePayment/Add');
    };
    CasePaymentService.prototype.AddDeposit = function (request) {
        return this._service.call(request, 'PLL/CasePayment/AddDeposit');
    };
    CasePaymentService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CasePayment/ByCaObjectId');
    };
    CasePaymentService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CasePayment/Delete');
    };
    CasePaymentService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CasePayment/DeleteByCaObjectId');
    };
    CasePaymentService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CasePayment/Search');
    };
    return CasePaymentService;
}());

var CasePaymentRefundService = /** @class */ (function () {
    function CasePaymentRefundService(service) {
        this._service = service;
    }
    CasePaymentRefundService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CasePaymentRefund/Add');
    };
    CasePaymentRefundService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CasePaymentRefund/Delete');
    };
    CasePaymentRefundService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CasePaymentRefund/Search');
    };
    CasePaymentRefundService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/CasePaymentRefund/Update');
    };
    return CasePaymentRefundService;
}());

var CasePeopleService = /** @class */ (function () {
    function CasePeopleService(service) {
        this._service = service;
    }
    CasePeopleService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CasePeople/Add');
    };
    CasePeopleService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CasePeople/ByCaObjectId');
    };
    CasePeopleService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CasePeople/Delete');
    };
    CasePeopleService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CasePeople/DeleteByCaObjectId');
    };
    CasePeopleService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CasePeople/Search');
    };
    return CasePeopleService;
}());

var CaseRelDocsService = /** @class */ (function () {
    function CaseRelDocsService(service) {
        this._service = service;
    }
    CaseRelDocsService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseRelDocs/Add');
    };
    CaseRelDocsService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseRelDocs/ByCaObjectId');
    };
    CaseRelDocsService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseRelDocs/Delete');
    };
    CaseRelDocsService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseRelDocs/DeleteByCaObjectId');
    };
    CaseRelDocsService.prototype.GetStoragePreferences = function (request) {
        return this._service.call(request, 'PLL/CaseRelDocs/GetStoragePreferences');
    };
    CaseRelDocsService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseRelDocs/Search');
    };
    return CaseRelDocsService;
}());

var CaseStatusService = /** @class */ (function () {
    function CaseStatusService(service) {
        this._service = service;
    }
    CaseStatusService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseStatus/Add');
    };
    return CaseStatusService;
}());

var CaseTaskService = /** @class */ (function () {
    function CaseTaskService(service) {
        this._service = service;
    }
    CaseTaskService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseTask/Add');
    };
    CaseTaskService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseTask/ByCaObjectId');
    };
    CaseTaskService.prototype.ByIds = function (request) {
        return this._service.call(request, 'PLL/CaseTask/ByIds');
    };
    CaseTaskService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseTask/Delete');
    };
    CaseTaskService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseTask/DeleteByCaObjectId');
    };
    CaseTaskService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseTask/Search');
    };
    CaseTaskService.prototype.SetResult = function (request) {
        return this._service.call(request, 'PLL/CaseTask/SetResult');
    };
    CaseTaskService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/CaseTask/Update');
    };
    return CaseTaskService;
}());

var CaseTaskCommentsService = /** @class */ (function () {
    function CaseTaskCommentsService(service) {
        this._service = service;
    }
    CaseTaskCommentsService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseTaskComments/Add');
    };
    CaseTaskCommentsService.prototype.ByCaTaskId = function (request) {
        return this._service.call(request, 'PLL/CaseTaskComments/ByCaTaskId');
    };
    CaseTaskCommentsService.prototype.ByCaTaskIds = function (request) {
        return this._service.call(request, 'PLL/CaseTaskComments/ByCaTaskIds');
    };
    CaseTaskCommentsService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseTaskComments/Delete');
    };
    CaseTaskCommentsService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/CaseTaskComments/Update');
    };
    return CaseTaskCommentsService;
}());

var CaseTaskResultsService = /** @class */ (function () {
    function CaseTaskResultsService(service) {
        this._service = service;
    }
    CaseTaskResultsService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseTaskResults/Add');
    };
    CaseTaskResultsService.prototype.ByCaTaskIds = function (request) {
        return this._service.call(request, 'PLL/CaseTaskResults/ByCaTaskIds');
    };
    CaseTaskResultsService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'PLL/CaseTaskResults/SearchObject');
    };
    return CaseTaskResultsService;
}());

var CaseTypeService = /** @class */ (function () {
    function CaseTypeService(service) {
        this._service = service;
    }
    CaseTypeService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseType/Add');
    };
    CaseTypeService.prototype.GetList = function (request) {
        return this._service.call(request, 'PLL/CaseType/GetList');
    };
    CaseTypeService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseType/Search');
    };
    CaseTypeService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'PLL/CaseType/SearchObject');
    };
    CaseTypeService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/CaseType/Update');
    };
    return CaseTypeService;
}());

var CaseViolationsService = /** @class */ (function () {
    function CaseViolationsService(service) {
        this._service = service;
    }
    CaseViolationsService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseViolations/Add');
    };
    CaseViolationsService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseViolations/ByCaObjectId');
    };
    CaseViolationsService.prototype.ByCaObjectIds = function (request) {
        return this._service.call(request, 'PLL/CaseViolations/ByCaObjectIds');
    };
    CaseViolationsService.prototype.ByIds = function (request) {
        return this._service.call(request, 'PLL/CaseViolations/ByIds');
    };
    CaseViolationsService.prototype.CompleteViolations = function (request) {
        return this._service.call(request, 'PLL/CaseViolations/CompleteViolations');
    };
    CaseViolationsService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseViolations/Delete');
    };
    CaseViolationsService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseViolations/DeleteByCaObjectId');
    };
    CaseViolationsService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseViolations/Search');
    };
    return CaseViolationsService;
}());

var DepartmentService = /** @class */ (function () {
    function DepartmentService(service) {
        this._service = service;
    }
    DepartmentService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/Department/Add');
    };
    return DepartmentService;
}());

var DepositService = /** @class */ (function () {
    function DepositService(service) {
        this._service = service;
    }
    DepositService.prototype.All = function (request) {
        return this._service.call(request, 'PLL/Deposit/All');
    };
    DepositService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/Deposit/Search');
    };
    return DepositService;
}());

var DisciplineService = /** @class */ (function () {
    function DisciplineService(service) {
        this._service = service;
    }
    DisciplineService.prototype.All = function (request) {
        return this._service.call(request, 'PLL/Discipline/All');
    };
    return DisciplineService;
}());

var DivisionService = /** @class */ (function () {
    function DivisionService(service) {
        this._service = service;
    }
    DivisionService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/Division/Add');
    };
    return DivisionService;
}());

var ExpirationTypeService = /** @class */ (function () {
    function ExpirationTypeService(service) {
        this._service = service;
    }
    ExpirationTypeService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/ExpirationType/Add');
    };
    return ExpirationTypeService;
}());

var FeeSetupService = /** @class */ (function () {
    function FeeSetupService(service) {
        this._service = service;
    }
    FeeSetupService.prototype.All = function (request) {
        return this._service.call(request, 'PLL/FeeSetup/All');
    };
    FeeSetupService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/FeeSetup/Search');
    };
    return FeeSetupService;
}());

var GeneralCommentsService = /** @class */ (function () {
    function GeneralCommentsService(service) {
        this._service = service;
    }
    GeneralCommentsService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/GeneralComments/Add');
    };
    GeneralCommentsService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/GeneralComments/Delete');
    };
    return GeneralCommentsService;
}());

var HolidayService = /** @class */ (function () {
    function HolidayService(service) {
        this._service = service;
    }
    HolidayService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/Holiday/Add');
    };
    HolidayService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/Holiday/Delete');
    };
    return HolidayService;
}());

var InspectionTimeBlockService = /** @class */ (function () {
    function InspectionTimeBlockService(service) {
        this._service = service;
    }
    InspectionTimeBlockService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/InspectionTimeBlock/Add');
    };
    return InspectionTimeBlockService;
}());

var NumberingGroupService = /** @class */ (function () {
    function NumberingGroupService(service) {
        this._service = service;
    }
    NumberingGroupService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/NumberingGroup/Add');
    };
    NumberingGroupService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/NumberingGroup/Update');
    };
    return NumberingGroupService;
}());

var PeopleService = /** @class */ (function () {
    function PeopleService(service) {
        this._service = service;
    }
    PeopleService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/People/Add');
    };
    return PeopleService;
}());

var PeopleRoleService = /** @class */ (function () {
    function PeopleRoleService(service) {
        this._service = service;
    }
    PeopleRoleService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/PeopleRole/Add');
    };
    return PeopleRoleService;
}());

var SubTypeService = /** @class */ (function () {
    function SubTypeService(service) {
        this._service = service;
    }
    SubTypeService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/SubType/Add');
    };
    SubTypeService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/SubType/Update');
    };
    return SubTypeService;
}());

var TaskResultDetailService = /** @class */ (function () {
    function TaskResultDetailService(service) {
        this._service = service;
    }
    TaskResultDetailService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/TaskResultDetail/Add');
    };
    TaskResultDetailService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/TaskResultDetail/Update');
    };
    return TaskResultDetailService;
}());

var TaskResultFeeInsertService = /** @class */ (function () {
    function TaskResultFeeInsertService(service) {
        this._service = service;
    }
    TaskResultFeeInsertService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/TaskResultFeeInsert/Add');
    };
    TaskResultFeeInsertService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/TaskResultFeeInsert/Delete');
    };
    TaskResultFeeInsertService.prototype.DeleteByTaskId = function (request) {
        return this._service.call(request, 'PLL/TaskResultFeeInsert/DeleteByTaskId');
    };
    TaskResultFeeInsertService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/TaskResultFeeInsert/Update');
    };
    return TaskResultFeeInsertService;
}());

var TenderTypeService = /** @class */ (function () {
    function TenderTypeService(service) {
        this._service = service;
    }
    TenderTypeService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/TenderType/Add');
    };
    TenderTypeService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/TenderType/Update');
    };
    return TenderTypeService;
}());

var ActivityLinkService = /** @class */ (function () {
    function ActivityLinkService(service) {
        this._service = service;
    }
    ActivityLinkService.prototype.Add = function (request) {
        return this._service.call(request, 'General/ActivityLink/Add');
    };
    ActivityLinkService.prototype.ByActivityIds = function (request) {
        return this._service.call(request, 'General/ActivityLink/ByActivityIds');
    };
    ActivityLinkService.prototype.ByActivitySids = function (request) {
        return this._service.call(request, 'General/ActivityLink/ByActivitySids');
    };
    ActivityLinkService.prototype.CloneByActivitySid = function (request) {
        return this._service.call(request, 'General/ActivityLink/CloneByActivitySid');
    };
    ActivityLinkService.prototype.Delete = function (request) {
        return this._service.call(request, 'General/ActivityLink/Delete');
    };
    ActivityLinkService.prototype.Remove = function (request) {
        return this._service.call(request, 'General/ActivityLink/Remove');
    };
    return ActivityLinkService;
}());

var AppDataService = /** @class */ (function () {
    function AppDataService(service) {
        this._service = service;
    }
    AppDataService.prototype.CurrentLocation = function (request) {
        return this._service.call(request, 'General/AppData/CurrentLocation');
    };
    AppDataService.prototype.SelectedEntities = function (request) {
        return this._service.call(request, 'General/AppData/SelectedEntities');
    };
    return AppDataService;
}());

var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(service) {
        this._service = service;
    }
    AuthenticationService.prototype.Authenticate = function (request) {
        return this._service.call(request, 'General/Authentication/Authenticate');
    };
    AuthenticationService.prototype.CityworksOnlineAuthenticate = function (request) {
        return this._service.call(request, 'General/Authentication/CityworksOnlineAuthenticate');
    };
    AuthenticationService.prototype.CityworksOnlineSites = function (request) {
        return this._service.call(request, 'General/Authentication/CityworksOnlineSites');
    };
    AuthenticationService.prototype.Domains = function (request) {
        return this._service.call(request, 'General/Authentication/Domains');
    };
    AuthenticationService.prototype.User = function (request) {
        return this._service.call(request, 'General/Authentication/User');
    };
    AuthenticationService.prototype.Validate = function (request) {
        return this._service.call(request, 'General/Authentication/Validate');
    };
    AuthenticationService.prototype.Version = function (request) {
        return this._service.call(request, 'General/Authentication/Version');
    };
    return AuthenticationService;
}());

var CostSummaryService = /** @class */ (function () {
    function CostSummaryService(service) {
        this._service = service;
    }
    CostSummaryService.prototype.WorkOrderEntity = function (request) {
        return this._service.call(request, 'General/CostSummary/WorkOrderEntity');
    };
    CostSummaryService.prototype.WorkOrderEntitySearch = function (request) {
        return this._service.call(request, 'General/CostSummary/WorkOrderEntitySearch');
    };
    return CostSummaryService;
}());

var CwMetaDataService = /** @class */ (function () {
    function CwMetaDataService(service) {
        this._service = service;
    }
    CwMetaDataService.prototype.ByTableNameSids = function (request) {
        return this._service.call(request, 'General/CwMetaData/ByTableNameSids');
    };
    return CwMetaDataService;
}());

var LocalizationService = /** @class */ (function () {
    function LocalizationService(service) {
        this._service = service;
    }
    LocalizationService.prototype.LocalizationSettings = function (request) {
        return this._service.call(request, 'General/Localization/LocalizationSettings');
    };
    LocalizationService.prototype.TimeZones = function (request) {
        return this._service.call(request, 'General/Localization/TimeZones');
    };
    return LocalizationService;
}());

var MessageQueueService = /** @class */ (function () {
    function MessageQueueService(service) {
        this._service = service;
    }
    MessageQueueService.prototype.ByIds = function (request) {
        return this._service.call(request, 'General/MessageQueue/ByIds');
    };
    MessageQueueService.prototype.Delete = function (request) {
        return this._service.call(request, 'General/MessageQueue/Delete');
    };
    MessageQueueService.prototype.Preferences = function (request) {
        return this._service.call(request, 'General/MessageQueue/Preferences');
    };
    MessageQueueService.prototype.Search = function (request) {
        return this._service.call(request, 'General/MessageQueue/Search');
    };
    MessageQueueService.prototype.Update = function (request) {
        return this._service.call(request, 'General/MessageQueue/Update');
    };
    MessageQueueService.prototype.UpdateMessageStatus = function (request) {
        return this._service.call(request, 'General/MessageQueue/UpdateMessageStatus');
    };
    MessageQueueService.prototype.WebHooks = function (request) {
        return this._service.call(request, 'General/MessageQueue/WebHooks');
    };
    return MessageQueueService;
}());

var PavementManagementInterfaceService = /** @class */ (function () {
    function PavementManagementInterfaceService(service) {
        this._service = service;
    }
    PavementManagementInterfaceService.prototype.ExportInspections = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ExportInspections');
    };
    PavementManagementInterfaceService.prototype.ExportInventory = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ExportInventory');
    };
    PavementManagementInterfaceService.prototype.ExportWorkHistory = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ExportWorkHistory');
    };
    PavementManagementInterfaceService.prototype.GeneratePaverData = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/GeneratePaverData');
    };
    PavementManagementInterfaceService.prototype.GetPavementInspectionsByIds = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/GetPavementInspectionsByIds');
    };
    PavementManagementInterfaceService.prototype.GISSavedSearches = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/GISSavedSearches');
    };
    PavementManagementInterfaceService.prototype.ImportInspection = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ImportInspection');
    };
    PavementManagementInterfaceService.prototype.ImportInspections = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ImportInspections');
    };
    PavementManagementInterfaceService.prototype.PavementInspectionSearch = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/PavementInspectionSearch');
    };
    PavementManagementInterfaceService.prototype.ProcessInspectionXmlFile = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessInspectionXmlFile');
    };
    PavementManagementInterfaceService.prototype.ProcessInventoryXmlFile = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessInventoryXmlFile');
    };
    PavementManagementInterfaceService.prototype.ProcessProjectXmlFile = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessProjectXmlFile');
    };
    PavementManagementInterfaceService.prototype.ProcessRecommendedWorkCsvFile = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessRecommendedWorkCsvFile');
    };
    PavementManagementInterfaceService.prototype.ProcessRecommendedWorkXmlFile = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessRecommendedWorkXmlFile');
    };
    PavementManagementInterfaceService.prototype.TemplateMapping = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/TemplateMapping');
    };
    return PavementManagementInterfaceService;
}());

var QuickSearchService = /** @class */ (function () {
    function QuickSearchService(service) {
        this._service = service;
    }
    QuickSearchService.prototype.QuickSearch = function (request) {
        return this._service.call(request, 'General/QuickSearch/QuickSearch');
    };
    return QuickSearchService;
}());

var TokenService = /** @class */ (function () {
    function TokenService(service) {
        this._service = service;
    }
    TokenService.prototype.RevokeUser = function (request) {
        return this._service.call(request, 'General/Token/RevokeUser');
    };
    return TokenService;
}());

var WebHookEventService = /** @class */ (function () {
    function WebHookEventService(service) {
        this._service = service;
    }
    WebHookEventService.prototype.ProcessMessages = function (request) {
        return this._service.call(request, 'General/WebHookEvent/ProcessMessages');
    };
    return WebHookEventService;
}());

export { AttachmentsService, BookmarkService, CodesService, CommentService, ConditionService, ContractService, ContractorService, CrewService, CustomerAccountService, CustomerCallService, DesignerService, EmployeeService, EntityService, EquipmentService, EquipmentChangeOutService, EquipmentCostService, EquipmentReservationService, EventLayerService, GISServiceService, InboxService, InspectionService, InspectionTemplateService, LaborCostService, MaterialService, MaterialCostService, PavementInspectionService, PluginLayoutService, PreferencesService, ProjectsService, ReadingService, RecentActivityService, RelatesService, SearchService, SecurityService, ServiceRequestService, ServiceRequestTemplateService, StoreroomService, TasksService, TvInspectionService, UniversalCustomFieldService, WorkOrderService, WorkOrderEntityService, WorkOrderTemplateService, MapServiceService, BusinessCaseService, CaseService, CaseAddressService, CaseAssetService, CaseChildObjectService, CaseConditionService, CaseContractorService, CaseCorrectionsService, CaseCorrStatusService, CaseDataDetailService, CaseDataGroupService, CaseDataListValuesService, CaseDepositService, CaseFeesService, CaseFeesDataDetailService, CaseFeesDataGroupService, CaseFlagsService, CaseInspectionRequestService, CaseInstReleasesService, CaseInstrumentService, CaseLicenseService, CaseNotesService, CaseObjectService, CaseObjectCommentsService, CasePaymentService, CasePaymentRefundService, CasePeopleService, CaseRelDocsService, CaseStatusService, CaseTaskService, CaseTaskCommentsService, CaseTaskResultsService, CaseTypeService, CaseViolationsService, DepartmentService, DepositService, DisciplineService, DivisionService, ExpirationTypeService, FeeSetupService, GeneralCommentsService, HolidayService, InspectionTimeBlockService, NumberingGroupService, PeopleService, PeopleRoleService, SubTypeService, TaskResultDetailService, TaskResultFeeInsertService, TenderTypeService, ActivityLinkService, AppDataService, AuthenticationService, CostSummaryService, CwMetaDataService, LocalizationService, MessageQueueService, PavementManagementInterfaceService, QuickSearchService, TokenService, WebHookEventService };
//# sourceMappingURL=api-service.js.map
