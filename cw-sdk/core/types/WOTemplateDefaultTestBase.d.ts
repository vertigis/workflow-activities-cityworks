import { RepeatIntervalUnit } from './RepeatIntervalUnit';
import { WOEvent } from './WOEvent';
export interface WOTemplateDefaultTestBase {
    AutoCreate?: boolean;
    CreateOnEvent?: WOEvent;
    InspTemplateDesc?: string;
    InspTemplateId?: number;
    InspTemplateName?: string;
    IntervalNum?: number;
    IntervalUnit?: RepeatIntervalUnit;
    TestCode?: string;
    TestDesc?: string;
    WOTemplateId?: string;
    WOTempTestId?: number;
}
