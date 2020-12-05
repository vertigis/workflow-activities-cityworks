import { ActionType } from './ActionType';
export interface QueueMessageBase {
    DateCreated?: Date;
    DateUpdated?: Date;
    HookType?: ActionType;
    Packet?: string;
}
