import { QuickSearchResult } from '../core/types/QuickSearchResult';
import { ServiceTypes } from '../core/service-types';
export declare namespace QuickSearchServiceTypes {
    namespace Requests {
        interface QuickSearch extends ServiceTypes.CoreRequestBase {
            QuickSearchText?: string;
        }
    }
    namespace Responses {
        interface QuickSearch extends ServiceTypes.CoreResponseBase_<QuickSearchResult> {
        }
    }
    interface IQuickSearchService {
        QuickSearch?: (request: Requests.QuickSearch) => Promise<Responses.QuickSearch>;
    }
}
