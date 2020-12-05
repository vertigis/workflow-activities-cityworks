export interface CaPaymentItemBase {
    CaDepositId?: number;
    CaFeeId?: number;
    CaObjectId?: number;
    CaPaymentId?: number;
    CaReceiptId?: number;
    CommentText?: string;
    CreatedBy?: number;
    CustFeeSeq?: number;
    DateCreated?: Date;
    DateModified?: Date;
    DateReceived?: Date;
    DateVoided?: Date;
    DepositCode?: string;
    DepositId?: number;
    FeeAmount?: number;
    FeeCode?: string;
    ModifiedBy?: number;
    PaymentAccount?: string;
    PaymentAmount?: number;
    PaymentDate?: Date;
    ReceivedBy?: number;
    ReferenceInfo?: string;
    TenderType?: string;
    TenderTypeId?: number;
    Voided?: string;
    VoidedBy?: number;
}
