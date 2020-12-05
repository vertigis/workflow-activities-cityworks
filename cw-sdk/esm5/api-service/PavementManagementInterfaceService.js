var PavementManagementInterfaceService = /** @class */ (function () {
    function PavementManagementInterfaceService(service) {
        this._service = service;
    }
    PavementManagementInterfaceService.prototype.ExportInspections = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ExportInspections');
    };
    PavementManagementInterfaceService.prototype.ExportInventory = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ExportInventory');
    };
    PavementManagementInterfaceService.prototype.ExportWorkHistory = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ExportWorkHistory');
    };
    PavementManagementInterfaceService.prototype.GeneratePaverData = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/GeneratePaverData');
    };
    PavementManagementInterfaceService.prototype.GetPavementInspectionsByIds = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/GetPavementInspectionsByIds');
    };
    PavementManagementInterfaceService.prototype.GISSavedSearches = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/GISSavedSearches');
    };
    PavementManagementInterfaceService.prototype.ImportInspection = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ImportInspection');
    };
    PavementManagementInterfaceService.prototype.ImportInspections = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ImportInspections');
    };
    PavementManagementInterfaceService.prototype.PavementInspectionSearch = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/PavementInspectionSearch');
    };
    PavementManagementInterfaceService.prototype.ProcessInspectionXmlFile = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessInspectionXmlFile');
    };
    PavementManagementInterfaceService.prototype.ProcessInventoryXmlFile = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessInventoryXmlFile');
    };
    PavementManagementInterfaceService.prototype.ProcessProjectXmlFile = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessProjectXmlFile');
    };
    PavementManagementInterfaceService.prototype.ProcessRecommendedWorkCsvFile = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessRecommendedWorkCsvFile');
    };
    PavementManagementInterfaceService.prototype.ProcessRecommendedWorkXmlFile = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessRecommendedWorkXmlFile');
    };
    PavementManagementInterfaceService.prototype.TemplateMapping = function (request) {
        return this._service.call(request, 'General/PavementManagementInterface/TemplateMapping');
    };
    return PavementManagementInterfaceService;
}());
export { PavementManagementInterfaceService };
