var CaseTaskCommentsService = /** @class */ (function () {
    function CaseTaskCommentsService(service) {
        this._service = service;
    }
    CaseTaskCommentsService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseTaskComments/Add');
    };
    CaseTaskCommentsService.prototype.ByCaTaskId = function (request) {
        return this._service.call(request, 'PLL/CaseTaskComments/ByCaTaskId');
    };
    CaseTaskCommentsService.prototype.ByCaTaskIds = function (request) {
        return this._service.call(request, 'PLL/CaseTaskComments/ByCaTaskIds');
    };
    CaseTaskCommentsService.prototype.Delete = function (request) {
        return this._service.call(request, 'PLL/CaseTaskComments/Delete');
    };
    CaseTaskCommentsService.prototype.Update = function (request) {
        return this._service.call(request, 'PLL/CaseTaskComments/Update');
    };
    return CaseTaskCommentsService;
}());
export { CaseTaskCommentsService };
