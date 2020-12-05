import { EsriError } from './EsriError';
export interface EsriUpdateResult {
    error?: EsriError;
    globalId?: string;
    objectId?: number;
    success?: boolean;
}
