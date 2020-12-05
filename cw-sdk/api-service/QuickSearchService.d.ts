import { IApiService } from './i-api-service';
import { QuickSearchServiceTypes as SvcDef } from '../api-interface/QuickSearchService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IQuickSearchService = SvcDef.IQuickSearchService;
export declare class QuickSearchService implements IQuickSearchService {
    private _service;
    constructor(service: IApiService);
    QuickSearch(request: Requests.QuickSearch): Promise<Responses.QuickSearch>;
}
