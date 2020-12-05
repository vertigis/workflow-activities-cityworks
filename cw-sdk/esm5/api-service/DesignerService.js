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
export { DesignerService };
