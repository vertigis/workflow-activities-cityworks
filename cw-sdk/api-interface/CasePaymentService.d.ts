import { CaPaymentItemBase } from '../core/types/CaPaymentItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CasePaymentServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CaFeeId: number;
            CaObjectId: number;
            CaReceiptId?: number;
            CommentText?: string;
            CustFeeSeq: number;
            DateReceived: Date;
            DateVoided?: Date;
            PaymentAccount?: string;
            PaymentAmount: number;
            PaymentDate: Date;
            ReceivedBy: number;
            ReferenceInfo?: string;
            TenderTypeId: number;
            VoidedBy?: number;
        }
        interface AddDeposit extends ServiceTypes.CoreRequestBase {
            CaDepositId: number;
            CaObjectId: number;
            CaReceiptId?: number;
            CommentText?: string;
            DateReceived: Date;
            DateVoided?: Date;
            PaymentAccount?: string;
            PaymentAmount: number;
            PaymentDate: Date;
            ReceivedBy: number;
            ReferenceInfo?: string;
            TenderTypeId: number;
            VoidedBy?: number;
        }
        interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            CaPaymentId: number;
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            CaPaymentId?: number;
            CommentText?: string;
            FeeAmount?: number;
            FeeCode?: string;
            FeeDesc?: string;
            PaymentAccount?: string;
            PaymentAmount?: number;
            TenderType?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CaPaymentItemBase> {
        }
        interface AddDeposit extends ServiceTypes.CoreResponseBase_obsolete_<CaPaymentItemBase> {
        }
        interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CaPaymentItemBase[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CaPaymentItemBase> {
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
    }
    interface ICasePaymentService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        AddDeposit?: (request: Requests.AddDeposit) => Promise<Responses.AddDeposit>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => Promise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => Promise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
    }
}
