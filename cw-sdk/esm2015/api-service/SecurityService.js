export class SecurityService {
    constructor(service) { this._service = service; }
    Contract(request) {
        return this._service.call(request, 'Ams/Security/Contract');
    }
    Contracts(request) {
        return this._service.call(request, 'Ams/Security/Contracts');
    }
    Employee(request) {
        return this._service.call(request, 'Ams/Security/Employee');
    }
    Inspection(request) {
        return this._service.call(request, 'Ams/Security/Inspection');
    }
    Inspections(request) {
        return this._service.call(request, 'Ams/Security/Inspections');
    }
    InspectionTemplate(request) {
        return this._service.call(request, 'Ams/Security/InspectionTemplate');
    }
    InspectionTemplates(request) {
        return this._service.call(request, 'Ams/Security/InspectionTemplates');
    }
    Problem(request) {
        return this._service.call(request, 'Ams/Security/Problem');
    }
    Problems(request) {
        return this._service.call(request, 'Ams/Security/Problems');
    }
    Projects(request) {
        return this._service.call(request, 'Ams/Security/Projects');
    }
    Search(request) {
        return this._service.call(request, 'Ams/Security/Search');
    }
    ServiceRequest(request) {
        return this._service.call(request, 'Ams/Security/ServiceRequest');
    }
    ServiceRequests(request) {
        return this._service.call(request, 'Ams/Security/ServiceRequests');
    }
    WorkOrder(request) {
        return this._service.call(request, 'Ams/Security/WorkOrder');
    }
    WorkOrderBySid(request) {
        return this._service.call(request, 'Ams/Security/WorkOrderBySid');
    }
    WorkOrders(request) {
        return this._service.call(request, 'Ams/Security/WorkOrders');
    }
    WorkOrderTemplate(request) {
        return this._service.call(request, 'Ams/Security/WorkOrderTemplate');
    }
}
