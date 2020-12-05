import { EsriCodeValue } from './EsriCodeValue';
export interface EsriDomain {
    codedValues?: EsriCodeValue[];
    description?: string;
    IsEmpty?: boolean;
    mergePolicy?: string;
    name?: string;
    range?: number[];
    splitPolicy?: string;
    type?: string;
}
