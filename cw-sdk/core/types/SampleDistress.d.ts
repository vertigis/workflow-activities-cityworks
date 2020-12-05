import { DistressSeverity } from './DistressSeverity';
export interface SampleDistress {
    Comments?: string;
    Description?: string;
    Distress?: number;
    DistressId?: string;
    Quantity?: number;
    QuantityUnit?: string;
    SampleId?: string;
    Severity?: DistressSeverity;
}
