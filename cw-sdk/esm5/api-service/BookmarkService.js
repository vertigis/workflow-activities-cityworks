var BookmarkService = /** @class */ (function () {
    function BookmarkService(service) {
        this._service = service;
    }
    BookmarkService.prototype.AddBookmark = function (request) {
        return this._service.call(request, 'Ams/Bookmark/AddBookmark');
    };
    BookmarkService.prototype.AddScale = function (request) {
        return this._service.call(request, 'Ams/Bookmark/AddScale');
    };
    BookmarkService.prototype.DeleteBookmarks = function (request) {
        return this._service.call(request, 'Ams/Bookmark/DeleteBookmarks');
    };
    BookmarkService.prototype.DeleteScales = function (request) {
        return this._service.call(request, 'Ams/Bookmark/DeleteScales');
    };
    BookmarkService.prototype.GetBookmarks = function (request) {
        return this._service.call(request, 'Ams/Bookmark/GetBookmarks');
    };
    BookmarkService.prototype.GetScales = function (request) {
        return this._service.call(request, 'Ams/Bookmark/GetScales');
    };
    BookmarkService.prototype.SetInitialExtent = function (request) {
        return this._service.call(request, 'Ams/Bookmark/SetInitialExtent');
    };
    BookmarkService.prototype.UpdateBookmark = function (request) {
        return this._service.call(request, 'Ams/Bookmark/UpdateBookmark');
    };
    BookmarkService.prototype.UpdateScale = function (request) {
        return this._service.call(request, 'Ams/Bookmark/UpdateScale');
    };
    return BookmarkService;
}());
export { BookmarkService };
