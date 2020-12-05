import { TemplateMapLayerSourceType } from './TemplateMapLayerSourceType';
export interface TemplateMapLayer {
    Id?: number;
    MapLayer?: string;
    MapLayerField?: string;
    SourceType?: TemplateMapLayerSourceType;
    TemplateId?: number;
    TemplateUid?: string;
}
