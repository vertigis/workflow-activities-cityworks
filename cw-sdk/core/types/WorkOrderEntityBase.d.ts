export interface WorkOrderEntityBase {
    Address?: string;
    EntitySid?: number;
    EntityType?: string;
    EntityUid?: string;
    Facility_Id?: string;
    FeatureId?: number;
    FeatureType?: string;
    FeatureUid?: string;
    IsBlank?: boolean;
    LegacyId?: string;
    Level_Id?: string;
    Location?: string;
    ObjectId?: number;
    TileNo?: string;
    WarrantyDate?: Date;
    WorkCompleted?: boolean;
    WorkOrderId?: string;
    WorkOrderSid?: number;
    X?: number;
    Y?: number;
}
