import { ActivityLinkType } from './ActivityLinkType';
import { ActivityLinkActivityType } from './ActivityLinkActivityType';
export interface ActivityLink {
    ActivityLinkId?: number;
    DestId?: string;
    DestSid?: number;
    DestType?: ActivityLinkActivityType;
    LinkType?: ActivityLinkType;
    SourceId?: string;
    SourceSid?: number;
    SourceType?: ActivityLinkActivityType;
}
