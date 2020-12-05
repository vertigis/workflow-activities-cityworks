export interface WOTask {
    ActFinishDate?: Date;
    ActStartDate?: Date;
    AssignedTo?: number;
    AssignedToName?: string;
    Comments?: string;
    Description?: string;
    DomainId?: number;
    Duration?: number;
    Effort?: number;
    EntityType?: string;
    EntityUid?: string;
    IsRework?: boolean;
    PermitNum?: string;
    PermitSid?: number;
    ProceedOk?: boolean;
    ProjFinishDate?: Date;
    ProjStartDate?: Date;
    Shop?: string;
    Status?: string;
    TaskCode?: string;
    TaskName?: string;
    TaskSeqId?: number;
    TaskSid?: number;
    WorkOrderId?: string;
    WorkOrderSid?: number;
    WOTaskId?: number;
}
