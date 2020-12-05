import { PavementInspBase } from '../core/types/PavementInspBase';
import { PavementSampleBase } from '../core/types/PavementSampleBase';
import { DistressCode } from '../core/types/DistressCode';
import { SearchDefinition } from '../core/types/SearchDefinition';
import { PavementInspCodeDescs } from '../core/types/PavementInspCodeDescs';
import { PavementInsp } from '../core/types/PavementInsp';
import { PavementSample } from '../core/types/PavementSample';
import { SampleDistress } from '../core/types/SampleDistress';
import { DistressSeverity } from '../core/types/DistressSeverity';
import { ServiceTypes } from '../core/service-types';
export declare namespace PavementInspectionServiceTypes {
    namespace Requests {
        interface AddDistress extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            Description?: string;
            Distress?: number;
            Quantity?: number;
            QuantityUnit?: string;
            SampleId: string;
            Severity?: DistressSeverity;
        }
        interface AddSample extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            InspectionId?: string;
            InspectionSid: number;
            SampleNr?: string;
            SampleSize?: number;
            SampleSizeUnit?: string;
            SampleType?: string;
        }
        interface ById extends ServiceTypes.CoreRequestBase {
            InspectionSid: number;
        }
        interface ByIds extends ServiceTypes.CoreRequestBase {
            Ids: string[];
            InspectionSids: number[];
            PopulateBranchInfo?: boolean;
            PopulateSectionInfo?: boolean;
        }
        interface CodeDesc extends ServiceTypes.CoreRequestBase {
        }
        interface Create extends ServiceTypes.CoreRequestBase {
            InspectionDate?: Date;
            SectionClassName?: string;
            SectionUid?: string;
            WorkOrderId: string;
        }
        interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
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
            SaveDefinition?: boolean;
            SearchName?: string;
            SectionClassName?: string[];
            SectionUid?: string[];
            SharedWithin?: number;
            TotalSamplesIncludeNulls?: boolean;
            TotalSamplesIsMaxValueExclusive?: boolean;
            TotalSamplesIsMinValueExclusive?: boolean;
            TotalSamplesMaxValue?: number;
            TotalSamplesMinValue?: number;
            TotalSamplesRangeType?: number;
            TotalSamplesValues?: number[];
            WorkOrderId?: string[];
        }
        interface DistressCodes extends ServiceTypes.CoreRequestBase {
        }
        interface Distresses extends ServiceTypes.CoreRequestBase {
            SampleId: string;
            SampleIds: string[];
        }
        interface Samples extends ServiceTypes.CoreRequestBase {
            InspectionSid: number;
            InspectionSids: number[];
        }
        interface Search extends ServiceTypes.CoreRequestBase {
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
        interface Update extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            InspectedBySid?: number;
            InspectedSurface?: string;
            InspectionDate?: Date;
            InspectionId?: string;
            InspectionSid: number;
            IsDirty?: boolean;
            SectionClassName?: string;
            SectionUid?: string;
            TotalSamples?: number;
        }
        interface UpdateDistress extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            Description?: string;
            Distress?: number;
            DistressId: string;
            Quantity?: number;
            QuantityUnit?: string;
            Severity?: DistressSeverity;
        }
        interface UpdateSample extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            SampleId: string;
            SampleNr?: string;
            SampleSize?: number;
            SampleSizeUnit?: string;
            SampleType?: string;
        }
    }
    namespace Responses {
        interface AddDistress extends ServiceTypes.CoreResponseBase_<SampleDistress> {
        }
        interface AddSample extends ServiceTypes.CoreResponseBase_<PavementSample> {
        }
        interface ById extends ServiceTypes.CoreResponseBase_<PavementInsp> {
        }
        interface ByIds extends ServiceTypes.CoreResponseBase_<PavementInsp[]> {
        }
        interface CodeDesc extends ServiceTypes.CoreResponseBase_<PavementInspCodeDescs> {
        }
        interface Create extends ServiceTypes.CoreResponseBase_<PavementInsp> {
        }
        interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<SearchDefinition> {
        }
        interface DistressCodes extends ServiceTypes.CoreResponseBase_<DistressCode[]> {
        }
        interface Distresses extends ServiceTypes.CoreResponseBase_<SampleDistress[]> {
        }
        interface Samples extends ServiceTypes.CoreResponseBase_<PavementSampleBase[]> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<PavementInspBase> {
        }
        interface UpdateDistress extends ServiceTypes.CoreResponseBase_<SampleDistress> {
        }
        interface UpdateSample extends ServiceTypes.CoreResponseBase_<PavementSample> {
        }
    }
    interface IPavementInspectionService {
        AddDistress?: (request: Requests.AddDistress) => Promise<Responses.AddDistress>;
        AddSample?: (request: Requests.AddSample) => Promise<Responses.AddSample>;
        ById?: (request: Requests.ById) => Promise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => Promise<Responses.ByIds>;
        CodeDesc?: (request: Requests.CodeDesc) => Promise<Responses.CodeDesc>;
        Create?: (request: Requests.Create) => Promise<Responses.Create>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => Promise<Responses.CreateSearchDefinition>;
        DistressCodes?: (request: Requests.DistressCodes) => Promise<Responses.DistressCodes>;
        Distresses?: (request: Requests.Distresses) => Promise<Responses.Distresses>;
        Samples?: (request: Requests.Samples) => Promise<Responses.Samples>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
        UpdateDistress?: (request: Requests.UpdateDistress) => Promise<Responses.UpdateDistress>;
        UpdateSample?: (request: Requests.UpdateSample) => Promise<Responses.UpdateSample>;
    }
}
