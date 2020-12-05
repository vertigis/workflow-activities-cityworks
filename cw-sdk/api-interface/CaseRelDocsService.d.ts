import { PllPreferenceItem } from '../core/types/PllPreferenceItem';
import { CaRelDocsItemBase } from '../core/types/CaRelDocsItemBase';
import { ViewDataUploadFilesResult } from '../core/types/ViewDataUploadFilesResult';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseRelDocsServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            CaRelDocId?: number;
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
        }
        interface GetStoragePreferences extends ServiceTypes.CoreRequestBase {
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
            CaRelDocId?: number;
            CommentText?: string;
            DocName?: string;
            Location?: string;
            LocationType?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_obsolete_<ViewDataUploadFilesResult[]> {
        }
        interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<ViewDataUploadFilesResult[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CaRelDocsItemBase> {
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete {
        }
        interface StoragePreferences extends ServiceTypes.CoreResponseBase_obsolete_<PllPreferenceItem[]> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
    }
    interface ICaseRelDocsService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => Promise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => Promise<Responses.DeleteByCaObjectId>;
        GetStoragePreferences?: (request: Requests.GetStoragePreferences) => Promise<Responses.StoragePreferences>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
    }
}
