import { IApiService } from './i-api-service';
import { LocalizationServiceTypes as SvcDef } from '../api-interface/LocalizationService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ILocalizationService = SvcDef.ILocalizationService;
export declare class LocalizationService implements ILocalizationService {
    private _service;
    constructor(service: IApiService);
    LocalizationSettings(request: Requests.LocalizationSettings): Promise<Responses.LocalizationSettings>;
    TimeZones(request: Requests.TimeZones): Promise<Responses.TimeZones>;
}
