import { EsriDomain } from './EsriDomain';
export interface EsriServiceLayerAttribute {
    alias?: string;
    domain?: EsriDomain;
    editable?: boolean;
    length?: number;
    localizedNames?: {
        [key: string]: string;
    };
    modelName?: string;
    name?: string;
    nullable?: boolean;
    required?: boolean;
    Tag?: Object;
    type?: string;
    visible?: boolean;
}
