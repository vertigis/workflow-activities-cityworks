var EquipmentService = /** @class */ (function () {
    function EquipmentService(service) {
        this._service = service;
    }
    EquipmentService.prototype.Add = function (request) {
        return this._service.call(request, 'Ams/Equipment/Add');
    };
    EquipmentService.prototype.All = function (request) {
        return this._service.call(request, 'Ams/Equipment/All');
    };
    EquipmentService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/Equipment/ById');
    };
    EquipmentService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/Equipment/ByIds');
    };
    EquipmentService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/Equipment/Delete');
    };
    EquipmentService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/Equipment/Search');
    };
    EquipmentService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/Equipment/Update');
    };
    return EquipmentService;
}());
export { EquipmentService };
