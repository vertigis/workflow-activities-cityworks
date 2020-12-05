import { DateFieldValue } from './DateFieldValue';
export interface SearchDateField extends DateFieldValue {
    FieldName?: string;
    SearchId?: number;
    TableName?: string;
}
