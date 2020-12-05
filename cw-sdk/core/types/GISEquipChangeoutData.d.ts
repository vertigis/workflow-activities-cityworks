import { GISTableUpdate } from './GISTableUpdate';
import { EquipChangeOutType } from './EquipChangeOutType';
export interface GISEquipChangeoutData {
    ChangeOutType?: EquipChangeOutType;
    ChildEntityType?: string;
    ChildNewUid?: string;
    ChildOldUid?: string;
    ChildUidFieldName?: string;
    CreateNewObjectIfNotFound?: boolean;
    NewObjectAttributes?: GISTableUpdate;
    ParentEntityType?: string;
    ParentSid?: number;
    ParentUid?: string;
    ParentUidFieldName?: string;
}
