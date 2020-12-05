export interface WorkOrderCostSummary {
    ActivityType?: string;
    AssetGroup?: string;
    AssetId?: string;
    AssetType?: string;
    CloseDate?: Date;
    EquipmentCost?: number;
    LaborCost?: number;
    LineItemCost?: number;
    MaterialCost?: number;
    StartDate?: Date;
    TotalHours?: number;
    WOCategory?: string;
    WorkOrderId?: string;
    WorkOrderSid?: number;
}
