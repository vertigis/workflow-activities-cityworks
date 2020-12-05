import { WorkOrderEntity } from '../core/types/WorkOrderEntity';
import { GeocodeRequest } from '../core/types/GeocodeRequest';
import { ServiceTypes } from '../core/service-types';
export declare namespace AppDataServiceTypes {
    namespace Requests {
        interface CurrentLocation extends ServiceTypes.CoreRequestBase {
        }
        interface SelectedEntities extends ServiceTypes.CoreRequestBase {
        }
    }
    namespace Responses {
        interface CurrentLocation extends ServiceTypes.CoreResponseBase_obsolete_<GeocodeRequest> {
        }
        interface SelectedEntities extends ServiceTypes.CoreResponseBase_obsolete_<WorkOrderEntity[]> {
        }
    }
    interface IAppDataService {
        CurrentLocation?: (request: Requests.CurrentLocation) => Promise<Responses.CurrentLocation>;
        SelectedEntities?: (request: Requests.SelectedEntities) => Promise<Responses.SelectedEntities>;
    }
}
