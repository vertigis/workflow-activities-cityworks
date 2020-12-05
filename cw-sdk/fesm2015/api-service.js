class AttachmentsService {
    constructor(service) { this._service = service; }
    AddInspectionAttachment(request) {
        return this._service.call(request, 'Ams/Attachments/AddInspectionAttachment');
    }
    AddRequestAttachment(request) {
        return this._service.call(request, 'Ams/Attachments/AddRequestAttachment');
    }
    AddWorkOrderAttachment(request) {
        return this._service.call(request, 'Ams/Attachments/AddWorkOrderAttachment');
    }
    DeleteInspectionAttachments(request) {
        return this._service.call(request, 'Ams/Attachments/DeleteInspectionAttachments');
    }
    DeleteRequestAttachments(request) {
        return this._service.call(request, 'Ams/Attachments/DeleteRequestAttachments');
    }
    DeleteWorkOrderAttachments(request) {
        return this._service.call(request, 'Ams/Attachments/DeleteWorkOrderAttachments');
    }
    DownloadInspectionAttachment(request) {
        return this._service.call(request, 'Ams/Attachments/DownloadInspectionAttachment');
    }
    DownloadRequestAttachment(request) {
        return this._service.call(request, 'Ams/Attachments/DownloadRequestAttachment');
    }
    DownloadWorkOrderAttachment(request) {
        return this._service.call(request, 'Ams/Attachments/DownloadWorkOrderAttachment');
    }
    InspectionAttachmentById(request) {
        return this._service.call(request, 'Ams/Attachments/InspectionAttachmentById');
    }
    InspectionAttachments(request) {
        return this._service.call(request, 'Ams/Attachments/InspectionAttachments');
    }
    RequestAttachmentById(request) {
        return this._service.call(request, 'Ams/Attachments/RequestAttachmentById');
    }
    RequestAttachments(request) {
        return this._service.call(request, 'Ams/Attachments/RequestAttachments');
    }
    WorkOrderAttachments(request) {
        return this._service.call(request, 'Ams/Attachments/WorkOrderAttachments');
    }
}

class BookmarkService {
    constructor(service) { this._service = service; }
    AddBookmark(request) {
        return this._service.call(request, 'Ams/Bookmark/AddBookmark');
    }
    AddScale(request) {
        return this._service.call(request, 'Ams/Bookmark/AddScale');
    }
    DeleteBookmarks(request) {
        return this._service.call(request, 'Ams/Bookmark/DeleteBookmarks');
    }
    DeleteScales(request) {
        return this._service.call(request, 'Ams/Bookmark/DeleteScales');
    }
    GetBookmarks(request) {
        return this._service.call(request, 'Ams/Bookmark/GetBookmarks');
    }
    GetScales(request) {
        return this._service.call(request, 'Ams/Bookmark/GetScales');
    }
    SetInitialExtent(request) {
        return this._service.call(request, 'Ams/Bookmark/SetInitialExtent');
    }
    UpdateBookmark(request) {
        return this._service.call(request, 'Ams/Bookmark/UpdateBookmark');
    }
    UpdateScale(request) {
        return this._service.call(request, 'Ams/Bookmark/UpdateScale');
    }
}

class CodesService {
    constructor(service) { this._service = service; }
    All(request) {
        return this._service.call(request, 'Ams/Codes/All');
    }
    AllCCTVCodeDescScore(request) {
        return this._service.call(request, 'Ams/Codes/AllCCTVCodeDescScore');
    }
    AllDescScore(request) {
        return this._service.call(request, 'Ams/Codes/AllDescScore');
    }
    ByCodeType(request) {
        return this._service.call(request, 'Ams/Codes/ByCodeType');
    }
    Export(request) {
        return this._service.call(request, 'Ams/Codes/Export');
    }
    ExportCCTVCodeDescScore(request) {
        return this._service.call(request, 'Ams/Codes/ExportCCTVCodeDescScore');
    }
    ExportDescScore(request) {
        return this._service.call(request, 'Ams/Codes/ExportDescScore');
    }
    Import(request) {
        return this._service.call(request, 'Ams/Codes/Import');
    }
    ImportCCTVCodeDescScore(request) {
        return this._service.call(request, 'Ams/Codes/ImportCCTVCodeDescScore');
    }
    ImportDescScore(request) {
        return this._service.call(request, 'Ams/Codes/ImportDescScore');
    }
}

class CommentService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'Ams/Comment/Add');
    }
    ByActivityIds(request) {
        return this._service.call(request, 'Ams/Comment/ByActivityIds');
    }
    ByActivitySids(request) {
        return this._service.call(request, 'Ams/Comment/ByActivitySids');
    }
    ByActivityTypes(request) {
        return this._service.call(request, 'Ams/Comment/ByActivityTypes');
    }
    ProblemComments(request) {
        return this._service.call(request, 'Ams/Comment/ProblemComments');
    }
    Update(request) {
        return this._service.call(request, 'Ams/Comment/Update');
    }
}

class ConditionService {
    constructor(service) { this._service = service; }
    Current(request) {
        return this._service.call(request, 'Ams/Condition/Current');
    }
    History(request) {
        return this._service.call(request, 'Ams/Condition/History');
    }
}

class ContractService {
    constructor(service) { this._service = service; }
    AddLineItem(request) {
        return this._service.call(request, 'Ams/Contract/AddLineItem');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/Contract/ByIds');
    }
    Claims(request) {
        return this._service.call(request, 'Ams/Contract/Claims');
    }
    Create(request) {
        return this._service.call(request, 'Ams/Contract/Create');
    }
    CreateFundSource(request) {
        return this._service.call(request, 'Ams/Contract/CreateFundSource');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/Contract/CreateSearchDefinition');
    }
    CreateSubcontractor(request) {
        return this._service.call(request, 'Ams/Contract/CreateSubcontractor');
    }
    CreateSubmittal(request) {
        return this._service.call(request, 'Ams/Contract/CreateSubmittal');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/Contract/Delete');
    }
    DeleteFundSource(request) {
        return this._service.call(request, 'Ams/Contract/DeleteFundSource');
    }
    DeleteLineItems(request) {
        return this._service.call(request, 'Ams/Contract/DeleteLineItems');
    }
    DeleteSubcontractor(request) {
        return this._service.call(request, 'Ams/Contract/DeleteSubcontractor');
    }
    DeleteSubmittal(request) {
        return this._service.call(request, 'Ams/Contract/DeleteSubmittal');
    }
    FundSources(request) {
        return this._service.call(request, 'Ams/Contract/FundSources');
    }
    LineItems(request) {
        return this._service.call(request, 'Ams/Contract/LineItems');
    }
    LineItemSummary(request) {
        return this._service.call(request, 'Ams/Contract/LineItemSummary');
    }
    Permits(request) {
        return this._service.call(request, 'Ams/Contract/Permits');
    }
    Search(request) {
        return this._service.call(request, 'Ams/Contract/Search');
    }
    Subcontractors(request) {
        return this._service.call(request, 'Ams/Contract/Subcontractors');
    }
    Submittals(request) {
        return this._service.call(request, 'Ams/Contract/Submittals');
    }
    UninvoicedLineItemCosts(request) {
        return this._service.call(request, 'Ams/Contract/UninvoicedLineItemCosts');
    }
    Update(request) {
        return this._service.call(request, 'Ams/Contract/Update');
    }
    UpdateLineItem(request) {
        return this._service.call(request, 'Ams/Contract/UpdateLineItem');
    }
    UpdateSubcontractor(request) {
        return this._service.call(request, 'Ams/Contract/UpdateSubcontractor');
    }
    UpdateSubmittal(request) {
        return this._service.call(request, 'Ams/Contract/UpdateSubmittal');
    }
    User(request) {
        return this._service.call(request, 'Ams/Contract/User');
    }
}

class ContractorService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'Ams/Contractor/Add');
    }
    AddKeywords(request) {
        return this._service.call(request, 'Ams/Contractor/AddKeywords');
    }
    All(request) {
        return this._service.call(request, 'Ams/Contractor/All');
    }
    ById(request) {
        return this._service.call(request, 'Ams/Contractor/ById');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/Contractor/Delete');
    }
    DeleteKeywords(request) {
        return this._service.call(request, 'Ams/Contractor/DeleteKeywords');
    }
    Keywords(request) {
        return this._service.call(request, 'Ams/Contractor/Keywords');
    }
    Search(request) {
        return this._service.call(request, 'Ams/Contractor/Search');
    }
    Update(request) {
        return this._service.call(request, 'Ams/Contractor/Update');
    }
}

class CrewService {
    constructor(service) { this._service = service; }
    ByEmployee(request) {
        return this._service.call(request, 'Ams/Crew/ByEmployee');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/Crew/ByIds');
    }
    Employees(request) {
        return this._service.call(request, 'Ams/Crew/Employees');
    }
    Equipment(request) {
        return this._service.call(request, 'Ams/Crew/Equipment');
    }
    Material(request) {
        return this._service.call(request, 'Ams/Crew/Material');
    }
}

class CustomerAccountService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'Ams/CustomerAccount/Add');
    }
    ByAccountNumbers(request) {
        return this._service.call(request, 'Ams/CustomerAccount/ByAccountNumbers');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/CustomerAccount/ByIds');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/CustomerAccount/Delete');
    }
    Import(request) {
        return this._service.call(request, 'Ams/CustomerAccount/Import');
    }
    Search(request) {
        return this._service.call(request, 'Ams/CustomerAccount/Search');
    }
    Update(request) {
        return this._service.call(request, 'Ams/CustomerAccount/Update');
    }
}

class CustomerCallService {
    constructor(service) { this._service = service; }
    AddToRequest(request) {
        return this._service.call(request, 'Ams/CustomerCall/AddToRequest');
    }
    ByIncidentNum(request) {
        return this._service.call(request, 'Ams/CustomerCall/ByIncidentNum');
    }
    ByRequestId(request) {
        return this._service.call(request, 'Ams/CustomerCall/ByRequestId');
    }
    ByRequestIds(request) {
        return this._service.call(request, 'Ams/CustomerCall/ByRequestIds');
    }
    CallerQuestions(request) {
        return this._service.call(request, 'Ams/CustomerCall/CallerQuestions');
    }
    CallerQuestionsByRequestIds(request) {
        return this._service.call(request, 'Ams/CustomerCall/CallerQuestionsByRequestIds');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/CustomerCall/Delete');
    }
    Move(request) {
        return this._service.call(request, 'Ams/CustomerCall/Move');
    }
    MoveToRequest(request) {
        return this._service.call(request, 'Ams/CustomerCall/MoveToRequest');
    }
    Update(request) {
        return this._service.call(request, 'Ams/CustomerCall/Update');
    }
}

class DesignerService {
    constructor(service) { this._service = service; }
    AddAttachmentMapping(request) {
        return this._service.call(request, 'Ams/Designer/AddAttachmentMapping');
    }
    AddCodeDescription(request) {
        return this._service.call(request, 'Ams/Designer/AddCodeDescription');
    }
    AddCodeDescScore(request) {
        return this._service.call(request, 'Ams/Designer/AddCodeDescScore');
    }
    AddCodeType(request) {
        return this._service.call(request, 'Ams/Designer/AddCodeType');
    }
    AddDescScore(request) {
        return this._service.call(request, 'Ams/Designer/AddDescScore');
    }
    AddDomain(request) {
        return this._service.call(request, 'Ams/Designer/AddDomain');
    }
    AddEmployeeSkillCode(request) {
        return this._service.call(request, 'Ams/Designer/AddEmployeeSkillCode');
    }
    AddGroup(request) {
        return this._service.call(request, 'Ams/Designer/AddGroup');
    }
    AddRole(request) {
        return this._service.call(request, 'Ams/Designer/AddRole');
    }
    AddUsersToRole(request) {
        return this._service.call(request, 'Ams/Designer/AddUsersToRole');
    }
    AttachmentMappings(request) {
        return this._service.call(request, 'Ams/Designer/AttachmentMappings');
    }
    CctvCodes(request) {
        return this._service.call(request, 'Ams/Designer/CctvCodes');
    }
    CodeDescriptions(request) {
        return this._service.call(request, 'Ams/Designer/CodeDescriptions');
    }
    CodeDescScores(request) {
        return this._service.call(request, 'Ams/Designer/CodeDescScores');
    }
    CodeTypes(request) {
        return this._service.call(request, 'Ams/Designer/CodeTypes');
    }
    CreateUser(request) {
        return this._service.call(request, 'Ams/Designer/CreateUser');
    }
    DeleteAttachmentMappings(request) {
        return this._service.call(request, 'Ams/Designer/DeleteAttachmentMappings');
    }
    DeleteCodeDescriptions(request) {
        return this._service.call(request, 'Ams/Designer/DeleteCodeDescriptions');
    }
    DeleteDomains(request) {
        return this._service.call(request, 'Ams/Designer/DeleteDomains');
    }
    DeleteEmployeeSkillCodes(request) {
        return this._service.call(request, 'Ams/Designer/DeleteEmployeeSkillCodes');
    }
    DeleteGroups(request) {
        return this._service.call(request, 'Ams/Designer/DeleteGroups');
    }
    DeleteLogin(request) {
        return this._service.call(request, 'Ams/Designer/DeleteLogin');
    }
    DeleteRoles(request) {
        return this._service.call(request, 'Ams/Designer/DeleteRoles');
    }
    DescScores(request) {
        return this._service.call(request, 'Ams/Designer/DescScores');
    }
    Domains(request) {
        return this._service.call(request, 'Ams/Designer/Domains');
    }
    EmployeeGroups(request) {
        return this._service.call(request, 'Ams/Designer/EmployeeGroups');
    }
    GroupMembers(request) {
        return this._service.call(request, 'Ams/Designer/GroupMembers');
    }
    Groups(request) {
        return this._service.call(request, 'Ams/Designer/Groups');
    }
    RemoveUsersFromRole(request) {
        return this._service.call(request, 'Ams/Designer/RemoveUsersFromRole');
    }
    Roles(request) {
        return this._service.call(request, 'Ams/Designer/Roles');
    }
    SaveCctvCode(request) {
        return this._service.call(request, 'Ams/Designer/SaveCctvCode');
    }
    UnlockUsers(request) {
        return this._service.call(request, 'Ams/Designer/UnlockUsers');
    }
    UpdateAttachmentMapping(request) {
        return this._service.call(request, 'Ams/Designer/UpdateAttachmentMapping');
    }
    UpdateCodeDescription(request) {
        return this._service.call(request, 'Ams/Designer/UpdateCodeDescription');
    }
    UpdateCodeDescScore(request) {
        return this._service.call(request, 'Ams/Designer/UpdateCodeDescScore');
    }
    UpdateCodeType(request) {
        return this._service.call(request, 'Ams/Designer/UpdateCodeType');
    }
    UpdateDescScore(request) {
        return this._service.call(request, 'Ams/Designer/UpdateDescScore');
    }
    UpdateDomain(request) {
        return this._service.call(request, 'Ams/Designer/UpdateDomain');
    }
    UpdateGroup(request) {
        return this._service.call(request, 'Ams/Designer/UpdateGroup');
    }
    UserRoles(request) {
        return this._service.call(request, 'Ams/Designer/UserRoles');
    }
    UsersInRole(request) {
        return this._service.call(request, 'Ams/Designer/UsersInRole');
    }
    UserStatus(request) {
        return this._service.call(request, 'Ams/Designer/UserStatus');
    }
}

class EmployeeService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'Ams/Employee/Add');
    }
    AddLicensedItems(request) {
        return this._service.call(request, 'Ams/Employee/AddLicensedItems');
    }
    All(request) {
        return this._service.call(request, 'Ams/Employee/All');
    }
    ByGroupId(request) {
        return this._service.call(request, 'Ams/Employee/ByGroupId');
    }
    ById(request) {
        return this._service.call(request, 'Ams/Employee/ById');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/Employee/ByIds');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/Employee/Delete');
    }
    DeleteLicensedItems(request) {
        return this._service.call(request, 'Ams/Employee/DeleteLicensedItems');
    }
    Groups(request) {
        return this._service.call(request, 'Ams/Employee/Groups');
    }
    NamesAreUnique(request) {
        return this._service.call(request, 'Ams/Employee/NamesAreUnique');
    }
    Search(request) {
        return this._service.call(request, 'Ams/Employee/Search');
    }
    Update(request) {
        return this._service.call(request, 'Ams/Employee/Update');
    }
}

class EntityService {
    constructor(service) { this._service = service; }
    AddAlias(request) {
        return this._service.call(request, 'Ams/Entity/AddAlias');
    }
    AddSplit(request) {
        return this._service.call(request, 'Ams/Entity/AddSplit');
    }
    AliasAssets(request) {
        return this._service.call(request, 'Ams/Entity/AliasAssets');
    }
    Aliases(request) {
        return this._service.call(request, 'Ams/Entity/Aliases');
    }
    AllAliases(request) {
        return this._service.call(request, 'Ams/Entity/AllAliases');
    }
    Attributes(request) {
        return this._service.call(request, 'Ams/Entity/Attributes');
    }
    CloneWorkOrderEntities(request) {
        return this._service.call(request, 'Ams/Entity/CloneWorkOrderEntities');
    }
    Configuration(request) {
        return this._service.call(request, 'Ams/Entity/Configuration');
    }
    CostHistory(request) {
        return this._service.call(request, 'Ams/Entity/CostHistory');
    }
    CostTotal(request) {
        return this._service.call(request, 'Ams/Entity/CostTotal');
    }
    DistinctValues(request) {
        return this._service.call(request, 'Ams/Entity/DistinctValues');
    }
    DomainTypes(request) {
        return this._service.call(request, 'Ams/Entity/DomainTypes');
    }
    EntityUidField(request) {
        return this._service.call(request, 'Ams/Entity/EntityUidField');
    }
    FiveNumberSummary(request) {
        return this._service.call(request, 'Ams/Entity/FiveNumberSummary');
    }
    GetByIdentifier(request) {
        return this._service.call(request, 'Ams/Entity/GetByIdentifier');
    }
    GetByIdentifiers(request) {
        return this._service.call(request, 'Ams/Entity/GetByIdentifiers');
    }
    Groups(request) {
        return this._service.call(request, 'Ams/Entity/Groups');
    }
    ProcessSplits(request) {
        return this._service.call(request, 'Ams/Entity/ProcessSplits');
    }
    RemoveAlias(request) {
        return this._service.call(request, 'Ams/Entity/RemoveAlias');
    }
    Search(request) {
        return this._service.call(request, 'Ams/Entity/Search');
    }
    SearchAsWorkOrderEntity(request) {
        return this._service.call(request, 'Ams/Entity/SearchAsWorkOrderEntity');
    }
    SplitEntities(request) {
        return this._service.call(request, 'Ams/Entity/SplitEntities');
    }
    Splits(request) {
        return this._service.call(request, 'Ams/Entity/Splits');
    }
    SubTypes(request) {
        return this._service.call(request, 'Ams/Entity/SubTypes');
    }
    TypeRelationships(request) {
        return this._service.call(request, 'Ams/Entity/TypeRelationships');
    }
    Types(request) {
        return this._service.call(request, 'Ams/Entity/Types');
    }
    VisibleFields(request) {
        return this._service.call(request, 'Ams/Entity/VisibleFields');
    }
    WorkActivityHistory(request) {
        return this._service.call(request, 'Ams/Entity/WorkActivityHistory');
    }
}

class EquipmentService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'Ams/Equipment/Add');
    }
    All(request) {
        return this._service.call(request, 'Ams/Equipment/All');
    }
    ById(request) {
        return this._service.call(request, 'Ams/Equipment/ById');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/Equipment/ByIds');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/Equipment/Delete');
    }
    Search(request) {
        return this._service.call(request, 'Ams/Equipment/Search');
    }
    Update(request) {
        return this._service.call(request, 'Ams/Equipment/Update');
    }
}

class EquipmentChangeOutService {
    constructor(service) { this._service = service; }
    AddChangeOutRead(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/AddChangeOutRead');
    }
    AddOperation(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/AddOperation');
    }
    Attach(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Attach');
    }
    ById(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/ById');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/ByIds');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Delete');
    }
    DeleteChangeOutReads(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/DeleteChangeOutReads');
    }
    DeleteOperations(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/DeleteOperations');
    }
    Detach(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Detach');
    }
    DirectParent(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/DirectParent');
    }
    Entities(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Entities');
    }
    Entity(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Entity');
    }
    History(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/History');
    }
    Read(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Read');
    }
    ReadConfigs(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/ReadConfigs');
    }
    Related(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Related');
    }
    Replace(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Replace');
    }
    UpdateChangeOutRead(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/UpdateChangeOutRead');
    }
    UpdateOperation(request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/UpdateOperation');
    }
}

class EquipmentCostService {
    constructor(service) { this._service = service; }
    AddWorkOrderCosts(request) {
        return this._service.call(request, 'Ams/EquipmentCost/AddWorkOrderCosts');
    }
    DeleteWorkOrderCosts(request) {
        return this._service.call(request, 'Ams/EquipmentCost/DeleteWorkOrderCosts');
    }
    WorkOrderCostsByWorkOrder(request) {
        return this._service.call(request, 'Ams/EquipmentCost/WorkOrderCostsByWorkOrder');
    }
}

class EquipmentReservationService {
    constructor(service) { this._service = service; }
    CheckedOut(request) {
        return this._service.call(request, 'Ams/EquipmentReservation/CheckedOut');
    }
    CheckIn(request) {
        return this._service.call(request, 'Ams/EquipmentReservation/CheckIn');
    }
    CheckOut(request) {
        return this._service.call(request, 'Ams/EquipmentReservation/CheckOut');
    }
    CheckOutHistory(request) {
        return this._service.call(request, 'Ams/EquipmentReservation/CheckOutHistory');
    }
    DeleteReservation(request) {
        return this._service.call(request, 'Ams/EquipmentReservation/DeleteReservation');
    }
    Reservations(request) {
        return this._service.call(request, 'Ams/EquipmentReservation/Reservations');
    }
    Reserve(request) {
        return this._service.call(request, 'Ams/EquipmentReservation/Reserve');
    }
    Status(request) {
        return this._service.call(request, 'Ams/EquipmentReservation/Status');
    }
    UpdateReservation(request) {
        return this._service.call(request, 'Ams/EquipmentReservation/UpdateReservation');
    }
}

class EventLayerService {
    constructor(service) { this._service = service; }
    All(request) {
        return this._service.call(request, 'Ams/EventLayer/All');
    }
    ById(request) {
        return this._service.call(request, 'Ams/EventLayer/ById');
    }
}

class GISServiceService {
    constructor(service) { this._service = service; }
    AddGISServiceDefinition(request) {
        return this._service.call(request, 'Ams/GISService/AddGISServiceDefinition');
    }
    AddGISServiceEndPointSecurity(request) {
        return this._service.call(request, 'Ams/GISService/AddGISServiceEndPointSecurity');
    }
    CloneGISServiceDefinition(request) {
        return this._service.call(request, 'Ams/GISService/CloneGISServiceDefinition');
    }
    DeleteGISServiceDefinitions(request) {
        return this._service.call(request, 'Ams/GISService/DeleteGISServiceDefinitions');
    }
    DeleteGISServiceEndPointSecurities(request) {
        return this._service.call(request, 'Ams/GISService/DeleteGISServiceEndPointSecurities');
    }
    GISServiceDefinitions(request) {
        return this._service.call(request, 'Ams/GISService/GISServiceDefinitions');
    }
    UpdateGISServiceEndPointSecurity(request) {
        return this._service.call(request, 'Ams/GISService/UpdateGISServiceEndPointSecurity');
    }
    ValidateServiceSecurity(request) {
        return this._service.call(request, 'Ams/GISService/ValidateServiceSecurity');
    }
}

class InboxService {
    constructor(service) { this._service = service; }
    CopyWidgetContainerTab(request) {
        return this._service.call(request, 'Ams/Inbox/CopyWidgetContainerTab');
    }
    CreateWidget(request) {
        return this._service.call(request, 'Ams/Inbox/CreateWidget');
    }
    CreateWidgetContainer(request) {
        return this._service.call(request, 'Ams/Inbox/CreateWidgetContainer');
    }
    CreateWidgetContainerTab(request) {
        return this._service.call(request, 'Ams/Inbox/CreateWidgetContainerTab');
    }
    CreateWidgetZone(request) {
        return this._service.call(request, 'Ams/Inbox/CreateWidgetZone');
    }
    DeleteWidget(request) {
        return this._service.call(request, 'Ams/Inbox/DeleteWidget');
    }
    DeleteWidgetContainer(request) {
        return this._service.call(request, 'Ams/Inbox/DeleteWidgetContainer');
    }
    DeleteWidgetContainerTab(request) {
        return this._service.call(request, 'Ams/Inbox/DeleteWidgetContainerTab');
    }
    DeleteWidgetZone(request) {
        return this._service.call(request, 'Ams/Inbox/DeleteWidgetZone');
    }
    MoveWidget(request) {
        return this._service.call(request, 'Ams/Inbox/MoveWidget');
    }
    MoveWidgetContainerTab(request) {
        return this._service.call(request, 'Ams/Inbox/MoveWidgetContainerTab');
    }
    MoveWidgetZone(request) {
        return this._service.call(request, 'Ams/Inbox/MoveWidgetZone');
    }
    UpdateChartWidget(request) {
        return this._service.call(request, 'Ams/Inbox/UpdateChartWidget');
    }
    UpdateHtmlWidget(request) {
        return this._service.call(request, 'Ams/Inbox/UpdateHtmlWidget');
    }
    UpdateNotesWidget(request) {
        return this._service.call(request, 'Ams/Inbox/UpdateNotesWidget');
    }
    UpdateReportLinksWidget(request) {
        return this._service.call(request, 'Ams/Inbox/UpdateReportLinksWidget');
    }
    UpdateSearchResultsWidget(request) {
        return this._service.call(request, 'Ams/Inbox/UpdateSearchResultsWidget');
    }
    UpdateWeatherWidget(request) {
        return this._service.call(request, 'Ams/Inbox/UpdateWeatherWidget');
    }
    UpdateWidgetContainer(request) {
        return this._service.call(request, 'Ams/Inbox/UpdateWidgetContainer');
    }
    UpdateWidgetContainerTab(request) {
        return this._service.call(request, 'Ams/Inbox/UpdateWidgetContainerTab');
    }
    UpdateWidgetZone(request) {
        return this._service.call(request, 'Ams/Inbox/UpdateWidgetZone');
    }
}

class InspectionService {
    constructor(service) { this._service = service; }
    AddEntity(request) {
        return this._service.call(request, 'Ams/Inspection/AddEntity');
    }
    Answers(request) {
        return this._service.call(request, 'Ams/Inspection/Answers');
    }
    AuditLog(request) {
        return this._service.call(request, 'Ams/Inspection/AuditLog');
    }
    ById(request) {
        return this._service.call(request, 'Ams/Inspection/ById');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/Inspection/ByIds');
    }
    ByWorkOrderIds(request) {
        return this._service.call(request, 'Ams/Inspection/ByWorkOrderIds');
    }
    Cancel(request) {
        return this._service.call(request, 'Ams/Inspection/Cancel');
    }
    Close(request) {
        return this._service.call(request, 'Ams/Inspection/Close');
    }
    Create(request) {
        return this._service.call(request, 'Ams/Inspection/Create');
    }
    CreateFromParent(request) {
        return this._service.call(request, 'Ams/Inspection/CreateFromParent');
    }
    CreateFromServiceRequest(request) {
        return this._service.call(request, 'Ams/Inspection/CreateFromServiceRequest');
    }
    CreateFromWorkOrder(request) {
        return this._service.call(request, 'Ams/Inspection/CreateFromWorkOrder');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/Inspection/CreateSearchDefinition');
    }
    CycleFrom(request) {
        return this._service.call(request, 'Ams/Inspection/CycleFrom');
    }
    CycleIntervals(request) {
        return this._service.call(request, 'Ams/Inspection/CycleIntervals');
    }
    CycleTypes(request) {
        return this._service.call(request, 'Ams/Inspection/CycleTypes');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/Inspection/Delete');
    }
    Districts(request) {
        return this._service.call(request, 'Ams/Inspection/Districts');
    }
    InspectionInspections(request) {
        return this._service.call(request, 'Ams/Inspection/InspectionInspections');
    }
    InspectionServiceRequests(request) {
        return this._service.call(request, 'Ams/Inspection/InspectionServiceRequests');
    }
    InspectionWorkOrders(request) {
        return this._service.call(request, 'Ams/Inspection/InspectionWorkOrders');
    }
    Move(request) {
        return this._service.call(request, 'Ams/Inspection/Move');
    }
    Priorities(request) {
        return this._service.call(request, 'Ams/Inspection/Priorities');
    }
    QA(request) {
        return this._service.call(request, 'Ams/Inspection/QA');
    }
    Questions(request) {
        return this._service.call(request, 'Ams/Inspection/Questions');
    }
    RemoveEntity(request) {
        return this._service.call(request, 'Ams/Inspection/RemoveEntity');
    }
    Resolutions(request) {
        return this._service.call(request, 'Ams/Inspection/Resolutions');
    }
    Search(request) {
        return this._service.call(request, 'Ams/Inspection/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'Ams/Inspection/SearchObject');
    }
    Shops(request) {
        return this._service.call(request, 'Ams/Inspection/Shops');
    }
    Statuses(request) {
        return this._service.call(request, 'Ams/Inspection/Statuses');
    }
    SubmitTos(request) {
        return this._service.call(request, 'Ams/Inspection/SubmitTos');
    }
    Templates(request) {
        return this._service.call(request, 'Ams/Inspection/Templates');
    }
    Update(request) {
        return this._service.call(request, 'Ams/Inspection/Update');
    }
}

class InspectionTemplateService {
    constructor(service) { this._service = service; }
    ByIds(request) {
        return this._service.call(request, 'Ams/InspectionTemplate/ByIds');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/InspectionTemplate/CreateSearchDefinition');
    }
    EntityTypes(request) {
        return this._service.call(request, 'Ams/InspectionTemplate/EntityTypes');
    }
    QA(request) {
        return this._service.call(request, 'Ams/InspectionTemplate/QA');
    }
    Search(request) {
        return this._service.call(request, 'Ams/InspectionTemplate/Search');
    }
    Templates(request) {
        return this._service.call(request, 'Ams/InspectionTemplate/Templates');
    }
    TestTypes(request) {
        return this._service.call(request, 'Ams/InspectionTemplate/TestTypes');
    }
}

class LaborCostService {
    constructor(service) { this._service = service; }
    AddRequestCosts(request) {
        return this._service.call(request, 'Ams/LaborCost/AddRequestCosts');
    }
    AddWorkOrderCosts(request) {
        return this._service.call(request, 'Ams/LaborCost/AddWorkOrderCosts');
    }
    CostCodes(request) {
        return this._service.call(request, 'Ams/LaborCost/CostCodes');
    }
    DeleteRequestCosts(request) {
        return this._service.call(request, 'Ams/LaborCost/DeleteRequestCosts');
    }
    DeleteWorkOrderCosts(request) {
        return this._service.call(request, 'Ams/LaborCost/DeleteWorkOrderCosts');
    }
    JobCodes(request) {
        return this._service.call(request, 'Ams/LaborCost/JobCodes');
    }
    RequestCostsByRequest(request) {
        return this._service.call(request, 'Ams/LaborCost/RequestCostsByRequest');
    }
    WorkOrderCostsByWorkOrder(request) {
        return this._service.call(request, 'Ams/LaborCost/WorkOrderCostsByWorkOrder');
    }
}

class MaterialService {
    constructor(service) { this._service = service; }
    All(request) {
        return this._service.call(request, 'Ams/Material/All');
    }
    ById(request) {
        return this._service.call(request, 'Ams/Material/ById');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/Material/ByIds');
    }
    ByParent(request) {
        return this._service.call(request, 'Ams/Material/ByParent');
    }
    ByStoreroom(request) {
        return this._service.call(request, 'Ams/Material/ByStoreroom');
    }
    ByStoreroomAndId(request) {
        return this._service.call(request, 'Ams/Material/ByStoreroomAndId');
    }
    Keywords(request) {
        return this._service.call(request, 'Ams/Material/Keywords');
    }
    MaterialBom(request) {
        return this._service.call(request, 'Ams/Material/MaterialBom');
    }
    MaterialCategories(request) {
        return this._service.call(request, 'Ams/Material/MaterialCategories');
    }
    MaterialNodes(request) {
        return this._service.call(request, 'Ams/Material/MaterialNodes');
    }
    Search(request) {
        return this._service.call(request, 'Ams/Material/Search');
    }
}

class MaterialCostService {
    constructor(service) { this._service = service; }
    AddWorkOrderCosts(request) {
        return this._service.call(request, 'Ams/MaterialCost/AddWorkOrderCosts');
    }
    DeleteWorkOrderCosts(request) {
        return this._service.call(request, 'Ams/MaterialCost/DeleteWorkOrderCosts');
    }
    WorkOrderCostsByWorkOrder(request) {
        return this._service.call(request, 'Ams/MaterialCost/WorkOrderCostsByWorkOrder');
    }
}

class PavementInspectionService {
    constructor(service) { this._service = service; }
    AddDistress(request) {
        return this._service.call(request, 'Ams/PavementInspection/AddDistress');
    }
    AddSample(request) {
        return this._service.call(request, 'Ams/PavementInspection/AddSample');
    }
    ById(request) {
        return this._service.call(request, 'Ams/PavementInspection/ById');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/PavementInspection/ByIds');
    }
    CodeDesc(request) {
        return this._service.call(request, 'Ams/PavementInspection/CodeDesc');
    }
    Create(request) {
        return this._service.call(request, 'Ams/PavementInspection/Create');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/PavementInspection/CreateSearchDefinition');
    }
    DistressCodes(request) {
        return this._service.call(request, 'Ams/PavementInspection/DistressCodes');
    }
    Distresses(request) {
        return this._service.call(request, 'Ams/PavementInspection/Distresses');
    }
    Samples(request) {
        return this._service.call(request, 'Ams/PavementInspection/Samples');
    }
    Search(request) {
        return this._service.call(request, 'Ams/PavementInspection/Search');
    }
    Update(request) {
        return this._service.call(request, 'Ams/PavementInspection/Update');
    }
    UpdateDistress(request) {
        return this._service.call(request, 'Ams/PavementInspection/UpdateDistress');
    }
    UpdateSample(request) {
        return this._service.call(request, 'Ams/PavementInspection/UpdateSample');
    }
}

class PluginLayoutService {
    constructor(service) { this._service = service; }
    Definition(request) {
        return this._service.call(request, 'Ams/PluginLayout/Definition');
    }
    Definitions(request) {
        return this._service.call(request, 'Ams/PluginLayout/Definitions');
    }
    Public(request) {
        return this._service.call(request, 'Ams/PluginLayout/Public');
    }
    PublicDefinitions(request) {
        return this._service.call(request, 'Ams/PluginLayout/PublicDefinitions');
    }
}

class PreferencesService {
    constructor(service) { this._service = service; }
    Global(request) {
        return this._service.call(request, 'Ams/Preferences/Global');
    }
    User(request) {
        return this._service.call(request, 'Ams/Preferences/User');
    }
    UserSave(request) {
        return this._service.call(request, 'Ams/Preferences/UserSave');
    }
}

class ProjectsService {
    constructor(service) { this._service = service; }
    ByContractIds(request) {
        return this._service.call(request, 'Ams/Projects/ByContractIds');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/Projects/ByIds');
    }
    Create(request) {
        return this._service.call(request, 'Ams/Projects/Create');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/Projects/CreateSearchDefinition');
    }
    QuickView(request) {
        return this._service.call(request, 'Ams/Projects/QuickView');
    }
    Search(request) {
        return this._service.call(request, 'Ams/Projects/Search');
    }
    Update(request) {
        return this._service.call(request, 'Ams/Projects/Update');
    }
}

class ReadingService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'Ams/Reading/Add');
    }
    ByEntity(request) {
        return this._service.call(request, 'Ams/Reading/ByEntity');
    }
    Configuration(request) {
        return this._service.call(request, 'Ams/Reading/Configuration');
    }
    Update(request) {
        return this._service.call(request, 'Ams/Reading/Update');
    }
}

class RecentActivityService {
    constructor(service) { this._service = service; }
    CaseViewed(request) {
        return this._service.call(request, 'Ams/RecentActivity/CaseViewed');
    }
    InspectionViewed(request) {
        return this._service.call(request, 'Ams/RecentActivity/InspectionViewed');
    }
    RequestViewed(request) {
        return this._service.call(request, 'Ams/RecentActivity/RequestViewed');
    }
    User(request) {
        return this._service.call(request, 'Ams/RecentActivity/User');
    }
    WorkOrderViewed(request) {
        return this._service.call(request, 'Ams/RecentActivity/WorkOrderViewed');
    }
}

class RelatesService {
    constructor(service) { this._service = service; }
    ByTableName(request) {
        return this._service.call(request, 'Ams/Relates/ByTableName');
    }
    EquipChangeOutChangedBy(request) {
        return this._service.call(request, 'Ams/Relates/EquipChangeOutChangedBy');
    }
    InspectionCancelledBy(request) {
        return this._service.call(request, 'Ams/Relates/InspectionCancelledBy');
    }
    InspectionClosedBy(request) {
        return this._service.call(request, 'Ams/Relates/InspectionClosedBy');
    }
    InspectionEditAfterClose(request) {
        return this._service.call(request, 'Ams/Relates/InspectionEditAfterClose');
    }
    InspectionInitiatedBy(request) {
        return this._service.call(request, 'Ams/Relates/InspectionInitiatedBy');
    }
    InspectionInspectedBy(request) {
        return this._service.call(request, 'Ams/Relates/InspectionInspectedBy');
    }
    InspectionSubmitTo(request) {
        return this._service.call(request, 'Ams/Relates/InspectionSubmitTo');
    }
    ProblemLeafDispatchTo(request) {
        return this._service.call(request, 'Ams/Relates/ProblemLeafDispatchTo');
    }
    ProblemLeafSubmitTo(request) {
        return this._service.call(request, 'Ams/Relates/ProblemLeafSubmitTo');
    }
    ProjectApprovedBy(request) {
        return this._service.call(request, 'Ams/Relates/ProjectApprovedBy');
    }
    ProjectAssignedTo(request) {
        return this._service.call(request, 'Ams/Relates/ProjectAssignedTo');
    }
    ProjectInitiatedBy(request) {
        return this._service.call(request, 'Ams/Relates/ProjectInitiatedBy');
    }
    RequestCancelledBy(request) {
        return this._service.call(request, 'Ams/Relates/RequestCancelledBy');
    }
    RequestClosedBy(request) {
        return this._service.call(request, 'Ams/Relates/RequestClosedBy');
    }
    RequestDispatchTo(request) {
        return this._service.call(request, 'Ams/Relates/RequestDispatchTo');
    }
    RequestEditAfterClose(request) {
        return this._service.call(request, 'Ams/Relates/RequestEditAfterClose');
    }
    RequestInitiatedBy(request) {
        return this._service.call(request, 'Ams/Relates/RequestInitiatedBy');
    }
    RequestSubmitTo(request) {
        return this._service.call(request, 'Ams/Relates/RequestSubmitTo');
    }
    SearchViewCost(request) {
        return this._service.call(request, 'Ams/Relates/SearchViewCost');
    }
    TableFields(request) {
        return this._service.call(request, 'Ams/Relates/TableFields');
    }
    TaskAssignTo(request) {
        return this._service.call(request, 'Ams/Relates/TaskAssignTo');
    }
    TransferRequestedBy(request) {
        return this._service.call(request, 'Ams/Relates/TransferRequestedBy');
    }
    WorkOrderCancelledBy(request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderCancelledBy');
    }
    WorkOrderClosedBy(request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderClosedBy');
    }
    WorkOrderCompletedBy(request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderCompletedBy');
    }
    WorkOrderEditAfterClose(request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderEditAfterClose');
    }
    WorkOrderInitiatedBy(request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderInitiatedBy');
    }
    WorkOrderRequestedBy(request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderRequestedBy');
    }
    WorkOrderSubmitTo(request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderSubmitTo');
    }
    WorkOrderSupervisors(request) {
        return this._service.call(request, 'Ams/Relates/WorkOrderSupervisors');
    }
}

class SearchService {
    constructor(service) { this._service = service; }
    AssetCalculationResultSaved(request) {
        return this._service.call(request, 'Ams/Search/AssetCalculationResultSaved');
    }
    Definition(request) {
        return this._service.call(request, 'Ams/Search/Definition');
    }
    DefinitionNames(request) {
        return this._service.call(request, 'Ams/Search/DefinitionNames');
    }
    Definitions(request) {
        return this._service.call(request, 'Ams/Search/Definitions');
    }
    DeleteDefinitions(request) {
        return this._service.call(request, 'Ams/Search/DeleteDefinitions');
    }
    DisplayFields(request) {
        return this._service.call(request, 'Ams/Search/DisplayFields');
    }
    Execute(request) {
        return this._service.call(request, 'Ams/Search/Execute');
    }
    GISSaved(request) {
        return this._service.call(request, 'Ams/Search/GISSaved');
    }
    InspectionSaved(request) {
        return this._service.call(request, 'Ams/Search/InspectionSaved');
    }
    MaterialSaved(request) {
        return this._service.call(request, 'Ams/Search/MaterialSaved');
    }
    PllSaved(request) {
        return this._service.call(request, 'Ams/Search/PllSaved');
    }
    RecentActivity(request) {
        return this._service.call(request, 'Ams/Search/RecentActivity');
    }
    RequestSaved(request) {
        return this._service.call(request, 'Ams/Search/RequestSaved');
    }
    RequisitionSaved(request) {
        return this._service.call(request, 'Ams/Search/RequisitionSaved');
    }
    SavedByType(request) {
        return this._service.call(request, 'Ams/Search/SavedByType');
    }
    SaveDefinition(request) {
        return this._service.call(request, 'Ams/Search/SaveDefinition');
    }
    StoreTransactionSaved(request) {
        return this._service.call(request, 'Ams/Search/StoreTransactionSaved');
    }
    Types(request) {
        return this._service.call(request, 'Ams/Search/Types');
    }
    UpdateEurl(request) {
        return this._service.call(request, 'Ams/Search/UpdateEurl');
    }
    WorkActivitySaved(request) {
        return this._service.call(request, 'Ams/Search/WorkActivitySaved');
    }
    WorkOrderEntitySaved(request) {
        return this._service.call(request, 'Ams/Search/WorkOrderEntitySaved');
    }
    WorkOrderSaved(request) {
        return this._service.call(request, 'Ams/Search/WorkOrderSaved');
    }
}

class SecurityService {
    constructor(service) { this._service = service; }
    Contract(request) {
        return this._service.call(request, 'Ams/Security/Contract');
    }
    Contracts(request) {
        return this._service.call(request, 'Ams/Security/Contracts');
    }
    Employee(request) {
        return this._service.call(request, 'Ams/Security/Employee');
    }
    Inspection(request) {
        return this._service.call(request, 'Ams/Security/Inspection');
    }
    Inspections(request) {
        return this._service.call(request, 'Ams/Security/Inspections');
    }
    InspectionTemplate(request) {
        return this._service.call(request, 'Ams/Security/InspectionTemplate');
    }
    InspectionTemplates(request) {
        return this._service.call(request, 'Ams/Security/InspectionTemplates');
    }
    Problem(request) {
        return this._service.call(request, 'Ams/Security/Problem');
    }
    Problems(request) {
        return this._service.call(request, 'Ams/Security/Problems');
    }
    Projects(request) {
        return this._service.call(request, 'Ams/Security/Projects');
    }
    Search(request) {
        return this._service.call(request, 'Ams/Security/Search');
    }
    ServiceRequest(request) {
        return this._service.call(request, 'Ams/Security/ServiceRequest');
    }
    ServiceRequests(request) {
        return this._service.call(request, 'Ams/Security/ServiceRequests');
    }
    WorkOrder(request) {
        return this._service.call(request, 'Ams/Security/WorkOrder');
    }
    WorkOrderBySid(request) {
        return this._service.call(request, 'Ams/Security/WorkOrderBySid');
    }
    WorkOrders(request) {
        return this._service.call(request, 'Ams/Security/WorkOrders');
    }
    WorkOrderTemplate(request) {
        return this._service.call(request, 'Ams/Security/WorkOrderTemplate');
    }
}

class ServiceRequestService {
    constructor(service) { this._service = service; }
    AddComments(request) {
        return this._service.call(request, 'Ams/ServiceRequest/AddComments');
    }
    AllStreetCode(request) {
        return this._service.call(request, 'Ams/ServiceRequest/AllStreetCode');
    }
    AuditLog(request) {
        return this._service.call(request, 'Ams/ServiceRequest/AuditLog');
    }
    ById(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ById');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ByIds');
    }
    ByIncidentAndEmail(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ByIncidentAndEmail');
    }
    ByOtherSystemId(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ByOtherSystemId');
    }
    Cancel(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Cancel');
    }
    ChangeCustomFieldCategory(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ChangeCustomFieldCategory');
    }
    ChangeProblem(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ChangeProblem');
    }
    Close(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Close');
    }
    Combine(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Combine');
    }
    Comments(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Comments');
    }
    CommentsByRequestIds(request) {
        return this._service.call(request, 'Ams/ServiceRequest/CommentsByRequestIds');
    }
    Create(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Create');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/ServiceRequest/CreateSearchDefinition');
    }
    CustomFieldCategories(request) {
        return this._service.call(request, 'Ams/ServiceRequest/CustomFieldCategories');
    }
    CustomFields(request) {
        return this._service.call(request, 'Ams/ServiceRequest/CustomFields');
    }
    DefaultStatus(request) {
        return this._service.call(request, 'Ams/ServiceRequest/DefaultStatus');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Delete');
    }
    DispatchTo(request) {
        return this._service.call(request, 'Ams/ServiceRequest/DispatchTo');
    }
    LinkCases(request) {
        return this._service.call(request, 'Ams/ServiceRequest/LinkCases');
    }
    LinkInspections(request) {
        return this._service.call(request, 'Ams/ServiceRequest/LinkInspections');
    }
    LinkWorkOrders(request) {
        return this._service.call(request, 'Ams/ServiceRequest/LinkWorkOrders');
    }
    Move(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Move');
    }
    Priorities(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Priorities');
    }
    ProblemLeafByOtherSysCodeDescs(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ProblemLeafByOtherSysCodeDescs');
    }
    ProblemLeafBySid(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ProblemLeafBySid');
    }
    ProblemNodes(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ProblemNodes');
    }
    Problems(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Problems');
    }
    ProblemsByKeywords(request) {
        return this._service.call(request, 'Ams/ServiceRequest/ProblemsByKeywords');
    }
    QA(request) {
        return this._service.call(request, 'Ams/ServiceRequest/QA');
    }
    Reopen(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Reopen');
    }
    RequestInspections(request) {
        return this._service.call(request, 'Ams/ServiceRequest/RequestInspections');
    }
    RequestWorkOrders(request) {
        return this._service.call(request, 'Ams/ServiceRequest/RequestWorkOrders');
    }
    Search(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'Ams/ServiceRequest/SearchObject');
    }
    Statuses(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Statuses');
    }
    SubmitTo(request) {
        return this._service.call(request, 'Ams/ServiceRequest/SubmitTo');
    }
    TemplateCustomFields(request) {
        return this._service.call(request, 'Ams/ServiceRequest/TemplateCustomFields');
    }
    Uncancel(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Uncancel');
    }
    UnlinkInspections(request) {
        return this._service.call(request, 'Ams/ServiceRequest/UnlinkInspections');
    }
    UnlinkWorkOrders(request) {
        return this._service.call(request, 'Ams/ServiceRequest/UnlinkWorkOrders');
    }
    Update(request) {
        return this._service.call(request, 'Ams/ServiceRequest/Update');
    }
}

class ServiceRequestTemplateService {
    constructor(service) { this._service = service; }
    ByIds(request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/ByIds');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/CreateSearchDefinition');
    }
    QA(request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/QA');
    }
    Search(request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/Search');
    }
    Templates(request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/Templates');
    }
    WorkOrderTemplates(request) {
        return this._service.call(request, 'Ams/ServiceRequestTemplate/WorkOrderTemplates');
    }
}

class StoreroomService {
    constructor(service) { this._service = service; }
    Accounts(request) {
        return this._service.call(request, 'Ams/Storeroom/Accounts');
    }
    AddAudit(request) {
        return this._service.call(request, 'Ams/Storeroom/AddAudit');
    }
    AddIssue(request) {
        return this._service.call(request, 'Ams/Storeroom/AddIssue');
    }
    AddReceive(request) {
        return this._service.call(request, 'Ams/Storeroom/AddReceive');
    }
    AddRequisition(request) {
        return this._service.call(request, 'Ams/Storeroom/AddRequisition');
    }
    AddRequisitionItem(request) {
        return this._service.call(request, 'Ams/Storeroom/AddRequisitionItem');
    }
    AddSupplier(request) {
        return this._service.call(request, 'Ams/Storeroom/AddSupplier');
    }
    AddSupplierMaterial(request) {
        return this._service.call(request, 'Ams/Storeroom/AddSupplierMaterial');
    }
    AddTransfer(request) {
        return this._service.call(request, 'Ams/Storeroom/AddTransfer');
    }
    AssemblyMaterial(request) {
        return this._service.call(request, 'Ams/Storeroom/AssemblyMaterial');
    }
    BuildAssemblyMaterial(request) {
        return this._service.call(request, 'Ams/Storeroom/BuildAssemblyMaterial');
    }
    MaterialsByEmployeeSid(request) {
        return this._service.call(request, 'Ams/Storeroom/MaterialsByEmployeeSid');
    }
    MaterialSearch(request) {
        return this._service.call(request, 'Ams/Storeroom/MaterialSearch');
    }
    RequisitionItems(request) {
        return this._service.call(request, 'Ams/Storeroom/RequisitionItems');
    }
    Requisitions(request) {
        return this._service.call(request, 'Ams/Storeroom/Requisitions');
    }
    SearchSuppliersByUid(request) {
        return this._service.call(request, 'Ams/Storeroom/SearchSuppliersByUid');
    }
    StoreDomainsByEmployee(request) {
        return this._service.call(request, 'Ams/Storeroom/StoreDomainsByEmployee');
    }
    Storerooms(request) {
        return this._service.call(request, 'Ams/Storeroom/Storerooms');
    }
    StoreroomSecurity(request) {
        return this._service.call(request, 'Ams/Storeroom/StoreroomSecurity');
    }
    StoreroomStocks(request) {
        return this._service.call(request, 'Ams/Storeroom/StoreroomStocks');
    }
    SupplierMaterial(request) {
        return this._service.call(request, 'Ams/Storeroom/SupplierMaterial');
    }
    Suppliers(request) {
        return this._service.call(request, 'Ams/Storeroom/Suppliers');
    }
    UpdateRequisition(request) {
        return this._service.call(request, 'Ams/Storeroom/UpdateRequisition');
    }
    UpdateStoreroomStock(request) {
        return this._service.call(request, 'Ams/Storeroom/UpdateStoreroomStock');
    }
    UpdateSupplier(request) {
        return this._service.call(request, 'Ams/Storeroom/UpdateSupplier');
    }
    UpdateSupplierMaterial(request) {
        return this._service.call(request, 'Ams/Storeroom/UpdateSupplierMaterial');
    }
}

class TasksService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'Ams/Tasks/Add');
    }
    ById(request) {
        return this._service.call(request, 'Ams/Tasks/ById');
    }
    ByWorkOrder(request) {
        return this._service.call(request, 'Ams/Tasks/ByWorkOrder');
    }
    ByWorkOrderTemplate(request) {
        return this._service.call(request, 'Ams/Tasks/ByWorkOrderTemplate');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/Tasks/Delete');
    }
    Keywords(request) {
        return this._service.call(request, 'Ams/Tasks/Keywords');
    }
    Statuses(request) {
        return this._service.call(request, 'Ams/Tasks/Statuses');
    }
    TaskCodes(request) {
        return this._service.call(request, 'Ams/Tasks/TaskCodes');
    }
    TaskNodes(request) {
        return this._service.call(request, 'Ams/Tasks/TaskNodes');
    }
    Template(request) {
        return this._service.call(request, 'Ams/Tasks/Template');
    }
    Templates(request) {
        return this._service.call(request, 'Ams/Tasks/Templates');
    }
    Update(request) {
        return this._service.call(request, 'Ams/Tasks/Update');
    }
}

class TvInspectionService {
    constructor(service) { this._service = service; }
    AddObservation(request) {
        return this._service.call(request, 'Ams/TvInspection/AddObservation');
    }
    ById(request) {
        return this._service.call(request, 'Ams/TvInspection/ById');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/TvInspection/ByIds');
    }
    ByWorkOrder(request) {
        return this._service.call(request, 'Ams/TvInspection/ByWorkOrder');
    }
    CctvObservationCodeTypes(request) {
        return this._service.call(request, 'Ams/TvInspection/CctvObservationCodeTypes');
    }
    ChangeCustomFieldCategory(request) {
        return this._service.call(request, 'Ams/TvInspection/ChangeCustomFieldCategory');
    }
    CodeDescriptions(request) {
        return this._service.call(request, 'Ams/TvInspection/CodeDescriptions');
    }
    ConfirmDyeLeaks(request) {
        return this._service.call(request, 'Ams/TvInspection/ConfirmDyeLeaks');
    }
    ConfirmSmokeTests(request) {
        return this._service.call(request, 'Ams/TvInspection/ConfirmSmokeTests');
    }
    Create(request) {
        return this._service.call(request, 'Ams/TvInspection/Create');
    }
    CreateFromPacp(request) {
        return this._service.call(request, 'Ams/TvInspection/CreateFromPacp');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/TvInspection/CreateSearchDefinition');
    }
    DescriptionScores(request) {
        return this._service.call(request, 'Ams/TvInspection/DescriptionScores');
    }
    DownstreamNode(request) {
        return this._service.call(request, 'Ams/TvInspection/DownstreamNode');
    }
    InspectedBy(request) {
        return this._service.call(request, 'Ams/TvInspection/InspectedBy');
    }
    Observation(request) {
        return this._service.call(request, 'Ams/TvInspection/Observation');
    }
    ObservationCauseCodeDescriptions(request) {
        return this._service.call(request, 'Ams/TvInspection/ObservationCauseCodeDescriptions');
    }
    ObservationCodeTypes(request) {
        return this._service.call(request, 'Ams/TvInspection/ObservationCodeTypes');
    }
    Observations(request) {
        return this._service.call(request, 'Ams/TvInspection/Observations');
    }
    ReviewedBy(request) {
        return this._service.call(request, 'Ams/TvInspection/ReviewedBy');
    }
    Search(request) {
        return this._service.call(request, 'Ams/TvInspection/Search');
    }
    UnitsOfMeasure(request) {
        return this._service.call(request, 'Ams/TvInspection/UnitsOfMeasure');
    }
    Update(request) {
        return this._service.call(request, 'Ams/TvInspection/Update');
    }
    UpdateObservation(request) {
        return this._service.call(request, 'Ams/TvInspection/UpdateObservation');
    }
    UpstreamNode(request) {
        return this._service.call(request, 'Ams/TvInspection/UpstreamNode');
    }
}

class UniversalCustomFieldService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Add');
    }
    ById(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/ById');
    }
    ByType(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/ByType');
    }
    Contract(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Contract');
    }
    CustomerCall(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/CustomerCall');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Delete');
    }
    Inspection(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Inspection');
    }
    MoveField(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/MoveField');
    }
    ServiceRequest(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/ServiceRequest');
    }
    Update(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Update');
    }
    WorkOrder(request) {
        return this._service.call(request, 'Ams/UniversalCustomField/WorkOrder');
    }
}

class WorkOrderService {
    constructor(service) { this._service = service; }
    AddComments(request) {
        return this._service.call(request, 'Ams/WorkOrder/AddComments');
    }
    AddEntities(request) {
        return this._service.call(request, 'Ams/WorkOrder/AddEntities');
    }
    AuditLog(request) {
        return this._service.call(request, 'Ams/WorkOrder/AuditLog');
    }
    ById(request) {
        return this._service.call(request, 'Ams/WorkOrder/ById');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/WorkOrder/ByIds');
    }
    BySid(request) {
        return this._service.call(request, 'Ams/WorkOrder/BySid');
    }
    BySids(request) {
        return this._service.call(request, 'Ams/WorkOrder/BySids');
    }
    Cancel(request) {
        return this._service.call(request, 'Ams/WorkOrder/Cancel');
    }
    Categories(request) {
        return this._service.call(request, 'Ams/WorkOrder/Categories');
    }
    ChangeCustomFieldCategory(request) {
        return this._service.call(request, 'Ams/WorkOrder/ChangeCustomFieldCategory');
    }
    Close(request) {
        return this._service.call(request, 'Ams/WorkOrder/Close');
    }
    Combine(request) {
        return this._service.call(request, 'Ams/WorkOrder/Combine');
    }
    Comments(request) {
        return this._service.call(request, 'Ams/WorkOrder/Comments');
    }
    CommentsByWorkOrderIds(request) {
        return this._service.call(request, 'Ams/WorkOrder/CommentsByWorkOrderIds');
    }
    Create(request) {
        return this._service.call(request, 'Ams/WorkOrder/Create');
    }
    CreateFromInspection(request) {
        return this._service.call(request, 'Ams/WorkOrder/CreateFromInspection');
    }
    CreateFromParent(request) {
        return this._service.call(request, 'Ams/WorkOrder/CreateFromParent');
    }
    CreateFromServiceRequest(request) {
        return this._service.call(request, 'Ams/WorkOrder/CreateFromServiceRequest');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/WorkOrder/CreateSearchDefinition');
    }
    CustomFields(request) {
        return this._service.call(request, 'Ams/WorkOrder/CustomFields');
    }
    CustomFieldsByWorkOrderSids(request) {
        return this._service.call(request, 'Ams/WorkOrder/CustomFieldsByWorkOrderSids');
    }
    CycleFrom(request) {
        return this._service.call(request, 'Ams/WorkOrder/CycleFrom');
    }
    CycleIntervals(request) {
        return this._service.call(request, 'Ams/WorkOrder/CycleIntervals');
    }
    CycleTypes(request) {
        return this._service.call(request, 'Ams/WorkOrder/CycleTypes');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/WorkOrder/Delete');
    }
    Entities(request) {
        return this._service.call(request, 'Ams/WorkOrder/Entities');
    }
    ExpenseTypes(request) {
        return this._service.call(request, 'Ams/WorkOrder/ExpenseTypes');
    }
    InstructionsByWorkOrderIds(request) {
        return this._service.call(request, 'Ams/WorkOrder/InstructionsByWorkOrderIds');
    }
    InstructionsByWorkOrderSids(request) {
        return this._service.call(request, 'Ams/WorkOrder/InstructionsByWorkOrderSids');
    }
    LinkInspections(request) {
        return this._service.call(request, 'Ams/WorkOrder/LinkInspections');
    }
    LinkServiceRequests(request) {
        return this._service.call(request, 'Ams/WorkOrder/LinkServiceRequests');
    }
    Move(request) {
        return this._service.call(request, 'Ams/WorkOrder/Move');
    }
    Priorities(request) {
        return this._service.call(request, 'Ams/WorkOrder/Priorities');
    }
    RemoveEntities(request) {
        return this._service.call(request, 'Ams/WorkOrder/RemoveEntities');
    }
    ReOpen(request) {
        return this._service.call(request, 'Ams/WorkOrder/ReOpen');
    }
    Search(request) {
        return this._service.call(request, 'Ams/WorkOrder/Search');
    }
    SearchForSids(request) {
        return this._service.call(request, 'Ams/WorkOrder/SearchForSids');
    }
    SearchObject(request) {
        return this._service.call(request, 'Ams/WorkOrder/SearchObject');
    }
    Stages(request) {
        return this._service.call(request, 'Ams/WorkOrder/Stages');
    }
    Statuses(request) {
        return this._service.call(request, 'Ams/WorkOrder/Statuses');
    }
    SubmitTos(request) {
        return this._service.call(request, 'Ams/WorkOrder/SubmitTos');
    }
    Supervisors(request) {
        return this._service.call(request, 'Ams/WorkOrder/Supervisors');
    }
    Template(request) {
        return this._service.call(request, 'Ams/WorkOrder/Template');
    }
    TemplateCustomFields(request) {
        return this._service.call(request, 'Ams/WorkOrder/TemplateCustomFields');
    }
    Templates(request) {
        return this._service.call(request, 'Ams/WorkOrder/Templates');
    }
    Uncancel(request) {
        return this._service.call(request, 'Ams/WorkOrder/Uncancel');
    }
    UnlinkInspections(request) {
        return this._service.call(request, 'Ams/WorkOrder/UnlinkInspections');
    }
    UnlinkServiceRequests(request) {
        return this._service.call(request, 'Ams/WorkOrder/UnlinkServiceRequests');
    }
    Update(request) {
        return this._service.call(request, 'Ams/WorkOrder/Update');
    }
    UpdateEntity(request) {
        return this._service.call(request, 'Ams/WorkOrder/UpdateEntity');
    }
    WorkOrderInspections(request) {
        return this._service.call(request, 'Ams/WorkOrder/WorkOrderInspections');
    }
    WorkOrderServiceRequests(request) {
        return this._service.call(request, 'Ams/WorkOrder/WorkOrderServiceRequests');
    }
    WorkOrderWorkOrders(request) {
        return this._service.call(request, 'Ams/WorkOrder/WorkOrderWorkOrders');
    }
}

class WorkOrderEntityService {
    constructor(service) { this._service = service; }
    ByIds(request) {
        return this._service.call(request, 'Ams/WorkOrderEntity/ByIds');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/WorkOrderEntity/CreateSearchDefinition');
    }
    Search(request) {
        return this._service.call(request, 'Ams/WorkOrderEntity/Search');
    }
}

class WorkOrderTemplateService {
    constructor(service) { this._service = service; }
    ByIds(request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/ByIds');
    }
    ByProblemSids(request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/ByProblemSids');
    }
    CustomFieldCategories(request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/CustomFieldCategories');
    }
    CustomFields(request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/CustomFields');
    }
    Search(request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/Search');
    }
    TemplateInspections(request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/TemplateInspections');
    }
    TemplateNames(request) {
        return this._service.call(request, 'Ams/WorkOrderTemplate/TemplateNames');
    }
}

class MapServiceService {
    constructor(service) { this._service = service; }
    Configuration(request) {
        return this._service.call(request, 'Gis/MapService/Configuration');
    }
    Domain(request) {
        return this._service.call(request, 'Gis/MapService/Domain');
    }
    DownloadMobileMapCache(request) {
        return this._service.call(request, 'Gis/MapService/DownloadMobileMapCache');
    }
    InitialExtent(request) {
        return this._service.call(request, 'Gis/MapService/InitialExtent');
    }
    InspectionConfiguration(request) {
        return this._service.call(request, 'Gis/MapService/InspectionConfiguration');
    }
    ServiceRequestConfiguration(request) {
        return this._service.call(request, 'Gis/MapService/ServiceRequestConfiguration');
    }
    User(request) {
        return this._service.call(request, 'Gis/MapService/User');
    }
    WorkOrderConfiguration(request) {
        return this._service.call(request, 'Gis/MapService/WorkOrderConfiguration');
    }
}

class BusinessCaseService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/BusinessCase/Add');
    }
    Update(request) {
        return this._service.call(request, 'PLL/BusinessCase/Update');
    }
}

class CaseService {
    constructor(service) { this._service = service; }
    Create(request) {
        return this._service.call(request, 'PLL/Case/Create');
    }
    CreateChild(request) {
        return this._service.call(request, 'PLL/Case/CreateChild');
    }
}

class CaseAddressService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseAddress/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseAddress/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseAddress/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseAddress/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseAddress/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'PLL/CaseAddress/SearchObject');
    }
}

class CaseAssetService {
    constructor(service) { this._service = service; }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseAsset/ByCaObjectId');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseAsset/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseAsset/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'PLL/CaseAsset/SearchObject');
    }
}

class CaseChildObjectService {
    constructor(service) { this._service = service; }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseChildObject/ByCaObjectId');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseChildObject/DeleteByCaObjectId');
    }
    GetList(request) {
        return this._service.call(request, 'PLL/CaseChildObject/GetList');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseChildObject/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'PLL/CaseChildObject/SearchObject');
    }
}

class CaseConditionService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseCondition/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseCondition/ByCaObjectId');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseCondition/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseCondition/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'PLL/CaseCondition/SearchObject');
    }
}

class CaseContractorService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseContractor/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseContractor/ByCaObjectId');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseContractor/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseContractor/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'PLL/CaseContractor/SearchObject');
    }
}

class CaseCorrectionsService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseCorrections/Add');
    }
    ByCaTaskIds(request) {
        return this._service.call(request, 'PLL/CaseCorrections/ByCaTaskIds');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseCorrections/Search');
    }
    Update(request) {
        return this._service.call(request, 'PLL/CaseCorrections/Update');
    }
}

class CaseCorrStatusService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseCorrStatus/Add');
    }
    ByCaCorrectionsIds(request) {
        return this._service.call(request, 'PLL/CaseCorrStatus/ByCaCorrectionsIds');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseCorrStatus/Search');
    }
}

class CaseDataDetailService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseDataDetail/Add');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseDataDetail/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'PLL/CaseDataDetail/SearchObject');
    }
    Update(request) {
        return this._service.call(request, 'PLL/CaseDataDetail/Update');
    }
    UpdateLock(request) {
        return this._service.call(request, 'PLL/CaseDataDetail/UpdateLock');
    }
    WIPAdd(request) {
        return this._service.call(request, 'PLL/CaseDataDetail/WIPAdd');
    }
}

class CaseDataGroupService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseDataGroup/Add');
    }
    AddDefault(request) {
        return this._service.call(request, 'PLL/CaseDataGroup/AddDefault');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseDataGroup/ByCaObjectId');
    }
    CheckGISChanges(request) {
        return this._service.call(request, 'PLL/CaseDataGroup/CheckGISChanges');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseDataGroup/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseDataGroup/Search');
    }
    UpdateFromAsset(request) {
        return this._service.call(request, 'PLL/CaseDataGroup/UpdateFromAsset');
    }
}

class CaseDataListValuesService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseDataListValues/Add');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseDataListValues/Delete');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseDataListValues/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'PLL/CaseDataListValues/SearchObject');
    }
}

class CaseDepositService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseDeposit/Add');
    }
    AddDefault(request) {
        return this._service.call(request, 'PLL/CaseDeposit/AddDefault');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseDeposit/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseDeposit/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseDeposit/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseDeposit/Search');
    }
}

class CaseFeesService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseFees/Add');
    }
    AddDefault(request) {
        return this._service.call(request, 'PLL/CaseFees/AddDefault');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseFees/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseFees/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseFees/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseFees/Search');
    }
}

class CaseFeesDataDetailService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseFeesDataDetail/Add');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseFeesDataDetail/Delete');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseFeesDataDetail/Search');
    }
}

class CaseFeesDataGroupService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseFeesDataGroup/Add');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseFeesDataGroup/Delete');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseFeesDataGroup/Search');
    }
}

class CaseFlagsService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseFlags/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseFlags/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseFlags/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseFlags/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseFlags/Search');
    }
}

class CaseInspectionRequestService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseInspectionRequest/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseInspectionRequest/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseInspectionRequest/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseInspectionRequest/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseInspectionRequest/Search');
    }
}

class CaseInstReleasesService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseInstReleases/Add');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseInstReleases/Delete');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseInstReleases/Search');
    }
}

class CaseInstrumentService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseInstrument/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseInstrument/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseInstrument/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseInstrument/DeleteByCaObjectId');
    }
    GetList(request) {
        return this._service.call(request, 'PLL/CaseInstrument/GetList');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseInstrument/Search');
    }
}

class CaseLicenseService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseLicense/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseLicense/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseLicense/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseLicense/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseLicense/Search');
    }
}

class CaseNotesService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseNotes/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseNotes/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseNotes/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseNotes/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseNotes/Search');
    }
}

class CaseObjectService {
    constructor(service) { this._service = service; }
    ByIds(request) {
        return this._service.call(request, 'PLL/CaseObject/ByIds');
    }
    CreateCaseFromServiceRequest(request) {
        return this._service.call(request, 'PLL/CaseObject/CreateCaseFromServiceRequest');
    }
    DeleteCase(request) {
        return this._service.call(request, 'PLL/CaseObject/DeleteCase');
    }
    Move(request) {
        return this._service.call(request, 'PLL/CaseObject/Move');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseObject/Search');
    }
}

class CaseObjectCommentsService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseObjectComments/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseObjectComments/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseObjectComments/Delete');
    }
    Update(request) {
        return this._service.call(request, 'PLL/CaseObjectComments/Update');
    }
}

class CasePaymentService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CasePayment/Add');
    }
    AddDeposit(request) {
        return this._service.call(request, 'PLL/CasePayment/AddDeposit');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CasePayment/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CasePayment/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CasePayment/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CasePayment/Search');
    }
}

class CasePaymentRefundService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CasePaymentRefund/Add');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CasePaymentRefund/Delete');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CasePaymentRefund/Search');
    }
    Update(request) {
        return this._service.call(request, 'PLL/CasePaymentRefund/Update');
    }
}

class CasePeopleService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CasePeople/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CasePeople/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CasePeople/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CasePeople/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CasePeople/Search');
    }
}

class CaseRelDocsService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseRelDocs/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseRelDocs/ByCaObjectId');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseRelDocs/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseRelDocs/DeleteByCaObjectId');
    }
    GetStoragePreferences(request) {
        return this._service.call(request, 'PLL/CaseRelDocs/GetStoragePreferences');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseRelDocs/Search');
    }
}

class CaseStatusService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseStatus/Add');
    }
}

class CaseTaskService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseTask/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseTask/ByCaObjectId');
    }
    ByIds(request) {
        return this._service.call(request, 'PLL/CaseTask/ByIds');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseTask/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseTask/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseTask/Search');
    }
    SetResult(request) {
        return this._service.call(request, 'PLL/CaseTask/SetResult');
    }
    Update(request) {
        return this._service.call(request, 'PLL/CaseTask/Update');
    }
}

class CaseTaskCommentsService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseTaskComments/Add');
    }
    ByCaTaskId(request) {
        return this._service.call(request, 'PLL/CaseTaskComments/ByCaTaskId');
    }
    ByCaTaskIds(request) {
        return this._service.call(request, 'PLL/CaseTaskComments/ByCaTaskIds');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseTaskComments/Delete');
    }
    Update(request) {
        return this._service.call(request, 'PLL/CaseTaskComments/Update');
    }
}

class CaseTaskResultsService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseTaskResults/Add');
    }
    ByCaTaskIds(request) {
        return this._service.call(request, 'PLL/CaseTaskResults/ByCaTaskIds');
    }
    SearchObject(request) {
        return this._service.call(request, 'PLL/CaseTaskResults/SearchObject');
    }
}

class CaseTypeService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseType/Add');
    }
    GetList(request) {
        return this._service.call(request, 'PLL/CaseType/GetList');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseType/Search');
    }
    SearchObject(request) {
        return this._service.call(request, 'PLL/CaseType/SearchObject');
    }
    Update(request) {
        return this._service.call(request, 'PLL/CaseType/Update');
    }
}

class CaseViolationsService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseViolations/Add');
    }
    ByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseViolations/ByCaObjectId');
    }
    ByCaObjectIds(request) {
        return this._service.call(request, 'PLL/CaseViolations/ByCaObjectIds');
    }
    ByIds(request) {
        return this._service.call(request, 'PLL/CaseViolations/ByIds');
    }
    CompleteViolations(request) {
        return this._service.call(request, 'PLL/CaseViolations/CompleteViolations');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseViolations/Delete');
    }
    DeleteByCaObjectId(request) {
        return this._service.call(request, 'PLL/CaseViolations/DeleteByCaObjectId');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseViolations/Search');
    }
}

class DepartmentService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/Department/Add');
    }
}

class DepositService {
    constructor(service) { this._service = service; }
    All(request) {
        return this._service.call(request, 'PLL/Deposit/All');
    }
    Search(request) {
        return this._service.call(request, 'PLL/Deposit/Search');
    }
}

class DisciplineService {
    constructor(service) { this._service = service; }
    All(request) {
        return this._service.call(request, 'PLL/Discipline/All');
    }
}

class DivisionService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/Division/Add');
    }
}

class ExpirationTypeService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/ExpirationType/Add');
    }
}

class FeeSetupService {
    constructor(service) { this._service = service; }
    All(request) {
        return this._service.call(request, 'PLL/FeeSetup/All');
    }
    Search(request) {
        return this._service.call(request, 'PLL/FeeSetup/Search');
    }
}

class GeneralCommentsService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/GeneralComments/Add');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/GeneralComments/Delete');
    }
}

class HolidayService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/Holiday/Add');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/Holiday/Delete');
    }
}

class InspectionTimeBlockService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/InspectionTimeBlock/Add');
    }
}

class NumberingGroupService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/NumberingGroup/Add');
    }
    Update(request) {
        return this._service.call(request, 'PLL/NumberingGroup/Update');
    }
}

class PeopleService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/People/Add');
    }
}

class PeopleRoleService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/PeopleRole/Add');
    }
}

class SubTypeService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/SubType/Add');
    }
    Update(request) {
        return this._service.call(request, 'PLL/SubType/Update');
    }
}

class TaskResultDetailService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/TaskResultDetail/Add');
    }
    Update(request) {
        return this._service.call(request, 'PLL/TaskResultDetail/Update');
    }
}

class TaskResultFeeInsertService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/TaskResultFeeInsert/Add');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/TaskResultFeeInsert/Delete');
    }
    DeleteByTaskId(request) {
        return this._service.call(request, 'PLL/TaskResultFeeInsert/DeleteByTaskId');
    }
    Update(request) {
        return this._service.call(request, 'PLL/TaskResultFeeInsert/Update');
    }
}

class TenderTypeService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/TenderType/Add');
    }
    Update(request) {
        return this._service.call(request, 'PLL/TenderType/Update');
    }
}

class ActivityLinkService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'General/ActivityLink/Add');
    }
    ByActivityIds(request) {
        return this._service.call(request, 'General/ActivityLink/ByActivityIds');
    }
    ByActivitySids(request) {
        return this._service.call(request, 'General/ActivityLink/ByActivitySids');
    }
    CloneByActivitySid(request) {
        return this._service.call(request, 'General/ActivityLink/CloneByActivitySid');
    }
    Delete(request) {
        return this._service.call(request, 'General/ActivityLink/Delete');
    }
    Remove(request) {
        return this._service.call(request, 'General/ActivityLink/Remove');
    }
}

class AppDataService {
    constructor(service) { this._service = service; }
    CurrentLocation(request) {
        return this._service.call(request, 'General/AppData/CurrentLocation');
    }
    SelectedEntities(request) {
        return this._service.call(request, 'General/AppData/SelectedEntities');
    }
}

class AuthenticationService {
    constructor(service) { this._service = service; }
    Authenticate(request) {
        return this._service.call(request, 'General/Authentication/Authenticate');
    }
    CityworksOnlineAuthenticate(request) {
        return this._service.call(request, 'General/Authentication/CityworksOnlineAuthenticate');
    }
    CityworksOnlineSites(request) {
        return this._service.call(request, 'General/Authentication/CityworksOnlineSites');
    }
    Domains(request) {
        return this._service.call(request, 'General/Authentication/Domains');
    }
    User(request) {
        return this._service.call(request, 'General/Authentication/User');
    }
    Validate(request) {
        return this._service.call(request, 'General/Authentication/Validate');
    }
    Version(request) {
        return this._service.call(request, 'General/Authentication/Version');
    }
}

class CostSummaryService {
    constructor(service) { this._service = service; }
    WorkOrderEntity(request) {
        return this._service.call(request, 'General/CostSummary/WorkOrderEntity');
    }
    WorkOrderEntitySearch(request) {
        return this._service.call(request, 'General/CostSummary/WorkOrderEntitySearch');
    }
}

class CwMetaDataService {
    constructor(service) { this._service = service; }
    ByTableNameSids(request) {
        return this._service.call(request, 'General/CwMetaData/ByTableNameSids');
    }
}

class LocalizationService {
    constructor(service) { this._service = service; }
    LocalizationSettings(request) {
        return this._service.call(request, 'General/Localization/LocalizationSettings');
    }
    TimeZones(request) {
        return this._service.call(request, 'General/Localization/TimeZones');
    }
}

class MessageQueueService {
    constructor(service) { this._service = service; }
    ByIds(request) {
        return this._service.call(request, 'General/MessageQueue/ByIds');
    }
    Delete(request) {
        return this._service.call(request, 'General/MessageQueue/Delete');
    }
    Preferences(request) {
        return this._service.call(request, 'General/MessageQueue/Preferences');
    }
    Search(request) {
        return this._service.call(request, 'General/MessageQueue/Search');
    }
    Update(request) {
        return this._service.call(request, 'General/MessageQueue/Update');
    }
    UpdateMessageStatus(request) {
        return this._service.call(request, 'General/MessageQueue/UpdateMessageStatus');
    }
    WebHooks(request) {
        return this._service.call(request, 'General/MessageQueue/WebHooks');
    }
}

class PavementManagementInterfaceService {
    constructor(service) { this._service = service; }
    ExportInspections(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ExportInspections');
    }
    ExportInventory(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ExportInventory');
    }
    ExportWorkHistory(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ExportWorkHistory');
    }
    GeneratePaverData(request) {
        return this._service.call(request, 'General/PavementManagementInterface/GeneratePaverData');
    }
    GetPavementInspectionsByIds(request) {
        return this._service.call(request, 'General/PavementManagementInterface/GetPavementInspectionsByIds');
    }
    GISSavedSearches(request) {
        return this._service.call(request, 'General/PavementManagementInterface/GISSavedSearches');
    }
    ImportInspection(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ImportInspection');
    }
    ImportInspections(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ImportInspections');
    }
    PavementInspectionSearch(request) {
        return this._service.call(request, 'General/PavementManagementInterface/PavementInspectionSearch');
    }
    ProcessInspectionXmlFile(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessInspectionXmlFile');
    }
    ProcessInventoryXmlFile(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessInventoryXmlFile');
    }
    ProcessProjectXmlFile(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessProjectXmlFile');
    }
    ProcessRecommendedWorkCsvFile(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessRecommendedWorkCsvFile');
    }
    ProcessRecommendedWorkXmlFile(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessRecommendedWorkXmlFile');
    }
    TemplateMapping(request) {
        return this._service.call(request, 'General/PavementManagementInterface/TemplateMapping');
    }
}

class QuickSearchService {
    constructor(service) { this._service = service; }
    QuickSearch(request) {
        return this._service.call(request, 'General/QuickSearch/QuickSearch');
    }
}

class TokenService {
    constructor(service) { this._service = service; }
    RevokeUser(request) {
        return this._service.call(request, 'General/Token/RevokeUser');
    }
}

class WebHookEventService {
    constructor(service) { this._service = service; }
    ProcessMessages(request) {
        return this._service.call(request, 'General/WebHookEvent/ProcessMessages');
    }
}

export { AttachmentsService, BookmarkService, CodesService, CommentService, ConditionService, ContractService, ContractorService, CrewService, CustomerAccountService, CustomerCallService, DesignerService, EmployeeService, EntityService, EquipmentService, EquipmentChangeOutService, EquipmentCostService, EquipmentReservationService, EventLayerService, GISServiceService, InboxService, InspectionService, InspectionTemplateService, LaborCostService, MaterialService, MaterialCostService, PavementInspectionService, PluginLayoutService, PreferencesService, ProjectsService, ReadingService, RecentActivityService, RelatesService, SearchService, SecurityService, ServiceRequestService, ServiceRequestTemplateService, StoreroomService, TasksService, TvInspectionService, UniversalCustomFieldService, WorkOrderService, WorkOrderEntityService, WorkOrderTemplateService, MapServiceService, BusinessCaseService, CaseService, CaseAddressService, CaseAssetService, CaseChildObjectService, CaseConditionService, CaseContractorService, CaseCorrectionsService, CaseCorrStatusService, CaseDataDetailService, CaseDataGroupService, CaseDataListValuesService, CaseDepositService, CaseFeesService, CaseFeesDataDetailService, CaseFeesDataGroupService, CaseFlagsService, CaseInspectionRequestService, CaseInstReleasesService, CaseInstrumentService, CaseLicenseService, CaseNotesService, CaseObjectService, CaseObjectCommentsService, CasePaymentService, CasePaymentRefundService, CasePeopleService, CaseRelDocsService, CaseStatusService, CaseTaskService, CaseTaskCommentsService, CaseTaskResultsService, CaseTypeService, CaseViolationsService, DepartmentService, DepositService, DisciplineService, DivisionService, ExpirationTypeService, FeeSetupService, GeneralCommentsService, HolidayService, InspectionTimeBlockService, NumberingGroupService, PeopleService, PeopleRoleService, SubTypeService, TaskResultDetailService, TaskResultFeeInsertService, TenderTypeService, ActivityLinkService, AppDataService, AuthenticationService, CostSummaryService, CwMetaDataService, LocalizationService, MessageQueueService, PavementManagementInterfaceService, QuickSearchService, TokenService, WebHookEventService };
//# sourceMappingURL=api-service.js.map
