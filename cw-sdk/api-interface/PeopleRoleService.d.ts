import { PeopleRoleItem } from '../core/types/PeopleRoleItem';
import { ServiceTypes } from '../core/service-types';
export declare namespace PeopleRoleServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            ExpiredFlag?: string;
            RoleCode: string;
            RoleDesc?: string;
            TableName?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<PeopleRoleItem> {
        }
    }
    interface IPeopleRoleService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
    }
}
