import { CaPaymentRefundItemBase } from '../core/types/CaPaymentRefundItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CasePaymentRefundServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CaPaymentId: number;
            Comments?: string;
            RefundAmount: number;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            CaPaymentRefundId: number;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            CaPaymentId?: number;
            CaPaymentRefundId?: number;
            Comments?: string;
            RefundAmount?: number;
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            CaPaymentRefundId: number;
            Voided: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CaPaymentRefundItemBase> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CaPaymentRefundItemBase> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_obsolete_<CaPaymentRefundItemBase> {
        }
    }
    interface ICasePaymentRefundService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
