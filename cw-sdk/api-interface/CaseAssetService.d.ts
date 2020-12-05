import { CaAssetItemBase } from '../core/types/CaAssetItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseAssetServiceTypes {
    namespace Requests {
        interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            Address?: string;
            AssetId?: string;
            AssetObjectId?: number;
            AssetType?: string;
            CaAssetId?: number;
            FeatureAssetId?: string;
            FeatureClass?: string;
            FeatureObjectId?: number;
            LegacyId?: string;
            Location?: string;
            TileNo?: string;
            Xcoord?: string;
            Ycoord?: string;
        }
        interface SearchObject extends ServiceTypes.CoreRequestBase {
            Address?: string;
            AssetId?: string;
            AssetObjectId?: number;
            AssetType?: string;
            CaAssetId?: number;
            FeatureAssetId?: string;
            FeatureClass?: string;
            FeatureObjectId?: number;
            LegacyId?: string;
            Location?: string;
            TileNo?: string;
            Xcoord?: string;
            Ycoord?: string;
        }
    }
    namespace Responses {
        interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CaAssetItemBase[]> {
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
        interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CaAssetItemBase[]> {
        }
    }
    interface ICaseAssetService {
        ByCaObjectId?: (request: Requests.ByCaObjectId) => Promise<Responses.ByCaObjectId>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => Promise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => Promise<Responses.SearchObject>;
    }
}
