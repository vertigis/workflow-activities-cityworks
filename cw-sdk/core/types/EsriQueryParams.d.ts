import { EsriQueryParamsBase } from './EsriQueryParamsBase';
export interface EsriQueryParams extends EsriQueryParamsBase {
    cityworksCurrentUserValue?: number;
    cityworksEntityType?: string;
    cityworksEventLayer?: boolean;
    cityworksIsCanceled?: boolean;
    cityworksIsClosed?: boolean;
    cityworksTemplateId?: number;
    cityworksType?: number;
    searchId?: number;
}
