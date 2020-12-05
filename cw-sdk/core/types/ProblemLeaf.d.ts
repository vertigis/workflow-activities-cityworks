import { ProblemWOTemplate } from './ProblemWOTemplate';
import { ProblemQuestion } from './ProblemQuestion';
import { ProblemPriority } from './ProblemPriority';
import { TemplateMapLayer } from './TemplateMapLayer';
import { ProblemComment } from './ProblemComment';
import { ProblemAttachment } from './ProblemAttachment';
import { ProbGroupRight } from './ProbGroupRight';
import { ProblemLeafBase } from './ProblemLeafBase';
export interface ProblemLeaf extends ProblemLeafBase {
    ProbGroupRights?: ProbGroupRight[];
    ProblemAttachments?: ProblemAttachment[];
    ProblemComments?: ProblemComment[];
    ProblemMapLayers?: TemplateMapLayer[];
    ProblemPriorities?: ProblemPriority[];
    ProblemQuestions?: ProblemQuestion[];
    ProblemWOTemplates?: ProblemWOTemplate[];
}
