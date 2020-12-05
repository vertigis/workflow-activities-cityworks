var PeopleRoleService = /** @class */ (function () {
    function PeopleRoleService(service) {
        this._service = service;
    }
    PeopleRoleService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/PeopleRole/Add');
    };
    return PeopleRoleService;
}());
export { PeopleRoleService };
