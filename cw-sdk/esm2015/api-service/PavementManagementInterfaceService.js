export class PavementManagementInterfaceService {
    constructor(service) { this._service = service; }
    ExportInspections(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ExportInspections');
    }
    ExportInventory(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ExportInventory');
    }
    ExportWorkHistory(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ExportWorkHistory');
    }
    GeneratePaverData(request) {
        return this._service.call(request, 'General/PavementManagementInterface/GeneratePaverData');
    }
    GetPavementInspectionsByIds(request) {
        return this._service.call(request, 'General/PavementManagementInterface/GetPavementInspectionsByIds');
    }
    GISSavedSearches(request) {
        return this._service.call(request, 'General/PavementManagementInterface/GISSavedSearches');
    }
    ImportInspection(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ImportInspection');
    }
    ImportInspections(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ImportInspections');
    }
    PavementInspectionSearch(request) {
        return this._service.call(request, 'General/PavementManagementInterface/PavementInspectionSearch');
    }
    ProcessInspectionXmlFile(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessInspectionXmlFile');
    }
    ProcessInventoryXmlFile(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessInventoryXmlFile');
    }
    ProcessProjectXmlFile(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessProjectXmlFile');
    }
    ProcessRecommendedWorkCsvFile(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessRecommendedWorkCsvFile');
    }
    ProcessRecommendedWorkXmlFile(request) {
        return this._service.call(request, 'General/PavementManagementInterface/ProcessRecommendedWorkXmlFile');
    }
    TemplateMapping(request) {
        return this._service.call(request, 'General/PavementManagementInterface/TemplateMapping');
    }
}
