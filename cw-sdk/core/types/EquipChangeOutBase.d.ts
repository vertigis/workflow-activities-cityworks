import { StandardInspBase } from './StandardInspBase';
export interface EquipChangeOutBase extends StandardInspBase {
    ChangeDate?: Date;
    ChangedById?: number;
    ChangeOutId?: number;
    Comments?: string;
    FeatureSid?: number;
    FeatureType?: string;
    FeatureUid?: string;
    InspCustFieldCatId?: number;
    InspectedBy?: string;
    InspectedBySid?: number;
    Location?: string;
    Num10?: number;
    Num11?: number;
    Num12?: number;
    Num13?: number;
    Num14?: number;
    Num15?: number;
    Num16?: number;
    Num17?: number;
    Num18?: number;
    Num19?: number;
    Num20?: number;
    Num6?: number;
    Num7?: number;
    Num8?: number;
    Num9?: number;
    Text11?: string;
    Text12?: string;
    Text13?: string;
    Text14?: string;
    Text15?: string;
    Text16?: string;
    Text17?: string;
    Text18?: string;
    Text19?: string;
    Text20?: string;
    UpdateMap?: boolean;
    WorkOrderId?: string;
    WorkOrderSid?: number;
}