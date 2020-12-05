var ContractorService = /** @class */ (function () {
    function ContractorService(service) {
        this._service = service;
    }
    ContractorService.prototype.Add = function (request) {
        return this._service.call(request, 'Ams/Contractor/Add');
    };
    ContractorService.prototype.AddKeywords = function (request) {
        return this._service.call(request, 'Ams/Contractor/AddKeywords');
    };
    ContractorService.prototype.All = function (request) {
        return this._service.call(request, 'Ams/Contractor/All');
    };
    ContractorService.prototype.ById = function (request) {
        return this._service.call(request, 'Ams/Contractor/ById');
    };
    ContractorService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/Contractor/Delete');
    };
    ContractorService.prototype.DeleteKeywords = function (request) {
        return this._service.call(request, 'Ams/Contractor/DeleteKeywords');
    };
    ContractorService.prototype.Keywords = function (request) {
        return this._service.call(request, 'Ams/Contractor/Keywords');
    };
    ContractorService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/Contractor/Search');
    };
    ContractorService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/Contractor/Update');
    };
    return ContractorService;
}());
export { ContractorService };
