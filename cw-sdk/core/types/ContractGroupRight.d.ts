import { Contract } from './Contract';
import { GroupRightBase } from './GroupRightBase';
export interface ContractGroupRight extends GroupRightBase {
    Contract?: Contract;
    ContractId?: number;
}
