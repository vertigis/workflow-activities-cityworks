import { WorkOrderEntityBase } from './WorkOrderEntityBase';
export interface WorkOrderEntity extends WorkOrderEntityBase {
    AttributeOIDFieldName?: string;
    Attributes?: {
        [key: string]: Object;
    };
    AttributeUIDFieldName?: string;
    RelatedFeature?: WorkOrderEntity;
    Tag?: Object;
}
