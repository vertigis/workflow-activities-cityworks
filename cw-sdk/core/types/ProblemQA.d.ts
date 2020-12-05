import { ProblemQuestionBase } from './ProblemQuestionBase';
import { QuestionAnswerBase } from './QuestionAnswerBase';
export interface ProblemQA {
    Answers?: QuestionAnswerBase[];
    BranchingModel?: boolean;
    ProblemSid?: number;
    Questions?: ProblemQuestionBase[];
}
