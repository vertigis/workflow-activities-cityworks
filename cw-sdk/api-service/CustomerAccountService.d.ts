import { IApiService } from './i-api-service';
import { CustomerAccountServiceTypes as SvcDef } from '../api-interface/CustomerAccountService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICustomerAccountService = SvcDef.ICustomerAccountService;
export declare class CustomerAccountService implements ICustomerAccountService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    ByAccountNumbers(request: Requests.ByAccountNumbers): Promise<Responses.ByAccountNumbers>;
    ByIds(request: Requests.ByIds): Promise<Responses.ByIds>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    Import(request: Requests.Import): Promise<Responses.Import>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
