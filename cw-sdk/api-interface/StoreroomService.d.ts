import { StorermStock } from '../core/types/StorermStock';
import { StoreroomSecurityBase } from '../core/types/StoreroomSecurityBase';
import { StoreDomainBase } from '../core/types/StoreDomainBase';
import { Supplier } from '../core/types/Supplier';
import { MaterialBase } from '../core/types/MaterialBase';
import { AssemblyTransactions } from '../core/types/AssemblyTransactions';
import { AssemblyMaterialDetail } from '../core/types/AssemblyMaterialDetail';
import { Transfer } from '../core/types/Transfer';
import { SupplierMaterialBase } from '../core/types/SupplierMaterialBase';
import { SupplierBase } from '../core/types/SupplierBase';
import { Requisition } from '../core/types/Requisition';
import { Receive } from '../core/types/Receive';
import { IssueResultSet } from '../core/types/IssueResultSet';
import { Audit } from '../core/types/Audit';
import { CodeDesc } from '../core/types/CodeDesc';
import { RequisitionItem } from '../core/types/RequisitionItem';
import { FilterCondition } from '../core/types/FilterCondition';
import { ServiceTypes } from '../core/service-types';
export declare namespace StoreroomServiceTypes {
    namespace Requests {
        interface Accounts extends ServiceTypes.CoreRequestBase {
            IncludeInactive?: boolean;
        }
        interface AddAudit extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            AuditReason?: string;
            Comments?: string;
            MaterialSid: number;
            NewQuant: number;
            NewUnitCost: number;
            StoreRm: string;
            TagNum?: string;
        }
        interface AddIssue extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Comments?: string;
            EntityType?: string;
            EntityUid?: string;
            IssueToEmpSid?: number;
            MaterialCostId?: number;
            MaterialSid: number;
            Quantity: number;
            Source: string;
            TagNum?: string;
            TransDateTime?: Date;
            UnitCost?: number;
            WorkOrderId?: string;
            WorkOrderSid?: number;
            WOTaskId?: number;
        }
        interface AddReceive extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Comments?: string;
            Destination: string;
            InvoiceNum?: string;
            MaterialCostId?: number;
            MaterialSid: number;
            PoNum?: string;
            Quantity: number;
            ReceiveFromEmpSid?: number;
            RequisitionItemId?: number;
            SupplierUid?: string;
            TagNum?: string;
            TransDateTime?: Date;
            UnitCost?: number;
            WorkOrderId?: string;
            WorkOrderSid?: number;
        }
        interface AddRequisition extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            Complete?: boolean;
            ExpDeliveryDate?: Date;
            PoNumber?: string;
            ReqType?: string;
            RequisitionDate?: Date;
        }
        interface AddRequisitionItem extends ServiceTypes.CoreRequestBase {
            Complete?: boolean;
            ItemCost?: number;
            Justification?: string;
            MaterialSid: number;
            QtyInPkg: number;
            Quantity: number;
            ReceivedQuantity?: number;
            RequisitionSid: number;
            ReturnReason?: string;
            SupplierSid: number;
            UnitCost?: number;
        }
        interface AddSupplier extends ServiceTypes.CoreRequestBase {
            Address?: string;
            City?: string;
            ContactPerson?: string;
            ContactPerson2?: string;
            DomainId?: number;
            Name: string;
            State?: string;
            SupplierEmail?: string;
            SupplierEmail2?: string;
            SupplierFax?: string;
            SupplierNotes?: string;
            SupplierPhone?: string;
            SupplierPhone2?: string;
            SupplierPhone3?: string;
            SupplierUid: string;
            Zipcode?: string;
        }
        interface AddSupplierMaterial extends ServiceTypes.CoreRequestBase {
            CatalogNum?: string;
            ContractNum?: string;
            DomainId?: number;
            InfoDate?: Date;
            LeadTime?: number;
            LeadTimeUnit?: number;
            MaterialSid: number;
            NoInPack?: number;
            Notes?: string;
            OrderQuant?: number;
            PackCost?: number;
            PartNumber?: string;
            SupMatName?: string;
            SupplierSid: number;
            UnitOfMeasure?: string;
        }
        interface AddTransfer extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Comments?: string;
            Destination: string;
            MaterialSid: number;
            Quantity: number;
            RequestedBySid?: number;
            Source: string;
            TagNum?: string;
            TransDateTime?: Date;
            UnitCost?: number;
        }
        interface AssemblyMaterial extends ServiceTypes.CoreRequestBase {
            MaterialSid?: number;
            Storeroom: string;
        }
        interface BuildAssemblyMaterial extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            ChildMaterialQuantities?: {
                [key: number]: number;
            };
            Comments?: string;
            ParentMaterialSid: number;
            Quantity: number;
            Storeroom: string;
            TagNum?: string;
            TransDateTime?: Date;
            WorkOrderId?: string;
            WorkOrderSid?: number;
        }
        interface MaterialsByEmployeeSid extends ServiceTypes.CoreRequestBase {
            EmployeeSid: number;
        }
        interface MaterialSearch extends ServiceTypes.CoreRequestBase {
            IncludeInactive?: boolean;
            IsAssembly?: boolean;
            Limit?: number;
            Offset?: number;
            Query?: string;
            SortDir?: number;
            SortField?: string;
            Storeroom: string;
            WhereClause?: FilterCondition[];
        }
        interface RequisitionItems extends ServiceTypes.CoreRequestBase {
            RequisitionSid: number;
        }
        interface Requisitions extends ServiceTypes.CoreRequestBase {
            RequisitionSids: number[];
        }
        interface SearchSuppliersByUid extends ServiceTypes.CoreRequestBase {
            SupplierUid?: string;
        }
        interface StoreDomainsByEmployee extends ServiceTypes.CoreRequestBase {
            EmployeeSid: number;
        }
        interface Storerooms extends ServiceTypes.CoreRequestBase {
            CanIssue?: boolean;
            CanReceive?: boolean;
            DomainId?: number;
            IsActive?: boolean;
        }
        interface StoreroomSecurity extends ServiceTypes.CoreRequestBase {
            EmployeeSid?: number;
            Storeroom: string;
        }
        interface StoreroomStocks extends ServiceTypes.CoreRequestBase {
            MaterialSid?: number;
            Storeroom?: string;
        }
        interface SupplierMaterial extends ServiceTypes.CoreRequestBase {
            MaterialSid: number;
            SupplierSid: number;
        }
        interface Suppliers extends ServiceTypes.CoreRequestBase {
            MaterialSids?: number[];
        }
        interface UpdateRequisition extends ServiceTypes.CoreRequestBase {
            Cancel?: boolean;
            Comments?: string;
            Complete?: boolean;
            ExpDeliveryDate?: Date;
            PoNumber?: string;
            ReceiveStoreroom?: string;
            ReqType?: string;
            RequisitionDate?: Date;
            RequisitionItems?: RequisitionItem[];
            RequisitionSid: number;
        }
        interface UpdateStoreroomStock extends ServiceTypes.CoreRequestBase {
            BinLocation?: string;
            CycleIntervalNum?: number;
            CycleIntervalUnit?: number;
            DomainId?: number;
            MaterialSid: number;
            MaxQuantity?: number;
            MinQuantity?: number;
            NextAuditDate?: Date;
            SecBinLocation?: string;
            StockOnHand?: number;
            Storeroom: string;
        }
        interface UpdateSupplier extends ServiceTypes.CoreRequestBase {
            Address?: string;
            City?: string;
            ContactPerson?: string;
            ContactPerson2?: string;
            DomainId?: number;
            IsActive?: boolean;
            Name?: string;
            State?: string;
            SupplierEmail?: string;
            SupplierEmail2?: string;
            SupplierFax?: string;
            SupplierNotes?: string;
            SupplierPhone?: string;
            SupplierPhone2?: string;
            SupplierPhone3?: string;
            SupplierSid: number;
            Zipcode?: string;
        }
        interface UpdateSupplierMaterial extends ServiceTypes.CoreRequestBase {
            CatalogNum?: string;
            ContractNum?: string;
            DomainId?: number;
            InfoDate?: Date;
            LeadTime?: number;
            LeadTimeUnit?: number;
            MaterialSid?: number;
            NoInPack?: number;
            Notes?: string;
            OrderQuant?: number;
            PackCost?: number;
            PartNumber?: string;
            SupMatName?: string;
            SupplierMaterialId: number;
            SupplierSid?: number;
            UnitOfMeasure?: string;
        }
    }
    namespace Responses {
        interface Accounts extends ServiceTypes.CoreResponseBase_<CodeDesc[]> {
        }
        interface AddAudit extends ServiceTypes.CoreResponseBase_<Audit> {
        }
        interface AddIssue extends ServiceTypes.CoreResponseBase_<IssueResultSet> {
        }
        interface AddReceive extends ServiceTypes.CoreResponseBase_<Receive> {
        }
        interface AddRequisition extends ServiceTypes.CoreResponseBase_<Requisition> {
        }
        interface AddRequisitionItem extends ServiceTypes.CoreResponseBase_<RequisitionItem> {
        }
        interface AddSupplier extends ServiceTypes.CoreResponseBase_<SupplierBase> {
        }
        interface AddSupplierMaterial extends ServiceTypes.CoreResponseBase_<SupplierMaterialBase> {
        }
        interface AddTransfer extends ServiceTypes.CoreResponseBase_<Transfer> {
        }
        interface AssemblyMaterial extends ServiceTypes.CoreResponseBase_<AssemblyMaterialDetail[]> {
        }
        interface BuildAssemblyMaterial extends ServiceTypes.CoreResponseBase_<AssemblyTransactions> {
        }
        interface MaterialsByEmployeeSid extends ServiceTypes.CoreResponseBase_<MaterialBase[]> {
        }
        interface MaterialSearch extends ServiceTypes.CoreResponsePaged_<MaterialBase[]> {
        }
        interface RequisitionItems extends ServiceTypes.CoreResponseBase_<RequisitionItem[]> {
        }
        interface Requisitions extends ServiceTypes.CoreResponseBase_<Requisition[]> {
        }
        interface SearchSuppliersByUid extends ServiceTypes.CoreResponseBase_<Supplier[]> {
        }
        interface StoreDomainsByEmployee extends ServiceTypes.CoreResponseBase_<StoreDomainBase[]> {
        }
        interface Storerooms extends ServiceTypes.CoreResponseBase_<CodeDesc[]> {
        }
        interface StoreroomSecurity extends ServiceTypes.CoreResponseBase_<StoreroomSecurityBase> {
        }
        interface StoreroomStocks extends ServiceTypes.CoreResponseBase_<StorermStock[]> {
        }
        interface SupplierMaterial extends ServiceTypes.CoreResponseBase_<SupplierMaterialBase> {
        }
        interface Suppliers extends ServiceTypes.CoreResponseBase_<Supplier[]> {
        }
        interface UpdateRequisition extends ServiceTypes.CoreResponseBase_<Requisition> {
        }
        interface UpdateStoreroomStock extends ServiceTypes.CoreResponseBase_<StorermStock> {
        }
        interface UpdateSupplier extends ServiceTypes.CoreResponseBase_<SupplierBase> {
        }
        interface UpdateSupplierMaterial extends ServiceTypes.CoreResponseBase_<SupplierMaterialBase> {
        }
    }
    interface IStoreroomService {
        Accounts?: (request: Requests.Accounts) => Promise<Responses.Accounts>;
        AddAudit?: (request: Requests.AddAudit) => Promise<Responses.AddAudit>;
        AddIssue?: (request: Requests.AddIssue) => Promise<Responses.AddIssue>;
        AddReceive?: (request: Requests.AddReceive) => Promise<Responses.AddReceive>;
        AddRequisition?: (request: Requests.AddRequisition) => Promise<Responses.AddRequisition>;
        AddRequisitionItem?: (request: Requests.AddRequisitionItem) => Promise<Responses.AddRequisitionItem>;
        AddSupplier?: (request: Requests.AddSupplier) => Promise<Responses.AddSupplier>;
        AddSupplierMaterial?: (request: Requests.AddSupplierMaterial) => Promise<Responses.AddSupplierMaterial>;
        AddTransfer?: (request: Requests.AddTransfer) => Promise<Responses.AddTransfer>;
        AssemblyMaterial?: (request: Requests.AssemblyMaterial) => Promise<Responses.AssemblyMaterial>;
        BuildAssemblyMaterial?: (request: Requests.BuildAssemblyMaterial) => Promise<Responses.BuildAssemblyMaterial>;
        MaterialsByEmployeeSid?: (request: Requests.MaterialsByEmployeeSid) => Promise<Responses.MaterialsByEmployeeSid>;
        MaterialSearch?: (request: Requests.MaterialSearch) => Promise<Responses.MaterialSearch>;
        RequisitionItems?: (request: Requests.RequisitionItems) => Promise<Responses.RequisitionItems>;
        Requisitions?: (request: Requests.Requisitions) => Promise<Responses.Requisitions>;
        SearchSuppliersByUid?: (request: Requests.SearchSuppliersByUid) => Promise<Responses.SearchSuppliersByUid>;
        StoreDomainsByEmployee?: (request: Requests.StoreDomainsByEmployee) => Promise<Responses.StoreDomainsByEmployee>;
        Storerooms?: (request: Requests.Storerooms) => Promise<Responses.Storerooms>;
        StoreroomSecurity?: (request: Requests.StoreroomSecurity) => Promise<Responses.StoreroomSecurity>;
        StoreroomStocks?: (request: Requests.StoreroomStocks) => Promise<Responses.StoreroomStocks>;
        SupplierMaterial?: (request: Requests.SupplierMaterial) => Promise<Responses.SupplierMaterial>;
        Suppliers?: (request: Requests.Suppliers) => Promise<Responses.Suppliers>;
        UpdateRequisition?: (request: Requests.UpdateRequisition) => Promise<Responses.UpdateRequisition>;
        UpdateStoreroomStock?: (request: Requests.UpdateStoreroomStock) => Promise<Responses.UpdateStoreroomStock>;
        UpdateSupplier?: (request: Requests.UpdateSupplier) => Promise<Responses.UpdateSupplier>;
        UpdateSupplierMaterial?: (request: Requests.UpdateSupplierMaterial) => Promise<Responses.UpdateSupplierMaterial>;
    }
}
