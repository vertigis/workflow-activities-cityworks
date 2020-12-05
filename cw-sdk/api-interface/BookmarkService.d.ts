import { UserMapScale } from '../core/types/UserMapScale';
import { UserMapExtent } from '../core/types/UserMapExtent';
import { ServiceTypes } from '../core/service-types';
export declare namespace BookmarkServiceTypes {
    namespace Requests {
        interface AddBookmark extends ServiceTypes.CoreRequestBase {
            ExtentName: string;
            IsDefault?: boolean;
            SharedWithin?: number;
            XMax?: number;
            XMin?: number;
            YMax?: number;
            YMin?: number;
        }
        interface AddScale extends ServiceTypes.CoreRequestBase {
            Scale?: number;
            SharedWithin?: number;
        }
        interface DeleteBookmarks extends ServiceTypes.CoreRequestBase {
            BookmarkIds?: number[];
        }
        interface DeleteScales extends ServiceTypes.CoreRequestBase {
            ScaleIds?: number[];
        }
        interface GetBookmarks extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
            GroupId?: number;
            IncludeShared?: boolean;
            WKID?: number;
            WKT?: string;
        }
        interface GetScales extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
            GroupId?: number;
            IncludeShared?: boolean;
        }
        interface SetInitialExtent extends ServiceTypes.CoreRequestBase {
            ExtentName?: string;
            XMax?: number;
            XMin?: number;
            YMax?: number;
            YMin?: number;
        }
        interface UpdateBookmark extends ServiceTypes.CoreRequestBase {
            ExtentId: number;
            ExtentName?: string;
            IsDefault?: boolean;
            SharedWithin?: number;
            XMax?: number;
            XMin?: number;
            YMax?: number;
            YMin?: number;
        }
        interface UpdateScale extends ServiceTypes.CoreRequestBase {
            Scale?: number;
            ScaleId: number;
            SharedWithin?: number;
        }
    }
    namespace Responses {
        interface AddBookmark extends ServiceTypes.CoreResponseBase_<UserMapExtent> {
        }
        interface AddScale extends ServiceTypes.CoreResponseBase_<UserMapScale> {
        }
        interface DeleteBookmarks extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface DeleteScales extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface GetBookmarks extends ServiceTypes.CoreResponseBase_<UserMapExtent[]> {
        }
        interface GetScales extends ServiceTypes.CoreResponseBase_<UserMapScale[]> {
        }
        interface SetInitialExtent extends ServiceTypes.CoreResponseBase_<UserMapExtent> {
        }
        interface UpdateBookmark extends ServiceTypes.CoreResponseBase_<UserMapExtent> {
        }
        interface UpdateScale extends ServiceTypes.CoreResponseBase_<UserMapScale> {
        }
    }
    interface IBookmarkService {
        AddBookmark?: (request: Requests.AddBookmark) => Promise<Responses.AddBookmark>;
        AddScale?: (request: Requests.AddScale) => Promise<Responses.AddScale>;
        DeleteBookmarks?: (request: Requests.DeleteBookmarks) => Promise<Responses.DeleteBookmarks>;
        DeleteScales?: (request: Requests.DeleteScales) => Promise<Responses.DeleteScales>;
        GetBookmarks?: (request: Requests.GetBookmarks) => Promise<Responses.GetBookmarks>;
        GetScales?: (request: Requests.GetScales) => Promise<Responses.GetScales>;
        SetInitialExtent?: (request: Requests.SetInitialExtent) => Promise<Responses.SetInitialExtent>;
        UpdateBookmark?: (request: Requests.UpdateBookmark) => Promise<Responses.UpdateBookmark>;
        UpdateScale?: (request: Requests.UpdateScale) => Promise<Responses.UpdateScale>;
    }
}
