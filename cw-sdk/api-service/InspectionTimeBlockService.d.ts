import { IApiService } from './i-api-service';
import { InspectionTimeBlockServiceTypes as SvcDef } from '../api-interface/InspectionTimeBlockService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IInspectionTimeBlockService = SvcDef.IInspectionTimeBlockService;
export declare class InspectionTimeBlockService implements IInspectionTimeBlockService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
}
