import { EsriSpatialReference } from './EsriSpatialReference';
import { EsriRelatedRecordGroup } from './EsriRelatedRecordGroup';
import { EsriServiceLayerAttribute } from './EsriServiceLayerAttribute';
export interface EsriRelatedRecordBase {
    exceededTransferLimit?: boolean;
    fields?: EsriServiceLayerAttribute[];
    geometryType?: string;
    hasM?: boolean;
    hasZ?: boolean;
    relatedRecordGroups?: EsriRelatedRecordGroup[];
    spatialReference?: EsriSpatialReference;
}
