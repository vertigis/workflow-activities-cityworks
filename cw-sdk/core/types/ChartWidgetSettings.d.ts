import { ChartWidgetSettingsItem } from './ChartWidgetSettingsItem';
export interface ChartWidgetSettings {
    Analysis?: string;
    BottomMargin?: number;
    ChartType?: string;
    Height?: number;
    Items?: ChartWidgetSettingsItem[];
    LeftMargin?: number;
    TextRotation?: number;
}
