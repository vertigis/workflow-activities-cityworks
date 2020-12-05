import { IApiService } from './i-api-service';
import { BookmarkServiceTypes as SvcDef } from '../api-interface/BookmarkService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IBookmarkService = SvcDef.IBookmarkService;
export declare class BookmarkService implements IBookmarkService {
    private _service;
    constructor(service: IApiService);
    AddBookmark(request: Requests.AddBookmark): Promise<Responses.AddBookmark>;
    AddScale(request: Requests.AddScale): Promise<Responses.AddScale>;
    DeleteBookmarks(request: Requests.DeleteBookmarks): Promise<Responses.DeleteBookmarks>;
    DeleteScales(request: Requests.DeleteScales): Promise<Responses.DeleteScales>;
    GetBookmarks(request: Requests.GetBookmarks): Promise<Responses.GetBookmarks>;
    GetScales(request: Requests.GetScales): Promise<Responses.GetScales>;
    SetInitialExtent(request: Requests.SetInitialExtent): Promise<Responses.SetInitialExtent>;
    UpdateBookmark(request: Requests.UpdateBookmark): Promise<Responses.UpdateBookmark>;
    UpdateScale(request: Requests.UpdateScale): Promise<Responses.UpdateScale>;
}
