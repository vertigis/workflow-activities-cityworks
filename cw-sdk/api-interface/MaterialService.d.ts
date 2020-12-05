import { CodeDesc } from '../core/types/CodeDesc';
import { AssemblyMaterialDetail } from '../core/types/AssemblyMaterialDetail';
import { MaterialKeyword } from '../core/types/MaterialKeyword';
import { MaterialNode } from '../core/types/MaterialNode';
import { MaterialBase } from '../core/types/MaterialBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace MaterialServiceTypes {
    namespace Requests {
        interface All extends ServiceTypes.CoreRequestBase {
            ViewableOnly?: boolean;
        }
        interface ById extends ServiceTypes.CoreRequestBase {
            MaterialSid: number;
        }
        interface ByIds extends ServiceTypes.CoreRequestBase {
            MaterialSids?: number[];
        }
        interface ByParent extends ServiceTypes.CoreRequestBase {
            DisplayTextDelimeter?: string;
            DisplayTextMode?: string;
            DomainId?: number;
            IncludeEmptyNodes?: boolean;
            IncludeNotViewable?: boolean;
            NodeSid: number;
            RecursiveSearch?: boolean;
        }
        interface ByStoreroom extends ServiceTypes.CoreRequestBase {
            Storeroom: string;
        }
        interface ByStoreroomAndId extends ServiceTypes.CoreRequestBase {
            MaterialSid: number;
            Storeroom: string;
        }
        interface Keywords extends ServiceTypes.CoreRequestBase {
            MaterialSids?: number[];
        }
        interface MaterialBom extends ServiceTypes.CoreRequestBase {
            MaterialSid: number;
            Storeroom?: string;
        }
        interface MaterialCategories extends ServiceTypes.CoreRequestBase {
        }
        interface MaterialNodes extends ServiceTypes.CoreRequestBase {
            DisplayTextDelimeter?: string;
            DisplayTextMode?: string;
            DomainId: number;
            IncludeNotViewable?: boolean;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            AuditInterval?: string[];
            CatClass?: number[];
            Category?: string[];
            CostType?: number[];
            CUCategory?: string[];
            DefaultImgPath?: string[];
            Description?: string[];
            Detail?: string[];
            GdbSubtype?: string[];
            JustificationRequired?: boolean;
            Manufacturer?: string[];
            MaterialSid?: number[];
            MaterialUid?: string[];
            MaximumExpirationDate?: Date;
            MaximumMaterialSid?: number;
            MaximumMinQuantity?: number;
            MaximumUnitCost?: number;
            MinimumExpirationDate?: Date;
            MinimumMaterialSid?: number;
            MinimumMinQuantity?: number;
            MinimumUnitCost?: number;
            Model?: string[];
            PartNumber?: string[];
            Splittable?: boolean;
            Supplier?: string[];
            UnitOfMeasure?: string[];
            Viewable?: boolean;
        }
    }
    namespace Responses {
        interface All extends ServiceTypes.CoreResponseBase_obsolete_<MaterialBase[]> {
        }
        interface ById extends ServiceTypes.CoreResponseBase_obsolete_<MaterialBase> {
        }
        interface ByIds extends ServiceTypes.CoreResponseBase_obsolete_<MaterialBase[]> {
        }
        interface ByParent extends ServiceTypes.CoreResponseBase_obsolete_<MaterialNode[]> {
        }
        interface ByStoreroom extends ServiceTypes.CoreResponseBase_obsolete_<MaterialBase[]> {
        }
        interface ByStoreroomAndId extends ServiceTypes.CoreResponseBase_obsolete_<MaterialBase[]> {
        }
        interface Keywords extends ServiceTypes.CoreResponseBase_<MaterialKeyword[]> {
        }
        interface MaterialBom extends ServiceTypes.CoreResponseBase_obsolete_<AssemblyMaterialDetail[]> {
        }
        interface MaterialCategories extends ServiceTypes.CoreResponseBase_obsolete_<CodeDesc[]> {
        }
        interface MaterialNodes extends ServiceTypes.CoreResponseBase_obsolete_<MaterialNode[]> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<MaterialBase[]> {
        }
    }
    interface IMaterialService {
        All?: (request: Requests.All) => Promise<Responses.All>;
        ById?: (request: Requests.ById) => Promise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => Promise<Responses.ByIds>;
        ByParent?: (request: Requests.ByParent) => Promise<Responses.ByParent>;
        ByStoreroom?: (request: Requests.ByStoreroom) => Promise<Responses.ByStoreroom>;
        ByStoreroomAndId?: (request: Requests.ByStoreroomAndId) => Promise<Responses.ByStoreroomAndId>;
        Keywords?: (request: Requests.Keywords) => Promise<Responses.Keywords>;
        MaterialBom?: (request: Requests.MaterialBom) => Promise<Responses.MaterialBom>;
        MaterialCategories?: (request: Requests.MaterialCategories) => Promise<Responses.MaterialCategories>;
        MaterialNodes?: (request: Requests.MaterialNodes) => Promise<Responses.MaterialNodes>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
    }
}
