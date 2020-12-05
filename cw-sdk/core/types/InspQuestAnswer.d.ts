import { QuestAnswerFormat } from './QuestAnswerFormat';
export interface InspQuestAnswer {
    Answer?: string;
    AnswerFormat?: QuestAnswerFormat;
    AnswerId?: number;
    CodeType?: string;
    Config?: string;
    Explanation?: string;
    Instruction?: string;
    MaxValue?: number;
    MinValue?: number;
    NextQuestionId?: number;
    QuestionId?: number;
    Score?: number;
    SequenceId?: number;
}
