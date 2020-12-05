import { NumericFieldValue } from './NumericFieldValue';
export interface SearchQANumericField extends NumericFieldValue {
    FieldName?: string;
    FieldValues?: string;
    QuestionId?: number;
    SearchId?: number;
    TableName?: string;
    TemplateId?: number;
}
