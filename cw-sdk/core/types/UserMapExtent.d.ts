import { ApplyLevel } from './ApplyLevel';
import { MapViewExtent } from './MapViewExtent';
export interface UserMapExtent extends MapViewExtent {
    DateTimeModified?: Date;
    ExtentId?: number;
    ExtentName?: string;
    IsDefault?: boolean;
    SharedWithin?: ApplyLevel;
    UserId?: number;
}
