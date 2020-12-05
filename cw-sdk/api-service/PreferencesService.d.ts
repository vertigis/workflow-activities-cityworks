import { IApiService } from './i-api-service';
import { PreferencesServiceTypes as SvcDef } from '../api-interface/PreferencesService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IPreferencesService = SvcDef.IPreferencesService;
export declare class PreferencesService implements IPreferencesService {
    private _service;
    constructor(service: IApiService);
    Global(request: Requests.Global): Promise<Responses.Global>;
    User(request: Requests.User): Promise<Responses.User>;
    UserSave(request: Requests.UserSave): Promise<Responses.UserSave>;
}
