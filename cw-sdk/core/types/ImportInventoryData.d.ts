import { ImportInventoryItem } from './ImportInventoryItem';
export interface ImportInventoryData {
    ConditionDateFieldName?: string;
    ConditionScoreFieldName?: string;
    ConstructionDateFieldName?: string;
    FieldAliases?: {
        [key: string]: string;
    };
    Items?: ImportInventoryItem[];
    SurfaceMaterialFieldName?: string;
}
