import { CaFeesDataGroupItemBase } from '../core/types/CaFeesDataGroupItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseFeesDataGroupServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CaDataGroupId: number;
            CaFeeId: number;
            Sequence: number;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            CaFeesDataGroupId: number;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            CaDataGroupId?: number;
            CaFeeId?: number;
            CaFeesDataGroupId?: number;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CaFeesDataGroupItemBase> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CaFeesDataGroupItemBase> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
    }
    interface ICaseFeesDataGroupService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
    }
}
