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
export { CaseCorrStatusService };
