import { InspTempQuestion } from './InspTempQuestion';
import { InspQuestionPanelBase } from './InspQuestionPanelBase';
import { InspQuestAnswer } from './InspQuestAnswer';
export interface InspTemplateQA {
    Answers?: InspQuestAnswer[];
    BranchingModel?: boolean;
    InspTemplateId?: number;
    Panels?: InspQuestionPanelBase[];
    Questions?: InspTempQuestion[];
}
