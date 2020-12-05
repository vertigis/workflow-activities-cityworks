export declare namespace ServiceTypes {
    enum CoreResponseMessageType {
        Success = 0,
        Warning = 1,
        Error = 2,
    }
    enum CoreResponseStatus {
        Ok = 0,
        Error = 1,
        Unauthorized = 2,
        InvalidCredentials = 3,
        ConnectionError = -1,
    }
    interface CoreRequestBase {
    }
    interface CoreRequestPaged extends ServiceTypes.CoreRequestBase {
        Limit?: number;
        Offset?: number;
        SortDir?: number;
        SortField?: string;
        WhereClause?: ServiceTypes.FilterCondition[];
    }
    interface CoreRequestVerified extends ServiceTypes.CoreRequestBase {
        WebServiceRequestId?: string;
    }
    interface CoreResponseBase {
        ErrorMessages?: ServiceTypes.CoreResponseErrorMessage[];
        Message?: string;
        Status?: ServiceTypes.CoreResponseStatus;
        SuccessMessages?: ServiceTypes.CoreResponseSuccessMessage[];
        WarningMessages?: ServiceTypes.CoreResponseWarningMessage[];
    }
    interface CoreResponseBase_<T> extends ServiceTypes.CoreResponseBase {
        Value?: T;
    }
    interface CoreResponseBase_obsolete {
        Message?: string;
        Status?: ServiceTypes.CoreResponseStatus;
    }
    interface CoreResponseBase_obsolete_<T> extends ServiceTypes.CoreResponseBase_obsolete {
        Value?: T;
    }
    interface CoreResponseErrorMessage extends ServiceTypes.CoreResponseMessage {
    }
    interface CoreResponseMessage {
        Code?: number;
        DebugDetails?: string;
        DisplayText?: string;
        InnerMessage?: ServiceTypes.CoreResponseMessage;
        MessageType?: ServiceTypes.CoreResponseMessageType;
        Name?: string;
        Service?: string;
    }
    interface CoreResponsePaged_<T> extends ServiceTypes.CoreResponseBase_<T> {
        Limit?: number;
        Offset?: number;
        Total?: number;
    }
    interface CoreResponseSuccessMessage extends ServiceTypes.CoreResponseMessage {
    }
    interface CoreResponseVerified_<T> extends ServiceTypes.CoreResponseBase_<T> {
        WebServiceRequestId?: string;
    }
    interface CoreResponseVerified extends ServiceTypes.CoreResponseBase {
        WebServiceRequestId?: string;
    }
    interface CoreResponseVerified_obsolete extends ServiceTypes.CoreResponseBase_obsolete {
        WebServiceRequestId?: string;
    }
    interface CoreResponseVerified_obsolete_<T> extends ServiceTypes.CoreResponseBase_obsolete_<T> {
        WebServiceRequestId?: string;
    }
    interface CoreResponseWarningMessage extends ServiceTypes.CoreResponseMessage {
    }
    interface FilterCondition {
        FilterColumn?: string;
        FilterOperator?: string;
        FilterValue?: string;
    }
}
