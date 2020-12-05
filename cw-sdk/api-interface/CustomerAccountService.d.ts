import { CustomerAcct } from '../core/types/CustomerAcct';
import { ServiceTypes } from '../core/service-types';
export declare namespace CustomerAccountServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            AcctNum: string;
            AcctType: string;
            AptNum?: string;
            CellPhone?: string;
            Comments?: string;
            CustAddress?: string;
            CustCity?: string;
            CustDistrict?: string;
            CustState?: string;
            CustZip?: string;
            Email?: string;
            Fax?: string;
            FirstName?: string;
            HomePhone?: string;
            LastName?: string;
            MiddleInitial?: string;
            OtherPhone?: string;
            Title?: string;
            WorkPhone?: string;
        }
        interface ByAccountNumbers extends ServiceTypes.CoreRequestBase {
            AccountNumbers?: string[];
        }
        interface ByIds extends ServiceTypes.CoreRequestBase {
            AcctSids?: number[];
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            AcctSids?: number[];
        }
        interface Import extends ServiceTypes.CoreRequestBase {
            CustomerAccounts?: CustomerAcct[];
            DeleteExisting?: boolean;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            AcctNum?: string[];
            AcctSid?: number[];
            AcctType?: string[];
            AptNum?: string[];
            CellPhone?: string[];
            CustAddress?: string[];
            CustCity?: string[];
            CustDistrict?: string[];
            CustState?: string[];
            CustZip?: string[];
            Email?: string[];
            Fax?: string[];
            FirstName?: string[];
            HomePhone?: string[];
            LastName?: string[];
            MaxResults?: number;
            MiddleInitial?: string[];
            OtherPhone?: string[];
            Title?: string[];
            WorkPhone?: string[];
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            AcctSids: number[];
            AcctType?: string;
            AptNum?: string;
            CellPhone?: string;
            Comments?: string;
            CustAddress?: string;
            CustCity?: string;
            CustDistrict?: string;
            CustState?: string;
            CustZip?: string;
            Email?: string;
            Fax?: string;
            FirstName?: string;
            HomePhone?: string;
            LastName?: string;
            MiddleInitial?: string;
            OtherPhone?: string;
            Title?: string;
            WorkPhone?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<CustomerAcct> {
        }
        interface ByAccountNumbers extends ServiceTypes.CoreResponseBase_<CustomerAcct[]> {
        }
        interface ByIds extends ServiceTypes.CoreResponseBase_<CustomerAcct[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface Import extends ServiceTypes.CoreResponseBase_<number> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_<number[]> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<CustomerAcct[]> {
        }
    }
    interface ICustomerAccountService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByAccountNumbers?: (request: Requests.ByAccountNumbers) => Promise<Responses.ByAccountNumbers>;
        ByIds?: (request: Requests.ByIds) => Promise<Responses.ByIds>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        Import?: (request: Requests.Import) => Promise<Responses.Import>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
