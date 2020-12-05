import { ContractSubmittal } from './ContractSubmittal';
import { ContractSubcontractor } from './ContractSubcontractor';
import { ContractPermit } from './ContractPermit';
import { ContractLineItem } from './ContractLineItem';
import { ContractGroupRight } from './ContractGroupRight';
import { ContractFundSource } from './ContractFundSource';
import { ContractClaim } from './ContractClaim';
import { ContractAttachment } from './ContractAttachment';
import { ContractBase } from './ContractBase';
export interface Contract extends ContractBase {
    ContractAttachments?: ContractAttachment[];
    ContractClaims?: ContractClaim[];
    ContractFundSources?: ContractFundSource[];
    ContractGroupRights?: ContractGroupRight[];
    ContractLineItems?: ContractLineItem[];
    ContractPermits?: ContractPermit[];
    ContractSubcontractors?: ContractSubcontractor[];
    ContractSubmittals?: ContractSubmittal[];
}
