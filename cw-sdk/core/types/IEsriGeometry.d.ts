import { EsriSpatialReference } from './EsriSpatialReference';
import { EsriExtent } from './EsriExtent';
export interface IEsriGeometry {
    extent?: EsriExtent;
    spatialReference?: EsriSpatialReference;
}
