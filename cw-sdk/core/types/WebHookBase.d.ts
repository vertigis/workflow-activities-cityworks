import { EventSourceType } from './EventSourceType';
import { PacketConfiguration } from './PacketConfiguration';
import { WebHookOutputType } from './WebHookOutputType';
export interface WebHookBase {
    Description?: string;
    DomainId?: number;
    Fields?: string[];
    Id?: number;
    Method?: string;
    OutputType?: WebHookOutputType;
    PacketConfig?: PacketConfiguration;
    ParameterName?: string;
    SourceType?: EventSourceType;
    Url?: string;
}
