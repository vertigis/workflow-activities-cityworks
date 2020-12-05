import { CaInstrumentItemBase } from './CaInstrumentItemBase';
export interface CaInstrumentItem extends CaInstrumentItemBase {
    CaseName?: string;
    CaseNumber?: string;
    CaseStatus?: string;
    CaseType?: string;
    CaseTypeDesc?: string;
    CaseTypeId?: number;
    CountryName?: string;
    CreatedByLoginId?: string;
    InstDesc?: string;
    InstType?: string;
    IsSingleEntry?: boolean;
    ModifiedByLoginId?: string;
    ProjectCode?: string;
    ProjectDesc?: string;
    ProjectId?: number;
    StateName?: string;
    SubType?: string;
    SubTypeDesc?: string;
    SubTypeId?: number;
    TableName?: string;
}
