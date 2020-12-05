import { WorkDurationUnit } from './WorkDurationUnit';
export interface PriorityBase {
    Description?: string;
    Duration?: number;
    DurationUnit?: WorkDurationUnit;
    Priority?: string;
    PriorityId?: number;
    PriorityOrder?: number;
}
