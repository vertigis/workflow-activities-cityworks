import { IEsriGeometry } from './IEsriGeometry';
export interface EsriRecord {
    attributes?: {
        [key: string]: Object;
    };
    geometry?: IEsriGeometry;
}
