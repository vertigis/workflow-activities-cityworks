var InboxService = /** @class */ (function () {
    function InboxService(service) {
        this._service = service;
    }
    InboxService.prototype.CopyWidgetContainerTab = function (request) {
        return this._service.call(request, 'Ams/Inbox/CopyWidgetContainerTab');
    };
    InboxService.prototype.CreateWidget = function (request) {
        return this._service.call(request, 'Ams/Inbox/CreateWidget');
    };
    InboxService.prototype.CreateWidgetContainer = function (request) {
        return this._service.call(request, 'Ams/Inbox/CreateWidgetContainer');
    };
    InboxService.prototype.CreateWidgetContainerTab = function (request) {
        return this._service.call(request, 'Ams/Inbox/CreateWidgetContainerTab');
    };
    InboxService.prototype.CreateWidgetZone = function (request) {
        return this._service.call(request, 'Ams/Inbox/CreateWidgetZone');
    };
    InboxService.prototype.DeleteWidget = function (request) {
        return this._service.call(request, 'Ams/Inbox/DeleteWidget');
    };
    InboxService.prototype.DeleteWidgetContainer = function (request) {
        return this._service.call(request, 'Ams/Inbox/DeleteWidgetContainer');
    };
    InboxService.prototype.DeleteWidgetContainerTab = function (request) {
        return this._service.call(request, 'Ams/Inbox/DeleteWidgetContainerTab');
    };
    InboxService.prototype.DeleteWidgetZone = function (request) {
        return this._service.call(request, 'Ams/Inbox/DeleteWidgetZone');
    };
    InboxService.prototype.MoveWidget = function (request) {
        return this._service.call(request, 'Ams/Inbox/MoveWidget');
    };
    InboxService.prototype.MoveWidgetContainerTab = function (request) {
        return this._service.call(request, 'Ams/Inbox/MoveWidgetContainerTab');
    };
    InboxService.prototype.MoveWidgetZone = function (request) {
        return this._service.call(request, 'Ams/Inbox/MoveWidgetZone');
    };
    InboxService.prototype.UpdateChartWidget = function (request) {
        return this._service.call(request, 'Ams/Inbox/UpdateChartWidget');
    };
    InboxService.prototype.UpdateHtmlWidget = function (request) {
        return this._service.call(request, 'Ams/Inbox/UpdateHtmlWidget');
    };
    InboxService.prototype.UpdateNotesWidget = function (request) {
        return this._service.call(request, 'Ams/Inbox/UpdateNotesWidget');
    };
    InboxService.prototype.UpdateReportLinksWidget = function (request) {
        return this._service.call(request, 'Ams/Inbox/UpdateReportLinksWidget');
    };
    InboxService.prototype.UpdateSearchResultsWidget = function (request) {
        return this._service.call(request, 'Ams/Inbox/UpdateSearchResultsWidget');
    };
    InboxService.prototype.UpdateWeatherWidget = function (request) {
        return this._service.call(request, 'Ams/Inbox/UpdateWeatherWidget');
    };
    InboxService.prototype.UpdateWidgetContainer = function (request) {
        return this._service.call(request, 'Ams/Inbox/UpdateWidgetContainer');
    };
    InboxService.prototype.UpdateWidgetContainerTab = function (request) {
        return this._service.call(request, 'Ams/Inbox/UpdateWidgetContainerTab');
    };
    InboxService.prototype.UpdateWidgetZone = function (request) {
        return this._service.call(request, 'Ams/Inbox/UpdateWidgetZone');
    };
    return InboxService;
}());
export { InboxService };
