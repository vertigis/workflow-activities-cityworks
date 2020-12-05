import { IApiService } from './i-api-service';
import { PeopleRoleServiceTypes as SvcDef } from '../api-interface/PeopleRoleService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IPeopleRoleService = SvcDef.IPeopleRoleService;
export declare class PeopleRoleService implements IPeopleRoleService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
}
