import { DashboardNumberFormat } from './DashboardNumberFormat';
import { ChartWidgetFormatOptions } from './ChartWidgetFormatOptions';
import { DateGroupByOption } from './DateGroupByOption';
import { DashboardChartWidgetType } from './DashboardChartWidgetType';
import { DashboardAggregationType } from './DashboardAggregationType';
import { WidgetOptions } from './WidgetOptions';
export interface ChartWidgetOptions extends WidgetOptions {
    AggregateByField?: string;
    AggregationType?: DashboardAggregationType;
    ChartType?: DashboardChartWidgetType;
    DateGroupBy?: DateGroupByOption;
    FormatOptions?: ChartWidgetFormatOptions;
    GroupByField?: string;
    NumberFormat?: DashboardNumberFormat;
    QueryId?: number;
}
