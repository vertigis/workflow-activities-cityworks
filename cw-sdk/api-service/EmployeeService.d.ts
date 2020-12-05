import { IApiService } from './i-api-service';
import { EmployeeServiceTypes as SvcDef } from '../api-interface/EmployeeService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IEmployeeService = SvcDef.IEmployeeService;
export declare class EmployeeService implements IEmployeeService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): Promise<Responses.Add>;
    AddLicensedItems(request: Requests.AddLicensedItems): Promise<Responses.AddLicensedItems>;
    All(request: Requests.All): Promise<Responses.All>;
    ByGroupId(request: Requests.ByGroupId): Promise<Responses.ByGroupId>;
    ById(request: Requests.ById): Promise<Responses.ById>;
    ByIds(request: Requests.ByIds): Promise<Responses.ByIds>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    DeleteLicensedItems(request: Requests.DeleteLicensedItems): Promise<Responses.DeleteLicensedItems>;
    Groups(request: Requests.Groups): Promise<Responses.Groups>;
    NamesAreUnique(request: Requests.NamesAreUnique): Promise<Responses.NamesAreUnique>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    Update(request: Requests.Update): Promise<Responses.Update>;
}
