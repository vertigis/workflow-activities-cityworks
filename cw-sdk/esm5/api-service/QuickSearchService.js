var QuickSearchService = /** @class */ (function () {
    function QuickSearchService(service) {
        this._service = service;
    }
    QuickSearchService.prototype.QuickSearch = function (request) {
        return this._service.call(request, 'General/QuickSearch/QuickSearch');
    };
    return QuickSearchService;
}());
export { QuickSearchService };
