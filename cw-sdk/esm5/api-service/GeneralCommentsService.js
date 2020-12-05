var GeneralCommentsService = /** @class */ (function () {
    function GeneralCommentsService(service) {
        this._service = service;
    }
    GeneralCommentsService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/GeneralComments/Add');
    };
    GeneralCommentsService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/GeneralComments/Delete');
    };
    return GeneralCommentsService;
}());
export { GeneralCommentsService };
