import { AssemblyMaterial } from './AssemblyMaterial';
export interface AssemblyMaterialDetail extends AssemblyMaterial {
    ChildMatDesc?: string;
    ChildMatUid?: string;
    ChildStock?: number;
    Description?: string;
    MaterialUid?: string;
    Stock?: number;
    Storeroom?: string;
}
