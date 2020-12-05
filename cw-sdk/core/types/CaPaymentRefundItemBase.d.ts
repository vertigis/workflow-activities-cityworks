export interface CaPaymentRefundItemBase {
    CaFeeId?: number;
    CaPaymentId?: number;
    CaPaymentRefundId?: number;
    Comments?: string;
    CreatedBy?: number;
    DateCreated?: Date;
    DateVoided?: Date;
    RefundAmount?: number;
    Voided?: string;
    VoidedBy?: number;
}
