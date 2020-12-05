var EquipmentReservationService = /** @class */ (function () {
    function EquipmentReservationService(service) {
        this._service = service;
    }
    EquipmentReservationService.prototype.CheckedOut = function (request) {
        return this._service.call(request, 'Ams/EquipmentReservation/CheckedOut');
    };
    EquipmentReservationService.prototype.CheckIn = function (request) {
        return this._service.call(request, 'Ams/EquipmentReservation/CheckIn');
    };
    EquipmentReservationService.prototype.CheckOut = function (request) {
        return this._service.call(request, 'Ams/EquipmentReservation/CheckOut');
    };
    EquipmentReservationService.prototype.CheckOutHistory = function (request) {
        return this._service.call(request, 'Ams/EquipmentReservation/CheckOutHistory');
    };
    EquipmentReservationService.prototype.DeleteReservation = function (request) {
        return this._service.call(request, 'Ams/EquipmentReservation/DeleteReservation');
    };
    EquipmentReservationService.prototype.Reservations = function (request) {
        return this._service.call(request, 'Ams/EquipmentReservation/Reservations');
    };
    EquipmentReservationService.prototype.Reserve = function (request) {
        return this._service.call(request, 'Ams/EquipmentReservation/Reserve');
    };
    EquipmentReservationService.prototype.Status = function (request) {
        return this._service.call(request, 'Ams/EquipmentReservation/Status');
    };
    EquipmentReservationService.prototype.UpdateReservation = function (request) {
        return this._service.call(request, 'Ams/EquipmentReservation/UpdateReservation');
    };
    return EquipmentReservationService;
}());
export { EquipmentReservationService };
