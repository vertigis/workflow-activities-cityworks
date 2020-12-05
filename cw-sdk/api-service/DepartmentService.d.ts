import { IApiService } from './i-api-service';
import { DepartmentServiceTypes as SvcDef } from '../api-interface/DepartmentService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IDepartmentService = SvcDef.IDepartmentService;
export declare class DepartmentService implements IDepartmentService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
}
