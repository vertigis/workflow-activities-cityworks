import { IApiService } from './i-api-service';
import { PavementManagementInterfaceServiceTypes as SvcDef } from '../api-interface/PavementManagementInterfaceService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IPavementManagementInterfaceService = SvcDef.IPavementManagementInterfaceService;
export declare class PavementManagementInterfaceService implements IPavementManagementInterfaceService {
    private _service;
    constructor(service: IApiService);
    ExportInspections(request: Requests.ExportInspections): Promise<Responses.ExportInspections>;
    ExportInventory(request: Requests.ExportInventory): Promise<Responses.ExportInventory>;
    ExportWorkHistory(request: Requests.ExportWorkHistory): Promise<Responses.ExportWorkHistory>;
    GeneratePaverData(request: Requests.GeneratePaverData): Promise<Responses.GeneratePaverData>;
    GetPavementInspectionsByIds(request: Requests.GetPavementInspectionsByIds): Promise<Responses.GetPavementInspectionsByIds>;
    GISSavedSearches(request: Requests.GISSavedSearches): Promise<Responses.GISSavedSearches>;
    ImportInspection(request: Requests.ImportInspection): Promise<Responses.ImportInspection>;
    ImportInspections(request: Requests.ImportInspections): Promise<Responses.ImportInspections>;
    PavementInspectionSearch(request: Requests.PavementInspectionSearch): Promise<Responses.PavementInspectionSearch>;
    ProcessInspectionXmlFile(request: Requests.ProcessInspectionXmlFile): Promise<Responses.ProcessInspectionXmlFile>;
    ProcessInventoryXmlFile(request: Requests.ProcessInventoryXmlFile): Promise<Responses.ProcessInventoryXmlFile>;
    ProcessProjectXmlFile(request: Requests.ProcessProjectXmlFile): Promise<Responses.ProcessProjectXmlFile>;
    ProcessRecommendedWorkCsvFile(request: Requests.ProcessRecommendedWorkCsvFile): Promise<Responses.ProcessRecommendedWorkCsvFile>;
    ProcessRecommendedWorkXmlFile(request: Requests.ProcessRecommendedWorkXmlFile): Promise<Responses.ProcessRecommendedWorkXmlFile>;
    TemplateMapping(request: Requests.TemplateMapping): Promise<Responses.TemplateMapping>;
}
