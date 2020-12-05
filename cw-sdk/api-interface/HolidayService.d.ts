import { HolidaysItem } from '../core/types/HolidaysItem';
import { ServiceTypes } from '../core/service-types';
export declare namespace HolidayServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            HalfDayFlag?: string;
            HolidayDate?: Date;
            HolidayDesc?: string;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            HolidayId: number;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<HolidaysItem> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_<HolidaysItem> {
        }
    }
    interface IHolidayService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
    }
}
