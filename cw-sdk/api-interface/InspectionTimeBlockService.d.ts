import { InspectionTimeBlocksItem } from '../core/types/InspectionTimeBlocksItem';
import { InspTimeBlocksDetailItem } from '../core/types/InspTimeBlocksDetailItem';
import { ServiceTypes } from '../core/service-types';
export declare namespace InspectionTimeBlockServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            EndTime: string;
            InspTimeBlocksDetails?: InspTimeBlocksDetailItem[];
            LabelText: string;
            StartTime: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<InspectionTimeBlocksItem> {
        }
    }
    interface IInspectionTimeBlockService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
    }
}
