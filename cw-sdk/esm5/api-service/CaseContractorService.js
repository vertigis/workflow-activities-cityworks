var CaseContractorService = /** @class */ (function () {
    function CaseContractorService(service) {
        this._service = service;
    }
    CaseContractorService.prototype.Add = function (request) {
        return this._service.call(request, 'PLL/CaseContractor/Add');
    };
    CaseContractorService.prototype.ByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseContractor/ByCaObjectId');
    };
    CaseContractorService.prototype.DeleteByCaObjectId = function (request) {
        return this._service.call(request, 'PLL/CaseContractor/DeleteByCaObjectId');
    };
    CaseContractorService.prototype.Search = function (request) {
        return this._service.call(request, 'PLL/CaseContractor/Search');
    };
    CaseContractorService.prototype.SearchObject = function (request) {
        return this._service.call(request, 'PLL/CaseContractor/SearchObject');
    };
    return CaseContractorService;
}());
export { CaseContractorService };
