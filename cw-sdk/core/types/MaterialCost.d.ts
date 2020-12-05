import { CostUsage } from './CostUsage';
export interface MaterialCost {
    AcctNum?: string;
    Cost?: number;
    Description?: string;
    DomainId?: number;
    EntityType?: string;
    EntityUid?: string;
    MaterialCostId?: number;
    MaterialSid?: number;
    MaterialUid?: string;
    Source?: string;
    StockModified?: boolean;
    TaskName?: string;
    TransactionId?: number;
    TransDate?: Date;
    UnitsRequired?: number;
    UsageType?: CostUsage;
    WorkOrderId?: string;
    WorkOrderSid?: number;
    WOTaskId?: number;
}
