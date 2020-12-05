import { EsriSpatialReference } from './EsriSpatialReference';
export interface EsriExtent {
    isEmpty?: boolean;
    spatialReference?: EsriSpatialReference;
    xmax?: number;
    xmin?: number;
    ymax?: number;
    ymin?: number;
}
