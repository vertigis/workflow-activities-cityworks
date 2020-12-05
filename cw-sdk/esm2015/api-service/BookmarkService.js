export class BookmarkService {
    constructor(service) { this._service = service; }
    AddBookmark(request) {
        return this._service.call(request, 'Ams/Bookmark/AddBookmark');
    }
    AddScale(request) {
        return this._service.call(request, 'Ams/Bookmark/AddScale');
    }
    DeleteBookmarks(request) {
        return this._service.call(request, 'Ams/Bookmark/DeleteBookmarks');
    }
    DeleteScales(request) {
        return this._service.call(request, 'Ams/Bookmark/DeleteScales');
    }
    GetBookmarks(request) {
        return this._service.call(request, 'Ams/Bookmark/GetBookmarks');
    }
    GetScales(request) {
        return this._service.call(request, 'Ams/Bookmark/GetScales');
    }
    SetInitialExtent(request) {
        return this._service.call(request, 'Ams/Bookmark/SetInitialExtent');
    }
    UpdateBookmark(request) {
        return this._service.call(request, 'Ams/Bookmark/UpdateBookmark');
    }
    UpdateScale(request) {
        return this._service.call(request, 'Ams/Bookmark/UpdateScale');
    }
}
