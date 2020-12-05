import { EsriSubType } from './EsriSubType';
import { GISResultTableRow } from './GISResultTableRow';
import { EsriServiceLayerAttribute } from './EsriServiceLayerAttribute';
import { GISResultBase } from './GISResultBase';
export interface GISResultTable extends GISResultBase {
    EntityType?: string;
    Fields?: EsriServiceLayerAttribute[];
    Rows?: GISResultTableRow[];
    TypeIdField?: string;
    Types?: EsriSubType[];
    UidFieldName?: string;
}
