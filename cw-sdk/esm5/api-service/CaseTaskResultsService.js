var CaseTaskResultsService = /** @class */ (function () {
    function CaseTaskResultsService(service) {
        this._service = service;
    }
    CaseTaskResultsService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseTaskResults/Add');
    };
    CaseTaskResultsService.prototype.ByCaTaskIds = function (request) {
        return this._service.call(request, 'PLL/CaseTaskResults/ByCaTaskIds');
    };
    CaseTaskResultsService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'PLL/CaseTaskResults/SearchObject');
    };
    return CaseTaskResultsService;
}());
export { CaseTaskResultsService };
