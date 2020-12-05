import { TransactionType } from './TransactionType';
export interface Transaction {
    Comments?: string;
    Description?: string;
    MaterialSid?: number;
    MaterialUid?: string;
    PartNumber?: string;
    Personnel?: string;
    PersonnelSid?: number;
    RecordDateTime?: Date;
    TagNum?: string;
    TransactionId?: number;
    TransDateTime?: Date;
    TransType?: TransactionType;
    UnitCost?: number;
}
