import { IApiService } from './i-api-service';
import { NumberingGroupServiceTypes as SvcDef } from '../api-interface/NumberingGroupService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import INumberingGroupService = SvcDef.INumberingGroupService;
export declare class NumberingGroupService implements INumberingGroupService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
