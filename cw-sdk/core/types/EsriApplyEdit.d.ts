import { EsriRecord } from './EsriRecord';
export interface EsriApplyEdit {
    adds?: EsriRecord[];
    deletes?: number[];
    id?: number;
    updates?: EsriRecord[];
}
