var SearchService = /** @class */ (function () {
    function SearchService(service) {
        this._service = service;
    }
    SearchService.prototype.AssetCalculationResultSaved = function (request) {
        return this._service.call(request, 'Ams/Search/AssetCalculationResultSaved');
    };
    SearchService.prototype.Definition = function (request) {
        return this._service.call(request, 'Ams/Search/Definition');
    };
    SearchService.prototype.DefinitionNames = function (request) {
        return this._service.call(request, 'Ams/Search/DefinitionNames');
    };
    SearchService.prototype.Definitions = function (request) {
        return this._service.call(request, 'Ams/Search/Definitions');
    };
    SearchService.prototype.DeleteDefinitions = function (request) {
        return this._service.call(request, 'Ams/Search/DeleteDefinitions');
    };
    SearchService.prototype.DisplayFields = function (request) {
        return this._service.call(request, 'Ams/Search/DisplayFields');
    };
    SearchService.prototype.Execute = function (request) {
        return this._service.call(request, 'Ams/Search/Execute');
    };
    SearchService.prototype.GISSaved = function (request) {
        return this._service.call(request, 'Ams/Search/GISSaved');
    };
    SearchService.prototype.InspectionSaved = function (request) {
        return this._service.call(request, 'Ams/Search/InspectionSaved');
    };
    SearchService.prototype.MaterialSaved = function (request) {
        return this._service.call(request, 'Ams/Search/MaterialSaved');
    };
    SearchService.prototype.PllSaved = function (request) {
        return this._service.call(request, 'Ams/Search/PllSaved');
    };
    SearchService.prototype.RecentActivity = function (request) {
        return this._service.call(request, 'Ams/Search/RecentActivity');
    };
    SearchService.prototype.RequestSaved = function (request) {
        return this._service.call(request, 'Ams/Search/RequestSaved');
    };
    SearchService.prototype.RequisitionSaved = function (request) {
        return this._service.call(request, 'Ams/Search/RequisitionSaved');
    };
    SearchService.prototype.SavedByType = function (request) {
        return this._service.call(request, 'Ams/Search/SavedByType');
    };
    SearchService.prototype.SaveDefinition = function (request) {
        return this._service.call(request, 'Ams/Search/SaveDefinition');
    };
    SearchService.prototype.StoreTransactionSaved = function (request) {
        return this._service.call(request, 'Ams/Search/StoreTransactionSaved');
    };
    SearchService.prototype.Types = function (request) {
        return this._service.call(request, 'Ams/Search/Types');
    };
    SearchService.prototype.UpdateEurl = function (request) {
        return this._service.call(request, 'Ams/Search/UpdateEurl');
    };
    SearchService.prototype.WorkActivitySaved = function (request) {
        return this._service.call(request, 'Ams/Search/WorkActivitySaved');
    };
    SearchService.prototype.WorkOrderEntitySaved = function (request) {
        return this._service.call(request, 'Ams/Search/WorkOrderEntitySaved');
    };
    SearchService.prototype.WorkOrderSaved = function (request) {
        return this._service.call(request, 'Ams/Search/WorkOrderSaved');
    };
    return SearchService;
}());
export { SearchService };
