import { IApiService } from './i-api-service';
import { ReadingServiceTypes as SvcDef } from '../api-interface/ReadingService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IReadingService = SvcDef.IReadingService;
export declare class ReadingService implements IReadingService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByEntity(request: Requests.ByEntity): Promise<Responses.ByEntity>;
    Configuration(request: Requests.Configuration): Promise<Responses.Configuration>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
