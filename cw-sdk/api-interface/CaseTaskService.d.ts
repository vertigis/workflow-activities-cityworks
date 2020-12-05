import { CaTaskItemBase } from '../core/types/CaTaskItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseTaskServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            DisciplineId?: number;
            EndPoint: number;
            HearingTypeId?: number;
            InsertBeforeStartPoint?: boolean;
            LocationNotes?: string;
            ResponsibleDeptId?: number;
            ResponsibleDivId?: number;
            ResponsibleUserId?: number;
            StartPoint: number;
            TargetEndDate?: Date;
            TaskId: number;
            TaskSequence?: number;
            Unit?: string;
        }
        interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            CheckRelatedItems?: boolean;
        }
        interface ByIds extends ServiceTypes.CoreRequestBase {
            CaTaskIds?: number[];
            CheckRelatedItems?: boolean;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            CaTaskId: number;
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            ResponsibleUserId?: number;
            TaskAvailable?: boolean;
            TaskComplete?: boolean;
            TaskType?: string;
        }
        interface SetResult extends ServiceTypes.CoreRequestBase {
            CaTaskId: number;
            ResultCode: string;
            TaskCompleteDate?: Date;
            TaskCompletedBy?: number;
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            ActualEndDate?: Date;
            ActualStartDate?: Date;
            AutoSchduleInspFlg?: string;
            CalWeekDayFlag?: string;
            CaTaskId?: number;
            DateExpired?: Date;
            Db2BAdjustedFrom?: number;
            DisciplineId?: number;
            EndPoint?: number;
            ExpiredFlag?: string;
            HearingTypeId?: number;
            IsInsertBetweenLevel?: boolean;
            LocationNotes?: string;
            LoginId?: string;
            ResponsibleDeptId?: number;
            ResponsibleDivId?: number;
            ResponsibleUserId?: number;
            ResultCode?: string;
            StartPoint?: number;
            TargetEndDate?: Date;
            TargetStartDate?: Date;
            TaskAvailableDate?: Date;
            TaskAvailableFlag?: string;
            TaskCompleteDate?: Date;
            TaskCompletedBy?: number;
            TaskCompleteFlag?: string;
            TaskGeoFlag?: string;
            TaskSequence?: number;
            Unit?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<CaTaskItemBase> {
        }
        interface ByCaObjectId extends ServiceTypes.CoreResponseBase_<CaTaskItemBase[]> {
        }
        interface ByIds extends ServiceTypes.CoreResponseBase_<CaTaskItemBase[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_<CaTaskItemBase> {
        }
        interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_<number> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface SetResult extends ServiceTypes.CoreResponseBase_<CaTaskItemBase> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<CaTaskItemBase> {
        }
    }
    interface ICaseTaskService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => Promise<Responses.ByCaObjectId>;
        ByIds?: (request: Requests.ByIds) => Promise<Responses.ByIds>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => Promise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        SetResult?: (request: Requests.SetResult) => Promise<Responses.SetResult>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
