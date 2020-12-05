import { MapWidgetFormatOptions } from './MapWidgetFormatOptions';
import { WidgetOptions } from './WidgetOptions';
export interface MapWidgetOption extends WidgetOptions {
    FeatureLayerUrl?: string;
    FormatOptions?: MapWidgetFormatOptions;
    GisServiceDefinitionId?: number;
    QueryDefinitionId?: number;
    QueryId?: number;
}
