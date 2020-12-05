import { DescScore } from '../core/types/DescScore';
import { CodeDescScore } from '../core/types/CodeDescScore';
import { CodeDesc } from '../core/types/CodeDesc';
import { ServiceTypes } from '../core/service-types';
export declare namespace CodesServiceTypes {
    namespace Requests {
        interface All extends ServiceTypes.CoreRequestBase {
        }
        interface AllCCTVCodeDescScore extends ServiceTypes.CoreRequestBase {
        }
        interface AllDescScore extends ServiceTypes.CoreRequestBase {
        }
        interface ByCodeType extends ServiceTypes.CoreRequestBase {
            CodeTypes?: string[];
        }
        interface Export extends ServiceTypes.CoreRequestBase {
            CodeTypes?: string[];
        }
        interface ExportCCTVCodeDescScore extends ServiceTypes.CoreRequestBase {
        }
        interface ExportDescScore extends ServiceTypes.CoreRequestBase {
        }
        interface Import extends ServiceTypes.CoreRequestBase {
            Codes?: CodeDesc[];
            DeleteExisting?: boolean;
        }
        interface ImportCCTVCodeDescScore extends ServiceTypes.CoreRequestBase {
            CodeDescScores?: CodeDescScore[];
            DeleteExisting?: boolean;
        }
        interface ImportDescScore extends ServiceTypes.CoreRequestBase {
            DeleteExisting?: boolean;
            DescScores?: DescScore[];
        }
    }
    namespace Responses {
        interface All extends ServiceTypes.CoreResponseBase_<CodeDesc[]> {
        }
        interface AllCCTVCodeDescScore extends ServiceTypes.CoreResponseBase_<CodeDescScore[]> {
        }
        interface AllDescScore extends ServiceTypes.CoreResponseBase_<DescScore[]> {
        }
        interface ByCodeType extends ServiceTypes.CoreResponseBase_<{
            [key: string]: CodeDesc[];
        }> {
        }
        interface Export extends ServiceTypes.CoreResponseBase_<{
            [key: string]: Object;
        }[]> {
        }
        interface Import extends ServiceTypes.CoreResponseBase_<boolean> {
        }
        interface ImportCCTVCodeDescScore extends ServiceTypes.CoreResponseBase_<boolean> {
        }
        interface ImportDescScore extends ServiceTypes.CoreResponseBase_<boolean> {
        }
    }
    interface ICodesService {
        All?: (request: Requests.All) => Promise<Responses.All>;
        AllCCTVCodeDescScore?: (request: Requests.AllCCTVCodeDescScore) => Promise<Responses.AllCCTVCodeDescScore>;
        AllDescScore?: (request: Requests.AllDescScore) => Promise<Responses.AllDescScore>;
        ByCodeType?: (request: Requests.ByCodeType) => Promise<Responses.ByCodeType>;
        Export?: (request: Requests.Export) => Promise<Responses.Export>;
        ExportCCTVCodeDescScore?: (request: Requests.ExportCCTVCodeDescScore) => Promise<Responses.Export>;
        ExportDescScore?: (request: Requests.ExportDescScore) => Promise<Responses.Export>;
        Import?: (request: Requests.Import) => Promise<Responses.Import>;
        ImportCCTVCodeDescScore?: (request: Requests.ImportCCTVCodeDescScore) => Promise<Responses.ImportCCTVCodeDescScore>;
        ImportDescScore?: (request: Requests.ImportDescScore) => Promise<Responses.ImportDescScore>;
    }
}
