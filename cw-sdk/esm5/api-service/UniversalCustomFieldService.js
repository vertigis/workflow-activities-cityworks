var UniversalCustomFieldService = /** @class */ (function () {
    function UniversalCustomFieldService(service) {
        this._service = service;
    }
    UniversalCustomFieldService.prototype.Add = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Add');
    };
    UniversalCustomFieldService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/ById');
    };
    UniversalCustomFieldService.prototype.ByType = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/ByType');
    };
    UniversalCustomFieldService.prototype.Contract = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Contract');
    };
    UniversalCustomFieldService.prototype.CustomerCall = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/CustomerCall');
    };
    UniversalCustomFieldService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Delete');
    };
    UniversalCustomFieldService.prototype.Inspection = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Inspection');
    };
    UniversalCustomFieldService.prototype.MoveField = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/MoveField');
    };
    UniversalCustomFieldService.prototype.ServiceRequest = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/ServiceRequest');
    };
    UniversalCustomFieldService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/Update');
    };
    UniversalCustomFieldService.prototype.WorkOrder = function (request) {
        return this._service.call(request, 'Ams/UniversalCustomField/WorkOrder');
    };
    return UniversalCustomFieldService;
}());
export { UniversalCustomFieldService };
