import { EntityHistory } from '../core/types/EntityHistory';
import { ParChildType } from '../core/types/ParChildType';
import { GISSubTypes } from '../core/types/GISSubTypes';
import { AssetTypeId } from '../core/types/AssetTypeId';
import { WorkOrderEntity } from '../core/types/WorkOrderEntity';
import { GISResult } from '../core/types/GISResult';
import { PWModule } from '../core/types/PWModule';
import { EntityIdentifier } from '../core/types/EntityIdentifier';
import { FiveNumberStatistic } from '../core/types/FiveNumberStatistic';
import { PWEntity } from '../core/types/PWEntity';
import { EntityCostTotal } from '../core/types/EntityCostTotal';
import { WorkOrderCostSummary } from '../core/types/WorkOrderCostSummary';
import { EntityConfiguration } from '../core/types/EntityConfiguration';
import { EsriServiceLayerAttribute } from '../core/types/EsriServiceLayerAttribute';
import { AliasAsset } from '../core/types/AliasAsset';
import { AssetSplitRecord } from '../core/types/AssetSplitRecord';
import { AssetAlias } from '../core/types/AssetAlias';
import { WorkOrderEntityBase } from '../core/types/WorkOrderEntityBase';
import { EntityUidSidUpdate } from '../core/types/EntityUidSidUpdate';
import { ServiceTypes } from '../core/service-types';
export declare namespace EntityServiceTypes {
    namespace Requests {
        interface AddAlias extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            LayerName?: string;
        }
        interface AddSplit extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            EntityType?: string;
            NewOid?: number;
            NewUid?: string;
            OldOid?: number;
            OldUid?: string;
        }
        interface AliasAssets extends ServiceTypes.CoreRequestBase {
            Aliases?: string[];
        }
        interface Aliases extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
        }
        interface AllAliases extends ServiceTypes.CoreRequestBase {
        }
        interface Attributes extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
        }
        interface CloneWorkOrderEntities extends ServiceTypes.CoreRequestBase {
            Entities: EntityUidSidUpdate[];
            EntityType: string;
            EntityUid: string;
            WorkOrderEntities?: WorkOrderEntityBase[];
        }
        interface Configuration extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityTypes: string[];
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
        }
        interface CostHistory extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            EntityUids?: string[];
        }
        interface CostTotal extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            EntityUids?: string[];
        }
        interface DistinctValues extends ServiceTypes.CoreRequestBase {
            Attribute: string;
            DateAsEpoch?: boolean;
            EntityType: string;
        }
        interface DomainTypes extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
        }
        interface EntityUidField extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
        }
        interface FiveNumberSummary extends ServiceTypes.CoreRequestBase {
            Attribute: string;
            EntityType: string;
        }
        interface GetByIdentifier extends ServiceTypes.CoreRequestBase {
            Identifier?: string;
        }
        interface GetByIdentifiers extends ServiceTypes.CoreRequestBase {
            Identifiers?: string[];
        }
        interface Groups extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
        }
        interface ProcessSplits extends ServiceTypes.CoreRequestBase {
            Ids?: number[];
        }
        interface RemoveAlias extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            LayerName?: string;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            Attributes?: string[];
            DateAsEpoch?: boolean;
            EntityType: string;
            MaxResults?: number;
            Oids?: number[];
            ReturnGeometry?: boolean;
            Uids?: string[];
        }
        interface SearchAsWorkOrderEntity extends ServiceTypes.CoreRequestBase {
            Attributes?: string[];
            DateAsEpoch?: boolean;
            EntityType: string;
            IncludeLatLon?: boolean;
            MaxResults?: number;
            Oids?: number[];
            ReturnGeometry?: boolean;
            Uids?: string[];
        }
        interface SplitEntities extends ServiceTypes.CoreRequestBase {
        }
        interface Splits extends ServiceTypes.CoreRequestBase {
            EndDate?: Date;
            EntityType?: string;
            Id?: number;
            Ids?: number[];
            NewOid?: number;
            NewUid?: string;
            OldOid?: number;
            OldUid?: string;
            StartDate?: Date;
        }
        interface SubTypes extends ServiceTypes.CoreRequestBase {
            EntityType: string;
        }
        interface TypeRelationships extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
        }
        interface Types extends ServiceTypes.CoreRequestBase {
            EntityGroup: string;
            EntityGroups: string[];
            EntityTableTypes?: number[];
        }
        interface VisibleFields extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
        }
        interface WorkActivityHistory extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            EntityUid?: string;
            EntityUids?: string[];
            IncludeInspections?: boolean;
            IncludeStandardInspections?: boolean;
            IncludeWorkOrders?: boolean;
            MaxResults?: number;
            OnlyOpenWAs?: boolean;
        }
    }
    namespace Responses {
        interface AddAlias extends ServiceTypes.CoreResponseBase_<AssetAlias> {
        }
        interface AddSplit extends ServiceTypes.CoreResponseBase_<AssetSplitRecord> {
        }
        interface AliasAssets extends ServiceTypes.CoreResponseBase_<AliasAsset[]> {
        }
        interface Aliases extends ServiceTypes.CoreResponseBase_<AssetAlias> {
        }
        interface AllAliases extends ServiceTypes.CoreResponseBase_<AssetAlias[]> {
        }
        interface Attributes extends ServiceTypes.CoreResponseBase_<EsriServiceLayerAttribute[]> {
        }
        interface CloneWorkOrderEntities extends ServiceTypes.CoreResponseBase_<EntityUidSidUpdate[]> {
        }
        interface Configuration extends ServiceTypes.CoreResponseBase_<EntityConfiguration[]> {
        }
        interface CostHistory extends ServiceTypes.CoreResponseBase_<WorkOrderCostSummary[]> {
        }
        interface CostTotal extends ServiceTypes.CoreResponseBase_<EntityCostTotal[]> {
        }
        interface DistinctValues extends ServiceTypes.CoreResponseBase_<Object[]> {
        }
        interface DomainTypes extends ServiceTypes.CoreResponseBase_<PWEntity[]> {
        }
        interface EntityUidField extends ServiceTypes.CoreResponseBase_<string> {
        }
        interface FiveNumberSummary extends ServiceTypes.CoreResponseBase_<FiveNumberStatistic> {
        }
        interface GetByIdentifier extends ServiceTypes.CoreResponseBase_<EntityIdentifier> {
        }
        interface GetByIdentifiers extends ServiceTypes.CoreResponseBase_<EntityIdentifier[]> {
        }
        interface Groups extends ServiceTypes.CoreResponseBase_<PWModule[]> {
        }
        interface ProcessSplits extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface RemoveAlias extends ServiceTypes.CoreResponseBase_<AssetAlias> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_<GISResult> {
        }
        interface SearchAsWorkOrderEntity extends ServiceTypes.CoreResponseBase_<WorkOrderEntity[]> {
        }
        interface SplitEntities extends ServiceTypes.CoreResponseBase_<AssetTypeId[]> {
        }
        interface Splits extends ServiceTypes.CoreResponseBase_<AssetSplitRecord[]> {
        }
        interface SubTypes extends ServiceTypes.CoreResponseBase_<GISSubTypes> {
        }
        interface TypeRelationships extends ServiceTypes.CoreResponseBase_<ParChildType[]> {
        }
        interface Types extends ServiceTypes.CoreResponseBase_<PWEntity[]> {
        }
        interface VisibleFields extends ServiceTypes.CoreResponseBase_<string[]> {
        }
        interface WorkActivityHistory extends ServiceTypes.CoreResponseBase_<EntityHistory[]> {
        }
    }
    interface IEntityService {
        AddAlias?: (request: Requests.AddAlias) => Promise<Responses.AddAlias>;
        AddSplit?: (request: Requests.AddSplit) => Promise<Responses.AddSplit>;
        AliasAssets?: (request: Requests.AliasAssets) => Promise<Responses.AliasAssets>;
        Aliases?: (request: Requests.Aliases) => Promise<Responses.Aliases>;
        AllAliases?: (request: Requests.AllAliases) => Promise<Responses.AllAliases>;
        Attributes?: (request: Requests.Attributes) => Promise<Responses.Attributes>;
        CloneWorkOrderEntities?: (request: Requests.CloneWorkOrderEntities) => Promise<Responses.CloneWorkOrderEntities>;
        Configuration?: (request: Requests.Configuration) => Promise<Responses.Configuration>;
        CostHistory?: (request: Requests.CostHistory) => Promise<Responses.CostHistory>;
        CostTotal?: (request: Requests.CostTotal) => Promise<Responses.CostTotal>;
        DistinctValues?: (request: Requests.DistinctValues) => Promise<Responses.DistinctValues>;
        DomainTypes?: (request: Requests.DomainTypes) => Promise<Responses.DomainTypes>;
        EntityUidField?: (request: Requests.EntityUidField) => Promise<Responses.EntityUidField>;
        FiveNumberSummary?: (request: Requests.FiveNumberSummary) => Promise<Responses.FiveNumberSummary>;
        GetByIdentifier?: (request: Requests.GetByIdentifier) => Promise<Responses.GetByIdentifier>;
        GetByIdentifiers?: (request: Requests.GetByIdentifiers) => Promise<Responses.GetByIdentifiers>;
        Groups?: (request: Requests.Groups) => Promise<Responses.Groups>;
        ProcessSplits?: (request: Requests.ProcessSplits) => Promise<Responses.ProcessSplits>;
        RemoveAlias?: (request: Requests.RemoveAlias) => Promise<Responses.RemoveAlias>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        SearchAsWorkOrderEntity?: (request: Requests.SearchAsWorkOrderEntity) => Promise<Responses.SearchAsWorkOrderEntity>;
        SplitEntities?: (request: Requests.SplitEntities) => Promise<Responses.SplitEntities>;
        Splits?: (request: Requests.Splits) => Promise<Responses.Splits>;
        SubTypes?: (request: Requests.SubTypes) => Promise<Responses.SubTypes>;
        TypeRelationships?: (request: Requests.TypeRelationships) => Promise<Responses.TypeRelationships>;
        Types?: (request: Requests.Types) => Promise<Responses.Types>;
        VisibleFields?: (request: Requests.VisibleFields) => Promise<Responses.VisibleFields>;
        WorkActivityHistory?: (request: Requests.WorkActivityHistory) => Promise<Responses.WorkActivityHistory>;
    }
}
