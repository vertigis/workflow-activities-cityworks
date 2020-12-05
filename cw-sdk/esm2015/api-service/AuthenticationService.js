export class AuthenticationService {
    constructor(service) { this._service = service; }
    Authenticate(request) {
        return this._service.call(request, 'General/Authentication/Authenticate');
    }
    CityworksOnlineAuthenticate(request) {
        return this._service.call(request, 'General/Authentication/CityworksOnlineAuthenticate');
    }
    CityworksOnlineSites(request) {
        return this._service.call(request, 'General/Authentication/CityworksOnlineSites');
    }
    Domains(request) {
        return this._service.call(request, 'General/Authentication/Domains');
    }
    User(request) {
        return this._service.call(request, 'General/Authentication/User');
    }
    Validate(request) {
        return this._service.call(request, 'General/Authentication/Validate');
    }
    Version(request) {
        return this._service.call(request, 'General/Authentication/Version');
    }
}
