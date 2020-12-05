import { QuickSearchItem } from './QuickSearchItem';
export interface QuickSearchResult {
    Inspections?: QuickSearchItem[];
    Permits?: QuickSearchItem[];
    ServiceRequests?: QuickSearchItem[];
    WorkOrders?: QuickSearchItem[];
}
