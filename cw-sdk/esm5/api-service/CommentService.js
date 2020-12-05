var CommentService = /** @class */ (function () {
    function CommentService(service) {
        this._service = service;
    }
    CommentService.prototype.Add = function (request) {
        return this._service.call(request, 'Ams/Comment/Add');
    };
    CommentService.prototype.ByActivityIds = function (request) {
        return this._service.call(request, 'Ams/Comment/ByActivityIds');
    };
    CommentService.prototype.ByActivitySids = function (request) {
        return this._service.call(request, 'Ams/Comment/ByActivitySids');
    };
    CommentService.prototype.ByActivityTypes = function (request) {
        return this._service.call(request, 'Ams/Comment/ByActivityTypes');
    };
    CommentService.prototype.ProblemComments = function (request) {
        return this._service.call(request, 'Ams/Comment/ProblemComments');
    };
    CommentService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/Comment/Update');
    };
    return CommentService;
}());
export { CommentService };
