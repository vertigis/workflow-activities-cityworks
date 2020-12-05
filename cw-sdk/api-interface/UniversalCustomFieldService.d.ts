import { CWField } from '../core/types/CWField';
import { ServiceTypes } from '../core/service-types';
export declare namespace UniversalCustomFieldServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CodeType?: string;
            DefaultValue?: string;
            DomainId?: number;
            FieldAlias?: string;
            FieldName: string;
            SequenceId?: number;
            TableType: number;
            UseCodeDesc?: number;
        }
        interface ById extends ServiceTypes.CoreRequestBase {
            FieldIds: number[];
        }
        interface ByType extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
            TableTypes: number[];
        }
        interface Contract extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
        interface CustomerCall extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            FieldIds: number[];
        }
        interface Inspection extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
        interface MoveField extends ServiceTypes.CoreRequestBase {
            Count?: number;
            Direction: number;
            FieldId: number;
        }
        interface ServiceRequest extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            CodeType?: string;
            DefaultValue?: string;
            FieldAlias?: string;
            FieldId: number;
            SequenceId?: number;
            UseCodeDesc?: number;
        }
        interface WorkOrder extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<CWField> {
        }
        interface ById extends ServiceTypes.CoreResponseBase_<CWField[]> {
        }
        interface ByType extends ServiceTypes.CoreResponseBase_<CWField[]> {
        }
        interface Contract extends ServiceTypes.CoreResponseBase_<CWField[]> {
        }
        interface CustomerCall extends ServiceTypes.CoreResponseBase_<CWField[]> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_<{
            [key: number]: boolean;
        }> {
        }
        interface Inspection extends ServiceTypes.CoreResponseBase_<CWField[]> {
        }
        interface MoveField extends ServiceTypes.CoreResponseBase_<CWField> {
        }
        interface ServiceRequest extends ServiceTypes.CoreResponseBase_<CWField[]> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<CWField> {
        }
        interface WorkOrder extends ServiceTypes.CoreResponseBase_<CWField[]> {
        }
    }
    interface IUniversalCustomFieldService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ById?: (request: Requests.ById) => Promise<Responses.ById>;
        ByType?: (request: Requests.ByType) => Promise<Responses.ByType>;
        Contract?: (request: Requests.Contract) => Promise<Responses.Contract>;
        CustomerCall?: (request: Requests.CustomerCall) => Promise<Responses.CustomerCall>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        Inspection?: (request: Requests.Inspection) => Promise<Responses.Inspection>;
        MoveField?: (request: Requests.MoveField) => Promise<Responses.MoveField>;
        ServiceRequest?: (request: Requests.ServiceRequest) => Promise<Responses.ServiceRequest>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
        WorkOrder?: (request: Requests.WorkOrder) => Promise<Responses.WorkOrder>;
    }
}
