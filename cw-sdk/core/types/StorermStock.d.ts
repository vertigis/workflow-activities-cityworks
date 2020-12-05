import { RepeatIntervalUnit } from './RepeatIntervalUnit';
export interface StorermStock {
    BinImagePath?: string;
    BinLocation?: string;
    Comments?: string;
    CycleIntervalNum?: number;
    CycleIntervalUnit?: RepeatIntervalUnit;
    MaterialSid?: number;
    MaxQuantity?: number;
    MinQuantity?: number;
    NextAuditDate?: Date;
    SecBinImagePath?: string;
    SecBinLocation?: string;
    StockOnHand?: number;
    Storerm?: string;
}
