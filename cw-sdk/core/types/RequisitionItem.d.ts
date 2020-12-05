export interface RequisitionItem {
    BackOrder?: boolean;
    BackOrderQuantity?: number;
    BoDeliveryDate?: Date;
    BoReceiveDate?: Date;
    Canceled?: boolean;
    Complete?: boolean;
    Description?: string;
    ItemCost?: number;
    Justification?: string;
    MaterialSid?: number;
    MaterialUid?: string;
    PartNumber?: string;
    QtyInPkg?: number;
    Quantity?: number;
    ReceivedQuantity?: number;
    RequisitionId?: string;
    RequisitionItemId?: number;
    RequisitionSid?: number;
    ReturnDate?: Date;
    ReturnDetail?: string;
    ReturnQuantity?: number;
    ReturnReason?: string;
    SupplierSid?: number;
    SupplierUid?: string;
    UnitCost?: number;
}
