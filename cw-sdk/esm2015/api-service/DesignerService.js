export class DesignerService {
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
