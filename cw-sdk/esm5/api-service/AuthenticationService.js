var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(service) {
        this._service = service;
    }
    AuthenticationService.prototype.Authenticate = function (request) {
        return this._service.call(request, 'General/Authentication/Authenticate');
    };
    AuthenticationService.prototype.CityworksOnlineAuthenticate = function (request) {
        return this._service.call(request, 'General/Authentication/CityworksOnlineAuthenticate');
    };
    AuthenticationService.prototype.CityworksOnlineSites = function (request) {
        return this._service.call(request, 'General/Authentication/CityworksOnlineSites');
    };
    AuthenticationService.prototype.Domains = function (request) {
        return this._service.call(request, 'General/Authentication/Domains');
    };
    AuthenticationService.prototype.User = function (request) {
        return this._service.call(request, 'General/Authentication/User');
    };
    AuthenticationService.prototype.Validate = function (request) {
        return this._service.call(request, 'General/Authentication/Validate');
    };
    AuthenticationService.prototype.Version = function (request) {
        return this._service.call(request, 'General/Authentication/Version');
    };
    return AuthenticationService;
}());
export { AuthenticationService };
