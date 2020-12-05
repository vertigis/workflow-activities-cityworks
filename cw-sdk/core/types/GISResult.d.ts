import { EsriSubType } from './EsriSubType';
import { EsriRecord } from './EsriRecord';
import { EsriServiceLayerAttribute } from './EsriServiceLayerAttribute';
import { GISResultBase } from './GISResultBase';
export interface GISResult extends GISResultBase {
    Alias?: string;
    EntityType?: string;
    Fields?: EsriServiceLayerAttribute[];
    OidFieldName?: string;
    Records?: EsriRecord[];
    RelatedEntity?: EsriRecord;
    RelatedResults?: GISResult[];
    TypeIdField?: string;
    Types?: EsriSubType[];
    UidFieldName?: string;
}
