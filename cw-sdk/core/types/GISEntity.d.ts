import { GISAttribute } from './GISAttribute';
export interface GISEntity {
    Attributes?: GISAttribute[];
    EntityType?: string;
}
