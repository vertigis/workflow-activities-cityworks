import { CaObjectItemBase } from './CaObjectItemBase';
export interface CaObjectItem extends CaObjectItemBase {
    AcceptedByLoginId?: string;
    AnonymousFlag?: string;
    CaseGroup?: string;
    CloneCaseRelation?: string;
    CreatedByLoginId?: string;
    EnteredByLoginid?: string;
    GetViewColumns?: string[];
    ModifiedByLoginId?: string;
    ParentCaObjectId?: number;
    PendingFlag?: string;
    RegisteredFlag?: string;
    ServiceRequestDesc?: string;
    ServiceRequestId?: number;
    ServiceRequestStatus?: string;
    TableName?: string;
    TempTableName?: string;
    WorkOrderDesc?: string;
    WorkOrderId?: number;
    WorkOrderStatus?: string;
}
