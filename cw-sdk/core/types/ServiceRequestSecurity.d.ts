export interface ServiceRequestSecurity {
    CanAddCaller?: boolean;
    CanAddLabor?: boolean;
    CanCancel?: boolean;
    CanClose?: boolean;
    CanDelete?: boolean;
    CanDeleteCaller?: boolean;
    CanDeleteComment?: boolean;
    CanDeleteLabor?: boolean;
    CanUpdate?: boolean;
    CanUpdateCaller?: boolean;
    CanUpdateComment?: boolean;
    CanUpdateLabor?: boolean;
    CanView?: boolean;
    CanViewCaller?: boolean;
    CanViewLabor?: boolean;
    CanViewLaborCost?: boolean;
    RequestId?: number;
}
