import { PaverUpdate } from './PaverUpdate';
export interface PaverAssetUpdates {
    BranchUpdates?: {
        [key: string]: PaverUpdate[];
    };
    NetworkUpdates?: {
        [key: string]: PaverUpdate[];
    };
    SectionUpdates?: {
        [key: string]: PaverUpdate[];
    };
}
