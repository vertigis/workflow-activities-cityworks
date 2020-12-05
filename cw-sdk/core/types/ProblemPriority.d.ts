import { ProblemLeaf } from './ProblemLeaf';
import { PriorityBase } from './PriorityBase';
export interface ProblemPriority extends PriorityBase {
    ProblemLeaf?: ProblemLeaf;
    ProblemSid?: number;
}
