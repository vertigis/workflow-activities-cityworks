import { Transaction } from './Transaction';
export interface Transfer extends Transaction {
    AcctNum?: string;
    Destination?: string;
    Quantity?: number;
    RequestedBy?: string;
    RequestedBySid?: number;
    Source?: string;
}
