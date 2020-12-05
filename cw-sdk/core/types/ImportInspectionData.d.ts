import { PavementSample } from './PavementSample';
export interface ImportInspectionData {
    BranchId?: string;
    BranchIdField?: string;
    Comments?: string;
    InspectedBy?: string;
    InspectedBySid?: number;
    InspectedSurface?: string;
    InspectionDate?: Date;
    IsDirty?: boolean;
    NetworkId?: string;
    PavementSamples?: PavementSample[];
    SectionClassName?: string;
    SectionUid?: string;
    TotalSamples?: number;
    WorkOrderId?: string;
}
