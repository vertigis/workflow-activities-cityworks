import { LayoutMessage } from './LayoutMessage';
export interface PluginLayoutDefinition {
    Id?: string;
    Messages?: {
        [key: string]: LayoutMessage;
    };
}
