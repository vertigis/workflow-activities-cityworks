import { ChartWidgetSettings } from './ChartWidgetSettings';
export interface ChartWidget {
    Header?: string;
    Id?: number;
    Kind?: string;
    Position?: number;
    Settings?: ChartWidgetSettings;
    WidgetZoneId?: number;
}
