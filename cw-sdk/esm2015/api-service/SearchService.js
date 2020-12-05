export class SearchService {
    constructor(service) { this._service = service; }
    AssetCalculationResultSaved(request) {
        return this._service.call(request, 'Ams/Search/AssetCalculationResultSaved');
    }
    Definition(request) {
        return this._service.call(request, 'Ams/Search/Definition');
    }
    DefinitionNames(request) {
        return this._service.call(request, 'Ams/Search/DefinitionNames');
    }
    Definitions(request) {
        return this._service.call(request, 'Ams/Search/Definitions');
    }
    DeleteDefinitions(request) {
        return this._service.call(request, 'Ams/Search/DeleteDefinitions');
    }
    DisplayFields(request) {
        return this._service.call(request, 'Ams/Search/DisplayFields');
    }
    Execute(request) {
        return this._service.call(request, 'Ams/Search/Execute');
    }
    GISSaved(request) {
        return this._service.call(request, 'Ams/Search/GISSaved');
    }
    InspectionSaved(request) {
        return this._service.call(request, 'Ams/Search/InspectionSaved');
    }
    MaterialSaved(request) {
        return this._service.call(request, 'Ams/Search/MaterialSaved');
    }
    PllSaved(request) {
        return this._service.call(request, 'Ams/Search/PllSaved');
    }
    RecentActivity(request) {
        return this._service.call(request, 'Ams/Search/RecentActivity');
    }
    RequestSaved(request) {
        return this._service.call(request, 'Ams/Search/RequestSaved');
    }
    RequisitionSaved(request) {
        return this._service.call(request, 'Ams/Search/RequisitionSaved');
    }
    SavedByType(request) {
        return this._service.call(request, 'Ams/Search/SavedByType');
    }
    SaveDefinition(request) {
        return this._service.call(request, 'Ams/Search/SaveDefinition');
    }
    StoreTransactionSaved(request) {
        return this._service.call(request, 'Ams/Search/StoreTransactionSaved');
    }
    Types(request) {
        return this._service.call(request, 'Ams/Search/Types');
    }
    UpdateEurl(request) {
        return this._service.call(request, 'Ams/Search/UpdateEurl');
    }
    WorkActivitySaved(request) {
        return this._service.call(request, 'Ams/Search/WorkActivitySaved');
    }
    WorkOrderEntitySaved(request) {
        return this._service.call(request, 'Ams/Search/WorkOrderEntitySaved');
    }
    WorkOrderSaved(request) {
        return this._service.call(request, 'Ams/Search/WorkOrderSaved');
    }
}
