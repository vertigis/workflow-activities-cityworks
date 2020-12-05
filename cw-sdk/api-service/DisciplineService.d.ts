import { IApiService } from './i-api-service';
import { DisciplineServiceTypes as SvcDef } from '../api-interface/DisciplineService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IDisciplineService = SvcDef.IDisciplineService;
export declare class DisciplineService implements IDisciplineService {
    private _service;
    constructor(service: IApiService);
    All(request: Requests.All): Promise<Responses.All>;
}
