import { QuestionAnswerBase } from './QuestionAnswerBase';
import { ProblemQuestionBase } from './ProblemQuestionBase';
export interface ProblemQuestion extends ProblemQuestionBase {
    QuestionAnswers?: QuestionAnswerBase[];
}
