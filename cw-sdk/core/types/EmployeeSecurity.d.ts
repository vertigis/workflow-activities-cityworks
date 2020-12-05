export interface EmployeeSecurity {
    ContractCanAccountant?: boolean;
    ContractCanAcctManager?: boolean;
    ContractCanCreate?: boolean;
    EmployeeSid?: number;
    EquipmentChangeOutCanChange?: boolean;
    InspectionCanCancel?: boolean;
    InspectionCanClose?: boolean;
    InspectionCanCreate?: boolean;
    InspectionCanEditAfterClose?: boolean;
    InspectionCanInspect?: boolean;
    InspectionCanSubmitTo?: boolean;
    ProblemLeafCanDispatchTo?: boolean;
    ProblemLeafCanSubmitTo?: boolean;
    ProjectCanApprovedBy?: boolean;
    ProjectCanAssignedTo?: boolean;
    ProjectCanInitiate?: boolean;
    RequestCanCancel?: boolean;
    RequestCanClose?: boolean;
    RequestCanCreate?: boolean;
    RequestCanDispatchTo?: boolean;
    RequestCanEditAfterClose?: boolean;
    RequestCanSubmitTo?: boolean;
    SearchCanViewContractCost?: boolean;
    SearchCanViewSrLaborCost?: boolean;
    SearchCanViewWoEquipmentCost?: boolean;
    SearchCanViewWoLaborCost?: boolean;
    SearchCanViewWoLineItemCost?: boolean;
    SearchCanViewWoMaterialCost?: boolean;
    StoreroomTransferCanRequest?: boolean;
    TaskCanAssignTo?: boolean;
    WorkOrderCanCancel?: boolean;
    WorkOrderCanClose?: boolean;
    WorkOrderCanComplete?: boolean;
    WorkOrderCanCreate?: boolean;
    WorkOrderCanEditAfterClose?: boolean;
    WorkOrderCanRequest?: boolean;
    WorkOrderCanSubmitTo?: boolean;
    WorkOrderCanSupervise?: boolean;
}
