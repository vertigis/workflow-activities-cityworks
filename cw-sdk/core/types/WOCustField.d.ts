import { CategoryCustField } from './CategoryCustField';
export interface WOCustField extends CategoryCustField {
    WorkOrderId?: string;
    WorkOrderSid?: number;
}
