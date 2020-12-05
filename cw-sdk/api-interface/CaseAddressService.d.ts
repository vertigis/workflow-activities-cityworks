import { CaAddressItemBase } from '../core/types/CaAddressItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseAddressServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            Address?: string;
            AddressId?: number;
            AssetId?: string;
            AssetObjectId?: number;
            AssetType?: string;
            CaObjectId: number;
            CityName?: string;
            CrossStreet?: string;
            DateExpired?: Date;
            ExpiredFlag?: string;
            Facility_Id?: string;
            FeatureAssetId?: string;
            FeatureClass?: string;
            FeatureObjectId?: number;
            LegacyId?: string;
            Level_Id?: string;
            LndObjectId?: number;
            Location?: string;
            MasterFlag?: string;
            ObjectId?: string;
            StateCode?: string;
            StreetDirection?: string;
            StreetFraction?: string;
            StreetName?: string;
            StreetNumber?: number;
            StreetPostDir?: string;
            StreetType?: string;
            Suite?: string;
            TileNo?: string;
            UpdateCaseData?: boolean;
            UpdateXY?: boolean;
            XCoord?: number;
            YCoord?: number;
            ZipCode?: string;
        }
        interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            CaAddressId: number;
            UpdateXY?: boolean;
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            UpdateXY?: boolean;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            AssetType?: string;
            CaAddressId?: number;
            CaObjectId?: number;
            CityName?: string;
            ExpiredFlag?: string;
            StateCode?: string;
            StateName?: string;
            StreetName?: string;
            StreetNumber?: number;
            Suite?: string;
            ZipCode?: string;
        }
        interface SearchObject extends ServiceTypes.CoreRequestBase {
            AssetType?: string;
            CaAddressId?: number;
            CaObjectId?: number;
            CityName?: string;
            ExpiredFlag?: string;
            StateCode?: string;
            StateName?: string;
            StreetName?: string;
            StreetNumber?: number;
            Suite?: string;
            ZipCode?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<CaAddressItemBase> {
        }
        interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CaAddressItemBase[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CaAddressItemBase> {
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
        interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CaAddressItemBase[]> {
        }
    }
    interface ICaseAddressService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => Promise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => Promise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => Promise<Responses.SearchObject>;
    }
}
