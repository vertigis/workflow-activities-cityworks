import { GISPoint } from '../core/types/GISPoint';
import { CustCallQuestionBase } from '../core/types/CustCallQuestionBase';
import { CustomerCallBase } from '../core/types/CustomerCallBase';
import { ServiceRequestAnswer } from '../core/types/ServiceRequestAnswer';
import { ServiceTypes } from '../core/service-types';
export declare namespace CustomerCallServiceTypes {
    namespace Requests {
        interface AddToRequest extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Answers?: ServiceRequestAnswer[];
            AptNum?: string;
            CallerType?: string;
            Ccx?: number;
            Ccy?: number;
            CellPhone?: string;
            Comments?: string;
            CustAddress?: string;
            CustAddType?: string;
            CustCallback?: boolean;
            CustCity?: string;
            CustContact?: boolean;
            CustDistrict?: string;
            CustState?: string;
            CustZip?: string;
            DateTimeCall?: Date;
            DateTimeCallback?: Date;
            DateTimeContact?: Date;
            Email?: string;
            EmployeeSid?: number;
            Fax?: string;
            FirstName?: string;
            HomePhone?: string;
            IsFollowUpCall?: boolean;
            IsResident?: boolean;
            LastName?: string;
            MiddleInitial?: string;
            OtherPhone?: string;
            ProbDetails?: string;
            RequestId: number;
            Text1?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Title?: string;
            WorkPhone?: string;
        }
        interface ByIncidentNum extends ServiceTypes.CoreRequestBase {
            IncidentNum: number;
        }
        interface ByRequestId extends ServiceTypes.CoreRequestBase {
            RequestId: number;
        }
        interface ByRequestIds extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        interface CallerQuestions extends ServiceTypes.CoreRequestBase {
            IncidentNums: number[];
        }
        interface CallerQuestionsByRequestIds extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            IncidentNum: number;
        }
        interface Move extends ServiceTypes.CoreRequestBase {
            IncidentNum: number;
            WKID?: number;
            WKT?: string;
            X: number;
            Y: number;
        }
        interface MoveToRequest extends ServiceTypes.CoreRequestBase {
            FromRequestId: number;
            IncidentNums: number[];
            ToRequestId: number;
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Answers?: ServiceRequestAnswer[];
            AptNum?: string;
            CallerType?: string;
            Ccx?: number;
            Ccy?: number;
            CellPhone?: string;
            Comments?: string;
            CustAddress?: string;
            CustAddType?: string;
            CustCallback?: boolean;
            CustCity?: string;
            CustContact?: boolean;
            CustDistrict?: string;
            CustState?: string;
            CustZip?: string;
            DateTimeCall?: Date;
            DateTimeCallback?: Date;
            DateTimeContact?: Date;
            Email?: string;
            EmployeeSid?: number;
            Fax?: string;
            FirstName?: string;
            HomePhone?: string;
            IncidentNum: number;
            IsFollowUpCall?: boolean;
            IsResident?: boolean;
            LastName?: string;
            MiddleInitial?: string;
            OtherPhone?: string;
            ProbDetails?: string;
            RequestId?: number;
            Text1?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Title?: string;
            WorkPhone?: string;
        }
    }
    namespace Responses {
        interface AddToRequest extends ServiceTypes.CoreResponseBase_<CustomerCallBase> {
        }
        interface ByIncidentNum extends ServiceTypes.CoreResponseBase_<CustomerCallBase> {
        }
        interface ByRequestId extends ServiceTypes.CoreResponseBase_<CustomerCallBase[]> {
        }
        interface ByRequestIds extends ServiceTypes.CoreResponseBase_<CustomerCallBase[]> {
        }
        interface CallerQuestions extends ServiceTypes.CoreResponseBase_<CustCallQuestionBase[]> {
        }
        interface CallerQuestionsByRequestIds extends ServiceTypes.CoreResponseBase_<{
            [key: number]: CustCallQuestionBase[];
        }> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase {
        }
        interface Move extends ServiceTypes.CoreResponseBase_<GISPoint> {
        }
        interface MoveToRequest extends ServiceTypes.CoreResponseBase {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<CustomerCallBase> {
        }
    }
    interface ICustomerCallService {
        AddToRequest?: (request: Requests.AddToRequest) => Promise<Responses.AddToRequest>;
        ByIncidentNum?: (request: Requests.ByIncidentNum) => Promise<Responses.ByIncidentNum>;
        ByRequestId?: (request: Requests.ByRequestId) => Promise<Responses.ByRequestId>;
        ByRequestIds?: (request: Requests.ByRequestIds) => Promise<Responses.ByRequestIds>;
        CallerQuestions?: (request: Requests.CallerQuestions) => Promise<Responses.CallerQuestions>;
        CallerQuestionsByRequestIds?: (request: Requests.CallerQuestionsByRequestIds) => Promise<Responses.CallerQuestionsByRequestIds>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        Move?: (request: Requests.Move) => Promise<Responses.Move>;
        MoveToRequest?: (request: Requests.MoveToRequest) => Promise<Responses.MoveToRequest>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
