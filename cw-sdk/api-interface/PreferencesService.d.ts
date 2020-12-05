import { UserPreference } from '../core/types/UserPreference';
import { UserPreferences } from '../core/types/UserPreferences';
import { GlobalPreference } from '../core/types/GlobalPreference';
import { ServiceTypes } from '../core/service-types';
export declare namespace PreferencesServiceTypes {
    namespace Requests {
        interface Global extends ServiceTypes.CoreRequestBase {
            Categories?: string[];
            PreferenceNames?: string[];
        }
        interface User extends ServiceTypes.CoreRequestBase {
            Categories?: string[];
            DomainId?: number;
            EmployeeSid?: number;
            PreferenceNames?: string[];
        }
        interface UserSave extends ServiceTypes.CoreRequestBase {
            Category?: string;
            DefaultValue?: string;
            Element?: string;
            EmployeeSid?: number;
        }
    }
    namespace Responses {
        interface Global extends ServiceTypes.CoreResponseBase_<GlobalPreference[]> {
        }
        interface User extends ServiceTypes.CoreResponseBase_obsolete_<UserPreferences> {
        }
        interface UserSave extends ServiceTypes.CoreResponseBase_obsolete_<UserPreference> {
        }
    }
    interface IPreferencesService {
        Global?: (request: Requests.Global) => Promise<Responses.Global>;
        User?: (request: Requests.User) => Promise<Responses.User>;
        UserSave?: (request: Requests.UserSave) => Promise<Responses.UserSave>;
    }
}
