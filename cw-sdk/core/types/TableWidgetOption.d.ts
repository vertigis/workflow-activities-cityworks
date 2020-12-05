import { SortData } from './SortData';
import { TableWidgetFormatOptions } from './TableWidgetFormatOptions';
import { WidgetOptions } from './WidgetOptions';
export interface TableWidgetOption extends WidgetOptions {
    Columns?: string[];
    FormatOptions?: TableWidgetFormatOptions;
    GridSort?: SortData;
    QueryId?: number;
}
