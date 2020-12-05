import { WorkOrderEntity } from './WorkOrderEntity';
export interface ParentChildItem {
    Child?: WorkOrderEntity;
    Parent?: WorkOrderEntity;
}
