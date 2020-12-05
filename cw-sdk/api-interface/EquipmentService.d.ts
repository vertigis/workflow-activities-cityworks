import { EquipmentBase } from '../core/types/EquipmentBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace EquipmentServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            Category?: string;
            CustomFieldValues?: {
                [key: number]: string;
            };
            DefaultImgPath?: string;
            Description?: string;
            EquipmentUid: string;
            ForCheckout?: string;
            Manufacturer?: string;
            Model?: string;
            RateType?: string;
            UnitCost?: number;
            Viewable?: boolean;
            WarranteeDate?: Date;
        }
        interface All extends ServiceTypes.CoreRequestBase {
            ViewableOnly?: boolean;
        }
        interface ById extends ServiceTypes.CoreRequestBase {
            EquipmentSid: number;
        }
        interface ByIds extends ServiceTypes.CoreRequestBase {
            EquipmentSids?: number[];
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            EquipmentSids: number[];
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            Description?: string[];
            EquipmentSid?: number[];
            EquipmentUid?: string[];
            ForCheckout?: boolean;
            Manufacturer?: string[];
            MaxResults?: number;
            Model?: string[];
            RateType?: string[];
            Viewable?: boolean;
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            Category?: string;
            CustomFieldValues?: {
                [key: number]: string;
            };
            DefaultImgPath?: string;
            Description?: string;
            EquipmentSids: number[];
            EquipmentUid?: string;
            ForCheckout?: string;
            Manufacturer?: string;
            Model?: string;
            RateType?: string;
            UnitCost?: number;
            Viewable?: boolean;
            WarranteeDate?: Date;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<EquipmentBase> {
        }
        interface All extends ServiceTypes.CoreResponseBase_obsolete_<EquipmentBase[]> {
        }
        interface ById extends ServiceTypes.CoreResponseBase_obsolete_<EquipmentBase> {
        }
        interface ByIds extends ServiceTypes.CoreResponseBase_obsolete_<EquipmentBase[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<EquipmentBase[]> {
        }
    }
    interface IEquipmentService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        All?: (request: Requests.All) => Promise<Responses.All>;
        ById?: (request: Requests.ById) => Promise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => Promise<Responses.ByIds>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
