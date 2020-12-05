import { CaDataDetailItem } from '../core/types/CaDataDetailItem';
import { CaDataDetailItemBase } from '../core/types/CaDataDetailItemBase';
import { ServiceTypes } from '../core/service-types';
export declare namespace CaseDataDetailServiceTypes {
    namespace Requests {
        interface Add extends ServiceTypes.CoreRequestBase {
            CaDataGroupId: number;
            CalcRateFlag?: string;
            CaObjectId?: number;
            CaseDataDetailId: number;
            ColumnSequence?: string;
            CommentFlag?: string;
            CommentValue?: string;
            CurrencyFlag?: string;
            CurrencyValue?: number;
            DateCountFlag?: string;
            DateCountValue?: string;
            DateFlag?: string;
            DateValue?: Date;
            DetailCode?: string;
            DetailDesc?: string;
            DetailSequence?: number;
            ListValue?: string;
            ListValuesFlag?: string;
            NumberFlag?: string;
            NumberValue?: number;
            Q1Q2Q3Flag?: string;
            Q2Value?: number;
            Q3Value?: number;
            Quantity?: number;
            Rate?: number;
            TextFlag?: string;
            TextValue?: string;
            Value?: number;
            ValueFlag?: string;
            YesNoFlag?: string;
            YesNoValue?: string;
        }
        interface Search extends ServiceTypes.CoreRequestBase {
            CaDataDetailId?: number;
            CaDataGroupId?: number;
            CalcRateFlag?: string;
            CaseDataDetailId?: number;
            CommentFlag?: string;
            DateFlag?: string;
            DetailCode?: string;
            DetailDesc?: string;
            ListValuesFlag?: string;
            NumberFlag?: string;
            TextFlag?: string;
            ValueFlag?: string;
            YesNoFlag?: string;
        }
        interface SearchObject extends ServiceTypes.CoreRequestBase {
            CaDataDetailId?: number;
            CaDataGroupId?: number;
            CalcRateFlag?: string;
            CaseDataDetailId?: number;
            CommentFlag?: string;
            DateFlag?: string;
            DetailCode?: string;
            DetailDesc?: string;
            ListValuesFlag?: string;
            NumberFlag?: string;
            TextFlag?: string;
            ValueFlag?: string;
            YesNoFlag?: string;
        }
        interface Update extends ServiceTypes.CoreRequestBase {
            CaDataDetailId: number;
            CaDataGroupId?: number;
            CalcRateFlag?: string;
            CaseDataDetailId?: number;
            ColumnSequence?: string;
            CommentFlag?: string;
            CommentValue?: string;
            CurrencyFlag?: string;
            CurrencyValue?: number;
            DateCountFlag?: string;
            DateCountValue?: string;
            DateFlag?: string;
            DateValue?: Date;
            DetailCode?: string;
            DetailDesc?: string;
            DetailSequence?: number;
            ListValue?: string;
            ListValuesFlag?: string;
            NumberFlag?: string;
            NumberValue?: number;
            Q1Q2Q3Flag?: string;
            Q2Value?: number;
            Q3Value?: number;
            Quantity?: number;
            Rate?: number;
            TextFlag?: string;
            TextValue?: string;
            Value?: number;
            ValueFlag?: string;
            YesNoFlag?: string;
            YesNoValue?: string;
        }
        interface UpdateLock extends ServiceTypes.CoreRequestBase {
            CaDataDetailId: number;
            Lock: boolean;
        }
        interface WIPAdd extends ServiceTypes.CoreRequestBase {
            CaDataGroupId: number;
            CalcRateFlag?: string;
            CaseDataDetailId: number;
            ColumnSequence: string;
            CommentFlag?: string;
            CommentValue?: string;
            CurrencyFlag?: string;
            CurrencyValue?: number;
            DateCountFlag?: string;
            DateCountValue?: string;
            DateFlag?: string;
            DateValue?: Date;
            DetailCode: string;
            DetailDesc?: string;
            DetailSequence: number;
            ListValue?: string;
            ListValuesFlag?: string;
            NumberFlag?: string;
            NumberValue?: number;
            Q1Q2Q3Flag?: string;
            Q2Value?: number;
            Q3Value?: number;
            Quantity?: number;
            Rate?: number;
            TextFlag?: string;
            TextValue?: string;
            Value?: number;
            ValueFlag?: string;
            YesNoFlag?: string;
            YesNoValue?: string;
        }
    }
    namespace Responses {
        interface Add extends ServiceTypes.CoreResponseBase_<CaDataDetailItemBase> {
        }
        interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {
        }
        interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CaDataDetailItemBase[]> {
        }
        interface Update extends ServiceTypes.CoreResponseBase_<CaDataDetailItem> {
        }
        interface UpdateLock extends ServiceTypes.CoreResponseBase_<CaDataDetailItem> {
        }
    }
    interface ICaseDataDetailService {
        Add?: (request: Requests.Add) => Promise<Responses.Add>;
        Search?: (request: Requests.Search) => Promise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => Promise<Responses.SearchObject>;
        Update?: (request: Requests.Update) => Promise<Responses.Update>;
        UpdateLock?: (request: Requests.UpdateLock) => Promise<Responses.UpdateLock>;
        WIPAdd?: (request: Requests.WIPAdd) => Promise<Responses.Add>;
    }
}
