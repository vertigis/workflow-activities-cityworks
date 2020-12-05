import { IApiService } from './i-api-service';
import { PeopleServiceTypes as SvcDef } from '../api-interface/PeopleService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IPeopleService = SvcDef.IPeopleService;
export declare class PeopleService implements IPeopleService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
}
