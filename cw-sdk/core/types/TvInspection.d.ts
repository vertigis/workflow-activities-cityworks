import { TvObservation } from './TvObservation';
import { InspCustField } from './InspCustField';
import { TvInspectionBase } from './TvInspectionBase';
export interface TvInspection extends TvInspectionBase {
    InspCustFields?: InspCustField[];
    TvObservations?: TvObservation[];
}
