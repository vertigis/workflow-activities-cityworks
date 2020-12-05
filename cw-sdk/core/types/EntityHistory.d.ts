import { WOExpenseType } from './WOExpenseType';
export interface EntityHistory {
    ActualFinish?: Date;
    ActualStart?: Date;
    Closed?: Date;
    Created?: Date;
    Description?: string;
    EntityType?: string;
    EntityUid?: string;
    ExpenseType?: WOExpenseType;
    Id?: string;
    Inspected?: Date;
    Kind?: string;
    Sid?: number;
    Status?: string;
}
