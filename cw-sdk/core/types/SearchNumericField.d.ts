import { NumericFieldValue } from './NumericFieldValue';
export interface SearchNumericField extends NumericFieldValue {
    FieldName?: string;
    FieldValues?: string;
    FormattedString?: string;
    SearchId?: number;
    TableName?: string;
}
