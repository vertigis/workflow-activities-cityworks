var ContractService = /** @class */ (function () {
    function ContractService(service) {
        this._service = service;
    }
    ContractService.prototype.AddLineItem = function (request) {
        return this._service.call(request, 'Ams/Contract/AddLineItem');
    };
    ContractService.prototype.ByIds = function (request) {
        return this._service.call(request, 'Ams/Contract/ByIds');
    };
    ContractService.prototype.Claims = function (request) {
        return this._service.call(request, 'Ams/Contract/Claims');
    };
    ContractService.prototype.Create = function (request) {
        return this._service.call(request, 'Ams/Contract/Create');
    };
    ContractService.prototype.CreateFundSource = function (request) {
        return this._service.call(request, 'Ams/Contract/CreateFundSource');
    };
    ContractService.prototype.CreateSearchDefinition = function (request) {
        return this._service.call(request, 'Ams/Contract/CreateSearchDefinition');
    };
    ContractService.prototype.CreateSubcontractor = function (request) {
        return this._service.call(request, 'Ams/Contract/CreateSubcontractor');
    };
    ContractService.prototype.CreateSubmittal = function (request) {
        return this._service.call(request, 'Ams/Contract/CreateSubmittal');
    };
    ContractService.prototype.Delete = function (request) {
        return this._service.call(request, 'Ams/Contract/Delete');
    };
    ContractService.prototype.DeleteFundSource = function (request) {
        return this._service.call(request, 'Ams/Contract/DeleteFundSource');
    };
    ContractService.prototype.DeleteLineItems = function (request) {
        return this._service.call(request, 'Ams/Contract/DeleteLineItems');
    };
    ContractService.prototype.DeleteSubcontractor = function (request) {
        return this._service.call(request, 'Ams/Contract/DeleteSubcontractor');
    };
    ContractService.prototype.DeleteSubmittal = function (request) {
        return this._service.call(request, 'Ams/Contract/DeleteSubmittal');
    };
    ContractService.prototype.FundSources = function (request) {
        return this._service.call(request, 'Ams/Contract/FundSources');
    };
    ContractService.prototype.LineItems = function (request) {
        return this._service.call(request, 'Ams/Contract/LineItems');
    };
    ContractService.prototype.LineItemSummary = function (request) {
        return this._service.call(request, 'Ams/Contract/LineItemSummary');
    };
    ContractService.prototype.Permits = function (request) {
        return this._service.call(request, 'Ams/Contract/Permits');
    };
    ContractService.prototype.Search = function (request) {
        return this._service.call(request, 'Ams/Contract/Search');
    };
    ContractService.prototype.Subcontractors = function (request) {
        return this._service.call(request, 'Ams/Contract/Subcontractors');
    };
    ContractService.prototype.Submittals = function (request) {
        return this._service.call(request, 'Ams/Contract/Submittals');
    };
    ContractService.prototype.UninvoicedLineItemCosts = function (request) {
        return this._service.call(request, 'Ams/Contract/UninvoicedLineItemCosts');
    };
    ContractService.prototype.Update = function (request) {
        return this._service.call(request, 'Ams/Contract/Update');
    };
    ContractService.prototype.UpdateLineItem = function (request) {
        return this._service.call(request, 'Ams/Contract/UpdateLineItem');
    };
    ContractService.prototype.UpdateSubcontractor = function (request) {
        return this._service.call(request, 'Ams/Contract/UpdateSubcontractor');
    };
    ContractService.prototype.UpdateSubmittal = function (request) {
        return this._service.call(request, 'Ams/Contract/UpdateSubmittal');
    };
    ContractService.prototype.User = function (request) {
        return this._service.call(request, 'Ams/Contract/User');
    };
    return ContractService;
}());
export { ContractService };
