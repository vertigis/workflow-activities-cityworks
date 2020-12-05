import { EquipmentRateType } from './EquipmentRateType';
export interface EquipmentBase {
    Category?: string;
    DefaultImgPath?: string;
    Description?: string;
    EquipmentSid?: number;
    EquipmentUid?: string;
    ForCheckout?: string;
    Manufacturer?: string;
    Model?: string;
    RateType?: EquipmentRateType;
    UnitCost?: number;
    Viewable?: boolean;
    WarranteeDate?: Date;
}
