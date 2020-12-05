var TokenService = /** @class */ (function () {
    function TokenService(service) {
        this._service = service;
    }
    TokenService.prototype.RevokeUser = function (request) {
        return this._service.call(request, 'General/Token/RevokeUser');
    };
    return TokenService;
}());
export { TokenService };
