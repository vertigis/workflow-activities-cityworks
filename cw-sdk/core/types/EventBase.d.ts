import { EventTriggerType } from './EventTriggerType';
import { SourceEventType } from './SourceEventType';
export interface EventBase {
    Description?: string;
    EventType?: SourceEventType;
    TriggerField?: string;
    TriggerType?: EventTriggerType;
    TriggerValue?: string;
}
