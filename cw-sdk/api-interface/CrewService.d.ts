import { CrewBase } from '../core/types/CrewBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CrewServiceTypes {
    namespace Requests {
        interface ByEmployee extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
        }
        interface ByIds extends ServiceTypes.CoreRequestBase {
            CrewIds?: number[];
        }
        interface Employees extends ServiceTypes.CoreRequestBase {
            CrewIds: number[];
            IncludeInactive?: boolean;
        }
        interface Equipment extends ServiceTypes.CoreRequestBase {
            CrewIds: number[];
            IncludeInactive?: boolean;
        }
        interface Material extends ServiceTypes.CoreRequestBase {
            CrewIds: number[];
            IncludeInactive?: boolean;
        }
    }
    namespace Responses {
        interface ByEmployee extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
        interface ByIds extends ServiceTypes.CoreResponseBase_obsolete_<CrewBase[]> {
        }
        interface Employees extends ServiceTypes.CoreResponseBase_obsolete_<{
            [key: number]: number[];
        }> {
        }
        interface Equipment extends ServiceTypes.CoreResponseBase_obsolete_<{
            [key: number]: number[];
        }> {
        }
        interface Material extends ServiceTypes.CoreResponseBase_obsolete_<{
            [key: number]: number[];
        }> {
        }
    }
    interface ICrewService {
        ByEmployee?: (request: Requests.ByEmployee) => Promise<Responses.ByEmployee>;
        ByIds?: (request: Requests.ByIds) => Promise<Responses.ByIds>;
        Employees?: (request: Requests.Employees) => Promise<Responses.Employees>;
        Equipment?: (request: Requests.Equipment) => Promise<Responses.Equipment>;
        Material?: (request: Requests.Material) => Promise<Responses.Material>;
    }
}
