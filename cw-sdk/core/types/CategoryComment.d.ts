import { WorkType } from './WorkType';
export interface CategoryComment {
    ApplyTo?: WorkType;
    Category?: string;
    Comments?: string;
    ObjectId?: number;
}
