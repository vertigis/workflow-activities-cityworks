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
export { NumberingGroupService };
