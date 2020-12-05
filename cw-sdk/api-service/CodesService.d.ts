import { IApiService } from './i-api-service';
import { CodesServiceTypes as SvcDef } from '../api-interface/CodesService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICodesService = SvcDef.ICodesService;
export declare class CodesService implements ICodesService {
    private _service;
    constructor(service: IApiService);
    All(request: Requests.All): Promise<Responses.All>;
    AllCCTVCodeDescScore(request: Requests.AllCCTVCodeDescScore): Promise<Responses.AllCCTVCodeDescScore>;
    AllDescScore(request: Requests.AllDescScore): Promise<Responses.AllDescScore>;
    ByCodeType(request: Requests.ByCodeType): Promise<Responses.ByCodeType>;
    Export(request: Requests.Export): Promise<Responses.Export>;
    ExportCCTVCodeDescScore(request: Requests.ExportCCTVCodeDescScore): Promise<Responses.Export>;
    ExportDescScore(request: Requests.ExportDescScore): Promise<Responses.Export>;
    Import(request: Requests.Import): Promise<Responses.Import>;
    ImportCCTVCodeDescScore(request: Requests.ImportCCTVCodeDescScore): Promise<Responses.ImportCCTVCodeDescScore>;
    ImportDescScore(request: Requests.ImportDescScore): Promise<Responses.ImportDescScore>;
}
