var PeopleService = /** @class */ (function () {
    function PeopleService(service) {
        this._service = service;
    }
    PeopleService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/People/Add');
    };
    return PeopleService;
}());
export { PeopleService };
