var TenderTypeService = /** @class */ (function () {
    function TenderTypeService(service) {
        this._service = service;
    }
    TenderTypeService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/TenderType/Add');
    };
    TenderTypeService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/TenderType/Update');
    };
    return TenderTypeService;
}());
export { TenderTypeService };
