import { RelativeDate } from './RelativeDate';
import { RelativeDateUnit } from './RelativeDateUnit';
import { DateSelection } from './DateSelection';
export interface DateFieldValue {
    DateEnd?: Date;
    DateIncrement?: number;
    DateSelectMode?: DateSelection;
    DateStart?: Date;
    DateUnit?: RelativeDateUnit;
    IncludeCurrent?: boolean;
    LastNext?: RelativeDate;
    NextDateIncrement?: number;
    NotInDateRange?: boolean;
}
