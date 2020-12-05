import { InspCustField } from './InspCustField';
import { ChangeOutOperation } from './ChangeOutOperation';
import { EquipChangeOutBase } from './EquipChangeOutBase';
export interface EquipChangeOut extends EquipChangeOutBase {
    ChangeOutOperations?: ChangeOutOperation[];
    InspCustFields?: InspCustField[];
}
