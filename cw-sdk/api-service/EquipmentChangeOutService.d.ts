import { IApiService } from './i-api-service';
import { EquipmentChangeOutServiceTypes as SvcDef } from '../api-interface/EquipmentChangeOutService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IEquipmentChangeOutService = SvcDef.IEquipmentChangeOutService;
export declare class EquipmentChangeOutService implements IEquipmentChangeOutService {
    private _service;
    constructor(service: IApiService);
    AddChangeOutRead(request: Requests.AddChangeOutRead): Promise<Responses.AddChangeOutRead>;
    AddOperation(request: Requests.AddOperation): Promise<Responses.AddOperation>;
    Attach(request: Requests.Attach): Promise<Responses.Attach>;
    ById(request: Requests.ById): Promise<Responses.ById>;
    ByIds(request: Requests.ByIds): Promise<Responses.ByIds>;
    Delete(request: Requests.Delete): Promise<Responses.Delete>;
    DeleteChangeOutReads(request: Requests.DeleteChangeOutReads): Promise<Responses.DeleteChangeOutReads>;
    DeleteOperations(request: Requests.DeleteOperations): Promise<Responses.DeleteOperations>;
    Detach(request: Requests.Detach): Promise<Responses.Detach>;
    DirectParent(request: Requests.DirectParent): Promise<Responses.DirectParent>;
    Entities(request: Requests.Entities): Promise<Responses.Entities>;
    Entity(request: Requests.Entity): Promise<Responses.Entity>;
    History(request: Requests.History): Promise<Responses.History>;
    Read(request: Requests.Read): Promise<Responses.Read>;
    ReadConfigs(request: Requests.ReadConfigs): Promise<Responses.ReadConfigs>;
    Related(request: Requests.Related): Promise<Responses.Related>;
    Replace(request: Requests.Replace): Promise<Responses.Replace>;
    UpdateChangeOutRead(request: Requests.UpdateChangeOutRead): Promise<Responses.UpdateChangeOutRead>;
    UpdateOperation(request: Requests.UpdateOperation): Promise<Responses.UpdateOperation>;
}
