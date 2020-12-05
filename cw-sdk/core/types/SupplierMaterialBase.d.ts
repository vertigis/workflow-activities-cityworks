import { TimeIntervalUnit } from './TimeIntervalUnit';
export interface SupplierMaterialBase {
    CatalogNum?: string;
    ContractNum?: string;
    InfoDate?: Date;
    LeadTime?: number;
    LeadTimeUnit?: TimeIntervalUnit;
    MaterialSid?: number;
    MaterialUid?: string;
    NoInPack?: number;
    Notes?: string;
    OrderQuant?: number;
    PackCost?: number;
    PartNumber?: string;
    SupMatName?: string;
    SupplierMaterialId?: number;
    SupplierSid?: number;
    SupplierUid?: string;
    UnitOfMeasure?: string;
}
