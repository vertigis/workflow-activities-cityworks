import { SupplierMaterialBase } from './SupplierMaterialBase';
import { SupplierBase } from './SupplierBase';
export interface Supplier extends SupplierBase {
    SupplierMaterials?: SupplierMaterialBase[];
}
