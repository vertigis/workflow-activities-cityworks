var CaseInstReleasesService = /** @class */ (function () {
    function CaseInstReleasesService(service) {
        this._service = service;
    }
    CaseInstReleasesService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseInstReleases/Add');
    };
    CaseInstReleasesService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseInstReleases/Delete');
    };
    CaseInstReleasesService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseInstReleases/Search');
    };
    return CaseInstReleasesService;
}());
export { CaseInstReleasesService };
