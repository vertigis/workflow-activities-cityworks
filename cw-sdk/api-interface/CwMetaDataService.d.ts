import { CWMetaData } from '../core/types/CWMetaData';
import { ServiceTypes } from '../core/service-types';
export declare namespace CwMetaDataServiceTypes {
    namespace Requests {
        interface ByTableNameSids extends ServiceTypes.CoreRequestBase {
            Ids: number[];
            TableName: string;
        }
    }
    namespace Responses {
        interface ByTableNameSids extends ServiceTypes.CoreResponseBase_<CWMetaData[]> {
        }
    }
    interface ICwMetaDataService {
        ByTableNameSids?: (request: Requests.ByTableNameSids) => Promise<Responses.ByTableNameSids>;
    }
}
