import { FieldDataType } from './FieldDataType';
import { CodeDesc } from './CodeDesc';
export interface CategoryCustField {
    CategoryId?: number;
    CodeDescList?: CodeDesc[];
    CodeType?: string;
    CustFieldId?: number;
    CustFieldName?: string;
    CustFieldType?: FieldDataType;
    CustFieldValue?: string;
    DefaultValue?: string;
    ForceSortByCode?: boolean;
    IsRequired?: boolean;
    IsVisible?: boolean;
    LinkFieldName?: string;
    MaxValue?: number;
    MinValue?: number;
    SequenceId?: number;
    UseCodeDesc?: string;
    UseCodeForDisplay?: boolean;
}
