var InspectionTimeBlockService = /** @class */ (function () {
    function InspectionTimeBlockService(service) {
        this._service = service;
    }
    InspectionTimeBlockService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/InspectionTimeBlock/Add');
    };
    return InspectionTimeBlockService;
}());
export { InspectionTimeBlockService };
