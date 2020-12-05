import { EquipmentReservationStatus } from '../core/types/EquipmentReservationStatus';
import { EquipTransHistory } from '../core/types/EquipTransHistory';
import { ServiceTypes } from '../core/service-types';
export declare namespace EquipmentReservationServiceTypes {
    namespace Requests {
        interface CheckedOut extends ServiceTypes.CoreRequestBase {
        }
        interface CheckIn extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            EmployeeSid: number;
            EquipmentSid: number;
            WorkOrderId?: string;
            WorkOrderSid?: number;
        }
        interface CheckOut extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            EmployeeSid: number;
            EquipmentSid: number;
            ReservedToDate: Date;
            WorkOrderId?: string;
            WorkOrderSid?: number;
        }
        interface CheckOutHistory extends ServiceTypes.CoreRequestBase {
            EmployeeSid?: number;
            EquipmentSid?: number;
        }
        interface DeleteReservation extends ServiceTypes.CoreRequestBase {
            TransactionIds: number[];
        }
        interface Reservations extends ServiceTypes.CoreRequestBase {
            EndDateTime?: Date;
            EquipmentSid?: number;
            StartDateTime?: Date;
        }
        interface Reserve extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            EmployeeSid: number;
            EquipmentSid: number;
            ReservedToDate: Date;
            TransDateTime: Date;
            WorkOrderId?: string;
            WorkOrderSid?: number;
        }
        interface Status extends ServiceTypes.CoreRequestBase {
            EquipmentSids: number[];
        }
        interface UpdateReservation extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            EmployeeSid?: number;
            ReservedToDate?: Date;
            TransactionId: number;
            TransDateTime?: Date;
            WorkOrderId?: string;
            WorkOrderSid?: number;
        }
    }
    namespace Responses {
        interface CheckedOut extends ServiceTypes.CoreResponseBase_<EquipTransHistory[]> {
        }
        interface CheckIn extends ServiceTypes.CoreResponseBase_<EquipTransHistory> {
        }
        interface CheckOut extends ServiceTypes.CoreResponseBase_<EquipTransHistory> {
        }
        interface CheckOutHistory extends ServiceTypes.CoreResponseBase_<EquipTransHistory[]> {
        }
        interface DeleteReservation extends ServiceTypes.CoreResponseBase {
        }
        interface Reservations extends ServiceTypes.CoreResponseBase_<EquipTransHistory[]> {
        }
        interface Reserve extends ServiceTypes.CoreResponseBase_<EquipTransHistory> {
        }
        interface Status extends ServiceTypes.CoreResponseBase_<EquipmentReservationStatus[]> {
        }
        interface UpdateReservation extends ServiceTypes.CoreResponseBase_<EquipTransHistory> {
        }
    }
    interface IEquipmentReservationService {
        CheckedOut?: (request: Requests.CheckedOut) => Promise<Responses.CheckedOut>;
        CheckIn?: (request: Requests.CheckIn) => Promise<Responses.CheckIn>;
        CheckOut?: (request: Requests.CheckOut) => Promise<Responses.CheckOut>;
        CheckOutHistory?: (request: Requests.CheckOutHistory) => Promise<Responses.CheckOutHistory>;
        DeleteReservation?: (request: Requests.DeleteReservation) => Promise<Responses.DeleteReservation>;
        Reservations?: (request: Requests.Reservations) => Promise<Responses.Reservations>;
        Reserve?: (request: Requests.Reserve) => Promise<Responses.Reserve>;
        Status?: (request: Requests.Status) => Promise<Responses.Status>;
        UpdateReservation?: (request: Requests.UpdateReservation) => Promise<Responses.UpdateReservation>;
    }
}
