var EquipmentChangeOutService = /** @class */ (function () {
    function EquipmentChangeOutService(service) {
        this._service = service;
    }
    EquipmentChangeOutService.prototype.AddChangeOutRead = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/AddChangeOutRead');
    };
    EquipmentChangeOutService.prototype.AddOperation = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/AddOperation');
    };
    EquipmentChangeOutService.prototype.Attach = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Attach');
    };
    EquipmentChangeOutService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/ById');
    };
    EquipmentChangeOutService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/ByIds');
    };
    EquipmentChangeOutService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Delete');
    };
    EquipmentChangeOutService.prototype.DeleteChangeOutReads = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/DeleteChangeOutReads');
    };
    EquipmentChangeOutService.prototype.DeleteOperations = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/DeleteOperations');
    };
    EquipmentChangeOutService.prototype.Detach = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Detach');
    };
    EquipmentChangeOutService.prototype.DirectParent = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/DirectParent');
    };
    EquipmentChangeOutService.prototype.Entities = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Entities');
    };
    EquipmentChangeOutService.prototype.Entity = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Entity');
    };
    EquipmentChangeOutService.prototype.History = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/History');
    };
    EquipmentChangeOutService.prototype.Read = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Read');
    };
    EquipmentChangeOutService.prototype.ReadConfigs = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/ReadConfigs');
    };
    EquipmentChangeOutService.prototype.Related = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Related');
    };
    EquipmentChangeOutService.prototype.Replace = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/Replace');
    };
    EquipmentChangeOutService.prototype.UpdateChangeOutRead = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/UpdateChangeOutRead');
    };
    EquipmentChangeOutService.prototype.UpdateOperation = function (request) {
        return this._service.call(request, 'Ams/EquipmentChangeOut/UpdateOperation');
    };
    return EquipmentChangeOutService;
}());
export { EquipmentChangeOutService };
