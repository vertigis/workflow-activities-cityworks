import { CaDataGroupItemBase } from './CaDataGroupItemBase';
export interface CaDataGroupItem extends CaDataGroupItemBase {
    CaseDataGroupCode?: string;
    CaseName?: string;
    CaseNumber?: string;
    CaseStatus?: string;
    CaseType?: string;
    CaseTypeDesc?: string;
    CaseTypeId?: number;
    CollapseFlag?: string;
    CreatedByLoginId?: string;
    IsSingleEntry?: boolean;
    ModifiedByLoginId?: string;
    SubType?: string;
    SubTypeDesc?: string;
    TempTableName?: string;
}
