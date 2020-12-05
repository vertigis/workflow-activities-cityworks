var CaseStatusService = /** @class */ (function () {
    function CaseStatusService(service) {
        this._service = service;
    }
    CaseStatusService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseStatus/Add');
    };
    return CaseStatusService;
}());
export { CaseStatusService };
