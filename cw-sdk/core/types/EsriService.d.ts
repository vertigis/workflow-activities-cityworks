import { EsriSpatialReference } from './EsriSpatialReference';
import { EsriServiceLayerDescription } from './EsriServiceLayerDescription';
export interface EsriService {
    layers?: EsriServiceLayerDescription[];
    spatialReference?: EsriSpatialReference;
    tables?: EsriServiceLayerDescription[];
}
