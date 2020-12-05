import { GISExtent } from './GISExtent';
export interface GeocodeRequest {
    Address?: string;
    City?: string;
    Country?: string;
    DispatchTo?: string;
    DispatchToField?: string;
    District?: string;
    DomainId?: number;
    ListWOSR?: boolean;
    MapPage?: string;
    MaxResults?: number;
    SearchExtent?: GISExtent;
    Shop?: string;
    State?: string;
    StreetName?: string;
    SubmitTo?: string;
    SubmitToField?: string;
    SubmitToLayer?: string;
    TileNo?: string;
    WithinDistance?: number;
    X?: number;
    Y?: number;
    Zip?: string;
}
