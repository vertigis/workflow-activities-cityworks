export class EntityService {
    constructor(service) { this._service = service; }
    AddAlias(request) {
        return this._service.call(request, 'Ams/Entity/AddAlias');
    }
    AddSplit(request) {
        return this._service.call(request, 'Ams/Entity/AddSplit');
    }
    AliasAssets(request) {
        return this._service.call(request, 'Ams/Entity/AliasAssets');
    }
    Aliases(request) {
        return this._service.call(request, 'Ams/Entity/Aliases');
    }
    AllAliases(request) {
        return this._service.call(request, 'Ams/Entity/AllAliases');
    }
    Attributes(request) {
        return this._service.call(request, 'Ams/Entity/Attributes');
    }
    CloneWorkOrderEntities(request) {
        return this._service.call(request, 'Ams/Entity/CloneWorkOrderEntities');
    }
    Configuration(request) {
        return this._service.call(request, 'Ams/Entity/Configuration');
    }
    CostHistory(request) {
        return this._service.call(request, 'Ams/Entity/CostHistory');
    }
    CostTotal(request) {
        return this._service.call(request, 'Ams/Entity/CostTotal');
    }
    DistinctValues(request) {
        return this._service.call(request, 'Ams/Entity/DistinctValues');
    }
    DomainTypes(request) {
        return this._service.call(request, 'Ams/Entity/DomainTypes');
    }
    EntityUidField(request) {
        return this._service.call(request, 'Ams/Entity/EntityUidField');
    }
    FiveNumberSummary(request) {
        return this._service.call(request, 'Ams/Entity/FiveNumberSummary');
    }
    GetByIdentifier(request) {
        return this._service.call(request, 'Ams/Entity/GetByIdentifier');
    }
    GetByIdentifiers(request) {
        return this._service.call(request, 'Ams/Entity/GetByIdentifiers');
    }
    Groups(request) {
        return this._service.call(request, 'Ams/Entity/Groups');
    }
    ProcessSplits(request) {
        return this._service.call(request, 'Ams/Entity/ProcessSplits');
    }
    RemoveAlias(request) {
        return this._service.call(request, 'Ams/Entity/RemoveAlias');
    }
    Search(request) {
        return this._service.call(request, 'Ams/Entity/Search');
    }
    SearchAsWorkOrderEntity(request) {
        return this._service.call(request, 'Ams/Entity/SearchAsWorkOrderEntity');
    }
    SplitEntities(request) {
        return this._service.call(request, 'Ams/Entity/SplitEntities');
    }
    Splits(request) {
        return this._service.call(request, 'Ams/Entity/Splits');
    }
    SubTypes(request) {
        return this._service.call(request, 'Ams/Entity/SubTypes');
    }
    TypeRelationships(request) {
        return this._service.call(request, 'Ams/Entity/TypeRelationships');
    }
    Types(request) {
        return this._service.call(request, 'Ams/Entity/Types');
    }
    VisibleFields(request) {
        return this._service.call(request, 'Ams/Entity/VisibleFields');
    }
    WorkActivityHistory(request) {
        return this._service.call(request, 'Ams/Entity/WorkActivityHistory');
    }
}
