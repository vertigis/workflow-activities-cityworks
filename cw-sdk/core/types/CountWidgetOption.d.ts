import { DashboardNumberFormat } from './DashboardNumberFormat';
import { CountWidgetFormatOptions } from './CountWidgetFormatOptions';
import { CountWidgetColumn } from './CountWidgetColumn';
import { WidgetOptions } from './WidgetOptions';
export interface CountWidgetOption extends WidgetOptions {
    Column?: CountWidgetColumn;
    CountWidgetType?: number;
    FormatOptions?: CountWidgetFormatOptions;
    NumberFormat?: DashboardNumberFormat;
    QueryId?: number;
    Units?: string;
}
