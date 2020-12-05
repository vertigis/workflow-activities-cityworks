import { IApiService } from './i-api-service';
import { CwMetaDataServiceTypes as SvcDef } from '../api-interface/CwMetaDataService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICwMetaDataService = SvcDef.ICwMetaDataService;
export declare class CwMetaDataService implements ICwMetaDataService {
    private _service;
    constructor(service: IApiService);
    ByTableNameSids(request: Requests.ByTableNameSids): Promise<Responses.ByTableNameSids>;
}
