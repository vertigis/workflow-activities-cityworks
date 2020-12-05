var EntityService = /** @class */ (function () {
    function EntityService(service) {
        this._service = service;
    }
    EntityService.prototype.AddAlias = function (request) {
        return this._service.call(request, 'Ams/Entity/AddAlias');
    };
    EntityService.prototype.AddSplit = function (request) {
        return this._service.call(request, 'Ams/Entity/AddSplit');
    };
    EntityService.prototype.AliasAssets = function (request) {
        return this._service.call(request, 'Ams/Entity/AliasAssets');
    };
    EntityService.prototype.Aliases = function (request) {
        return this._service.call(request, 'Ams/Entity/Aliases');
    };
    EntityService.prototype.AllAliases = function (request) {
        return this._service.call(request, 'Ams/Entity/AllAliases');
    };
    EntityService.prototype.Attributes = function (request) {
        return this._service.call(request, 'Ams/Entity/Attributes');
    };
    EntityService.prototype.CloneWorkOrderEntities = function (request) {
        return this._service.call(request, 'Ams/Entity/CloneWorkOrderEntities');
    };
    EntityService.prototype.Configuration = function (request) {
        return this._service.call(request, 'Ams/Entity/Configuration');
    };
    EntityService.prototype.CostHistory = function (request) {
        return this._service.call(request, 'Ams/Entity/CostHistory');
    };
    EntityService.prototype.CostTotal = function (request) {
        return this._service.call(request, 'Ams/Entity/CostTotal');
    };
    EntityService.prototype.DistinctValues = function (request) {
        return this._service.call(request, 'Ams/Entity/DistinctValues');
    };
    EntityService.prototype.DomainTypes = function (request) {
        return this._service.call(request, 'Ams/Entity/DomainTypes');
    };
    EntityService.prototype.EntityUidField = function (request) {
        return this._service.call(request, 'Ams/Entity/EntityUidField');
    };
    EntityService.prototype.FiveNumberSummary = function (request) {
        return this._service.call(request, 'Ams/Entity/FiveNumberSummary');
    };
    EntityService.prototype.GetByIdentifier = function (request) {
        return this._service.call(request, 'Ams/Entity/GetByIdentifier');
    };
    EntityService.prototype.GetByIdentifiers = function (request) {
        return this._service.call(request, 'Ams/Entity/GetByIdentifiers');
    };
    EntityService.prototype.Groups = function (request) {
        return this._service.call(request, 'Ams/Entity/Groups');
    };
    EntityService.prototype.ProcessSplits = function (request) {
        return this._service.call(request, 'Ams/Entity/ProcessSplits');
    };
    EntityService.prototype.RemoveAlias = function (request) {
        return this._service.call(request, 'Ams/Entity/RemoveAlias');
    };
    EntityService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/Entity/Search');
    };
    EntityService.prototype.SearchAsWorkOrderEntity = function (request) {
        return this._service.call(request, 'Ams/Entity/SearchAsWorkOrderEntity');
    };
    EntityService.prototype.SplitEntities = function (request) {
        return this._service.call(request, 'Ams/Entity/SplitEntities');
    };
    EntityService.prototype.Splits = function (request) {
        return this._service.call(request, 'Ams/Entity/Splits');
    };
    EntityService.prototype.SubTypes = function (request) {
        return this._service.call(request, 'Ams/Entity/SubTypes');
    };
    EntityService.prototype.TypeRelationships = function (request) {
        return this._service.call(request, 'Ams/Entity/TypeRelationships');
    };
    EntityService.prototype.Types = function (request) {
        return this._service.call(request, 'Ams/Entity/Types');
    };
    EntityService.prototype.VisibleFields = function (request) {
        return this._service.call(request, 'Ams/Entity/VisibleFields');
    };
    EntityService.prototype.WorkActivityHistory = function (request) {
        return this._service.call(request, 'Ams/Entity/WorkActivityHistory');
    };
    return EntityService;
}());
export { EntityService };
