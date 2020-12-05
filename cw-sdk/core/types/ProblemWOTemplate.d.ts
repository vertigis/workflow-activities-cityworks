import { ProblemLeaf } from './ProblemLeaf';
import { ProblemWOTemplateBase } from './ProblemWOTemplateBase';
export interface ProblemWOTemplate extends ProblemWOTemplateBase {
    ProblemLeaf?: ProblemLeaf;
}
