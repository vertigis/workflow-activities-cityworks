import { CaContractorItemBase } from '../core/types/CaContractorItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseContractorServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            ContractorId: number;
            ContractorTypeId: number;
            LocalLicenseId?: number;
            StateLicenseId?: number;
        }
        interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            BusinessName?: string;
            CaContractorId?: number;
            CaObjectId?: number;
            CityName?: string;
            ContractorDesc?: string;
            ContractorId?: number;
            ContractorType?: string;
            ContractorTypeId?: number;
            FirstName?: string;
            LastName?: string;
            LicenseNum?: string;
            LocalLicenseId?: number;
            StateLicenseId?: number;
            WcLiabilityCompany?: string;
        }
        interface SearchObject extends ServiceTypes.CoreRequestBase {
            BusinessName?: string;
            CaContractorId?: number;
            CaObjectId?: number;
            CityName?: string;
            ContractorDesc?: string;
            ContractorId?: number;
            ContractorType?: string;
            ContractorTypeId?: number;
            FirstName?: string;
            LastName?: string;
            LicenseNum?: string;
            LocalLicenseId?: number;
            StateLicenseId?: number;
            WcLiabilityCompany?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CaContractorItemBase> {
        }
        interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CaContractorItemBase[]> {
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
        interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CaContractorItemBase[]> {
        }
    }
    interface ICaseContractorService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => Promise<Responses.ByCaObjectId>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => Promise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => Promise<Responses.SearchObject>;
    }
}
