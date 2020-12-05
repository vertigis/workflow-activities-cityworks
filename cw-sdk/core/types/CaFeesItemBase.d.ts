export interface CaFeesItemBase {
    Amount?: number;
    AutoRecalculate?: string;
    CaDataDetailId?: number;
    CaDataGroupId?: number;
    CaFeeId?: number;
    CaObjectId?: number;
    CommentText?: string;
    CreatedBy?: number;
    CustFeeSeq?: number;
    DateCreated?: Date;
    DateModified?: Date;
    Factor?: number;
    FeeCode?: string;
    FeeDesc?: string;
    FeeSetupId?: number;
    FeeTypeId?: number;
    Invoiced?: string;
    LockOnPayment?: string;
    ModifiedBy?: number;
    PaymentAmount?: number;
    Quantity?: number;
    Rate?: number;
    RecalcCreateDate?: string;
    WaiveFee?: string;
}
