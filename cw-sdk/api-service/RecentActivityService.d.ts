import { IApiService } from './i-api-service';
import { RecentActivityServiceTypes as SvcDef } from '../api-interface/RecentActivityService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IRecentActivityService = SvcDef.IRecentActivityService;
export declare class RecentActivityService implements IRecentActivityService {
    private _service;
    constructor(service: IApiService);
    CaseViewed(request: Requests.CaseViewed): Promise<Responses.CaseViewed>;
    InspectionViewed(request: Requests.InspectionViewed): Promise<Responses.InspectionViewed>;
    RequestViewed(request: Requests.RequestViewed): Promise<Responses.RequestViewed>;
    User(request: Requests.User): Promise<Responses.User>;
    WorkOrderViewed(request: Requests.WorkOrderViewed): Promise<Responses.WorkOrderViewed>;
}
