import { CaTaskResultsItemBase } from './CaTaskResultsItemBase';
export interface CaTaskResultsItem extends CaTaskResultsItemBase {
    CaseStatus?: string;
    IsSingleEntry?: boolean;
    StatusCode?: string;
}
