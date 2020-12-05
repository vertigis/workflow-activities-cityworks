import { StandardInspTableName } from './StandardInspTableName';
import { CategoryCustField } from './CategoryCustField';
export interface InspCustField extends CategoryCustField {
    InspId?: string;
    InspType?: StandardInspTableName;
    Parent?: Object;
}
