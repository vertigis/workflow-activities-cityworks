export class CommentService {
    constructor(service) { this._service = service; }
    Add(request) {
        return this._service.call(request, 'Ams/Comment/Add');
    }
    ByActivityIds(request) {
        return this._service.call(request, 'Ams/Comment/ByActivityIds');
    }
    ByActivitySids(request) {
        return this._service.call(request, 'Ams/Comment/ByActivitySids');
    }
    ByActivityTypes(request) {
        return this._service.call(request, 'Ams/Comment/ByActivityTypes');
    }
    ProblemComments(request) {
        return this._service.call(request, 'Ams/Comment/ProblemComments');
    }
    Update(request) {
        return this._service.call(request, 'Ams/Comment/Update');
    }
}
