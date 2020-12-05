import { IWidget } from './IWidget';
export interface IWidgetZone {
    Header?: string;
    Id?: number;
    Position?: number;
    WidgetContainerId?: number;
    Widgets?: IWidget[];
    Width?: string;
}
