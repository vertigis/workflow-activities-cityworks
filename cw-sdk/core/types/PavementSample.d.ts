import { SampleDistress } from './SampleDistress';
import { PavementSampleBase } from './PavementSampleBase';
export interface PavementSample extends PavementSampleBase {
    SampleDistresses?: SampleDistress[];
}
