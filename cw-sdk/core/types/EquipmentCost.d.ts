import { CostUsage } from './CostUsage';
import { EquipmentRateType } from './EquipmentRateType';
export interface EquipmentCost {
    AcctNum?: string;
    Cost?: number;
    Description?: string;
    DomainId?: number;
    EntityType?: string;
    EntityUid?: string;
    EquipmentCostId?: number;
    EquipmentSid?: number;
    EquipmentUid?: string;
    FinishDate?: Date;
    HoursRequired?: number;
    RateType?: EquipmentRateType;
    ReserveTransId?: number;
    Source?: string;
    StartDate?: Date;
    TaskName?: string;
    TransDate?: Date;
    UnitsRequired?: number;
    UsageType?: CostUsage;
    WorkOrderId?: string;
    WorkOrderSid?: number;
    WOTaskId?: number;
}
