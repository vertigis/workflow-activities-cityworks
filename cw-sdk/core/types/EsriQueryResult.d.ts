import { EsriSpatialReference } from './EsriSpatialReference';
import { EsriServiceLayerAttribute } from './EsriServiceLayerAttribute';
import { EsriRecord } from './EsriRecord';
export interface EsriQueryResult {
    count?: number;
    displayFieldName?: string;
    exceededTransferLimit?: boolean;
    features?: EsriRecord[];
    fieldAliases?: {
        [key: string]: string;
    };
    fields?: EsriServiceLayerAttribute[];
    geometryType?: string;
    globalIdFieldName?: string;
    objectIdFieldName?: string;
    spatialReference?: EsriSpatialReference;
}
