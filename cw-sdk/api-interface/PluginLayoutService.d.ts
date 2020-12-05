import { PluginLayoutDefinition } from '../core/types/PluginLayoutDefinition';
import { ServiceTypes } from '../core/service-types';
export declare namespace PluginLayoutServiceTypes {
    namespace Requests {
        interface Definition extends ServiceTypes.CoreRequestBase {
            Id?: string;
        }
        interface Definitions extends ServiceTypes.CoreRequestBase {
            Ids?: string[];
        }
        interface Public extends ServiceTypes.CoreRequestBase {
            Id?: string;
        }
        interface PublicDefinitions extends ServiceTypes.CoreRequestBase {
            Ids?: string[];
        }
    }
    namespace Responses {
        interface Definition extends ServiceTypes.CoreResponseBase_<PluginLayoutDefinition> {
        }
        interface Definitions extends ServiceTypes.CoreResponseBase_<PluginLayoutDefinition[]> {
        }
    }
    interface IPluginLayoutService {
        Definition?: (request: Requests.Definition) => Promise<Responses.Definition>;
        Definitions?: (request: Requests.Definitions) => Promise<Responses.Definitions>;
        Public?: (request: Requests.Public) => Promise<Responses.Definition>;
        PublicDefinitions?: (request: Requests.PublicDefinitions) => Promise<Responses.Definitions>;
    }
}
