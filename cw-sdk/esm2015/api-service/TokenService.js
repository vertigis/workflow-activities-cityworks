export class TokenService {
    constructor(service) { this._service = service; }
    RevokeUser(request) {
        return this._service.call(request, 'General/Token/RevokeUser');
    }
}
