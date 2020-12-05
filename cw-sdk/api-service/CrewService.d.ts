import { IApiService } from './i-api-service';
import { CrewServiceTypes as SvcDef } from '../api-interface/CrewService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICrewService = SvcDef.ICrewService;
export declare class CrewService implements ICrewService {
    private _service;
    constructor(service: IApiService);
    ByEmployee(request: Requests.ByEmployee): Promise<Responses.ByEmployee>;
    ByIds(request: Requests.ByIds): Promise<Responses.ByIds>;
    Employees(request: Requests.Employees): Promise<Responses.Employees>;
    Equipment(request: Requests.Equipment): Promise<Responses.Equipment>;
    Material(request: Requests.Material): Promise<Responses.Material>;
}
