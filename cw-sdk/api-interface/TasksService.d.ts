import { TaskLeafBase } from '../core/types/TaskLeafBase';
import { TaskNode } from '../core/types/TaskNode';
import { TaskCode } from '../core/types/TaskCode';
import { CodeDesc } from '../core/types/CodeDesc';
import { TaskKeyword } from '../core/types/TaskKeyword';
import { WOTempTask } from '../core/types/WOTempTask';
import { WOTask } from '../core/types/WOTask';
import { WorkOrderEntity } from '../core/types/WorkOrderEntity';
import { ServiceTypes } from '../core/service-types';
export declare namespace TasksServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            ActualFinishDate?: Date;
            ActualStartDate?: Date;
            AssignedTo?: number;
            Comments?: string;
            Entities?: WorkOrderEntity[];
            PermitSid?: number;
            ProceedOk?: boolean;
            ProjectedFinishDate?: Date;
            ProjectedStartDate?: Date;
            Resequence?: boolean;
            Rework?: boolean;
            SequenceId?: number;
            Shop?: string;
            Status?: string;
            TaskCode?: string;
            TaskSids?: number[];
            WorkOrderId: string;
            WorkOrderSid: number;
            WOTempTaskIds?: number[];
        }
        interface ById extends ServiceTypes.CoreRequestBase {
            WOTaskId: number;
        }
        interface ByWorkOrder extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
            WorkOrderSids: number[];
        }
        interface ByWorkOrderTemplate extends ServiceTypes.CoreRequestBase {
            WOTemplateId: string;
            WOTemplateIds?: string[];
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            WOTaskIds: number[];
        }
        interface Keywords extends ServiceTypes.CoreRequestBase {
            TaskSids: number[];
        }
        interface Statuses extends ServiceTypes.CoreRequestBase {
        }
        interface TaskCodes extends ServiceTypes.CoreRequestBase {
            TaskSid: number;
        }
        interface TaskNodes extends ServiceTypes.CoreRequestBase {
            DisplayTextDelimeter?: string;
            DisplayTextMode?: string;
            DomainId: number;
            IncludeCancelled?: boolean;
        }
        interface Template extends ServiceTypes.CoreRequestBase {
            TaskSid: number;
        }
        interface Templates extends ServiceTypes.CoreRequestBase {
            Keyword?: string;
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            ActualFinishDate?: Date;
            ActualStartDate?: Date;
            AssignedTo?: number;
            Comments?: string;
            Effort?: number;
            EntityType?: string;
            EntityUid?: string;
            PermitSid?: number;
            ProceedOk?: boolean;
            ProjectedFinishDate?: Date;
            ProjectedStartDate?: Date;
            Resequence?: boolean;
            Rework?: boolean;
            SequenceId?: number;
            Shop?: string;
            Status?: string;
            TaskCode?: string;
            WOTaskId: number;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_obsolete_<WOTask[]> {
        }
        interface ById extends ServiceTypes.CoreResponseBase_obsolete_<WOTask> {
        }
        interface ByWorkOrder extends ServiceTypes.CoreResponseBase_obsolete_<WOTask[]> {
        }
        interface ByWorkOrderTemplate extends ServiceTypes.CoreResponseBase_obsolete_<WOTempTask[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_obsolete {
        }
        interface Keywords extends ServiceTypes.CoreResponseBase_<TaskKeyword[]> {
        }
        interface Statuses extends ServiceTypes.CoreResponseBase_obsolete_<CodeDesc[]> {
        }
        interface TaskCodes extends ServiceTypes.CoreResponseBase_obsolete_<TaskCode[]> {
        }
        interface TaskNodes extends ServiceTypes.CoreResponseBase_obsolete_<TaskNode[]> {
        }
        interface Template extends ServiceTypes.CoreResponseBase_obsolete_<TaskLeafBase> {
        }
        interface Templates extends ServiceTypes.CoreResponseBase_obsolete_<TaskLeafBase[]> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_obsolete_<WOTask> {
        }
    }
    interface ITasksService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ById?: (request: Requests.ById) => Promise<Responses.ById>;
        ByWorkOrder?: (request: Requests.ByWorkOrder) => Promise<Responses.ByWorkOrder>;
        ByWorkOrderTemplate?: (request: Requests.ByWorkOrderTemplate) => Promise<Responses.ByWorkOrderTemplate>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        Keywords?: (request: Requests.Keywords) => Promise<Responses.Keywords>;
        Statuses?: (request: Requests.Statuses) => Promise<Responses.Statuses>;
        TaskCodes?: (request: Requests.TaskCodes) => Promise<Responses.TaskCodes>;
        TaskNodes?: (request: Requests.TaskNodes) => Promise<Responses.TaskNodes>;
        Template?: (request: Requests.Template) => Promise<Responses.Template>;
        Templates?: (request: Requests.Templates) => Promise<Responses.Templates>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
