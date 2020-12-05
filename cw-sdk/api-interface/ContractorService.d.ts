import { ContractorKeywordBase } from '../core/types/ContractorKeywordBase';
import { ContractorBase } from '../core/types/ContractorBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace ContractorServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            Address?: string;
            AutomobileInsAmount?: number;
            AutomobileInsCertificate?: string;
            AutomobileInsEffectDate?: Date;
            AutomobileInsExpireDate?: Date;
            CellPhone?: string;
            City?: string;
            Comments?: string;
            ContactName?: string;
            ContractorName: string;
            ContractorNumber?: string;
            CustomFieldValues?: {
                [key: number]: string;
            };
            Description?: string;
            Email?: string;
            EmergencyFactor?: number;
            Fax?: string;
            FederalTaxId?: string;
            FMSNo?: string;
            GeneralLiabilityAmount?: number;
            GeneralLiabilityCertificate?: string;
            GeneralLiabilityEffectDate?: Date;
            GeneralLiabilityExpireDate?: Date;
            LiabilityInsAmount?: number;
            LiabilityInsCertificate?: string;
            LiabilityInsEffectDate?: Date;
            LiabilityInsExpireDate?: Date;
            Licensed?: boolean;
            LicensedWork?: string;
            LicenseExpDate?: Date;
            LocallyBased?: boolean;
            MWBE?: boolean;
            OfficePhone?: string;
            OtherPhone?: string;
            OverheadRate?: number;
            OverheadType?: string;
            OvertimeFactor?: number;
            PIN?: string;
            ProviderType?: string;
            ProvidesEquipment?: boolean;
            ProvidesLabor?: boolean;
            ProvidesMaterial?: boolean;
            Rate?: number;
            RateType?: string;
            RegistrationDate?: Date;
            State?: string;
            Viewable?: boolean;
            WorkersCompAmount?: number;
            WorkersCompCertificate?: string;
            WorkersCompEffectDate?: Date;
            WorkersCompExpireDate?: Date;
            Zip?: string;
        }
        interface AddKeywords extends ServiceTypes.CoreRequestBase {
            ContractorSids: number[];
            Keywords: string[];
        }
        interface All extends ServiceTypes.CoreRequestBase {
            ViewableOnly?: boolean;
        }
        interface ById extends ServiceTypes.CoreRequestBase {
            ContractorSid: number;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            ContractorSids?: number[];
        }
        interface DeleteKeywords extends ServiceTypes.CoreRequestBase {
            All?: boolean;
            ContractorSids: number[];
            Keywords: string[];
        }
        interface Keywords extends ServiceTypes.CoreRequestBase {
            ContractorSids: number[];
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            ContractorSids?: number[];
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            Address?: string;
            AutomobileInsAmount?: number;
            AutomobileInsCertificate?: string;
            AutomobileInsEffectDate?: Date;
            AutomobileInsExpireDate?: Date;
            CellPhone?: string;
            City?: string;
            Comments?: string;
            ContactName?: string;
            ContractorName?: string;
            ContractorNumber?: string;
            ContractorSid: number;
            Description?: string;
            Email?: string;
            EmergencyFactor?: number;
            Fax?: string;
            FederalTaxId?: string;
            FMSNo?: string;
            GeneralLiabilityAmount?: number;
            GeneralLiabilityCertificate?: string;
            GeneralLiabilityEffectDate?: Date;
            GeneralLiabilityExpireDate?: Date;
            LiabilityInsAmount?: number;
            LiabilityInsCertificate?: string;
            LiabilityInsEffectDate?: Date;
            LiabilityInsExpireDate?: Date;
            Licensed?: boolean;
            LicensedWork?: string;
            LicenseExpDate?: Date;
            LocallyBased?: boolean;
            MWBE?: boolean;
            OfficePhone?: string;
            OtherPhone?: string;
            OverheadRate?: number;
            OverheadType?: string;
            OvertimeFactor?: number;
            PIN?: string;
            ProviderType?: string;
            ProvidesEquipment?: boolean;
            ProvidesLabor?: boolean;
            ProvidesMaterial?: boolean;
            Rate?: number;
            RateType?: string;
            RegistrationDate?: Date;
            State?: string;
            Viewable?: boolean;
            WorkersCompAmount?: number;
            WorkersCompCertificate?: string;
            WorkersCompEffectDate?: Date;
            WorkersCompExpireDate?: Date;
            Zip?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<ContractorBase> {
        }
        interface AddKeywords extends ServiceTypes.CoreResponseBase_<ContractorKeywordBase[]> {
        }
        interface All extends ServiceTypes.CoreResponseBase_<ContractorBase[]> {
        }
        interface ById extends ServiceTypes.CoreResponseBase_<ContractorBase> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface DeleteKeywords extends ServiceTypes.CoreResponseBase {
        }
        interface Keywords extends ServiceTypes.CoreResponseBase_<ContractorKeywordBase[]> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_<ContractorBase[]> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<ContractorBase> {
        }
    }
    interface IContractorService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        AddKeywords?: (request: Requests.AddKeywords) => Promise<Responses.AddKeywords>;
        All?: (request: Requests.All) => Promise<Responses.All>;
        ById?: (request: Requests.ById) => Promise<Responses.ById>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        DeleteKeywords?: (request: Requests.DeleteKeywords) => Promise<Responses.DeleteKeywords>;
        Keywords?: (request: Requests.Keywords) => Promise<Responses.Keywords>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
