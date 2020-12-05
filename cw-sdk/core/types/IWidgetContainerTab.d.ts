import { WidgetContainerTabType } from './WidgetContainerTabType';
import { IWidgetContainer } from './IWidgetContainer';
export interface IWidgetContainerTab {
    Containers?: IWidgetContainer[];
    DomainId?: number;
    EmployeeSid?: number;
    Header?: string;
    Id?: number;
    Position?: number;
    TabType?: WidgetContainerTabType;
}
