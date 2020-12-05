import { ReportLinksWidgetSettings } from './ReportLinksWidgetSettings';
export interface ReportLinksWidget {
    Header?: string;
    Height?: number;
    Id?: number;
    Kind?: string;
    Position?: number;
    Settings?: ReportLinksWidgetSettings;
    WidgetZoneId?: number;
}
