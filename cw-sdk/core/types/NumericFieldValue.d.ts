import { NumericValueMode } from './NumericValueMode';
export interface NumericFieldValue {
    FieldValueList?: string[];
    IncludeNulls?: boolean;
    IsMaxValueExclusive?: boolean;
    IsMinValueExclusive?: boolean;
    MaxTableFieldMultiplier?: number;
    MaxTableFieldName?: string;
    MaxValue?: number;
    MinTableFieldMultiplier?: number;
    MinTableFieldName?: string;
    MinValue?: number;
    UseTableFieldForMax?: boolean;
    UseTableFieldForMin?: boolean;
    ValueMode?: NumericValueMode;
}
