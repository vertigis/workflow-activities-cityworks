import { RequisitionItem } from './RequisitionItem';
import { RequisitionBase } from './RequisitionBase';
export interface Requisition extends RequisitionBase {
    RequisitionItems?: RequisitionItem[];
}
