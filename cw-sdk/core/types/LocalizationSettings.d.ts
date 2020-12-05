import { DayOfWeek } from './DayOfWeek';
export interface LocalizationSettings {
    CurrencySymbol?: string;
    DateSeparator?: string;
    DecimalSymbol?: string;
    FirstDayOfWeek?: DayOfWeek;
    LanguageCode?: string;
    LongDateFormat?: string;
    LongDateTimeFormat?: string;
    LongTimeFormat?: string;
    PhoneNumberFormat?: string;
    ShortDateFormat?: string;
    ShortDateTimeFormat?: string;
    ShortTimeFormat?: string;
    StartOfYear?: number;
    ThousandsSeparator?: string;
    TimeSeparator?: string;
    Use12HourTime?: boolean;
    XYPrecision?: number;
}
