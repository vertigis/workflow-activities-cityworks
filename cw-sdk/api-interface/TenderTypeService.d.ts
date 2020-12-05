import { TenderTypeItem } from '../core/types/TenderTypeItem';
import { ServiceTypes } from '../core/service-types';
export declare namespace TenderTypeServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            AccountCode?: string;
            AnonymousFlag?: string;
            ExpiredFlag?: string;
            OrgId?: number;
            OverPaymentFlag?: string;
            PaymentGatewayFlag?: string;
            PaymentGatewayId?: number;
            RegisteredFlag?: string;
            TableName?: string;
            TenderDesc?: string;
            TenderType?: string;
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            AccountCode?: string;
            AnonymousFlag?: string;
            ExpiredFlag?: string;
            OrgId?: number;
            OverPaymentFlag?: string;
            PaymentGatewayFlag?: string;
            PaymentGatewayId?: number;
            RegisteredFlag?: string;
            TableName?: string;
            TenderDesc?: string;
            TenderType?: string;
            TenderTypeId?: number;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<TenderTypeItem> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<TenderTypeItem> {
        }
    }
    interface ITenderTypeService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
