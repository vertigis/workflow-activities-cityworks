export class FeeSetupService {
    constructor(service) { this._service = service; }
    All(request) {
        return this._service.call(request, 'PLL/FeeSetup/All');
    }
    Search(request) {
        return this._service.call(request, 'PLL/FeeSetup/Search');
    }
}
