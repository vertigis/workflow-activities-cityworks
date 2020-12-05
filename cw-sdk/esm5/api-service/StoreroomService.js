var StoreroomService = /** @class */ (function () {
    function StoreroomService(service) {
        this._service = service;
    }
    StoreroomService.prototype.Accounts = function (request) {
        return this._service.call(request, 'Ams/Storeroom/Accounts');
    };
    StoreroomService.prototype.AddAudit = function (request) {
        return this._service.call(request, 'Ams/Storeroom/AddAudit');
    };
    StoreroomService.prototype.AddIssue = function (request) {
        return this._service.call(request, 'Ams/Storeroom/AddIssue');
    };
    StoreroomService.prototype.AddReceive = function (request) {
        return this._service.call(request, 'Ams/Storeroom/AddReceive');
    };
    StoreroomService.prototype.AddRequisition = function (request) {
        return this._service.call(request, 'Ams/Storeroom/AddRequisition');
    };
    StoreroomService.prototype.AddRequisitionItem = function (request) {
        return this._service.call(request, 'Ams/Storeroom/AddRequisitionItem');
    };
    StoreroomService.prototype.AddSupplier = function (request) {
        return this._service.call(request, 'Ams/Storeroom/AddSupplier');
    };
    StoreroomService.prototype.AddSupplierMaterial = function (request) {
        return this._service.call(request, 'Ams/Storeroom/AddSupplierMaterial');
    };
    StoreroomService.prototype.AddTransfer = function (request) {
        return this._service.call(request, 'Ams/Storeroom/AddTransfer');
    };
    StoreroomService.prototype.AssemblyMaterial = function (request) {
        return this._service.call(request, 'Ams/Storeroom/AssemblyMaterial');
    };
    StoreroomService.prototype.BuildAssemblyMaterial = function (request) {
        return this._service.call(request, 'Ams/Storeroom/BuildAssemblyMaterial');
    };
    StoreroomService.prototype.MaterialsByEmployeeSid = function (request) {
        return this._service.call(request, 'Ams/Storeroom/MaterialsByEmployeeSid');
    };
    StoreroomService.prototype.MaterialSearch = function (request) {
        return this._service.call(request, 'Ams/Storeroom/MaterialSearch');
    };
    StoreroomService.prototype.RequisitionItems = function (request) {
        return this._service.call(request, 'Ams/Storeroom/RequisitionItems');
    };
    StoreroomService.prototype.Requisitions = function (request) {
        return this._service.call(request, 'Ams/Storeroom/Requisitions');
    };
    StoreroomService.prototype.SearchSuppliersByUid = function (request) {
        return this._service.call(request, 'Ams/Storeroom/SearchSuppliersByUid');
    };
    StoreroomService.prototype.StoreDomainsByEmployee = function (request) {
        return this._service.call(request, 'Ams/Storeroom/StoreDomainsByEmployee');
    };
    StoreroomService.prototype.Storerooms = function (request) {
        return this._service.call(request, 'Ams/Storeroom/Storerooms');
    };
    StoreroomService.prototype.StoreroomSecurity = function (request) {
        return this._service.call(request, 'Ams/Storeroom/StoreroomSecurity');
    };
    StoreroomService.prototype.StoreroomStocks = function (request) {
        return this._service.call(request, 'Ams/Storeroom/StoreroomStocks');
    };
    StoreroomService.prototype.SupplierMaterial = function (request) {
        return this._service.call(request, 'Ams/Storeroom/SupplierMaterial');
    };
    StoreroomService.prototype.Suppliers = function (request) {
        return this._service.call(request, 'Ams/Storeroom/Suppliers');
    };
    StoreroomService.prototype.UpdateRequisition = function (request) {
        return this._service.call(request, 'Ams/Storeroom/UpdateRequisition');
    };
    StoreroomService.prototype.UpdateStoreroomStock = function (request) {
        return this._service.call(request, 'Ams/Storeroom/UpdateStoreroomStock');
    };
    StoreroomService.prototype.UpdateSupplier = function (request) {
        return this._service.call(request, 'Ams/Storeroom/UpdateSupplier');
    };
    StoreroomService.prototype.UpdateSupplierMaterial = function (request) {
        return this._service.call(request, 'Ams/Storeroom/UpdateSupplierMaterial');
    };
    return StoreroomService;
}());
export { StoreroomService };
