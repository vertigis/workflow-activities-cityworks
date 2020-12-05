import { ImportRecommendedWorkDataEntity } from './ImportRecommendedWorkDataEntity';
export interface ImportRecommendedWorkData {
    BranchId?: string;
    Comments?: string;
    Cost?: number;
    Description?: string;
    Entities?: ImportRecommendedWorkDataEntity[];
    GetGisData?: boolean;
    GroupEntities?: boolean;
    InitiatedByApp?: string;
    NetworkId?: string;
    ProjectedStartDate?: Date;
    ProjectName?: string;
    ProjectSid?: number;
    SectionId?: string;
    Stage?: string;
    WOTemplateId?: string;
}
