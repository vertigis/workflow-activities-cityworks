import { Contract } from './Contract';
import { LineItem } from './LineItem';
export interface ContractLineItem extends LineItem {
    ActualBudget?: number;
    Contract?: Contract;
    ContractId?: number;
    ContractLineItemId?: number;
    ContractPeriod?: number;
    EstimatedBudget?: number;
    PrjUnitPrice?: number;
    UnitPrice?: number;
    Units?: number;
    UnitsUsed?: number;
}
