import { ServiceTypes } from '../core/service-types';
export declare namespace TokenServiceTypes {
    namespace Requests {
        interface RevokeUser extends ServiceTypes.CoreRequestBase {
            RevokeDate?: number;
        }
    }
    namespace Responses {
        interface RevokeUser extends ServiceTypes.CoreResponseBase_<boolean> {
        }
    }
    interface ITokenService {
        RevokeUser?: (request: Requests.RevokeUser) => Promise<Responses.RevokeUser>;
    }
}
