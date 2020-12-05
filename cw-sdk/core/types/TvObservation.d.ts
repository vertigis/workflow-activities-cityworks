import { TvObservationCause } from './TvObservationCause';
export interface TvObservation {
    Cause?: TvObservationCause;
    CctvCode?: string;
    ClockTo?: number;
    Continuous?: string;
    DistFromDown?: number;
    DistFromUp?: number;
    Grade?: number;
    Joint?: string;
    ObservationId?: number;
    ObservDesc?: string;
    ObservDescScore?: number;
    ObservPos?: string;
    ObservRemarks?: string;
    ObservType?: string;
    TapeRead?: string;
    TvId?: number;
    TvImage?: string;
    TvTape?: string;
    ValueDimension1?: number;
    ValueDimension2?: number;
    ValuePercent?: number;
    VCR_Time?: string;
}
