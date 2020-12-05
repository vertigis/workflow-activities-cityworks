import { CaCorrStatusItemBase } from '../core/types/CaCorrStatusItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseCorrStatusServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CaCorrectionsId: number;
            CorrStatusId: number;
        }
        interface ByCaCorrectionsIds extends ServiceTypes.CoreRequestBase {
            CaCorrectionsIds?: number[];
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            CaCorrectionsId?: number;
            CaCorrStatusId?: number;
            CompletedBy?: number;
            CorrStatusCode?: string;
            CorrStatusDesc?: string;
            CorrStatusId?: number;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<CaCorrStatusItemBase> {
        }
        interface ByCaCorrectionsIds extends ServiceTypes.CoreResponseBase_obsolete_<CaCorrStatusItemBase[]> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
    }
    interface ICaseCorrStatusService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByCaCorrectionsIds?: (request: Requests.ByCaCorrectionsIds) => Promise<Responses.ByCaCorrectionsIds>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
    }
}
