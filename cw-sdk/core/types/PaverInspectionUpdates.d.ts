import { PaverUpdate } from './PaverUpdate';
export interface PaverInspectionUpdates {
    Distresses?: {
        [key: string]: PaverUpdate[];
    };
    Inspections?: {
        [key: string]: PaverUpdate[];
    };
    Samples?: {
        [key: string]: PaverUpdate[];
    };
    SectionHistory?: PaverUpdate[];
}
