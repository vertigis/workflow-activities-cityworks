import { ReadingActionType } from './ReadingActionType';
export interface EntityReading {
    ActionType?: ReadingActionType;
    Comments?: string;
    EntityId?: string;
    EntityType?: string;
    Reading?: number;
    ReadingDate?: Date;
    ReadingId?: number;
    ReadingName?: string;
    WOReading?: number;
    WorkOrderId?: string;
    WorkOrderSid?: number;
}
