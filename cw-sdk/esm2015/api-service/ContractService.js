export class ContractService {
    constructor(service) { this._service = service; }
    AddLineItem(request) {
        return this._service.call(request, 'Ams/Contract/AddLineItem');
    }
    ByIds(request) {
        return this._service.call(request, 'Ams/Contract/ByIds');
    }
    Claims(request) {
        return this._service.call(request, 'Ams/Contract/Claims');
    }
    Create(request) {
        return this._service.call(request, 'Ams/Contract/Create');
    }
    CreateFundSource(request) {
        return this._service.call(request, 'Ams/Contract/CreateFundSource');
    }
    CreateSearchDefinition(request) {
        return this._service.call(request, 'Ams/Contract/CreateSearchDefinition');
    }
    CreateSubcontractor(request) {
        return this._service.call(request, 'Ams/Contract/CreateSubcontractor');
    }
    CreateSubmittal(request) {
        return this._service.call(request, 'Ams/Contract/CreateSubmittal');
    }
    Delete(request) {
        return this._service.call(request, 'Ams/Contract/Delete');
    }
    DeleteFundSource(request) {
        return this._service.call(request, 'Ams/Contract/DeleteFundSource');
    }
    DeleteLineItems(request) {
        return this._service.call(request, 'Ams/Contract/DeleteLineItems');
    }
    DeleteSubcontractor(request) {
        return this._service.call(request, 'Ams/Contract/DeleteSubcontractor');
    }
    DeleteSubmittal(request) {
        return this._service.call(request, 'Ams/Contract/DeleteSubmittal');
    }
    FundSources(request) {
        return this._service.call(request, 'Ams/Contract/FundSources');
    }
    LineItems(request) {
        return this._service.call(request, 'Ams/Contract/LineItems');
    }
    LineItemSummary(request) {
        return this._service.call(request, 'Ams/Contract/LineItemSummary');
    }
    Permits(request) {
        return this._service.call(request, 'Ams/Contract/Permits');
    }
    Search(request) {
        return this._service.call(request, 'Ams/Contract/Search');
    }
    Subcontractors(request) {
        return this._service.call(request, 'Ams/Contract/Subcontractors');
    }
    Submittals(request) {
        return this._service.call(request, 'Ams/Contract/Submittals');
    }
    UninvoicedLineItemCosts(request) {
        return this._service.call(request, 'Ams/Contract/UninvoicedLineItemCosts');
    }
    Update(request) {
        return this._service.call(request, 'Ams/Contract/Update');
    }
    UpdateLineItem(request) {
        return this._service.call(request, 'Ams/Contract/UpdateLineItem');
    }
    UpdateSubcontractor(request) {
        return this._service.call(request, 'Ams/Contract/UpdateSubcontractor');
    }
    UpdateSubmittal(request) {
        return this._service.call(request, 'Ams/Contract/UpdateSubmittal');
    }
    User(request) {
        return this._service.call(request, 'Ams/Contract/User');
    }
}
