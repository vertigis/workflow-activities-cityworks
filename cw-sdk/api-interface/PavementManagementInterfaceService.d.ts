import { PaverWorkCodeTemplate } from '../core/types/PaverWorkCodeTemplate';
import { ImportRecommendedWorkData } from '../core/types/ImportRecommendedWorkData';
import { ImportProjectData } from '../core/types/ImportProjectData';
import { ImportInventoryData } from '../core/types/ImportInventoryData';
import { SearchDefinitionName } from '../core/types/SearchDefinitionName';
import { PavementInsp } from '../core/types/PavementInsp';
import { PaverDataFile } from '../core/types/PaverDataFile';
import { PaverUpdate } from '../core/types/PaverUpdate';
import { PaverAssetUpdates } from '../core/types/PaverAssetUpdates';
import { PaverInspectionUpdates } from '../core/types/PaverInspectionUpdates';
import { ImportInspectionData } from '../core/types/ImportInspectionData';
import { PavementSample } from '../core/types/PavementSample';
import { ServiceTypes } from '../core/service-types';
export declare namespace PavementManagementInterfaceServiceTypes {
    namespace Requests {
        interface ExportInspections extends ServiceTypes.CoreRequestBase {
            BranchUids?: string[];
            CustomInspectionIds?: number[];
            DateFrom?: Date;
            DateTo?: Date;
            SearchHasBranchInfo?: boolean;
            SearchHasSectionInfo?: boolean;
            SearchIds?: number[];
            SectionIds?: string[];
            WorkOrderEntityObjectIds?: number[];
            WorkOrderIds?: string[];
        }
        interface ExportInventory extends ServiceTypes.CoreRequestBase {
            BranchIds?: string[];
            BranchUids?: string[];
            CustomInspectionIds?: number[];
            SearchHasBranchInfo?: boolean;
            SearchHasSectionInfo?: boolean;
            SearchIds?: number[];
            SectionIds?: string[];
            WorkOrderEntityObjectIds?: number[];
            WorkOrderIds?: string[];
        }
        interface ExportWorkHistory extends ServiceTypes.CoreRequestBase {
            BranchUids: string[];
            CustomInspectionIds?: number[];
            DateFrom?: Date;
            DateTo?: Date;
            SearchHasBranchInfo?: boolean;
            SearchHasSectionInfo?: boolean;
            SearchIds?: number[];
            SectionIds?: string[];
            WorkOrderEntityObjectIds?: number[];
            WorkOrderIds?: string[];
        }
        interface GeneratePaverData extends ServiceTypes.CoreRequestBase {
            BranchIds?: string[];
            BranchUids?: string[];
            CustomInspectionIds?: number[];
            DateFrom?: Date;
            DateTo?: Date;
            f?: string;
            IncludeInspections?: boolean;
            IncludeInventory?: boolean;
            IncludeWorkHistory?: boolean;
            SearchHasBranchInfo?: boolean;
            SearchHasSectionInfo?: boolean;
            SearchIds?: number[];
            SectionIds?: string[];
            WorkOrderEntityObjectIds?: number[];
            WorkOrderIds?: string[];
        }
        interface GetPavementInspectionsByIds extends ServiceTypes.CoreRequestBase {
            InspectionSids: number[];
            PopulateBranchInfo?: boolean;
            PopulateSectionInfo?: boolean;
        }
        interface GISSavedSearches extends ServiceTypes.CoreRequestBase {
        }
        interface ImportInspection extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            InspectedBy?: string;
            InspectedBySid?: number;
            InspectedSurface?: string;
            InspectionDate?: Date;
            IsDirty?: boolean;
            PavementSamples?: PavementSample[];
            SectionClassName: string;
            SectionUid: string;
            TotalSamples?: number;
            WorkOrderId: string;
            WOTemplateId?: string;
        }
        interface ImportInspections extends ServiceTypes.CoreRequestBase {
            InspectionData: ImportInspectionData[];
            WOTemplateId: string;
        }
        interface PavementInspectionSearch extends ServiceTypes.CoreRequestBase {
            Comments?: string[];
            InspectedBy?: string[];
            InspectedBySid?: number[];
            InspectedBySidIsInList?: boolean;
            InspectedSurface?: string[];
            InspectionDateBegin?: Date;
            InspectionDateEnd?: Date;
            InspectionDateIsNull?: boolean;
            InspectionDateNotInRange?: boolean;
            InspectionDateRangeIncludeCurrent?: boolean;
            InspectionDateRangeLast?: number;
            InspectionDateRangeNext?: number;
            InspectionDateRangeUnits?: number;
            InspectionId?: string[];
            InspectionSid?: number[];
            InspectionSidIsInList?: boolean;
            IsDirty?: boolean;
            MaxResults?: number;
            SectionClassName?: string[];
            SectionUid?: string[];
            TotalSamplesIncludeNulls?: boolean;
            TotalSamplesIsMaxValueExclusive?: boolean;
            TotalSamplesIsMinValueExclusive?: boolean;
            TotalSamplesMaxValue?: number;
            TotalSamplesMinValue?: number;
            TotalSamplesRangeType?: number;
            TotalSamplesValues?: number[];
            WorkOrderId?: string[];
        }
        interface ProcessInspectionXmlFile extends ServiceTypes.CoreRequestBase {
            Data?: string;
        }
        interface ProcessInventoryXmlFile extends ServiceTypes.CoreRequestBase {
            Data?: string;
        }
        interface ProcessProjectXmlFile extends ServiceTypes.CoreRequestBase {
            Data?: string;
        }
        interface ProcessRecommendedWorkCsvFile extends ServiceTypes.CoreRequestBase {
            Data: string;
            Delimiter: string;
        }
        interface ProcessRecommendedWorkXmlFile extends ServiceTypes.CoreRequestBase {
            Data?: string;
        }
        interface TemplateMapping extends ServiceTypes.CoreRequestBase {
            IncludeGlobalMR?: boolean;
            IncludeLayerMR?: boolean;
            IncludeLocalMR?: boolean;
            IncludeMajorMR?: boolean;
        }
    }
    namespace Responses {
        interface ExportInspections extends ServiceTypes.CoreResponseBase_<PaverInspectionUpdates> {
        }
        interface ExportInventory extends ServiceTypes.CoreResponseBase_<PaverAssetUpdates> {
        }
        interface ExportWorkHistory extends ServiceTypes.CoreResponseBase_<{
            [key: string]: PaverUpdate[];
        }> {
        }
        interface GeneratePaverData extends ServiceTypes.CoreResponseBase_<PaverDataFile[]> {
        }
        interface GetPavementInspectionsByIds extends ServiceTypes.CoreResponseBase_<PavementInsp[]> {
        }
        interface GISSavedSearches extends ServiceTypes.CoreResponseBase_<SearchDefinitionName[]> {
        }
        interface ImportInspection extends ServiceTypes.CoreResponseBase_<PavementInsp> {
        }
        interface ImportInspections extends ServiceTypes.CoreResponseBase_<PavementInsp[]> {
        }
        interface PavementInspectionSearch extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface ProcessInspectionXmlFile extends ServiceTypes.CoreResponseBase_<ImportInspectionData[]> {
        }
        interface ProcessInventoryXmlFile extends ServiceTypes.CoreResponseBase_<ImportInventoryData> {
        }
        interface ProcessProjectXmlFile extends ServiceTypes.CoreResponseBase_<ImportProjectData[]> {
        }
        interface ProcessRecommendedWorkCsvFile extends ServiceTypes.CoreResponseBase_<ImportRecommendedWorkData[]> {
        }
        interface ProcessRecommendedWorkXmlFile extends ServiceTypes.CoreResponseBase_<ImportRecommendedWorkData[]> {
        }
        interface TemplateMapping extends ServiceTypes.CoreResponseBase_<PaverWorkCodeTemplate[]> {
        }
    }
    interface IPavementManagementInterfaceService {
        ExportInspections?: (request: Requests.ExportInspections) => Promise<Responses.ExportInspections>;
        ExportInventory?: (request: Requests.ExportInventory) => Promise<Responses.ExportInventory>;
        ExportWorkHistory?: (request: Requests.ExportWorkHistory) => Promise<Responses.ExportWorkHistory>;
        GeneratePaverData?: (request: Requests.GeneratePaverData) => Promise<Responses.GeneratePaverData>;
        GetPavementInspectionsByIds?: (request: Requests.GetPavementInspectionsByIds) => Promise<Responses.GetPavementInspectionsByIds>;
        GISSavedSearches?: (request: Requests.GISSavedSearches) => Promise<Responses.GISSavedSearches>;
        ImportInspection?: (request: Requests.ImportInspection) => Promise<Responses.ImportInspection>;
        ImportInspections?: (request: Requests.ImportInspections) => Promise<Responses.ImportInspections>;
        PavementInspectionSearch?: (request: Requests.PavementInspectionSearch) => Promise<Responses.PavementInspectionSearch>;
        ProcessInspectionXmlFile?: (request: Requests.ProcessInspectionXmlFile) => Promise<Responses.ProcessInspectionXmlFile>;
        ProcessInventoryXmlFile?: (request: Requests.ProcessInventoryXmlFile) => Promise<Responses.ProcessInventoryXmlFile>;
        ProcessProjectXmlFile?: (request: Requests.ProcessProjectXmlFile) => Promise<Responses.ProcessProjectXmlFile>;
        ProcessRecommendedWorkCsvFile?: (request: Requests.ProcessRecommendedWorkCsvFile) => Promise<Responses.ProcessRecommendedWorkCsvFile>;
        ProcessRecommendedWorkXmlFile?: (request: Requests.ProcessRecommendedWorkXmlFile) => Promise<Responses.ProcessRecommendedWorkXmlFile>;
        TemplateMapping?: (request: Requests.TemplateMapping) => Promise<Responses.TemplateMapping>;
    }
}
