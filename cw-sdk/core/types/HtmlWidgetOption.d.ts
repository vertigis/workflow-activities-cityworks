import { HtmlWidgetFormatOptions } from './HtmlWidgetFormatOptions';
import { WidgetOptions } from './WidgetOptions';
export interface HtmlWidgetOption extends WidgetOptions {
    FormatOptions?: HtmlWidgetFormatOptions;
    Html?: string;
    Url?: string;
}
