export class InboxService {
    constructor(service) { this._service = service; }
    CopyWidgetContainerTab(request) {
        return this._service.call(request, 'Ams/Inbox/CopyWidgetContainerTab');
    }
    CreateWidget(request) {
        return this._service.call(request, 'Ams/Inbox/CreateWidget');
    }
    CreateWidgetContainer(request) {
        return this._service.call(request, 'Ams/Inbox/CreateWidgetContainer');
    }
    CreateWidgetContainerTab(request) {
        return this._service.call(request, 'Ams/Inbox/CreateWidgetContainerTab');
    }
    CreateWidgetZone(request) {
        return this._service.call(request, 'Ams/Inbox/CreateWidgetZone');
    }
    DeleteWidget(request) {
        return this._service.call(request, 'Ams/Inbox/DeleteWidget');
    }
    DeleteWidgetContainer(request) {
        return this._service.call(request, 'Ams/Inbox/DeleteWidgetContainer');
    }
    DeleteWidgetContainerTab(request) {
        return this._service.call(request, 'Ams/Inbox/DeleteWidgetContainerTab');
    }
    DeleteWidgetZone(request) {
        return this._service.call(request, 'Ams/Inbox/DeleteWidgetZone');
    }
    MoveWidget(request) {
        return this._service.call(request, 'Ams/Inbox/MoveWidget');
    }
    MoveWidgetContainerTab(request) {
        return this._service.call(request, 'Ams/Inbox/MoveWidgetContainerTab');
    }
    MoveWidgetZone(request) {
        return this._service.call(request, 'Ams/Inbox/MoveWidgetZone');
    }
    UpdateChartWidget(request) {
        return this._service.call(request, 'Ams/Inbox/UpdateChartWidget');
    }
    UpdateHtmlWidget(request) {
        return this._service.call(request, 'Ams/Inbox/UpdateHtmlWidget');
    }
    UpdateNotesWidget(request) {
        return this._service.call(request, 'Ams/Inbox/UpdateNotesWidget');
    }
    UpdateReportLinksWidget(request) {
        return this._service.call(request, 'Ams/Inbox/UpdateReportLinksWidget');
    }
    UpdateSearchResultsWidget(request) {
        return this._service.call(request, 'Ams/Inbox/UpdateSearchResultsWidget');
    }
    UpdateWeatherWidget(request) {
        return this._service.call(request, 'Ams/Inbox/UpdateWeatherWidget');
    }
    UpdateWidgetContainer(request) {
        return this._service.call(request, 'Ams/Inbox/UpdateWidgetContainer');
    }
    UpdateWidgetContainerTab(request) {
        return this._service.call(request, 'Ams/Inbox/UpdateWidgetContainerTab');
    }
    UpdateWidgetZone(request) {
        return this._service.call(request, 'Ams/Inbox/UpdateWidgetZone');
    }
}
