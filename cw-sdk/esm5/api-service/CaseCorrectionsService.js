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
export { CaseCorrectionsService };
