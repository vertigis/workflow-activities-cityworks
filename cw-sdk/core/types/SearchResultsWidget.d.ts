import { SearchResultsWidgetSettings } from './SearchResultsWidgetSettings';
import { SearchType } from './SearchType';
export interface SearchResultsWidget {
    Header?: string;
    Height?: number;
    Id?: number;
    Kind?: string;
    Position?: number;
    SearchId?: number;
    SearchType?: SearchType;
    Settings?: SearchResultsWidgetSettings;
    WidgetZoneId?: number;
}
