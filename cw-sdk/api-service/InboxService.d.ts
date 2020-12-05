import { IApiService } from './i-api-service';
import { InboxServiceTypes as SvcDef } from '../api-interface/InboxService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IInboxService = SvcDef.IInboxService;
export declare class InboxService implements IInboxService {
    private _service;
    constructor(service: IApiService);
    CopyWidgetContainerTab(request: Requests.CopyWidgetContainerTab): Promise<Responses.CopyWidgetContainerTab>;
    CreateWidget(request: Requests.CreateWidget): Promise<Responses.CreateWidget>;
    CreateWidgetContainer(request: Requests.CreateWidgetContainer): Promise<Responses.CreateWidgetContainer>;
    CreateWidgetContainerTab(request: Requests.CreateWidgetContainerTab): Promise<Responses.CreateWidgetContainerTab>;
    CreateWidgetZone(request: Requests.CreateWidgetZone): Promise<Responses.CreateWidgetZone>;
    DeleteWidget(request: Requests.DeleteWidget): Promise<Responses.DeleteWidget>;
    DeleteWidgetContainer(request: Requests.DeleteWidgetContainer): Promise<Responses.DeleteWidgetContainer>;
    DeleteWidgetContainerTab(request: Requests.DeleteWidgetContainerTab): Promise<Responses.DeleteWidgetContainerTab>;
    DeleteWidgetZone(request: Requests.DeleteWidgetZone): Promise<Responses.DeleteWidgetZone>;
    MoveWidget(request: Requests.MoveWidget): Promise<Responses.MoveWidget>;
    MoveWidgetContainerTab(request: Requests.MoveWidgetContainerTab): Promise<Responses.MoveWidgetContainerTab>;
    MoveWidgetZone(request: Requests.MoveWidgetZone): Promise<Responses.MoveWidgetZone>;
    UpdateChartWidget(request: Requests.UpdateChartWidget): Promise<Responses.UpdateChartWidget>;
    UpdateHtmlWidget(request: Requests.UpdateHtmlWidget): Promise<Responses.UpdateHtmlWidget>;
    UpdateNotesWidget(request: Requests.UpdateNotesWidget): Promise<Responses.UpdateNotesWidget>;
    UpdateReportLinksWidget(request: Requests.UpdateReportLinksWidget): Promise<Responses.UpdateReportLinksWidget>;
    UpdateSearchResultsWidget(request: Requests.UpdateSearchResultsWidget): Promise<Responses.UpdateSearchResultsWidget>;
    UpdateWeatherWidget(request: Requests.UpdateWeatherWidget): Promise<Responses.UpdateWeatherWidget>;
    UpdateWidgetContainer(request: Requests.UpdateWidgetContainer): Promise<Responses.UpdateWidgetContainer>;
    UpdateWidgetContainerTab(request: Requests.UpdateWidgetContainerTab): Promise<Responses.UpdateWidgetContainerTab>;
    UpdateWidgetZone(request: Requests.UpdateWidgetZone): Promise<Responses.UpdateWidgetZone>;
}
