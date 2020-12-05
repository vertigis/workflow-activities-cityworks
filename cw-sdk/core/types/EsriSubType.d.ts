import { EsriDomain } from './EsriDomain';
export interface EsriSubType {
    code?: Object;
    defaultValues?: {
        [key: string]: Object;
    };
    domains?: {
        [key: string]: EsriDomain;
    };
    id?: Object;
    name?: string;
}
