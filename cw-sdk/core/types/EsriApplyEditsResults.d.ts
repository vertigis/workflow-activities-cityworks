import { EsriUpdateResult } from './EsriUpdateResult';
export interface EsriApplyEditsResults {
    addResults?: EsriUpdateResult[];
    deleteResults?: EsriUpdateResult[];
    id?: number;
    updateResults?: EsriUpdateResult[];
}
