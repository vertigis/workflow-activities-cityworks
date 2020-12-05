import { CaDataGroupItem } from '../core/types/CaDataGroupItem';
import { CaDataDetailChanges } from '../core/types/CaDataDetailChanges';
import { CaDataGroupItemBase } from '../core/types/CaDataGroupItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseDataGroupServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            CaseDataGroupId: number;
            GroupCode: string;
            GroupDesc?: string;
            GroupSum?: number;
            SumFlag?: string;
        }
        interface AddDefault extends ServiceTypes.CoreRequestBase {
            BusCaseId: number;
            CaObjectId: number;
        }
        interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface CheckGISChanges extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
            CaseDataDetailId?: number;
            CaseDataGroupId?: number;
            EntityType: string;
            EntityUid: string;
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            CaDataGroupId?: number;
            CaseDataGroupId?: number;
            GroupCode?: string;
            GroupDesc?: string;
            GroupSum?: number;
            SumFlag?: string;
        }
        interface UpdateFromAsset extends ServiceTypes.CoreRequestBase {
            CaDataGroupId?: number;
            CaObjectId: number;
            EntityType: string;
            EntityUid: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<CaDataGroupItemBase> {
        }
        interface AddDefault extends ServiceTypes.CoreResponseBase_<CaDataGroupItemBase[]> {
        }
        interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CaDataGroupItemBase[]> {
        }
        interface CheckGISChanges extends ServiceTypes.CoreResponseBase_<CaDataDetailChanges[]> {
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
        interface UpdateFromAsset extends ServiceTypes.CoreResponseBase_<CaDataGroupItem[]> {
        }
    }
    interface ICaseDataGroupService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        AddDefault?: (request: Requests.AddDefault) => Promise<Responses.AddDefault>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => Promise<Responses.ByCaObjectId>;
        CheckGISChanges?: (request: Requests.CheckGISChanges) => Promise<Responses.CheckGISChanges>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => Promise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        UpdateFromAsset?: (request: Requests.UpdateFromAsset) => Promise<Responses.UpdateFromAsset>;
    }
}
