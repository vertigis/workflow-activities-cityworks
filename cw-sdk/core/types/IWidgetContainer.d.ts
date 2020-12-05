import { IWidgetZone } from './IWidgetZone';
import { WidgetContainerType } from './WidgetContainerType';
export interface IWidgetContainer {
    ContainerType?: WidgetContainerType;
    DomainId?: number;
    EmployeeSid?: number;
    Header?: string;
    Id?: number;
    Position?: number;
    TabId?: number;
    Zones?: IWidgetZone[];
}
