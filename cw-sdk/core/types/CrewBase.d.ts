import { ApplyLevel } from './ApplyLevel';
export interface CrewBase {
    Category?: string;
    CrewId?: number;
    CrewName?: string;
    DefaultStoreroom?: string;
    Description?: string;
    DomainId?: number;
    SharedWithin?: ApplyLevel;
}
