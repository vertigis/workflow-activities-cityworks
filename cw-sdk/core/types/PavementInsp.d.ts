import { PavementSample } from './PavementSample';
import { PavementInspBase } from './PavementInspBase';
export interface PavementInsp extends PavementInspBase {
    BranchId?: string;
    BranchIdField?: string;
    BranchLocation?: string;
    BranchType?: string;
    PavementSamples?: PavementSample[];
    RoadUse?: string;
    SectionArea?: string;
    SectionFrom?: string;
    SectionTo?: string;
}
