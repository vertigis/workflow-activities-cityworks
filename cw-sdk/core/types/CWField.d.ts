import { CodeDescUsage } from './CodeDescUsage';
export interface CWField {
    CodeType?: string;
    DefaultValue?: string;
    DomainId?: number;
    FieldAlias?: string;
    FieldId?: number;
    FieldName?: string;
    SequenceId?: number;
    TableName?: string;
    UseCodeDesc?: CodeDescUsage;
}
