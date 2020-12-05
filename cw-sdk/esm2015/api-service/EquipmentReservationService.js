export class EquipmentReservationService {
    constructor(service) { this._service = service; }
    CheckedOut(request) {
        return this._service.call(request, 'Ams/EquipmentReservation/CheckedOut');
    }
    CheckIn(request) {
        return this._service.call(request, 'Ams/EquipmentReservation/CheckIn');
    }
    CheckOut(request) {
        return this._service.call(request, 'Ams/EquipmentReservation/CheckOut');
    }
    CheckOutHistory(request) {
        return this._service.call(request, 'Ams/EquipmentReservation/CheckOutHistory');
    }
    DeleteReservation(request) {
        return this._service.call(request, 'Ams/EquipmentReservation/DeleteReservation');
    }
    Reservations(request) {
        return this._service.call(request, 'Ams/EquipmentReservation/Reservations');
    }
    Reserve(request) {
        return this._service.call(request, 'Ams/EquipmentReservation/Reserve');
    }
    Status(request) {
        return this._service.call(request, 'Ams/EquipmentReservation/Status');
    }
    UpdateReservation(request) {
        return this._service.call(request, 'Ams/EquipmentReservation/UpdateReservation');
    }
}
