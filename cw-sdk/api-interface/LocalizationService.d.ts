import { SystemTimeZone } from '../core/types/SystemTimeZone';
import { ServiceTypes } from '../core/service-types';
export declare namespace LocalizationServiceTypes {
    namespace Requests {
        interface LocalizationSettings extends ServiceTypes.CoreRequestBase {
        }
        interface TimeZones extends ServiceTypes.CoreRequestBase {
        }
    }
    namespace Responses {
        interface LocalizationSettings extends ServiceTypes.CoreResponseBase_<LocalizationSettings> {
        }
        interface TimeZones extends ServiceTypes.CoreResponseBase_<SystemTimeZone[]> {
        }
    }
    interface ILocalizationService {
        LocalizationSettings?: (request: Requests.LocalizationSettings) => Promise<Responses.LocalizationSettings>;
        TimeZones?: (request: Requests.TimeZones) => Promise<Responses.TimeZones>;
    }
}
