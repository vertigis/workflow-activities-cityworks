import { Transaction } from './Transaction';
export interface Receive extends Transaction {
    AcctNum?: string;
    Destination?: string;
    EmployeeSid?: number;
    InvoiceNum?: string;
    MaterialCostId?: number;
    PoNum?: string;
    Quantity?: number;
    RequisitionNum?: string;
    SupplierUid?: string;
    WorkOrderId?: string;
    WorkOrderSid?: number;
}
