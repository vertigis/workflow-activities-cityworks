import { EntityReadingConfiguration } from '../core/types/EntityReadingConfiguration';
import { EntityReading } from '../core/types/EntityReading';
import { ServiceTypes } from '../core/service-types';
export declare namespace ReadingServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            EntityId: string;
            EntityType: string;
            Reading?: number;
            ReadingName: string;
        }
        interface ByEntity extends ServiceTypes.CoreRequestBase {
            EntityId: string;
            EntityType: string;
            ReadingName: string;
        }
        interface Configuration extends ServiceTypes.CoreRequestBase {
            EntityIds?: string[];
            EntityType?: string;
            InspectionId?: number;
            WorkOrderId?: string;
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            ReadingId: number;
            WOReading?: number;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_obsolete_<EntityReading> {
        }
        interface ByEntity extends ServiceTypes.CoreResponseBase_obsolete_<EntityReading[]> {
        }
        interface Configuration extends ServiceTypes.CoreResponseBase_obsolete_<EntityReadingConfiguration[]> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_obsolete {
        }
    }
    interface IReadingService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        ByEntity?: (request: Requests.ByEntity) => Promise<Responses.ByEntity>;
        Configuration?: (request: Requests.Configuration) => Promise<Responses.Configuration>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
