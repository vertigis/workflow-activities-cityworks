import { CaFeesDataDetailItemBase } from '../core/types/CaFeesDataDetailItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseFeesDataDetailServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CaDataDetailId: number;
            CaFeeId: number;
            Sequence: number;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            CaFeesDataDetailId: number;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            CaDataDetailId?: number;
            CaFeeId?: number;
            CaFeesDataDetailId?: number;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CaFeesDataDetailItemBase> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CaFeesDataDetailItemBase> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
    }
    interface ICaseFeesDataDetailService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
    }
}
