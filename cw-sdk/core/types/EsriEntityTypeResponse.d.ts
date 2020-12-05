import { CoreResponseStatus } from './CoreResponseStatus';
import { EsriEntityType } from './EsriEntityType';
export interface EsriEntityTypeResponse {
    EntityTypes?: EsriEntityType[];
    Message?: string;
    Status?: CoreResponseStatus;
}
