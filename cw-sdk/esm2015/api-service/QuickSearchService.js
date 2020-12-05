export class QuickSearchService {
    constructor(service) { this._service = service; }
    QuickSearch(request) {
        return this._service.call(request, 'General/QuickSearch/QuickSearch');
    }
}
