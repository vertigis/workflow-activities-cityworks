import { Transaction } from './Transaction';
export interface Issue extends Transaction {
    AcctNum?: string;
    EmpName?: string;
    IssueToEmpSid?: number;
    MaterialCostId?: number;
    Organization?: string;
    Quantity?: number;
    Source?: string;
    WorkOrderId?: string;
    WorkOrderSid?: number;
}
