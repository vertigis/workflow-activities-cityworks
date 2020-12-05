import { CommentActivityType } from './CommentActivityType';
export interface CommentRecord {
    ActivityId?: string;
    ActivitySid?: number;
    ActivityType?: CommentActivityType;
    AuthorName?: string;
    AuthorSid?: number;
    CommentId?: number;
    Comments?: string;
    DateCreated?: Date;
    LastModified?: Date;
    LastModifiedByName?: string;
    LastModifiedBySid?: number;
}
