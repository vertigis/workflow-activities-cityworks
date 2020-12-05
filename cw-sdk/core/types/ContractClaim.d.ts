import { Contract } from './Contract';
import { ContractClaimBase } from './ContractClaimBase';
export interface ContractClaim extends ContractClaimBase {
    Contract?: Contract;
}
