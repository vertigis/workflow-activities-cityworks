import { IApiService } from './i-api-service';
import { HolidayServiceTypes as SvcDef } from '../api-interface/HolidayService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IHolidayService = SvcDef.IHolidayService;
export declare class HolidayService implements IHolidayService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
}
