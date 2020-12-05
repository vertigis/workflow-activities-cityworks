import { Contract } from './Contract';
import { AttachmentBase } from './AttachmentBase';
export interface ContractAttachment extends AttachmentBase {
    AttachedBy?: string;
    Contract?: Contract;
    ContractId?: number;
    Id?: number;
}
