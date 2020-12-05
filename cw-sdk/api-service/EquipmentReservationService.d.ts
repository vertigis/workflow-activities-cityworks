import { IApiService } from './i-api-service';
import { EquipmentReservationServiceTypes as SvcDef } from '../api-interface/EquipmentReservationService';
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IEquipmentReservationService = SvcDef.IEquipmentReservationService;
export declare class EquipmentReservationService implements IEquipmentReservationService {
    private _service;
    constructor(service: IApiService);
    CheckedOut(request: Requests.CheckedOut): Promise<Responses.CheckedOut>;
    CheckIn(request: Requests.CheckIn): Promise<Responses.CheckIn>;
    CheckOut(request: Requests.CheckOut): Promise<Responses.CheckOut>;
    CheckOutHistory(request: Requests.CheckOutHistory): Promise<Responses.CheckOutHistory>;
    DeleteReservation(request: Requests.DeleteReservation): Promise<Responses.DeleteReservation>;
    Reservations(request: Requests.Reservations): Promise<Responses.Reservations>;
    Reserve(request: Requests.Reserve): Promise<Responses.Reserve>;
    Status(request: Requests.Status): Promise<Responses.Status>;
    UpdateReservation(request: Requests.UpdateReservation): Promise<Responses.UpdateReservation>;
}
