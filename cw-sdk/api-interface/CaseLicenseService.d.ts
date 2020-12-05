import { CaLicenseItemBase } from '../core/types/CaLicenseItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseLicenseServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CaFeeId?: number;
            CaObjectId: number;
            Code: string;
            Comments?: string;
            DateApproved?: Date;
            Description?: string;
            FeeCode?: string;
            FeeSetupId?: number;
            LicenseNumber?: number;
            StatusCode?: string;
        }
        interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            CaLicenseId: number;
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            CaFeeId?: number;
            CaLicenseId?: number;
            Code?: string;
            Comments?: string;
            Description?: string;
            FeeCode?: string;
            FeeSetupId?: number;
            LicenseNumber?: number;
            StatusCode?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CaLicenseItemBase> {
        }
        interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CaLicenseItemBase[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CaLicenseItemBase> {
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
    }
    interface ICaseLicenseService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => Promise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => Promise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
    }
}
