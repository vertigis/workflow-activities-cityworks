import { ProblemLeaf } from './ProblemLeaf';
import { GroupRightBase } from './GroupRightBase';
export interface ProbGroupRight extends GroupRightBase {
    CanViewCost?: boolean;
    ProblemLeaf?: ProblemLeaf;
    ProblemSid?: number;
}
