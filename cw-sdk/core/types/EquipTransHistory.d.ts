import { EquipTransType } from './EquipTransType';
export interface EquipTransHistory {
    Comments?: string;
    EmployeeSid?: number;
    EquipmentSid?: number;
    EquipmentUid?: string;
    FullName?: string;
    RecordDateTime?: Date;
    ReservedToDate?: Date;
    TransactionBy?: number;
    TransactionId?: number;
    TransDateTime?: Date;
    TransType?: EquipTransType;
    WorkOrderId?: string;
    WorkOrderSid?: number;
}
