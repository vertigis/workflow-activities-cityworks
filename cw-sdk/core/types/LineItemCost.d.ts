import { VerificationStatus } from './VerificationStatus';
import { CostUsage } from './CostUsage';
export interface LineItemCost {
    AssetId?: string;
    AssetType?: string;
    Comments?: string;
    ContractId?: number;
    ContractLineItemId?: number;
    ContractNumber?: string;
    Cost?: number;
    Description?: string;
    ItemNumber?: string;
    LineItemCostId?: number;
    LineItemId?: number;
    PerformedBy?: string;
    PerformedBySid?: number;
    TaskName?: string;
    TransDate?: Date;
    UnitsUsed?: number;
    UsageType?: CostUsage;
    Verification?: VerificationStatus;
    WorkOrderId?: string;
    WorkOrderSid?: number;
    WorkPerformDate?: Date;
    WOTaskId?: number;
}
