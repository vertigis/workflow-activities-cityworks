import { EquipTransType } from './EquipTransType';
export interface EquipmentReservationStatus {
    Availability?: EquipTransType;
    AvailableUntil?: Date;
    Description?: string;
    DueDate?: Date;
    EmployeeName?: string;
    EmployeeSid?: number;
    EquipmentSid?: number;
    EquipmentUid?: string;
    ReservedUntil?: Date;
    WorkOrderId?: string;
    WorkOrderSid?: number;
}
