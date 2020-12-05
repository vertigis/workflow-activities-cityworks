import { IApiService } from './i-api-service';
import { AppDataServiceTypes as SvcDef } from '../api-interface/AppDataService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IAppDataService = SvcDef.IAppDataService;
export declare class AppDataService implements IAppDataService {
    private _service;
    constructor(service: IApiService);
    CurrentLocation(request: Requests.CurrentLocation): Promise<Responses.CurrentLocation>;
    SelectedEntities(request: Requests.SelectedEntities): Promise<Responses.SelectedEntities>;
}
