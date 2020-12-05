var HolidayService = /** @class */ (function () {
    function HolidayService(service) {
        this._service = service;
    }
    HolidayService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/Holiday/Add');
    };
    HolidayService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/Holiday/Delete');
    };
    return HolidayService;
}());
export { HolidayService };
