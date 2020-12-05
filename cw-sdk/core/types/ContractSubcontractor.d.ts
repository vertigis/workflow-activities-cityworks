import { Contract } from './Contract';
export interface ContractSubcontractor {
    Approved?: boolean;
    Comments?: string;
    Contract?: Contract;
    ContractId?: number;
    ContractorName?: string;
    ContractorSid?: number;
    ContractorType?: string;
    DateApproved?: Date;
    EndDate?: Date;
    StartDate?: Date;
    SubcontractorId?: number;
}
