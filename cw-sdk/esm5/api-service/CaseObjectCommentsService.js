var CaseObjectCommentsService = /** @class */ (function () {
    function CaseObjectCommentsService(service) {
        this._service = service;
    }
    CaseObjectCommentsService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseObjectComments/Add');
    };
    CaseObjectCommentsService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseObjectComments/ByCaObjectId');
    };
    CaseObjectCommentsService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseObjectComments/Delete');
    };
    CaseObjectCommentsService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/CaseObjectComments/Update');
    };
    return CaseObjectCommentsService;
}());
export { CaseObjectCommentsService };
