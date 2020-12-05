import { BusinessCaseItem } from '../core/types/BusinessCaseItem';
import { ServiceTypes } from '../core/service-types';
export declare namespace BusinessCaseServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            AnonymousFlag?: string;
            AssignedTo?: number;
            BLicenseFlag?: string;
            BusCaseCode?: string;
            BusCaseDesc?: string;
            CaseTypeId?: number;
            CheckQuickCreate?: string;
            ExpiredFlag?: string;
            InfoFlag?: string;
            InfoText?: string;
            OrgId?: number;
            RegisteredFlag?: string;
            ShowQuickCreate?: string;
            SubTypeId?: number;
            TermsFlag?: string;
            TermsText?: string;
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            AnonymousFlag?: string;
            AssignedTo?: number;
            BLicenseFlag?: string;
            BusCaseCode?: string;
            BusCaseDesc?: string;
            BusCaseId?: number;
            CaseTypeId?: number;
            CheckQuickCreate?: string;
            ExpiredFlag?: string;
            InfoFlag?: string;
            InfoText?: string;
            OrgId?: number;
            RegisteredFlag?: string;
            ShowQuickCreate?: string;
            SubTypeId?: number;
            TermsFlag?: string;
            TermsText?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<BusinessCaseItem> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<BusinessCaseItem> {
        }
    }
    interface IBusinessCaseService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
