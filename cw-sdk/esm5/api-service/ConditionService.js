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
export { ConditionService };
