import { ChangeOutOp } from './ChangeOutOp';
import { ChangeOutRead } from './ChangeOutRead';
export interface ChangeOutOperation {
    AssetType?: string;
    ChangeOutId?: number;
    Comments?: string;
    DirectParentType?: string;
    DirectParentUid?: string;
    NewRead?: ChangeOutRead;
    NewReadId?: number;
    NewUid?: string;
    OldRead?: ChangeOutRead;
    OldReadId?: number;
    OldUid?: string;
    Operation?: ChangeOutOp;
    OperationId?: number;
    RecordDate?: Date;
}
