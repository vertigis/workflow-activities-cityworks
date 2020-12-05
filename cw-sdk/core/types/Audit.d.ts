import { Transaction } from './Transaction';
export interface Audit extends Transaction {
    AcctNum?: string;
    CostDiff?: number;
    NewQuant?: number;
    NewUnitCost?: number;
    OldQuant?: number;
    OldUnitCost?: number;
    Reason?: string;
    StoreRm?: string;
}
