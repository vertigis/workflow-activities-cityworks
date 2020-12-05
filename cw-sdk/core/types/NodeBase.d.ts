import { TreeNodeType } from './TreeNodeType';
import { TreeNodeTextType } from './TreeNodeTextType';
export interface NodeBase {
    Description?: string;
    DomainId?: number;
    NodeName?: string;
    NodeSid?: number;
    NodeTextType?: TreeNodeTextType;
    NodeType?: TreeNodeType;
    ParentSid?: number;
    Uid?: string;
}
