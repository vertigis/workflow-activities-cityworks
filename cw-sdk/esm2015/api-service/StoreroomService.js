export class StoreroomService {
    constructor(service) { this._service = service; }
    Accounts(request) {
        return this._service.call(request, 'Ams/Storeroom/Accounts');
    }
    AddAudit(request) {
        return this._service.call(request, 'Ams/Storeroom/AddAudit');
    }
    AddIssue(request) {
        return this._service.call(request, 'Ams/Storeroom/AddIssue');
    }
    AddReceive(request) {
        return this._service.call(request, 'Ams/Storeroom/AddReceive');
    }
    AddRequisition(request) {
        return this._service.call(request, 'Ams/Storeroom/AddRequisition');
    }
    AddRequisitionItem(request) {
        return this._service.call(request, 'Ams/Storeroom/AddRequisitionItem');
    }
    AddSupplier(request) {
        return this._service.call(request, 'Ams/Storeroom/AddSupplier');
    }
    AddSupplierMaterial(request) {
        return this._service.call(request, 'Ams/Storeroom/AddSupplierMaterial');
    }
    AddTransfer(request) {
        return this._service.call(request, 'Ams/Storeroom/AddTransfer');
    }
    AssemblyMaterial(request) {
        return this._service.call(request, 'Ams/Storeroom/AssemblyMaterial');
    }
    BuildAssemblyMaterial(request) {
        return this._service.call(request, 'Ams/Storeroom/BuildAssemblyMaterial');
    }
    MaterialsByEmployeeSid(request) {
        return this._service.call(request, 'Ams/Storeroom/MaterialsByEmployeeSid');
    }
    MaterialSearch(request) {
        return this._service.call(request, 'Ams/Storeroom/MaterialSearch');
    }
    RequisitionItems(request) {
        return this._service.call(request, 'Ams/Storeroom/RequisitionItems');
    }
    Requisitions(request) {
        return this._service.call(request, 'Ams/Storeroom/Requisitions');
    }
    SearchSuppliersByUid(request) {
        return this._service.call(request, 'Ams/Storeroom/SearchSuppliersByUid');
    }
    StoreDomainsByEmployee(request) {
        return this._service.call(request, 'Ams/Storeroom/StoreDomainsByEmployee');
    }
    Storerooms(request) {
        return this._service.call(request, 'Ams/Storeroom/Storerooms');
    }
    StoreroomSecurity(request) {
        return this._service.call(request, 'Ams/Storeroom/StoreroomSecurity');
    }
    StoreroomStocks(request) {
        return this._service.call(request, 'Ams/Storeroom/StoreroomStocks');
    }
    SupplierMaterial(request) {
        return this._service.call(request, 'Ams/Storeroom/SupplierMaterial');
    }
    Suppliers(request) {
        return this._service.call(request, 'Ams/Storeroom/Suppliers');
    }
    UpdateRequisition(request) {
        return this._service.call(request, 'Ams/Storeroom/UpdateRequisition');
    }
    UpdateStoreroomStock(request) {
        return this._service.call(request, 'Ams/Storeroom/UpdateStoreroomStock');
    }
    UpdateSupplier(request) {
        return this._service.call(request, 'Ams/Storeroom/UpdateSupplier');
    }
    UpdateSupplierMaterial(request) {
        return this._service.call(request, 'Ams/Storeroom/UpdateSupplierMaterial');
    }
}
