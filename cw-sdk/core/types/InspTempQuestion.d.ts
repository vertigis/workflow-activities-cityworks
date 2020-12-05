import { InspQuestionType } from './InspQuestionType';
export interface InspTempQuestion {
    CalculateConditionScore?: boolean;
    InspTemplateId?: number;
    PanelId?: number;
    Question?: string;
    QuestionId?: number;
    QuestionSequence?: number;
    QuestionType?: InspQuestionType;
    Required?: boolean;
    Weight?: number;
}
