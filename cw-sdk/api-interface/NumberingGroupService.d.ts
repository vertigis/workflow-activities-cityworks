import { NumberingGroupItem } from '../core/types/NumberingGroupItem';
import { ServiceTypes } from '../core/service-types';
export declare namespace NumberingGroupServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            DateExpired?: Date;
            ExpiredFlag?: string;
            IncrementBy?: number;
            LastNum?: number;
            LastNumDate?: Date;
            MaskedPaddedLength?: number;
            NumberingGroupCode?: string;
            NumberingGroupDesc?: string;
            OrgId?: number;
            PrefixYyyymmdd?: string;
            ResetYearEndFlag?: string;
            Separator?: string;
            StartWith?: number;
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            DateExpired?: Date;
            ExpiredFlag?: string;
            IncrementBy?: number;
            LastNum?: number;
            LastNumDate?: Date;
            MaskedPaddedLength?: number;
            NumberingGroupCode?: string;
            NumberingGroupDesc?: string;
            NumberingGroupId?: number;
            OrgId?: number;
            PrefixYyyymmdd?: string;
            ResetYearEndFlag?: string;
            Separator?: string;
            StartWith?: number;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<NumberingGroupItem> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<NumberingGroupItem> {
        }
    }
    interface INumberingGroupService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
    }
}
