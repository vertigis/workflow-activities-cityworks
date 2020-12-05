import { CoreDomainBase } from './CoreDomainBase';
export interface RecentActivity extends CoreDomainBase {
    ActivityId?: string;
    ActivitySid?: number;
    DateTimeStamp?: Date;
    Description?: string;
    DisplayId?: string;
    EmployeeSid?: number;
    Kind?: string;
}
