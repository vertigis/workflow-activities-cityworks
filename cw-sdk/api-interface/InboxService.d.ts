import { WeatherWidget } from '../core/types/WeatherWidget';
import { SearchResultsWidget } from '../core/types/SearchResultsWidget';
import { ReportLinksWidget } from '../core/types/ReportLinksWidget';
import { NotesWidget } from '../core/types/NotesWidget';
import { HtmlWidget } from '../core/types/HtmlWidget';
import { ChartWidget } from '../core/types/ChartWidget';
import { IWidgetZone } from '../core/types/IWidgetZone';
import { IWidgetContainerTab } from '../core/types/IWidgetContainerTab';
import { IWidgetContainer } from '../core/types/IWidgetContainer';
import { IWidget } from '../core/types/IWidget';
import { ServiceTypes } from '../core/service-types';
export declare namespace InboxServiceTypes {
    namespace Requests {
        interface CopyWidgetContainerTab extends ServiceTypes.CoreRequestBase {
            EmployeeSids: number[];
            Id: number;
        }
        interface CreateWidget extends ServiceTypes.CoreRequestBase {
            WidgetType: number;
            ZoneId: number;
        }
        interface CreateWidgetContainer extends ServiceTypes.CoreRequestBase {
            ContainerType?: number;
            DomainId?: number;
            EmployeeSid?: number;
            Header?: string;
            Position?: number;
            TabId: number;
        }
        interface CreateWidgetContainerTab extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
            Header?: string;
            Position?: number;
            TabType?: number;
        }
        interface CreateWidgetZone extends ServiceTypes.CoreRequestBase {
            ContainerId: number;
        }
        interface DeleteWidget extends ServiceTypes.CoreRequestBase {
            Id: number;
        }
        interface DeleteWidgetContainer extends ServiceTypes.CoreRequestBase {
            Id: number;
        }
        interface DeleteWidgetContainerTab extends ServiceTypes.CoreRequestBase {
            Id: number;
        }
        interface DeleteWidgetZone extends ServiceTypes.CoreRequestBase {
            Id: number;
        }
        interface MoveWidget extends ServiceTypes.CoreRequestBase {
            Count?: number;
            Direction: number;
            Id: number;
        }
        interface MoveWidgetContainerTab extends ServiceTypes.CoreRequestBase {
            Count?: number;
            Direction: number;
            Id: number;
        }
        interface MoveWidgetZone extends ServiceTypes.CoreRequestBase {
            Count?: number;
            Direction: number;
            Id: number;
        }
        interface UpdateChartWidget extends ServiceTypes.CoreRequestBase {
            Analysis?: string;
            BottomMargin?: number;
            ChartType?: string;
            Header?: string;
            Height?: number;
            Id: number;
            Kind?: string;
            LeftMargin?: number;
            SearchId?: number;
            TextRotation?: number;
            XColumn?: string;
            YColumn?: string;
        }
        interface UpdateHtmlWidget extends ServiceTypes.CoreRequestBase {
            Header?: string;
            Height?: string;
            Html?: string;
            Id: number;
            Position?: number;
            Url?: string;
            WidgetZoneId?: number;
        }
        interface UpdateNotesWidget extends ServiceTypes.CoreRequestBase {
            Header?: string;
            Height?: string;
            Id: number;
            Notes?: string;
            Position?: number;
            WidgetZoneId?: number;
        }
        interface UpdateReportLinksWidget extends ServiceTypes.CoreRequestBase {
            Header?: string;
            Height?: number;
            Id: number;
            Position?: number;
            ReportIds?: number[];
            WidgetZoneId?: number;
        }
        interface UpdateSearchResultsWidget extends ServiceTypes.CoreRequestBase {
            AutosizeColumns?: boolean;
            Header?: string;
            Height?: number;
            Id: number;
            RefreshInterval?: number;
            Rows?: number;
            SearchId?: number;
            SearchType?: number;
            SearchView?: number;
        }
        interface UpdateWeatherWidget extends ServiceTypes.CoreRequestBase {
            Header?: string;
            Id: number;
            Position?: number;
            WidgetZoneId?: number;
            ZipCode?: string;
        }
        interface UpdateWidgetContainer extends ServiceTypes.CoreRequestBase {
            ContainerType?: number;
            DomainId?: number;
            EmployeeSid?: number;
            Header?: string;
            Id: number;
            Position?: number;
        }
        interface UpdateWidgetContainerTab extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
            Header?: string;
            Id: number;
            Position?: number;
            TabType?: number;
        }
        interface UpdateWidgetZone extends ServiceTypes.CoreRequestBase {
            Header?: string;
            Id: number;
            Position?: number;
            WidgetContainerId?: number;
            Width?: string;
        }
    }
    namespace Responses {
        interface CopyWidgetContainerTab extends ServiceTypes.CoreResponseBase_<{
            [key: number]: number;
        }> {
        }
        interface CreateWidget extends ServiceTypes.CoreResponseBase_<IWidget> {
        }
        interface CreateWidgetContainer extends ServiceTypes.CoreResponseBase_<IWidgetContainer> {
        }
        interface CreateWidgetContainerTab extends ServiceTypes.CoreResponseBase_<IWidgetContainerTab> {
        }
        interface CreateWidgetZone extends ServiceTypes.CoreResponseBase_<IWidgetZone> {
        }
        interface DeleteWidget extends ServiceTypes.CoreResponseBase_<boolean> {
        }
        interface DeleteWidgetContainer extends ServiceTypes.CoreResponseBase_<boolean> {
        }
        interface DeleteWidgetContainerTab extends ServiceTypes.CoreResponseBase_<boolean> {
        }
        interface DeleteWidgetZone extends ServiceTypes.CoreResponseBase_<boolean> {
        }
        interface MoveWidget extends ServiceTypes.CoreResponseBase_<IWidget> {
        }
        interface MoveWidgetContainerTab extends ServiceTypes.CoreResponseBase_<IWidgetContainerTab> {
        }
        interface MoveWidgetZone extends ServiceTypes.CoreResponseBase_<IWidgetZone> {
        }
        interface UpdateChartWidget extends ServiceTypes.CoreResponseBase_<ChartWidget> {
        }
        interface UpdateHtmlWidget extends ServiceTypes.CoreResponseBase_<HtmlWidget> {
        }
        interface UpdateNotesWidget extends ServiceTypes.CoreResponseBase_<NotesWidget> {
        }
        interface UpdateReportLinksWidget extends ServiceTypes.CoreResponseBase_<ReportLinksWidget> {
        }
        interface UpdateSearchResultsWidget extends ServiceTypes.CoreResponseBase_<SearchResultsWidget> {
        }
        interface UpdateWeatherWidget extends ServiceTypes.CoreResponseBase_<WeatherWidget> {
        }
        interface UpdateWidgetContainer extends ServiceTypes.CoreResponseBase_<IWidgetContainer> {
        }
        interface UpdateWidgetContainerTab extends ServiceTypes.CoreResponseBase_<IWidgetContainerTab> {
        }
        interface UpdateWidgetZone extends ServiceTypes.CoreResponseBase_<IWidgetZone> {
        }
    }
    interface IInboxService {
        CopyWidgetContainerTab?: (request: Requests.CopyWidgetContainerTab) => Promise<Responses.CopyWidgetContainerTab>;
        CreateWidget?: (request: Requests.CreateWidget) => Promise<Responses.CreateWidget>;
        CreateWidgetContainer?: (request: Requests.CreateWidgetContainer) => Promise<Responses.CreateWidgetContainer>;
        CreateWidgetContainerTab?: (request: Requests.CreateWidgetContainerTab) => Promise<Responses.CreateWidgetContainerTab>;
        CreateWidgetZone?: (request: Requests.CreateWidgetZone) => Promise<Responses.CreateWidgetZone>;
        DeleteWidget?: (request: Requests.DeleteWidget) => Promise<Responses.DeleteWidget>;
        DeleteWidgetContainer?: (request: Requests.DeleteWidgetContainer) => Promise<Responses.DeleteWidgetContainer>;
        DeleteWidgetContainerTab?: (request: Requests.DeleteWidgetContainerTab) => Promise<Responses.DeleteWidgetContainerTab>;
        DeleteWidgetZone?: (request: Requests.DeleteWidgetZone) => Promise<Responses.DeleteWidgetZone>;
        MoveWidget?: (request: Requests.MoveWidget) => Promise<Responses.MoveWidget>;
        MoveWidgetContainerTab?: (request: Requests.MoveWidgetContainerTab) => Promise<Responses.MoveWidgetContainerTab>;
        MoveWidgetZone?: (request: Requests.MoveWidgetZone) => Promise<Responses.MoveWidgetZone>;
        UpdateChartWidget?: (request: Requests.UpdateChartWidget) => Promise<Responses.UpdateChartWidget>;
        UpdateHtmlWidget?: (request: Requests.UpdateHtmlWidget) => Promise<Responses.UpdateHtmlWidget>;
        UpdateNotesWidget?: (request: Requests.UpdateNotesWidget) => Promise<Responses.UpdateNotesWidget>;
        UpdateReportLinksWidget?: (request: Requests.UpdateReportLinksWidget) => Promise<Responses.UpdateReportLinksWidget>;
        UpdateSearchResultsWidget?: (request: Requests.UpdateSearchResultsWidget) => Promise<Responses.UpdateSearchResultsWidget>;
        UpdateWeatherWidget?: (request: Requests.UpdateWeatherWidget) => Promise<Responses.UpdateWeatherWidget>;
        UpdateWidgetContainer?: (request: Requests.UpdateWidgetContainer) => Promise<Responses.UpdateWidgetContainer>;
        UpdateWidgetContainerTab?: (request: Requests.UpdateWidgetContainerTab) => Promise<Responses.UpdateWidgetContainerTab>;
        UpdateWidgetZone?: (request: Requests.UpdateWidgetZone) => Promise<Responses.UpdateWidgetZone>;
    }
}
