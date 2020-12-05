import { SubTypeItem } from '../core/types/SubTypeItem';
import { ServiceTypes } from '../core/service-types';
export declare namespace SubTypeServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            AnonymousFlag?: string;
            DefaultText?: string;
            ExpiredFlag?: string;
            OrgId?: number;
            RegisteredFlag?: string;
            SubType?: string;
            SubTypeDesc?: string;
            SubTypeId?: number;
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            AnonymousFlag?: string;
            DefaultText?: string;
            ExpiredFlag?: string;
            OrgId?: number;
            RegisteredFlag?: string;
            SubType?: string;
            SubTypeDesc?: string;
            SubTypeId?: number;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<SubTypeItem> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<SubTypeItem> {
        }
    }
    interface ISubTypeService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
