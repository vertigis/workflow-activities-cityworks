import { EquipChangeOutBase } from './EquipChangeOutBase';
import { ChangeOutOperation } from './ChangeOutOperation';
export interface EquipmentChangeOutHistory {
    EntityType?: string;
    EntityUid?: string;
    HistoryAsChild?: ChangeOutOperation[];
    HistoryAsParent?: EquipChangeOutBase[];
}
