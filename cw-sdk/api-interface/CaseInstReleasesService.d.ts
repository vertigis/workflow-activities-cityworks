import { CaInstReleasesItemBase } from '../core/types/CaInstReleasesItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseInstReleasesServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            AmountReleased: number;
            CaInstrumentId: number;
            CommentText?: string;
            DateReleased: Date;
            PercentReleased: number;
            ReleasedBy: number;
        }
        interface Delete extends ServiceTypes.CoreRequestBase {
            CaInstReleasesId: number;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            AmountReleased?: number;
            CaInstReleasesId?: number;
            CaInstrumentId?: number;
            CommentText?: string;
            PercentReleased?: number;
            ReleasedBy?: number;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CaInstReleasesItemBase> {
        }
        interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CaInstReleasesItemBase> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
    }
    interface ICaseInstReleasesService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        Delete?: (request: Requests.Delete) => Promise<Responses.Delete>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
    }
}
