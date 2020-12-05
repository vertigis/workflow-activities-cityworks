export class CaseInstReleasesService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'PLL/CaseInstReleases/Add');
    }
    Delete(request) {
        return this._service.call(request, 'PLL/CaseInstReleases/Delete');
    }
    Search(request) {
        return this._service.call(request, 'PLL/CaseInstReleases/Search');
    }
}
