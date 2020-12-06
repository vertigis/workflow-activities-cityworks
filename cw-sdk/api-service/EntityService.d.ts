import { IApiService } from './i-api-service';
import { EntityServiceTypes as SvcDef } from '../api-interface/EntityService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IEntityService = SvcDef.IEntityService;
export declare class EntityService implements IEntityService {
    private _service;
    constructor(service: IApiService);
    AddAlias(request: Requests.AddAlias): Promise<Responses.AddAlias>;
    AddSplit(request: Requests.AddSplit): Promise<Responses.AddSplit>;
    AliasAssets(request: Requests.AliasAssets): Promise<Responses.AliasAssets>;
    Aliases(request: Requests.Aliases): Promise<Responses.Aliases>;
    AllAliases(request: Requests.AllAliases): Promise<Responses.AllAliases>;
    Attributes(request: Requests.Attributes): Promise<Responses.Attributes>;
    CloneWorkOrderEntities(request: Requests.CloneWorkOrderEntities): Promise<Responses.CloneWorkOrderEntities>;
    Configuration(request: Requests.Configuration): Promise<Responses.Configuration>;
    CostHistory(request: Requests.CostHistory): Promise<Responses.CostHistory>;
    CostTotal(request: Requests.CostTotal): Promise<Responses.CostTotal>;
    DistinctValues(request: Requests.DistinctValues): Promise<Responses.DistinctValues>;
    DomainTypes(request: Requests.DomainTypes): Promise<Responses.DomainTypes>;
    EntityUidField(request: Requests.EntityUidField): Promise<Responses.EntityUidField>;
    FiveNumberSummary(request: Requests.FiveNumberSummary): Promise<Responses.FiveNumberSummary>;
    GetByIdentifier(request: Requests.GetByIdentifier): Promise<Responses.GetByIdentifier>;
    GetByIdentifiers(request: Requests.GetByIdentifiers): Promise<Responses.GetByIdentifiers>;
    Groups(request: Requests.Groups): Promise<Responses.Groups>;
    ProcessSplits(request: Requests.ProcessSplits): Promise<Responses.ProcessSplits>;
    RemoveAlias(request: Requests.RemoveAlias): Promise<Responses.RemoveAlias>;
    Search(request: Requests.Search): Promise<Responses.Search>;
    SearchAsWorkOrderEntity(request: Requests.SearchAsWorkOrderEntity): Promise<Responses.SearchAsWorkOrderEntity>;
    SplitEntities(request: Requests.SplitEntities): Promise<Responses.SplitEntities>;
    Splits(request: Requests.Splits): Promise<Responses.Splits>;
    SubTypes(request: Requests.SubTypes): Promise<Responses.SubTypes>;
    TypeRelationships(request: Requests.TypeRelationships): Promise<Responses.TypeRelationships>;
    Types(request: Requests.Types): Promise<Responses.Types>;
    VisibleFields(request: Requests.VisibleFields): Promise<Responses.VisibleFields>;
    WorkActivityHistory(request: Requests.WorkActivityHistory): Promise<Responses.WorkActivityHistory>;
}